"use client";
import Hero from "@/components/universal/hero/page";
import React from "react";

export default function AboutAgency() {
  return (
    <div className="min-h-dvh">
      <Hero
        title={"About - us"}
        highlight={["a", "u"]}
        tagline={"Who We Are"}
        highlight2={["w", "e"]}
        motto={"Building digital solutions with passion and purpose."}
      />
    </div>
  );
}
