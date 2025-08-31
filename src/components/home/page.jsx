"use client";
import React, { useEffect, useState } from "react";
import Hero from "../universal/hero/page";
import FeatureProvided from "./_components/feature/page";
import ProblemsOffline from "./_components/problems/page";
import MainCTA from "./_components/CTA/page";
import { Testimonials } from "./_components/testinomials/page";

export default function Home() {
  return (
    <div className="w-dvw">
      <Hero
        title={"VIJSTACK"}
        highlight={["v", "s"]}
        tagline={"Your Vision, Our Code"}
        highlight2={["o"]}
        motto={
          "We craft modern web & app solutions tailored for startups,businesses, and creators."
        }
      />
      <ProblemsOffline />
      <FeatureProvided />
      <Testimonials />
      <MainCTA />
    </div>
  );
}
