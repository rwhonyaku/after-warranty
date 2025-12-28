import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://after-warranty.com";
  const urls = [
    "/",
    "/about",
    "/disclaimer",
    "/how-this-site-works",
    "/dyson",
    "/dyson/warranty-expired",
    "/dyson/common-problems",
    "/dyson/repair-options",
    "/dyson/cost-ranges",
    "/dyson/replace-vs-repair",
  ];

  return urls.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/dyson" ? 0.9 : 0.7,
  }));
}
