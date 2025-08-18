import { useEffect, useRef } from "react";
import Logo from "../logo/Logo";
import "./main.css";
import gsap from "gsap";
export default function Home() {
  useEffect(() => {
    gsap.from(".company-name", {
      stagger: 0.1,
      opacity: 0,
      y: 50,
      repeat: -1,
      repeatDelay: 5,
      delay: 0,
    });
  });
  return (
    <main className="hero-container min-h-screen bg-background text-text flex flex-col items-center justify-center">
      <div className="flex gap-3 justify-between">
        <div className="logo-animater">
          <div className="text-5xl font-extrabold flex space-x-1">
            <img width={50} src="/logo.png" className="company-name" />
            {["I", "J", "S", "T", "A", "C", "K"].map((letter, idx) => (
              <span
                key={idx}
                className={`${
                  letter === "S" ? "text-primary" : "text-white"
                } hover:text-accent transition-colors duration-300 cursor-none company-name`}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
