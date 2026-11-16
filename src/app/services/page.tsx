import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/home/CtaBand";
import Faq from "@/components/home/Faq";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import { breadcrumbSchema, servicesListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Web Development Services: Websites, SEO, E-commerce & More",
  description:
    "Custom websites, SEO, e-commerce, startup landing pages, security plans, lead generation, startup kits, custom CMS, admin panels and website maintenance.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[servicesListSchema(services), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])]} />
      <PageHeader
        title="Services that get your business online and growing"
        intro="From a first landing page to a full store, CMS or admin panel, plus the SEO, security and support that keep it working."
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]}
      />

      <section className="pb-24">
        <div className="container-x">
          <ul className="divide-y divide-line border-y border-line">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="group grid gap-6 py-10 md:grid-cols-[auto_1fr_1.1fr_auto] md:items-start md:gap-10">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-soft text-cobalt transition-colors group-hover:bg-cobalt group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-cobalt">{s.title}</h2>
                      <p className="mt-3 max-w-md text-lg leading-relaxed text-muted">{s.short}</p>
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                      {s.includes.slice(0, 4).map((inc) => (
                        <li key={inc} className="flex gap-2 text-[15px] text-ink">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-cobalt" aria-hidden />
                          {inc}
                        </li>
                      ))}
                    </ul>
                    <span className="hidden h-12 w-12 place-items-center rounded-full border border-line transition-all group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white md:grid">
                      <ArrowUpRight className="h-5 w-5" aria-hidden />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Faq items={faqs.slice(0, 4)} />
      <CtaBand title="Not sure which service you need?" />
    </>
  );
}
