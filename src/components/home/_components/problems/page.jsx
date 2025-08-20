import React, { useEffect, useRef } from "react";
import "./page.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Building } from "lucide-react";
export default function ProblemsOffline() {
  const problems = [
    {
      title: "Local Hardware & Utility Shops",
      description:
        "Small shops selling motors, pumps, pipes, and household items face a big problem — only nearby people know about them. Without an online presence, they miss out on customers searching online and lose sales to bigger competitors.",
      thumbnail: "/BGs/traditional attendance.jpg",
    },
    {
      title: "Schools & Educational Institutes",
      description:
        "Schools that are not online struggle with managing attendance, fee records, and student progress. Parents find it hard to track their child’s activities and often depend on registers or manual updates, which wastes time and lacks transparency.",
      thumbnail: "/BGs/machinery_traditional.jpg",
    },
    {
      title: "Restaurants & Food Outlets",
      description:
        "Restaurants without online ordering miss out on huge opportunities. Customers today prefer to order food from their phones with integrated payments. Without this, restaurants lose sales to online-first competitors.",
      thumbnail: "/BGs/traditional attendance.jpg",
    },
    {
      title: "Grocery Stores",
      description:
        "Local grocery stores that are not online depend only on walk-in customers. People now prefer ordering groceries online with home delivery. Without this option, these stores lose customers to big online platforms.",
      thumbnail: "/BGs/machinery_traditional.jpg",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".offline-problems-container",
          start: "10% bottom",
          end: "center bottom",
          scrub: true,
        },
      })
      .from(".heading .headingparts", {
        opacity: 0,
        stagger: true,
      });
  }, []);
  return (
    <div
      className={`offline-problems-container p-5 lg:p-10`}
      style={{ height: `${(problems.length - 1) * 100}vh` }}
    >
      <div className="sticky top-0 ">
        <div className="py-5 w-full flex justify-center">
          <Building size={50} />
        </div>
        <h3 className="heading font-extrabold text-secondary text-center text-3xl lg:text-5xl py-5">
          {"Challenges Offline Businesses Face Today".split(" ").map((w, i) => (
            <span key={i}>
              {i == 0 ? "" : <span> </span>}
              <span className="headingparts">{w}</span>
            </span>
          ))}
        </h3>
        <div className="content flex w-full justify-center">
          <div className="p-5 border-amber-500 border-2 w-full sm:w-[60vw]">
            <div className="md:flex md:gap-2">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
