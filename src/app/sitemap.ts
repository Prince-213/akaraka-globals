import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akarakaglobalresources.com";
  const routes = [
    { path: "", priority: 1, changeFreq: "weekly" as const },
    { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/service", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/gallery", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/our-team", priority: 0.6, changeFreq: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
