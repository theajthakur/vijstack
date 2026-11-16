import { NextResponse } from "next/server";

export const runtime = "nodejs";

const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const entry = hits.get(ip);
  if (entry && entry.reset > now) {
    if (entry.count >= LIMIT) {
      return NextResponse.json({ error: "Too many messages from this connection. Try again in a few minutes." }, { status: 429 });
    }
    entry.count++;
  } else {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "The form data couldn't be read." }, { status: 400 });
  }

  // Bots fill the hidden honeypot; pretend success.
  if (clean(body.company_website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 80);
  const email = clean(body.email, 120);
  const phone = clean(body.phone, 30);
  const service = clean(body.service, 80);
  const message = clean(body.message, 4000);

  if (name.length < 2) return NextResponse.json({ error: "Enter your name." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  if (message.length < 10) return NextResponse.json({ error: "Add a few more details about your project." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY is not set. Enquiry not delivered:", { name, email, service });
    return NextResponse.json({ error: "Online messages aren't set up yet." }, { status: 503 });
  }

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ""}
    <p><strong>Service:</strong> ${esc(service || "Not sure yet")}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${esc(message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Vijstack Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || "vijstack@gmail.com"],
      reply_to: email,
      subject: `New enquiry from ${name}${service ? ` (${service})` : ""}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "Your message couldn't be delivered." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
