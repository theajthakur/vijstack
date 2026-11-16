import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  title,
  intro,
  crumbs,
  children,
}: {
  title: string;
  intro?: string;
  crumbs: { name: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_80%_0%,black,transparent)]" aria-hidden />
      <div className="container-x relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
                {i < crumbs.length - 1 ? (
                  <Link href={c.href} className="hover:text-ink">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-ink">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="h-display mt-6 max-w-4xl">{title}</h1>
        {intro && <p className="lede mt-6">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
