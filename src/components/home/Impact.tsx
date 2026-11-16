"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { site } from "@/lib/site";

const R = 70;
const C = 2 * Math.PI * R;
const NEW_SITES = 10;
const MAINTENANCE = 50;
const TOTAL = NEW_SITES + MAINTENANCE;

// Think with Google / SOASTA (2017): increase in bounce probability as mobile load time grows from 1s
const bounce = [
  { t: "1s → 3s", v: 32 },
  { t: "1s → 5s", v: 90 },
  { t: "1s → 6s", v: 106 },
  { t: "1s → 10s", v: 123 },
];

export default function Impact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const end = Number(el.dataset.count);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: end,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = String(Math.round(obj.v));
            },
          });
        });

        gsap.from("[data-arc]", {
          strokeDasharray: `0 ${C}`,
          duration: 1.4,
          ease: "power3.inOut",
          stagger: 0.25,
          scrollTrigger: { trigger: "[data-donut]", start: "top 80%", once: true },
        });

        gsap.from("[data-bar-v]", {
          scaleY: 0,
          transformOrigin: "bottom center",
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "[data-bars]", start: "top 80%", once: true },
        });
        gsap.from("[data-bar-label]", {
          autoAlpha: 0,
          y: 8,
          duration: 0.5,
          stagger: 0.12,
          delay: 0.5,
          scrollTrigger: { trigger: "[data-bars]", start: "top 80%", once: true },
        });
      });
    },
    { scope: root }
  );

  const maintLen = (MAINTENANCE / TOTAL) * C;
  const newLen = (NEW_SITES / TOTAL) * C;
  const gap = 6;

  return (
    <section ref={root} id="results" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-cobalt/30 blur-[120px]" aria-hidden />
      <div className="container-x relative">
        <h2 className="h-section max-w-3xl">Small studio, real track record</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
          Every number here is a business with a faster, more reliable website, in India and abroad.
        </p>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="bg-ink p-6 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-6xl font-bold tracking-tight sm:text-7xl">
                <span data-count={s.value}>{s.value}</span>
                <span className="text-sky">{s.suffix}</span>
              </dd>
              <dd className="mt-2 text-white/65">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Donut: work mix */}
          <figure className="rounded-3xl border border-white/10 bg-ink-2/60 p-7 sm:p-9">
            <figcaption>
              <h3 className="text-2xl font-semibold tracking-tight">Where the work goes</h3>
              <p className="mt-1 text-white/60">Projects delivered by type</p>
            </figcaption>
            <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row">
              <svg data-donut viewBox="0 0 180 180" className="h-48 w-48 shrink-0" role="img" aria-label={`${MAINTENANCE}+ maintenance jobs and ${NEW_SITES}+ new custom websites`}>
                <circle cx="90" cy="90" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="22" />
                <circle
                  data-arc
                  cx="90"
                  cy="90"
                  r={R}
                  fill="none"
                  stroke="#4d94ea"
                  strokeWidth="22"
                  strokeDasharray={`${maintLen - gap} ${C}`}
                  transform="rotate(-90 90 90)"
                />
                <circle
                  data-arc
                  cx="90"
                  cy="90"
                  r={R}
                  fill="none"
                  stroke="#ffb224"
                  strokeWidth="22"
                  strokeDasharray={`${newLen - gap} ${C}`}
                  strokeDashoffset={-maintLen}
                  transform="rotate(-90 90 90)"
                />
                <g>
                  <text x="90" y="88" textAnchor="middle" className="fill-white font-display" fontSize="34" fontWeight="700">
                    60+
                  </text>
                  <text x="90" y="110" textAnchor="middle" className="fill-white/60" fontSize="12">
                    projects
                  </text>
                </g>
              </svg>
              <ul className="w-full space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-sky" />
                  <div>
                    <p className="font-semibold">50+ maintenance jobs & fixes</p>
                    <p className="text-sm text-white/60">Bugs, speed, updates and new features on existing sites</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-amber" />
                  <div>
                    <p className="font-semibold">10+ new custom websites</p>
                    <p className="text-sm text-white/60">Designed and built from scratch</p>
                  </div>
                </li>
              </ul>
            </div>
          </figure>

          {/* Bars: why speed matters */}
          <figure className="rounded-3xl border border-white/10 bg-ink-2/60 p-7 sm:p-9">
            <figcaption>
              <h3 className="text-2xl font-semibold tracking-tight">Why speed is built in</h3>
              <p className="mt-1 text-white/60">How much more likely mobile visitors are to leave as a page gets slower</p>
            </figcaption>
            <div data-bars className="mt-8 flex h-56 items-end gap-3 sm:gap-5">
              {bounce.map((b) => (
                <div key={b.t} className="flex h-full flex-1 flex-col justify-end">
                  <span data-bar-label className="mb-2 text-center font-display text-xl font-bold sm:text-2xl">
                    +{b.v}%
                  </span>
                  <div
                    data-bar-v
                    className="w-full rounded-t-xl bg-linear-to-t from-cobalt to-sky"
                    style={{ height: `${(b.v / 123) * 72}%` }}
                  />
                  <span className="mt-3 text-center text-xs text-white/60 sm:text-sm">{b.t}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-4 text-xs text-white/45">
              Source: Think with Google, &ldquo;Find out how you stack up to new industry benchmarks for mobile page speed&rdquo; (2017).
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}
