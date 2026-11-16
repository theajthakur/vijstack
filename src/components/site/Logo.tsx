import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group inline-flex items-center gap-2.5" aria-label="Vijstack home">
      <Image
        src="/logo-256.png"
        alt=""
        width={36}
        height={36}
        priority
        className={`h-9 w-9 transition-transform duration-300 group-hover:-rotate-6 ${light ? "brightness-0 invert" : ""}`}
      />
      <span className={`font-display text-[1.35rem] font-bold tracking-[-0.03em] ${light ? "text-white" : "text-ink"}`}>
        vijstack
      </span>
    </Link>
  );
}
