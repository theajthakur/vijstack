export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0F0F0F] text-[#EDEDED]">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to <span className="text-[#00F5D4]">Vijay's App</span>
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Built with <span className="text-[#6C63FF]">Next.js</span> & Tailwind
        CSS 🚀
      </p>
      <button className="px-6 py-3 rounded-2xl bg-[#FF6B6B] text-white font-medium hover:scale-105 transition">
        Get Started
      </button>
    </main>
  );
}
