import gsap from "gsap";
import React, { useEffect } from "react";
import "./Logo.css";

export default function Logo() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to("#logo-container div", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "bounce",
      stagger: 0.15,
    })
      .to("#logo-container div", {
        duration: 5, // <-- hold for 5 seconds
      })
      .to("#logo-container div", {
        y: 50, // or back down / fade out
        opacity: 0,
        duration: 2,
        ease: "power2.in",
        stagger: 0.15,
      });
  }, []);

  return (
    <div id="logo-container">
      <div></div>
      <div></div>
      <div>V</div>
    </div>
  );
}
