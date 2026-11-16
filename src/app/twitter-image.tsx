import { renderOg, ogSize } from "@/lib/og";

export const alt = "Vijstack: websites built to win you customers";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg("Websites built to win you customers", "Custom websites, e-commerce, SEO, CMS and admin panels for startups and growing businesses.");
}
