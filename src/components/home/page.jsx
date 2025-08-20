import React from "react";
import Hero from "./_components/hero/page";
import FeatureProvided from "./_components/feature/page";
import ProblemsOffline from "./_components/problems/page";

export default function Home() {
  return (
    <div className="w-dvw">
      <Hero />
      <FeatureProvided />
      <ProblemsOffline />
    </div>
  );
}
