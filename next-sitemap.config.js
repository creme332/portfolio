/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://creme332.vercel.app",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  sitemapSize: 1000,
  changefreq: "monthly",
};
