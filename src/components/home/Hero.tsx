"use client";

import Link from "next/link";
import { useRef } from "react";
import { Search, Smartphone, ShieldCheck, Star, CircleCheck } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { site } from "@/lib/site";

const lines = ["Websites that", "win you more", "customers."];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero-line]", { yPercent: 105, duration: 0.9, stagger: 0.09 })
          .from("[data-hero-fade]", { autoAlpha: 0, y: 18, duration: 0.6, stagger: 0.08 }, "-=0.45")
          .from("[data-layer]", { autoAlpha: 0, scale: 0.94, duration: 0.5, stagger: 0.08 }, 0.2)
          .from('[data-layer="back"]', { xPercent: 16.3, yPercent: -17, duration: 0.9, ease: "expo.out" }, 0.75)
          .from('[data-layer="mid"]', { xPercent: 8.1, yPercent: -8.5, duration: 0.9, ease: "expo.out" }, 0.75)
          .from("[data-bar]", { scaleX: 0, transformOrigin: "left center", duration: 0.6, stagger: 0.05 }, 1.0)
          .from("[data-spark]", { strokeDashoffset: 320, duration: 1.2, ease: "power2.inOut" }, 1.2)
          .from("[data-spark-dot]", { scale: 0, transformOrigin: "center", duration: 0.4, ease: "back.out(3)" }, 2.2)
          .from("[data-chip]", { autoAlpha: 0, scale: 0.6, y: 10, duration: 0.5, stagger: 0.12, ease: "back.out(2)" }, 1.4);

        // Pointer parallax on the stacked layers (desktop pointers only)
        const visual = root.current?.querySelector<HTMLElement>("[data-visual]");
        if (!visual || !window.matchMedia("(pointer: fine)").matches) return;
        const movers = gsap.utils.toArray<HTMLElement>("[data-depth]", visual).map((el) => ({
          depth: Number(el.dataset.depth),
          x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
        }));
        const onMove = (e: PointerEvent) => {
          const r = visual.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          movers.forEach((m) => {
            m.x(px * m.depth * 22);
            m.y(py * m.depth * 22);
          });
        };
        const onLeave = () => movers.forEach((m) => (m.x(0), m.y(0)));
        visual.addEventListener("pointermove", onMove);
        visual.addEventListener("pointerleave", onLeave);
        return () => {
          visual.removeEventListener("pointermove", onMove);
          visual.removeEventListener("pointerleave", onLeave);
        };
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,black,transparent)]" aria-hidden />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div>
          <p data-hero-fade className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </p>

          <h1 className="h-display mt-7 text-ink">
            {lines.map((l) => (
              <span key={l} className="block overflow-hidden pb-[0.06em]">
                <span data-hero-line className="block">
                  {l}
                </span>
              </span>
            ))}
          </h1>

          <p data-hero-fade className="lede mt-7">
            Vijstack designs, builds and looks after fast, search-ready websites, online stores and admin panels for
            startups and growing businesses in India and abroad.
          </p>

          <div data-hero-fade className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Start your project
            </Link>
            <Link href="/services" className="btn btn-ghost">
              Explore services
            </Link>
          </div>

          <dl data-hero-fade className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
            {[
              ["20+", "clients served"],
              ["60+", "projects delivered"],
              ["5+", "countries"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight text-ink">{v}</dd>
                <dd className="text-sm text-muted">{l}</dd>
              </div>
            ))}
            <div className="flex items-end">
              <a
                href={site.googleReviews}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-cobalt"
              >
                {site.rating ? (
                  <>
                    <span className="flex" aria-hidden>
                      {Array.from({ length: Math.round(site.rating) }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                      ))}
                    </span>
                    {site.rating.toFixed(1)}
                  </>
                ) : (
                  <Star className="h-4 w-4 fill-amber text-amber" aria-hidden />
                )}
                Reviews on Google
              </a>
            </div>
          </dl>
        </div>

        {/* Stacked layers visual: wireframe, design, live site */}
        <div data-visual className="relative mx-auto aspect-[1/0.92] w-full max-w-[560px]" aria-hidden>
          {/* back: wireframe */}
          <div data-depth="0.4" className="absolute left-0 top-[14%] h-[82%] w-[86%]">
            <div data-layer="back" className="flex h-full w-full flex-col justify-end rounded-[22px] border-2 border-dashed border-ink/25 bg-white/60 px-5 pb-3">
              <span className="self-start rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-muted">Wireframe</span>
            </div>
          </div>

          {/* mid: design */}
          <div data-depth="0.7" className="absolute left-[7%] top-[7%] h-[82%] w-[86%]">
            <div data-layer="mid" className="flex h-full w-full flex-col justify-end rounded-[22px] border-2 border-sky/60 bg-sky-soft px-5 pb-3">
              <span className="self-start rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-cobalt">Design</span>
            </div>
          </div>

          {/* front: live site */}
          <div data-depth="1" className="absolute left-[14%] top-0 h-[82%] w-[86%]">
            <div data-layer="front" className="flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_40px_80px_-30px_rgba(15,20,66,0.35)]">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 flex-1 truncate rounded-full bg-paper px-3 py-1 text-[11px] text-muted">yourbusiness.com</span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Live site</span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-4 sm:gap-3 sm:p-6">
                <div className="flex items-center justify-between">
                  <span data-bar className="h-2.5 w-16 rounded-full bg-ink" />
                  <span className="flex gap-2">
                    <span data-bar className="h-2 w-8 rounded-full bg-line" />
                    <span data-bar className="h-2 w-8 rounded-full bg-line" />
                    <span data-bar className="h-2 w-10 rounded-full bg-cobalt" />
                  </span>
                </div>
                <span data-bar className="mt-3 h-5 w-[78%] rounded-md bg-ink" />
                <span data-bar className="h-5 w-[56%] rounded-md bg-ink" />
                <span data-bar className="h-2.5 w-[70%] rounded-full bg-line" />
                <span data-bar className="h-7 w-28 rounded-full bg-cobalt" />

                <div className="mt-auto grid gap-3 sm:grid-cols-[1.3fr_1fr]">
                  <div className="rounded-xl border border-line p-3">
                    <p className="text-[11px] font-medium text-muted">Enquiries</p>
                    <svg viewBox="0 0 160 60" className="mt-1 h-14 w-full overflow-visible">
                      <defs>
                        <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#2d4fe0" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#2d4fe0" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 52 L22 46 L44 48 L66 36 L88 38 L110 24 L132 20 L156 8 L156 60 L0 60 Z" fill="url(#spark-fill)" />
                      <path
                        data-spark
                        d="M0 52 L22 46 L44 48 L66 36 L88 38 L110 24 L132 20 L156 8"
                        fill="none"
                        stroke="#2d4fe0"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="320"
                        strokeDashoffset="0"
                      />
                      <circle data-spark-dot cx="156" cy="8" r="5" fill="#2d4fe0" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <ul className="hidden space-y-2 rounded-xl bg-paper p-3 text-[11px] text-ink sm:block">
                    {["Fast loading", "Mobile ready", "SEO setup"].map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <CircleCheck className="h-3.5 w-3.5 text-cobalt" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div data-depth="1.5" className="absolute -left-2 top-[30%] sm:-left-6">
            <span data-chip className="flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold shadow-lg shadow-ink/10">
              <Search className="h-4 w-4 text-cobalt" /> SEO ready
            </span>
          </div>
          <div data-depth="1.8" className="absolute -right-1 bottom-[10%] sm:-right-4">
            <span data-chip className="flex items-center gap-2 rounded-full bg-ink px-3.5 py-2 text-sm font-semibold text-white shadow-lg shadow-ink/20">
              <Smartphone className="h-4 w-4 text-sky" /> Mobile first
            </span>
          </div>
          <div data-depth="1.3" className="absolute bottom-[2%] left-[24%]">
            <span data-chip className="flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold shadow-lg shadow-ink/10">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> Secure by default
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
