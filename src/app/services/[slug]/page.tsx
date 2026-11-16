import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Faq from "@/components/home/Faq";
import CtaBand from "@/components/home/CtaBand";
import JsonLd from "@/components/JsonLd";
import { services, getService, inSentence } from "@/lib/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { url: `/services/${s.slug}`, title: `${s.metaTitle} | Vijstack`, description: s.metaDescription },
    twitter: { title: `${s.metaTitle} | Vijstack`, description: s.metaDescription },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(s),
          faqSchema(s.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: s.title, path: `/services/${s.slug}` },
          ]),
        ]}
      />
      <PageHeader
        title={s.title}
        intro={s.intro}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: s.title, href: `/services/${s.slug}` },
        ]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href={`/contact?service=${s.slug}`} className="btn btn-primary">
            Get a quote for {inSentence(s.title)}
          </Link>
          <Link href="/services" className="btn btn-ghost">All services</Link>
        </div>
      </PageHeader>

      <section className="pb-24">
        <div className="container-x grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="stacked mb-5 ml-5 rounded-[28px] bg-ink p-8 text-white sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cobalt">
              <Icon className="h-7 w-7" aria-hidden />
            </span>
            <h2 className="mt-8 text-3xl font-bold tracking-tight">What&apos;s included</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {s.includes.map((inc) => (
                <li key={inc} className="flex gap-3 text-white/85">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-sky" aria-hidden />
                  {inc}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            {s.outcomes.map((o) => (
              <div key={o.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-xl font-semibold tracking-tight">{o.title}</h3>
                <p className="mt-2 text-muted">{o.text}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-sky-soft p-6">
              <h3 className="font-sans text-sm font-semibold text-cobalt">Ideal for</h3>
              <p className="mt-1 text-lg text-ink">{s.idealFor}</p>
            </div>
          </div>
        </div>
      </section>

      <Faq items={s.faqs} title={`${s.title}: common questions`} />

      <section className="pb-24">
        <div className="container-x">
          <h2 className="text-3xl font-bold tracking-tight">Pairs well with</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link key={r.slug} href={`/services/${r.slug}`} className="group relative rounded-2xl border border-line bg-white p-6 transition-colors hover:border-cobalt/40">
                  <RIcon className="h-6 w-6 text-cobalt" aria-hidden />
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{r.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{r.short}</p>
                  <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-ink/20 group-hover:text-cobalt" aria-hidden />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title={`Ready to talk about ${inSentence(s.title)}?`} />
    </>
  );
}
