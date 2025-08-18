import gsap from "gsap";
import React, { useEffect } from "react";
import "./Logo.css";

export default function Logo() {
  useEffect(() => {
    gsap.to("#logo-container div", {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 1,
      ease: "back.out(2)",
      stagger: 0.15,
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
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
