import React, { useEffect } from "react";
import "./page.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Wrench,
  PackageCheck,
  BadgeDollarSign,
  Cpu,
  MousePointerClick,
  LifeBuoy,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
export default function FeatureProvided() {
  const points = [
    {
      title: "Tailored Solutions",
      desc: "We don’t just build websites; we craft digital solutions designed specifically for your business needs.",
      icon: Wrench,
    },
    {
      title: "Full End-to-End Service",
      desc: "From design to development, hosting, and management — everything handled in one place.",
      icon: PackageCheck,
    },
    {
      title: "Affordable & Transparent Pricing",
      desc: "No hidden costs. Clear packages that give you the best value for money.",
      icon: BadgeDollarSign,
    },
    {
      title: "Latest Technology",
      desc: "We use modern, scalable, and secure tech stacks to ensure your website/app runs fast and reliably.",
      icon: Cpu,
    },
    {
      title: "User-Friendly Experience",
      desc: "We focus on clean design, easy navigation, and mobile responsiveness so your users love it.",
      icon: MousePointerClick,
    },
    {
      title: "Dedicated Support",
      desc: "Get ongoing technical support, updates, and maintenance after launch.",
      icon: LifeBuoy,
    },
    {
      title: "Proven Track Record",
      desc: "Delivered projects like e-commerce stores, attendance systems, and business websites that actually work.",
      icon: CheckCircle2,
    },
    {
      title: "Scalable for Growth",
      desc: "Start small, and we’ll help you expand as your business grows.",
      icon: TrendingUp,
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
          <h2 className="text-center text-4xl lg:text-6xl text-secondary font-extrabold relative whitespace-nowrap overflow-ellipsis overflow-hidden mhead">
            Why Choose us?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 text-left keypoints">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div className="points" key={index}>
                  <div className="flex items-center space-x-4 p-4 rounded-card bg-[#111] hover:shadow-glow transition">
                    <Icon className="text-blue-500" size={50} />
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">
                        {point.title}
                      </h3>
                      <p className="opacity-80">{point.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
