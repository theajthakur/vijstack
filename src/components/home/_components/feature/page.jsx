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
import { useEffect, useRef } from "react";

export default function FeatureProvided() {
  const points = [
    {
      title: "SEO & Online Visibility",
      desc: "We optimize your website for search engines so your business gets discovered by the right audience, boosting traffic and sales.",
      icon: TrendingUp,
    },
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
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top center",
          scrub: true,
        },
      })
      .from(headingRef.current, {
        y: 100,
        scale: 0,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "30% 30%",
          scrub: true,
        },
      })
      .fromTo(
        cardsRef.current,
        {
          x: 100,
          stagger: 0.5,
        },
        {
          x: 0,
          stagger: 0.5,
        }
      );
  }, []);

  return (
    <section
      className="py-16 px-6 md:px-20 bg-background text-foreground relative"
      ref={sectionRef}
    >
      <h2
        className="text-3xl md:text-5xl font-bold text-center text-primary drop-shadow-glow mb-12"
        ref={headingRef}
      >
        Why Choose Us?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full overflow-hidden">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex flex-col items-start gap-4 bg-[#1a1a1a] p-6 rounded-[var(--radius-card)] shadow-md hover:shadow-[var(--shadow-glow)] transition duration-300 border border-transparent hover:border-primary group"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary shadow-md group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} strokeWidth={2.2} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {point.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {point.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
