import React, { useEffect } from "react";
import FeatureProvided from "./_components/feature/page";
import ServiceProvided from "./_components/services/page";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function HorizontalScroller() {
  const slides = [FeatureProvided, ServiceProvided];

  return (
    <div className="horizontal-scroller">
      {slides.map((Component, i) => (
        <div className="slides" key={i}>
          <Component />
        </div>
      ))}
    </div>
  );
}
