"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-20 bg-background text-foreground relative overflow-hidden">
      <div className="h-[35rem] w-full flex items-center justify-center rounded-md bg-[#111]/40 border border-white/10 backdrop-blur-md shadow-lg">
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <div className="w-full overflow-hidden">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-primary drop-shadow-glow">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl mx-auto relative px-5">
                We take pride in delivering digital solutions that make a real
                impact. Here’s what our clients have to say about working with
                us.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="normal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Working with this team transformed our business. Our website now attracts more customers, and the support after launch has been outstanding!",
    name: "Anjali Sharma",
    title: "Owner, Anjali's Boutique",
  },
  {
    quote:
      "They built us a custom e-commerce platform that’s fast, secure, and super easy to manage. We saw a sales boost within the first month!",
    name: "Rahul Verma",
    title: "Founder, TechGear Hub",
  },
  {
    quote:
      "Professional, transparent, and always ready to help. The design is sleek, mobile-friendly, and exactly what we envisioned.",
    name: "Sanya Kapoor",
    title: "Marketing Lead, GreenGrocer",
  },
  {
    quote:
      "From start to finish, the process was seamless. They handled everything from hosting to deployment — hassle-free for us!",
    name: "Amit Mehra",
    title: "Director, EduPoint Academy",
  },
  {
    quote:
      "We loved their approach! Affordable pricing, clear communication, and the final result was beyond our expectations.",
    name: "Neha Bansal",
    title: "Manager, Spice Villa Restaurant",
  },
];
