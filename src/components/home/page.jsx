import React from "react";
import Hero from "../universal/hero/page";
import FeatureProvided from "./_components/feature/page";
import ProblemsOffline from "./_components/problems/page";

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
      <FeatureProvided />
      <ProblemsOffline />
    </div>
  );
}
