import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center px-5 pt-24">
      <div className="text-center">
        <p className="font-display text-[clamp(6rem,20vw,12rem)] font-bold leading-none tracking-tighter text-cobalt">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">This page doesn&apos;t exist</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">It may have moved when the site was rebuilt. Head home or browse the services.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">Go to homepage</Link>
          <Link href="/services" className="btn btn-ghost">Browse services</Link>
        </div>
      </div>
    </section>
  );
}
