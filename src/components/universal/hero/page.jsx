import { useEffect, useRef } from "react";
import Logo from "../../logo/Logo";
import "./main.css";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Hero({
  title,
  highlight,
  tagline,
  highlight2,
  motto,
  center,
}) {
  const router = useRouter();

  const goToLink = (link) => {
    try {
      router.push(link);
    } catch (error) {
      router.push("/contact");
    }
  };
  const buttonRef = useRef(null);
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
      duration: 0.5,
    });

    ts.from(".company-tagline", {
      scale: 0,
      opacity: 0,
      duration: 0.25,
      stagger: 0.05,
      ease: "back.out(2)",
    });

    ts.from(buttonRef.current, {
      opacity: 0,
      y: 200,
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

    ts.fromTo(
      ".company-motto span",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        color: "var(--primary)",
        stagger: 0.05,
      }
    );
  });
  return (
    <div className="hero-controller">
      <main className="hero-container min-h-screen bg-background text-text flex flex-col items-center justify-center">
        <div className="flex gap-3 justify-between">
          <div className="logo-animater drop-shadow-accent">
            <div className="flex justify-center logo-3d">
              <Logo />
            </div>
            <div
              className={`text-5xl lg:text-8xl font-extrabold flex space-x-1 ${
                center ? "justify-center" : ""
              }`}
            >
              {title.split("").map((letter, idx) => (
                <span
                  key={idx}
                  className={`${
                    highlight.includes(letter.toLowerCase())
                      ? "text-primary"
                      : "text-white"
                  } hover:text-accent transition-colors duration-300 cursor-none company-name`}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div className="text-end lg:text-3xl">
              {tagline.split("").map((letter, idx) => (
                <span
                  key={idx}
                  className={`${
                    highlight2.includes(letter.toLowerCase())
                      ? "text-primary"
                      : "text-white"
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
            {motto.split("").map((l, k) => (
              <span key={k} className="opacity-0">
                {l}
              </span>
            ))}
          </div>
        </div>
        <div ref={buttonRef} className="py-10">
          <Button
            type="outline"
            onClick={() => {
              goToLink("/contact");
            }}
          >
            <div className="flex gap-2 hover:gap-3">
              <div className="text-container"> Get a Free Quote</div>
              <div className="arrow-container">
                <ArrowRight />
              </div>
            </div>
          </Button>
        </div>
      </main>
    </div>
  );
}
