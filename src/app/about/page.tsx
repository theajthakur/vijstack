import type { Metadata } from "next";
import Image from "next/image";
import { PenTool, TrendingUp, Lock, Headphones } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ClientsBand from "@/components/home/ClientsBand";
import CtaBand from "@/components/home/CtaBand";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Vijstack: Web Developer in Greater Noida, India",
  description:
    "Vijstack is a web development studio in Greater Noida, India, building custom websites, e-commerce and admin panels for 20+ clients across 5+ countries.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

const values = [
  { icon: PenTool, title: "Tailored, not templated", text: "Every build is shaped around your goals and customers, with only what your business needs." },
  { icon: TrendingUp, title: "Built for growth", text: "SEO, lead capture and conversion-focused design are part of the plan from day one." },
  { icon: Lock, title: "Secure and reliable", text: "Security best practices, backups and monitoring keep your site safe and online." },
  { icon: Headphones, title: "Here after launch", text: "With 50+ maintenance jobs delivered, support doesn't stop when the site goes live." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "AboutPage", url: `${site.url}/about`, name: "About Vijstack", about: { "@id": `${site.url}/#business` } },
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
        ]}
      />
      <PageHeader
        title="Your vision, built in code"
        intro="Vijstack helps startups and businesses build a strong online presence with modern, fast and secure websites."
        crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]}
      />

      <section className="pb-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <p>
              <strong className="font-semibold text-ink">Vijstack</strong> is a web development studio based in Greater Noida, India.
              It started with a simple observation: plenty of good businesses, from hardware shops and schools to restaurants and
              grocery stores, were invisible online and losing customers to competitors who weren&apos;t.
            </p>
            <p>
              Today people trust what they find online. A proper domain and a professional website build credibility before a
              customer ever calls you. That&apos;s what Vijstack builds: websites, online stores, CMS and admin panels that look
              professional, load fast, rank well and turn visitors into customers.
            </p>
            <p>
              So far that has meant 20+ clients across 5+ countries, 10+ custom websites built from scratch and 50+
              maintenance jobs and fixes on existing sites.
            </p>
          </div>
          <div className="stacked mx-auto mb-5 ml-5 grid aspect-square w-full max-w-sm place-items-center rounded-[32px] bg-white">
            <Image src="/logo.png" alt="Vijstack logo" width={280} height={280} className="h-auto w-3/5" />
          </div>
        </div>
      </section>

      <ClientsBand />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <h2 className="h-section max-w-2xl">What you can count on</h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cobalt text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{v.title}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-muted">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title="Let's build something great together" />
    </>
  );
}
