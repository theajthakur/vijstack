"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutAgencyContent() {
  return (
    <section
      className="relative overflow-hidden bg-background text-text grid place-items-center px-6 min-h-dvh"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 10% 10%, rgba(108,99,255,0.08), transparent 60%), radial-gradient(900px 500px at 90% 90%, rgba(0,245,212,0.08), transparent 60%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-10 -left-10 h-56 w-56 rounded-full blur-3xl opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(0,245,212,0.35), transparent 60%)",
          }}
        />
        <div
          className="absolute top-24 right-10 h-72 w-72 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(108,99,255,0.35), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,107,0.25), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs tracking-wide uppercase opacity-80">
            About Vijstack
          </span>
        </div>

        <h1 className="mt-6 font-heading text-5xl md:text-6xl leading-tight">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg,#00F5D4,#6C63FF)",
            }}
          >
            Your Vision, Our Code
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl opacity-90">Who we are</p>

        <p className="mt-3 text-base md:text-lg max-w-3xl mx-auto opacity-80">
          Building digital solutions with passion and purpose.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span
            data-chip
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
          >
            Modern Web & App Development
          </span>
          <span
            data-chip
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
          >
            Performance • Security • Scale
          </span>
          <span
            data-chip
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
          >
            Design That Converts
          </span>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-button bg-primary text-black font-semibold shadow-glow"
          >
            Start a Project <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-button border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            See Our Work
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
