"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Main">
        <Logo onClick={() => setOpen(false)} />

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                  isActive(item.href) ? "bg-ink/[0.06] text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.portfolio}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-muted transition-colors hover:text-ink"
            >
              Portfolio <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-primary hidden !py-2.5 sm:inline-flex">
            Start a project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-500 ease-out md:hidden ${open ? "max-h-[100svh]" : "max-h-0"}`}
      >
        <ul className="container-x flex flex-col gap-1 pb-8 pt-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block border-b border-line py-4 font-display text-3xl font-semibold tracking-tight">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={site.portfolio} target="_blank" rel="noopener" className="flex items-center gap-2 border-b border-line py-4 font-display text-3xl font-semibold tracking-tight">
              Portfolio <ArrowUpRight className="h-6 w-6" aria-hidden />
            </a>
          </li>
          <li className="pt-6">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
