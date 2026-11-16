import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBand({ title = "Have a project in mind?" }: { title?: string }) {
  return (
    <section className="pb-24 pt-4 sm:pb-32">
      <div className="container-x">
        <div className="stacked ml-5 mb-5 rounded-[32px] bg-cobalt px-7 py-14 text-white [--stack-color:var(--color-ink)] sm:px-14 sm:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="h-section">{title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Tell me what you&apos;re building. You&apos;ll get honest advice, a clear plan and a written quote, with no obligation.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn btn-light">
                Start your project
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn-outline-light !px-4">
                  <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
                </a>
                <a href={`mailto:${site.email}`} className="btn btn-outline-light !px-4">
                  <Mail className="h-4 w-4" aria-hidden /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
