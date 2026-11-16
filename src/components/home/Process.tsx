"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const steps = [
  { title: "Discover", text: "A short call about your business, customers and goals. You get a clear scope, timeline and written quote.", get: "Scope & quote" },
  { title: "Plan & design", text: "Site structure, page layouts and the look and feel, shared with you for feedback before any code is written.", get: "Approved design" },
  { title: "Build", text: "Clean, fast, mobile-first development with SEO, forms and integrations built in. You can follow progress on a preview link.", get: "Preview site" },
  { title: "Launch", text: "Testing on real devices, speed checks, Search Console setup and a smooth go-live on your domain.", get: "Live website" },
  { title: "Support & grow", text: "Fixes, updates, security and new features whenever you need them, as one-off jobs or a monthly plan.", get: "Ongoing care" },
];

export default function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-progress]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: { trigger: "[data-steps]", start: "top 65%", end: "bottom 65%", scrub: 0.4 },
          }
        );
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => {
          gsap.fromTo(
            el.querySelector("[data-dot]"),
            { backgroundColor: "#ffffff", color: "#4a5175", borderColor: "#dde3f5" },
            {
              backgroundColor: "#2d4fe0",
              color: "#ffffff",
              borderColor: "#2d4fe0",
              duration: 0.3,
              scrollTrigger: { trigger: el, start: "top 65%", toggleActions: "play none none reverse" },
            }
          );
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="process" className="py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="h-section">From first call to live site in five steps</h2>
          <p className="lede mt-5">
            A simple, transparent process with updates at every stage, so you always know what&apos;s happening and what comes next.
          </p>
        </div>

        <ol data-steps className="relative">
          <span className="absolute bottom-6 left-[23px] top-6 w-0.5 bg-line" aria-hidden />
          <span data-progress className="absolute bottom-6 left-[23px] top-6 w-0.5 origin-top bg-cobalt" aria-hidden />
          {steps.map((s, i) => (
            <li key={s.title} data-step className="relative flex gap-6 pb-12 last:pb-0">
              <span
                data-dot
                className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-cobalt bg-cobalt font-display text-lg font-bold text-white"
              >
                {i + 1}
              </span>
              <div className="pt-2">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">{s.text}</p>
                <p className="mt-4 inline-flex rounded-full bg-sky-soft px-3 py-1 text-sm font-medium text-cobalt">You get: {s.get}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
