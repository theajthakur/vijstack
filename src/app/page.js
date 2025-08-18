"use client";
import Logo from "@/components/logo/Logo";
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-text">
      <section className="hero-section">
        <Logo />
      </section>
    </main>
  );
}
