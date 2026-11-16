// Client testimonials shown on the site.
// Replace or extend these with real reviews from your Google Business Profile.
export type Review = { quote: string; name: string; role: string; country?: string };

export const reviews: Review[] = [
  {
    quote: "Working with Vijstack transformed our business. Our website now attracts more customers, and the support after launch has been outstanding.",
    name: "Anjali Sharma",
    role: "Owner, Anjali's Boutique",
  },
  {
    quote: "They built us a custom e-commerce platform that's fast, secure and super easy to manage. We saw a sales boost within the first month.",
    name: "Rahul Verma",
    role: "Founder, TechGear Hub",
  },
  {
    quote: "Professional, transparent and always ready to help. The design is sleek, mobile-friendly and exactly what we envisioned.",
    name: "Sanya Kapoor",
    role: "Marketing Lead, GreenGrocer",
  },
  {
    quote: "From start to finish, the process was seamless. Everything from hosting to deployment was handled, hassle-free for us.",
    name: "Amit Mehra",
    role: "Director, EduPoint Academy",
  },
  {
    quote: "We loved the approach. Affordable pricing, clear communication, and the final result was beyond our expectations.",
    name: "Neha Bansal",
    role: "Manager, Spice Villa Restaurant",
  },
];
