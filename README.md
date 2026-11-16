# Vijstack website

The new vijstack.com, built with Next.js 16 (App Router), Tailwind CSS 4, GSAP and Lucide icons.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Production: `npm run build && npm start`, or import the repo into Vercel.

## Environment variables

| Variable | Needed for |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, Open Graph, JSON-LD |
| `RESEND_API_KEY` | Contact form email delivery ([resend.com](https://resend.com), free tier) |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Sender address on a domain verified in Resend |
| `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` | "Read reviews on Google" links |
| `NEXT_PUBLIC_GOOGLE_RATING`, `NEXT_PUBLIC_GOOGLE_REVIEW_COUNT` | Optional. Shows your rating and adds `aggregateRating` to JSON-LD. Use your real Google numbers only |
| `GOOGLE_SITE_VERIFICATION` | Optional Search Console meta tag |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics 4 |

Without `RESEND_API_KEY`, the form shows an error asking visitors to email you directly.

## Editing content

Everything you'd normally change lives in `src/lib/`:

- `site.ts`: contact details, countries, stats, links
- `services.ts`: all 10 services (each gets its own page at `/services/<slug>`)
- `reviews.ts`: testimonials (**replace with your real Google reviews**)
- `faqs.ts`: homepage FAQ

## SEO built in

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter cards
- Generated Open Graph images for the site and every service page
- `sitemap.xml`, `robots.txt` and a web manifest from `src/app`
- JSON-LD: `ProfessionalService` (with services catalogue), `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `AboutPage`, `ContactPage`
- Static generation for every page, self-hosted fonts, security headers

After deploying, submit `https://www.vijstack.com/sitemap.xml` in Google Search Console and test pages with the [Rich Results Test](https://search.google.com/test/rich-results).

## Project structure

```
src/
  app/            pages, API route, sitemap, robots, manifest, OG images
  components/
    home/         hero, services bento, stats & charts, process, reviews, FAQ, CTA
    site/         navbar, footer, logo, analytics
    ui/           page header, prose
  lib/            content, JSON-LD builders, GSAP setup
public/           logo and icons
```
