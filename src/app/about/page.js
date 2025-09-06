import AboutAgency from "@/components/pages/about/page";
import React from "react";
export const metadata = {
  title: "About Us || Vijstack",
  openGraph: {
    description:
      "At Vijstack, we blend creativity and technology to craft digital solutions that leave an impact. Our mission is to empower businesses with innovative web development, design, and scalable solutions.",
  },
};

export default function page() {
  return (
    <div>
      <AboutAgency />
    </div>
  );
}
