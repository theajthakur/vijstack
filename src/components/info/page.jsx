"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./page.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSlider() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const slides = gsap.utils.toArray(".slide");

      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => "+=" + (container.scrollWidth - window.innerWidth),
          scrub: 1,
          pin: true,
          snap: 1 / (slides.length - 1),
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="slider" ref={containerRef}>
      <div className="slide bg-red-300">
        <h3>VIJAY SINGH</h3>
      </div>
      <div className="slide bg-blue-300">
        <h3>VIJAY SINGH</h3>
      </div>
      <div className="slide bg-green-300">
        <h3>VIJAY SINGH</h3>
      </div>
    </div>
  );
}
