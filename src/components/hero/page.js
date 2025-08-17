export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text flex flex-col items-center justify-center">
      <h1 className="text-5xl font-display text-primary drop-shadow-glow">
        Neon Vibe 🚀
      </h1>
      <p className="mt-4 text-lg text-text/80 max-w-md text-center">
        This is your custom Tailwind theme with dark mode vibes.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 bg-primary text-background font-semibold rounded-button shadow-glow">
          Primary
        </button>
        <button className="px-6 py-3 bg-accent text-background font-semibold rounded-button">
          Accent
        </button>
        <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-button">
          Secondary
        </button>
      </div>
    </main>
  );
}
