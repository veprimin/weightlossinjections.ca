import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",                   priority: 1.0, changeFrequency: "weekly"  },
  { path: "/semaglutide",        priority: 0.9, changeFrequency: "monthly" },
  { path: "/tirzepatide",        priority: 0.9, changeFrequency: "monthly" },
  { path: "/compare",            priority: 0.8, changeFrequency: "monthly" },
  { path: "/cost",               priority: 0.8, changeFrequency: "weekly"  },
  { path: "/insurance-coverage", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ontario",             priority: 0.8, changeFrequency: "monthly" },
  { path: "/british-columbia",   priority: 0.8, changeFrequency: "monthly" },
  { path: "/alberta",            priority: 0.8, changeFrequency: "monthly" },
  { path: "/oral-glp1",          priority: 0.7, changeFrequency: "monthly" },
  { path: "/generic-semaglutide",priority: 0.9, changeFrequency: "weekly"  },
  { path: "/online-prescription", priority: 0.8, changeFrequency: "monthly" },
  { path: "/disclaimer",         priority: 0.4, changeFrequency: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-05-18");
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: { "en-CA": `${SITE_URL}${route.path}` },
    },
  }));
}
