import { Plus } from "lucide-react";

export default function Faq({ items, title = "Questions, answered" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="h-section">{title}</h2>
        <div className="divide-y divide-line border-y border-line">
          {items.map((f) => (
            <details key={f.q} className="group py-2 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left">
                <h3 className="font-sans text-lg font-semibold sm:text-xl">{f.q}</h3>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-all group-open:rotate-45 group-open:border-cobalt group-open:bg-cobalt group-open:text-white">
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </summary>
              <p className="max-w-2xl pb-5 pr-12 text-lg leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
