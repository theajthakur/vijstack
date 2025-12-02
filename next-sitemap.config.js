/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vijstack.com", // Replace with your real domain
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 5000, // Optional: split large sitemaps
  changefreq: "daily",
  priority: 0.7,
};
