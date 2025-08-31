import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

export default function ProblemsOffline() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
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
        scale: 0.8,
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
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.5,
        }
      );
  }, []);

  return (
    <section
      className="py-16 px-6 md:px-20 bg-background text-foreground"
      ref={sectionRef}
    >
      <h2
        ref={headingRef}
        className="text-3xl md:text-5xl font-bold text-center text-primary drop-shadow-glow mb-12"
      >
        Challenges Offline Businesses Face Today
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {problems.map((problem, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-[#1a1a1a] rounded-[var(--radius-card)] overflow-hidden shadow-lg hover:shadow-[var(--shadow-glow)] transition duration-300 group"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={problem.thumbnail}
                alt={problem.title}
                className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {problem.title}
              </h3>
            </div>

            <div className="p-5 text-sm md:text-base text-gray-300">
              {problem.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
