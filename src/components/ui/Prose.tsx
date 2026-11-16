export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-24">
      <div className="container-x max-w-3xl space-y-5 text-lg leading-relaxed text-muted [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_a]:font-medium [&_a]:text-cobalt [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}
