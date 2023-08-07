const sitemap = require("sitemap");
const hostname = "https://www.rajaryan.work";

const urls = [
  { url: "/", changefreq: "monthly", priority: 1 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/projects", changefreq: "monthly", priority: 0.9 },
  { url: "/skills", changefreq: "monthly", priority: 0.7 },
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require("fs");

// Write sitemap to public directory
fs.writeFileSync("./public/sitemap.xml", sitemapInstance.toString());
