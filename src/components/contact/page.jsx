"use client";
import React, { useEffect, useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactUs() {
  useEffect(() => {
    toast.error("Hi");
    toast.error("Hi");
    toast.success("Hi");
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      setStatus({ text: "Please fill in all fields.", type: "error" });
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong!");

      setStatus({ text: "Message sent successfully!", type: "success" });
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } catch (err) {
      setStatus({
        text: "❌ Failed to send message. Please try again.",
        type: "error",
      });
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const contactComponent = [
    { name: "Email", text: "vijstack@gmail.com", icon: Mail },
    { name: "Mobile", text: "9695146906", icon: Phone },
    {
      name: "Address",
      text: "Greater Noida, Uttar Pradesh, India",
      icon: MapPin,
    },
  ];

  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 py-16 bg-neutral-950 overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10 max-w-3xl w-full bg-[rgba(255,255,255,0.02)] backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-10 text-center mt-20 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--foreground)]">
          Let’s Build Something Great
        </h1>
        <p className="mt-3 text-lg text-[var(--foreground)]/70">
          Have a project in mind? Drop us a message and let’s make it happen.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-black bg-[var(--primary)] hover:bg-[var(--secondary)] transition-all shadow-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Inline feedback message */}
        {status.text && (
          <p
            className={`mt-4 font-medium ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.text}
          </p>
        )}
        <div className="contact-details mt-10 flex flex-wrap gap-4 justify-center">
          {contactComponent.map((e, i) => {
            const Element = e.icon;
            const isLastOdd =
              contactComponent.length % 2 !== 0 &&
              i === contactComponent.length - 1;

            return (
              <div
                key={i}
                className={`border rounded-md p-4 hover:text-primary hover:shadow-glow flex items-center min-w-[250px] w-full
          sm:w-[calc(50%-0.5rem)]
          ${isLastOdd ? "md:w-full" : "md:w-[calc(50%-0.5rem)]"}
        `}
              >
                <div className="mr-4">
                  <Element />
                </div>
                <div className="details text-left">
                  <p className="font-bold">{e.name}:</p>
                  <p>{e.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
