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
      thumbnail: "/BGs/hardware_offline2.jpg",
    },
    {
      title: "Schools & Educational Institutes",
      description:
        "Schools that are not online struggle with managing attendance, fee records, and student progress. Parents find it hard to track their child’s activities and often depend on registers or manual updates, which wastes time and lacks transparency.",
      thumbnail: "/BGs/school_problem_2.jpg",
    },
    {
      title: "Restaurants & Food Outlets",
      description:
        "Restaurants without online ordering miss out on huge opportunities. Customers today prefer to order food from their phones with integrated payments. Without this, restaurants lose sales to online-first competitors.",
      thumbnail: "/BGs/restaurant_problem.jpg",
    },
    {
      title: "Grocery Stores",
      description:
        "Local grocery stores that are not online depend only on walk-in customers. People now prefer ordering groceries online with home delivery. Without this option, these stores lose customers to big online platforms.",
      thumbnail: "/BGs/grocery_problem.jpg",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".offline-problems-container",
          start: "10% bottom",
          end: "40% bottom",
          scrub: true,
        },
      })
      .from(".heading .headingparts", {
        opacity: 0,
        scale: 0,
        stagger: 1,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".offline-problems-container",
          start: "40% bottom",
          end: "100% bottom",
          scrub: true,
        },
      })
      .from(".problem-unit", {
        opacity: 0,
        x: 100,
        stagger: 2,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".offline-problems-container",
          start: "40% center",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".problem-unit", {
        opacity: 0,
        x: -100,
        stagger: 4,
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
        <div className="content w-full relative overflow-hidden">
          {problems.map((c, i) => (
            <div key={i} className="problem-unit  ">
              <div className="flex justify-center bg-background">
                <div className="p-5 w-full sm:w-[60vw]">
                  <div className="flex flex-col md:flex-row md:gap-4 p-4 border rounded-md shadow-sm items-center">
                    <div className="thumbnail-container w-full md:w-1/3 mb-4 md:mb-0">
                      <Image
                        alt={c.title}
                        src={c.thumbnail}
                        layout="responsive"
                        width={400}
                        height={225}
                        className="rounded-md object-cover"
                      />
                    </div>

                    <div className="content-container w-full md:w-2/3">
                      <h2 className="font-semibold text-2xl text-center mb-2 text-primary">
                        {c.title}
                      </h2>
                      <p className="text-center">{c.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
