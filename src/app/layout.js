import "./globals.css";
import LayoutProvider from "@/components/providers/LayoutProvider";
import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Vijstack | Web Solutions & Development",
  description:
    "Vijstack is a creative digital agency specializing in modern web solutions and development. We build interactive websites, scalable applications, and innovative digital experiences that help businesses grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#00F5D4" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <LayoutProvider>{children}</LayoutProvider>
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
