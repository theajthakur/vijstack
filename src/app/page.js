"use client";
import Home from "@/components/hero/page";
import HorizontalScroller from "@/components/scroller/page";
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-text">
      <Home />
      <HorizontalScroller />
    </main>
  );
}
