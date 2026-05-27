import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",                      priority: 1.0, changeFrequency: "weekly"  },
  { path: "/semaglutide",           priority: 0.9, changeFrequency: "monthly" },
  { path: "/tirzepatide",           priority: 0.9, changeFrequency: "monthly" },
  { path: "/compare",               priority: 0.8, changeFrequency: "monthly" },
  { path: "/compare/ozempic-vs-wegovy",   priority: 0.8, changeFrequency: "monthly" },
  { path: "/compare/ozempic-vs-mounjaro", priority: 0.8, changeFrequency: "monthly" },
  { path: "/compare/wegovy-vs-mounjaro",  priority: 0.8, changeFrequency: "monthly" },
  { path: "/compare/ozempic-vs-rybelsus", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cost",                  priority: 0.8, changeFrequency: "weekly"  },
  { path: "/insurance-coverage",    priority: 0.7, changeFrequency: "monthly" },
  { path: "/insurance-checker",     priority: 0.8, changeFrequency: "monthly" },
  { path: "/ontario",               priority: 0.8, changeFrequency: "monthly" },
  { path: "/british-columbia",      priority: 0.8, changeFrequency: "monthly" },
  { path: "/alberta",               priority: 0.8, changeFrequency: "monthly" },
  { path: "/manitoba",              priority: 0.8, changeFrequency: "monthly" },
  { path: "/saskatchewan",          priority: 0.8, changeFrequency: "monthly" },
  { path: "/nova-scotia",           priority: 0.8, changeFrequency: "monthly" },
  { path: "/new-brunswick",         priority: 0.8, changeFrequency: "monthly" },
  { path: "/newfoundland",          priority: 0.8, changeFrequency: "monthly" },
  { path: "/pei",                   priority: 0.8, changeFrequency: "monthly" },
  { path: "/oral-glp1",             priority: 0.7, changeFrequency: "monthly" },
  { path: "/generic-semaglutide",   priority: 0.9, changeFrequency: "weekly"  },
  { path: "/semaglutide-price-drop",     priority: 0.9, changeFrequency: "weekly"  },
  { path: "/felix-semaglutide-149",      priority: 0.9, changeFrequency: "weekly"  },
  { path: "/online-prescription",   priority: 0.8, changeFrequency: "monthly" },
  { path: "/side-effects",          priority: 0.8, changeFrequency: "monthly" },
  { path: "/dosing",                priority: 0.8, changeFrequency: "monthly" },
  { path: "/saxenda",               priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq",                   priority: 0.7, changeFrequency: "monthly" },
  { path: "/best-generic-semaglutide-canada", priority: 0.9, changeFrequency: "weekly"  },
  { path: "/about",                 priority: 0.5, changeFrequency: "yearly"  },
  { path: "/disclaimer",            priority: 0.4, changeFrequency: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
          "en-CA": `${SITE_URL}${route.path}`,
          "x-default": `${SITE_URL}${route.path}`,
        },
    },
  }));
}
