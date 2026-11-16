import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Star } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-xs leading-relaxed">
            Custom websites, e-commerce and growth tools for startups and growing businesses, from Greater Noida to the world.
          </p>
          <a
            href={site.googleReviews}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
          >
            <Star className="h-4 w-4 fill-amber text-amber" aria-hidden /> Read reviews on Google
          </a>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-sans text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-sans text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">All services</Link></li>
            <li><a href={site.portfolio} target="_blank" rel="noopener" className="hover:text-white">Portfolio</a></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <address className="not-italic md:col-span-3">
          <h2 className="font-sans text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-sky" aria-hidden /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-sky" aria-hidden /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-white">
                <MessageCircle className="h-4 w-4 text-sky" aria-hidden /> WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-sky" aria-hidden /> {site.address.locality}, {site.address.region}, India
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-sm sm:flex-row sm:items-center">
          <p>© {year} Vijstack. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
