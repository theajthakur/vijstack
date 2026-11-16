import { site } from "@/lib/site";

export default function ClientsBand() {
  return (
    <section aria-label="Countries served" className="border-y border-line bg-white">
      <div className="container-x flex flex-col gap-5 py-7 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 text-sm text-muted">Trusted by clients in</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {site.countries.map((c) => (
            <li key={c.code} className="flex items-center gap-2.5">
              <span className="grid h-7 w-9 place-items-center rounded-md bg-ink text-[11px] font-bold tracking-wide text-white">
                {c.code === "GB" ? "UK" : c.code}
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
