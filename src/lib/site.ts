export const site = {
  name: "Vijstack",
  legalName: "Vijstack",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.vijstack.com").replace(/\/$/, ""),
  tagline: "Websites built to win you customers",
  description:
    "Vijstack builds fast, SEO-ready custom websites, e-commerce stores, landing pages, CMS and admin panels for startups and growing businesses in India and worldwide.",
  email: "vijstack@gmail.com",
  phoneDisplay: "+91 96951 46906",
  phoneHref: "tel:+919695146906",
  whatsapp: "https://wa.me/919695146906",
  portfolio: "https://dev.vijstack.com",
  googleReviews: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "https://share.google/8pqohNwlk24HagBEa",
  rating: process.env.NEXT_PUBLIC_GOOGLE_RATING ? Number(process.env.NEXT_PUBLIC_GOOGLE_RATING) : null,
  reviewCount: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT ? Number(process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT) : null,
  address: {
    locality: "Greater Noida",
    region: "Uttar Pradesh",
    country: "IN",
    countryName: "India",
  },
  geo: { lat: 28.4744, lng: 77.504 },
  countries: [
    { code: "IN", name: "India" },
    { code: "PK", name: "Pakistan" },
    { code: "DE", name: "Germany" },
    { code: "CA", name: "Canada" },
    { code: "ES", name: "Spain" },
    { code: "GB", name: "United Kingdom" },
  ],
  stats: [
    { value: 20, suffix: "+", label: "Clients served" },
    { value: 10, suffix: "+", label: "Custom websites built" },
    { value: 50, suffix: "+", label: "Maintenance jobs & fixes" },
    { value: 5, suffix: "+", label: "Countries" },
  ],
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/about", label: "About" },
] as const;

export const absoluteUrl = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
