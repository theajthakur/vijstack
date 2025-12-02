# Vijstack - Modern Web Agency Website

A high-performance, visually stunning corporate website built for Vijstack, a leading web development agency. This project features a "Vibrant Creative" theme with glassmorphism effects, smooth animations, and comprehensive SEO optimization.

## 🚀 Features

- **Modern UI/UX**: Glassmorphism design, vibrant gradients, and fluid animations using Framer Motion.
- **Responsive Design**: Fully responsive layouts for all devices (Mobile, Tablet, Desktop).
- **SEO Optimized**: Advanced metadata, JSON-LD structured data, dynamic sitemap, and robots.txt.
- **Performance**: Built on Next.js 14 (App Router) for blazing fast page loads and optimal core web vitals.
- **Interactive Elements**: Animated hero section, masonry gallery, and hover effects.
- **Contact Form**: Functional contact page layout ready for backend integration.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/vijstack.git
   cd vijstack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

```
src/
├── app/                # App Router pages and layouts
│   ├── about/          # About Us page
│   ├── contact/        # Contact page
│   ├── services/       # Services page
│   ├── privacy/        # Privacy Policy
│   ├── terms/          # Terms of Service
│   ├── globals.css     # Global styles and Tailwind theme
│   ├── layout.tsx      # Root layout with SEO metadata
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── ui/             # Generic UI elements (Buttons, etc.)
│   ├── Navbar.tsx      # Responsive navigation
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Landing page hero section
│   └── ...
└── lib/                # Utility functions
```

## 🎨 Customization

### Theme Colors
The color palette is defined in `src/app/globals.css` using CSS variables and Tailwind v4 `@theme`. You can adjust the `oklch` values to change the brand colors.

### Images
- **Hero Image**: Located in `src/components/Hero.tsx`. Currently using a Unsplash placeholder.
- **Gallery Images**: Located in `src/app/about/page.tsx`.
To use your own images, place them in the `public/images/` directory and update the `src` paths in the components.

## 🔍 SEO Configuration

The project comes pre-configured with:
- **Metadata**: Title, description, and OpenGraph tags in `src/app/layout.tsx`.
- **Sitemap**: Automatically generated via `src/app/sitemap.ts`.
- **Robots.txt**: Configured in `src/app/robots.ts`.
- **Structured Data**: Organization schema added to `src/app/page.tsx`.

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket).
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ by Vijstack Team.
