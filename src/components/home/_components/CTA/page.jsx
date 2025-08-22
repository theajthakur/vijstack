import React, { useEffect } from "react";
import { ArrowRight, Database } from "lucide-react";
import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TypescriptOriginal,
  ReactOriginal,
  NextjsOriginal,
  NodejsOriginal,
  ExpressOriginal,
  MongodbOriginal,
  MysqlOriginal,
  PostgresqlOriginal,
  PhpOriginal,
  PythonOriginal,
  JavaOriginal,
  SpringOriginal,
  GitOriginal,
  GithubOriginal,
  DockerOriginal,
  KubernetesOriginal,
  LinuxOriginal,
  NginxOriginal,
  RedisOriginal,
  FirebaseOriginal,
  TailwindcssOriginal,
  BootstrapOriginal,
  SassOriginal,
} from "devicons-react";
import gsap from "gsap";

export default function MainCTA() {
  useEffect(() => {
    const icons = gsap.utils.toArray(".float-icon");

    const animateIcon = (icon) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      gsap.to(icon, {
        duration: gsap.utils.random(6, 10),
        x: gsap.utils.random(0, vw / 2 - 50) * (Math.random() < 0.5 ? -1 : 1),
        y: gsap.utils.random(0, vh / 2 - 50) * (Math.random() < 0.5 ? -1 : 1),
        ease: "sine.inOut",
        onComplete: () => animateIcon(icon), // recursion
      });
    };

    icons.forEach((icon) => {
      animateIcon(icon);
    });
  }, []);

  return (
    <section className="relative w-full bg-cover bg-no-repeat bg-[url('/BGs/CTA_2.jpeg')] bg-center">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px]" />

      <div className="relative z-20 min-h-dvh flex flex-col justify-center items-center text-center px-6">
        <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-lg">
          Ready to Build Your Next Big Idea?
        </h2>

        <p className="mt-4 text-lg md:text-xl max-w-2xl text-text/90">
          No fluff. Just code that works, scales, and makes an impact.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-button bg-primary text-black font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Start a Project <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-button border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            See Our Work
          </a>
        </div>
      </div>
      <div className="absolute z-[5px] inset-0">
        <div className="relative">
          <div className="flex justify-center items-center w-full h-dvh">
            {[
              Html5Original,
              Css3Original,
              JavascriptOriginal,
              TypescriptOriginal,
              ReactOriginal,
              NextjsOriginal,
              NodejsOriginal,
              ExpressOriginal,
              MongodbOriginal,
              MysqlOriginal,
              PostgresqlOriginal,
              PhpOriginal,
              PythonOriginal,
              JavaOriginal,
              SpringOriginal,
              GitOriginal,
              GithubOriginal,
              DockerOriginal,
              KubernetesOriginal,
              LinuxOriginal,
              NginxOriginal,
              RedisOriginal,
              FirebaseOriginal,
              TailwindcssOriginal,
              BootstrapOriginal,
              SassOriginal,
            ].map((IconComponent, i) => (
              <div className="absolute float-icon" key={i}>
                <IconComponent size={50} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
