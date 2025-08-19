import { useEffect, useRef } from "react";
import Logo from "../logo/Logo";
import "./main.css";
import gsap from "gsap";
export default function Home() {
  useEffect(() => {
    const ts = gsap.timeline();
    ts.to(".logo-3d", {
      y: -50,
    });

    ts.from(".company-name", {
      stagger: 0.1,
      opacity: 0,
      y: 50,
      delay: 1,
      duration: 1,
    });

    ts.from(".company-tagline", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out(2)",
    });

    ts.to(".company-motto span", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      stagger: {
        each: 0.005,
        from: "random",
      },
      ease: "back.out(2)",
    });
  });
  return (
    <div className="hero-controller">
      <main className="hero-container min-h-screen bg-background text-text flex flex-col items-center justify-center">
        <div className="flex gap-3 justify-between">
          <div className="logo-animater drop-shadow-accent">
            <div className="flex justify-center logo-3d">
              <Logo />
            </div>
            <div className="text-5xl lg:text-8xl font-extrabold flex space-x-1">
              {["V", "I", "J", "S", "T", "A", "C", "K"].map((letter, idx) => (
                <span
                  key={idx}
                  className={`${
                    letter === "S" || letter === "V"
                      ? "text-primary"
                      : "text-white"
                  } hover:text-accent transition-colors duration-300 cursor-none company-name`}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div className="text-end lg:text-3xl">
              {"Your Vision, Our Code".split("").map((letter, idx) => (
                <span
                  key={idx}
                  className={`${
                    letter.toLowerCase() === "o" ? "text-primary" : "text-white"
                  } hover:text-accent transition-colors duration-300 cursor-none company-tagline`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="description p-5 text-2xl md:p-10">
          <div className="company-motto text-center font-sans">
            {"We craft modern web & app solutions tailored for startups,businesses, and creators."
              .split("")
              .map((l, k) => (
                <span key={k} className="opacity-0">
                  {l}
                </span>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
