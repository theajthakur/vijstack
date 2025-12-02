import React from "react";

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-16 flex items-center justify-center mt-10">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        {/* Vision */}
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-primary">Your Vision,</span> Our Code
          </h1>
          <p className="text-lg text-foreground/80">
            Helping startups and businesses establish strong digital presence
            through modern web and app solutions.
          </p>
        </div>

        {/* Why Online Identity */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-secondary">
            Why Online Identity Matters
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Nowadays, people trust online identities. Having a domain and a
            professional website isn’t just about presence—it builds credibility
            and trust in your brand.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-secondary">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Web Development",
              "SEO Optimization",
              "Responsive Design",
              "UI/UX Design",
              "Interactive Animations",
              "Technical Support",
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 border border-primary/40 rounded-lg hover:shadow-[var(--shadow-glow)] transition-all"
              >
                <p className="font-medium text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary">
            Our Team
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Behind Vijstack is a qualified core team dedicated to managing and
            delivering projects with passion, precision, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
