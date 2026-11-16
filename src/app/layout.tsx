import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Analytics from "@/components/site/Analytics";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { businessSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Vijstack | Custom Website Development, SEO & E-commerce",
    template: "%s | Vijstack",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "web development",
    "custom website development",
    "website developer Greater Noida",
    "web development Delhi NCR",
    "Next.js developer India",
    "e-commerce website development",
    "SEO services",
    "landing page for startups",
    "custom CMS",
    "admin panel development",
    "website maintenance",
  ],
  authors: [{ name: "Vijstack", url: site.url }],
  creator: "Vijstack",
  publisher: "Vijstack",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Vijstack | Websites built to win you customers",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijstack | Websites built to win you customers",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  category: "technology",
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f7fe",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
