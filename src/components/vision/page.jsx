import React, { useEffect } from "react";
import "./page.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function FeatureProvided() {
  const points = [
    {
      title: "Tailored Solutions",
      desc: "We don’t just build websites; we craft digital solutions designed specifically for your business needs.",
    },
    {
      title: "Full End-to-End Service",
      desc: "From design to development, hosting, and management — everything handled in one place.",
    },
    {
      title: "Affordable & Transparent Pricing",
      desc: "No hidden costs. Clear packages that give you the best value for money.",
    },
    {
      title: "Latest Technology",
      desc: "We use modern, scalable, and secure tech stacks to ensure your website/app runs fast and reliably.",
    },
    {
      title: "User-Friendly Experience",
      desc: "We focus on clean design, easy navigation, and mobile responsiveness so your users love it.",
    },
    {
      title: "Dedicated Support",
      desc: "Get ongoing technical support, updates, and maintenance after launch.",
    },
    {
      title: "Proven Track Record",
      desc: "Delivered projects like e-commerce stores, attendance systems, and business websites that actually work.",
    },
    {
      title: "Scalable for Growth",
      desc: "Start small, and we’ll help you expand as your business grows.",
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "h2.mhead",
          start: "top bottom",
          end: "top 60%",
          scrub: 1,
        },
      })
      .from("h2.mhead", { y: "30rem", fontSize: "10rem" })
      .from(".points", { stagger: 0.1, x: 200, opacity: 0 });
  }, []);
  return (
    <div className="feature-controller">
      <div className="h-dvh bg-[#000000bb]">
        <div className="w-vw p-5 sm:p-8 flex-col space-y-30 overflow-x-hidden overflow-y-scroll">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-6xl text-secondary font-extrabold relative whitespace-nowrap overflow-ellipsis overflow-hidden mhead">
            {"Why Choose us?".split("").map((l, k) => (
              <span key={k}>{l}</span>
            ))}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 text-left keypoints">
            {points.map((point, index) => (
              <div className="points" key={index}>
                <div className="flex items-start space-x-4 p-4 rounded-card bg-[#111] hover:shadow-glow transition">
                  <span className="text-primary text-2xl">✅</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm opacity-80">{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
