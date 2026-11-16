import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ClientsBand from "@/components/home/ClientsBand";
import ServicesBento from "@/components/home/ServicesBento";
import Impact from "@/components/home/Impact";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import CtaBand from "@/components/home/CtaBand";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import { faqSchema, servicesListSchema } from "@/lib/schema";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[faqSchema(faqs), servicesListSchema(services)]} />
      <Hero />
      <ClientsBand />
      <ServicesBento />
      <Impact />
      <Process />
      <Testimonials />
      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
