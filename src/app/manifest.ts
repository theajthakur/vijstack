import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vijstack",
    short_name: "Vijstack",
    description: "Custom websites, e-commerce, SEO and admin panels for growing businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f7fe",
    theme_color: "#2d4fe0",
    icons: [
      { src: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
