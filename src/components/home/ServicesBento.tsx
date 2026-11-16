import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";

export default function ServicesBento() {
  const [hero, ...rest] = services;
  const maintenance = rest.find((s) => s.slug === "maintenance")!;
  const grid = rest.filter((s) => s.slug !== "maintenance");
  const HeroIcon = hero.icon;
  const MIcon = maintenance.icon;

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="h-section max-w-2xl">Everything your business needs online, from one developer</h2>
          <Link href="/services" className="btn btn-ghost self-start md:self-auto">
            All services
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href={`/services/${hero.slug}`}
            className="stacked stacked-hover group relative flex flex-col justify-between rounded-[28px] bg-ink p-8 text-white [--stack-color:var(--color-cobalt)] mb-5 ml-5 sm:col-span-2 lg:row-span-2"
          >
            <div>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cobalt">
                <HeroIcon className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">{hero.title}</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">{hero.short}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Next.js & React", "Mobile first", "SEO built in", "Fast hosting"].map((t) => (
                <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/80">
                  {t}
                </span>
              ))}
            </div>
            <ArrowUpRight className="absolute right-7 top-7 h-6 w-6 text-white/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" aria-hidden />
          </Link>

          {grid.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative flex flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-cobalt/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-soft text-cobalt transition-colors group-hover:bg-cobalt group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.short}</p>
                <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-ink/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt" aria-hidden />
              </Link>
            );
          })}

          <Link
            href={`/services/${maintenance.slug}`}
            className="group flex flex-col items-start gap-6 rounded-2xl border border-cobalt/25 bg-sky-soft p-6 sm:col-span-2 sm:flex-row sm:items-center lg:col-span-4"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cobalt text-white">
              <MIcon className="h-6 w-6" aria-hidden />
            </span>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold tracking-tight">Already have a website? {maintenance.title}</h3>
              <p className="mt-1 text-muted">
                50+ maintenance jobs and fixes delivered: broken pages, slow load times, new features and updates.
              </p>
            </div>
            <span className="btn btn-primary shrink-0">Get it fixed</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
