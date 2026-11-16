"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, LoaderCircle, CircleCheck, CircleAlert } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-ink placeholder:text-muted/60 transition-colors focus:border-cobalt focus:bg-white focus:outline-none";

export default function ContactForm() {
  const params = useSearchParams();
  const preset = services.find((s) => s.slug === params.get("service"))?.title ?? "";
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [sentTo, setSentTo] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Couldn't send your message.");
      setSentTo(String(data.email));
      setStatus({ state: "sent" });
      form.reset();
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Couldn't send your message." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="flex min-h-[420px] flex-col items-start justify-center">
        <CircleCheck className="h-12 w-12 text-emerald-600" aria-hidden />
        <h2 className="mt-6 text-3xl font-bold tracking-tight">Message sent</h2>
        <p className="mt-3 max-w-md text-lg text-muted">
          Thanks for reaching out. Vijstack will reply to <span className="font-semibold text-ink">{sentTo}</span> soon.
        </p>
        <button type="button" onClick={() => setStatus({ state: "idle" })} className="btn btn-ghost mt-8">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      <h2 className="text-2xl font-bold tracking-tight">Tell me about your project</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Your name</span>
          <input name="name" required minLength={2} maxLength={80} autoComplete="name" className={field} placeholder="Priya Sharma" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Email</span>
          <input name="email" type="email" required maxLength={120} autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Phone or WhatsApp <span className="text-muted">(optional)</span></span>
          <input name="phone" type="tel" maxLength={30} autoComplete="tel" className={field} placeholder="+91 98765 43210" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium">What do you need?</span>
          <select name="service" defaultValue={preset} className={field}>
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Project details</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          className={`${field} resize-y`}
          placeholder="What does your business do, what should the website achieve, and when do you need it?"
        />
      </label>
      {/* Honeypot for bots: hidden from people */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status.state === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>
            {status.message} You can also email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline">{site.email}</a> directly.
          </span>
        </p>
      )}

      <button type="submit" disabled={status.state === "sending"} className="btn btn-primary w-full disabled:opacity-70 sm:w-auto sm:justify-self-start">
        {status.state === "sending" ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden /> Send message
          </>
        )}
      </button>
    </form>
  );
}
