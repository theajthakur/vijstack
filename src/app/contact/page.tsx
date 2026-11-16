import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin, MessageCircle, Star } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Vijstack: Get a Website Quote",
  description:
    "Tell Vijstack about your project and get a clear plan and written quote. Email vijstack@gmail.com, call or WhatsApp +91 96951 46906.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Call", value: site.phoneDisplay, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Message on WhatsApp", href: site.whatsapp },
  { icon: MapPin, label: "Based in", value: `${site.address.locality}, ${site.address.region}, India` },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "ContactPage", url: `${site.url}/contact`, name: "Contact Vijstack", about: { "@id": `${site.url}/#business` } },
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
        ]}
      />
      <PageHeader
        title="Let's talk about your project"
        intro="Share a few details and you'll get honest advice, a clear plan and a written quote. No obligation."
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]}
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <ul className="space-y-3">
              {channels.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-soft text-cobalt">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm text-muted">{c.label}</span>
                      <span className="block font-semibold text-ink">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                        className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-cobalt/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <a
              href={site.googleReviews}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-cobalt"
            >
              <Star className="h-4 w-4 fill-amber text-amber" aria-hidden /> See Vijstack on Google
            </a>
          </div>

          <div className="stacked mb-5 ml-5 rounded-[28px] bg-white p-6 shadow-[0_30px_60px_-30px_rgba(15,20,66,0.25)] sm:p-10">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
