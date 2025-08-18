import "./globals.css";
import LayoutProvider from "@/components/providers/LayoutProvider";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose the weights you’ll use
});

export const metadata = {
  title: "Vijstack | Web Solutions & Development",
  description:
    "Vijstack is a creative digital agency specializing in modern web solutions and development. We build interactive websites, scalable applications, and innovative digital experiences that help businesses grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
