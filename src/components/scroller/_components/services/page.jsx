import React, { useEffect } from "react";
import "./page.css";
import {
  Clock,
  EyeOff,
  MapPin,
  PlugZap2,
  TrendingDown,
  Wallet,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function ServiceProvided() {
  const problems = [
    {
      icon: MapPin,
      title: "Limited Reach",
      description:
        "Only customers who physically visit your store know about you. Potential buyers searching online will never find you.",
    },
    {
      icon: Clock,
      title: "No 24/7 Availability",
      description:
        "Your business shuts down after working hours, while online competitors keep selling round the clock.",
    },
    {
      icon: EyeOff,
      title: "Customer Trust Issues",
      description:
        "Modern customers search online first. If you’re not visible, they question your credibility.",
    },
    {
      icon: Wallet,
      title: "High Operational Costs",
      description:
        "Manual processes for sales, attendance, or customer management eat up time and money.",
    },
    {
      icon: TrendingDown,
      title: "Missed Growth Opportunities",
      description:
        "Without online reviews, digital marketing, and e-commerce, scaling becomes extremely difficult.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".service-container",
          start: "top bottom",
          end: "40% 90%",
          scrub: true,
        },
      })
      .from(".service-container h1", { opacity: 0, y: 1000 })
      .fromTo(
        ".problem-list .problem",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
        }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".problem-list",
          start: "top 40%",
          end: "10% 10%",
          scrub: true,
        },
      })
      .fromTo(
        ".problem-list .problem",
        { height: "0vh" },
        {
          height: "calc(100vh - 4rem)",
          stagger: 0.1,
        }
      );
  }, []);
  return (
    <section className="service-section">
      <div className="service-container p-5 lg:p-10 min-h-dvh relative overflow-visible">
        <h1 className="text-3xl lg:text-5xl flex gap-3 items-center justify-center relative mb-10">
          <div className="w-20 h-20">
            <PlugZap2 className="w-full h-full" />
          </div>
          <span>The Problem with Staying Offline</span>
        </h1>

        <div className="problem-list min-h-[300dvh]">
          {problems.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="problem sticky top-[2rem] z-10 p-4 overflow-hidden"
              >
                <div className="md:flex md:gap-10 md:items-center h-full">
                  <div className="md:w-[30%] icon-container flex w-full justify-center items-center mb-5">
                    <Icon size={100} />
                  </div>
                  <div className="content-container text-center  mb-5">
                    <h3 className="text-5xl mb-10">{c.title}</h3>
                    <p className="text-2xl">{c.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
