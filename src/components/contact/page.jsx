"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export function ContactUs() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 py-16 bg-neutral-950 overflow-hidden">
      {/* Background Effect */}
      <BackgroundBeams />
      <div className="relative z-10 max-w-3xl w-full bg-[rgba(255,255,255,0.02)] backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-10 text-center mt-20 md:mt-0">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--foreground)]">
          Let’s Build Something Great
        </h1>
        <p className="mt-3 text-lg text-[var(--foreground)]/70">
          Have a project in mind? Drop us a message and let’s make it happen.
        </p>

        {/* Contact Form */}
        <form className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-black bg-[var(--primary)] hover:bg-[var(--secondary)] transition-all shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-[var(--foreground)]/80">
          <div>
            <h3 className="font-heading font-semibold text-[var(--primary)]">
              📍 Address
            </h3>
            <p>Greater Noida, India</p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-[var(--primary)]">
              📧 Email
            </h3>
            <p>vijstack@gmail.com</p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-[var(--primary)]">
              📞 Phone
            </h3>
            <p>+91 9695146906</p>
          </div>
        </div>
      </div>
    </section>
  );
}
