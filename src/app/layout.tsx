import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vijstack | Best Web Development Agency in India",
    template: "%s | Vijstack",
  },
  description: "Vijstack is a leading web development agency in Delhi NCR, India. We specialize in Next.js, React, and modern web solutions for startups and enterprises globally.",
  keywords: ["Web Development Agency", "Best Web Development Company India", "Next.js Developers", "React Development", "UI/UX Design", "SEO Services Delhi", "App Development NCR"],
  authors: [{ name: "Vijstack Team" }],
  creator: "Vijstack",
  publisher: "Vijstack",
  metadataBase: new URL("https://www.vijstack.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vijstack | Transforming Ideas into Digital Reality",
    description: "Expert web and app development services. We build scalable, high-performance digital products.",
    url: "https://www.vijstack.com",
    siteName: "Vijstack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // We need to ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Vijstack Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijstack | Best Web Development Agency",
    description: "Top-rated web development and design agency in India. Let's build something amazing.",
    creator: "@vijstack", // Assuming handle
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} bg-gradient-main min-h-screen antialiased selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  );
}
