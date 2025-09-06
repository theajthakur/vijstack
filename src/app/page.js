"use client";

import Home from "@/components/home/page";
import Head from "next/head";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vijstack",
    url: "https://vijstack.com",
    logo: "https://vijstack.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9695146906",
        contactType: "Customer Service",
        email: "vijstack@gmail.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/vijstack",
      "https://instagram.com/vijstack",
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-background text-text">
        <Home />
      </main>
    </>
  );
}
