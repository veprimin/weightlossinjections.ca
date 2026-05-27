import { SITE_URL } from "@/lib/constants";

interface RouteEntry {
  path: string;
  priority: number;
  changeFrequency: string;
}

const routes: RouteEntry[] = [
  { path: "/",                               priority: 1.0, changeFrequency: "weekly"  },
  { path: "/semaglutide",                    priority: 0.9, changeFrequency: "monthly" },
  { path: "/tirzepatide",                    priority: 0.9, changeFrequency: "monthly" },
  { path: "/compare",                        priority: 0.8, changeFrequency: "monthly" },
  { path: "/compare/ozempic-vs-wegovy",      priority: 0.8, changeFrequency: "monthly" },
  { path: "/compare/ozempic-vs-mounjaro",    priority: 0.8, changeFrequency: "monthly" },
  { path: "/compare/wegovy-vs-mounjaro",     priority: 0.8, changeFrequency: "monthly" },
  { path: "/compare/ozempic-vs-rybelsus",    priority: 0.7, changeFrequency: "monthly" },
  { path: "/cost",                           priority: 0.8, changeFrequency: "weekly"  },
  { path: "/insurance-coverage",             priority: 0.7, changeFrequency: "monthly" },
  { path: "/insurance-checker",              priority: 0.8, changeFrequency: "monthly" },
  { path: "/ontario",                        priority: 0.8, changeFrequency: "monthly" },
  { path: "/british-columbia",               priority: 0.8, changeFrequency: "monthly" },
  { path: "/alberta",                        priority: 0.8, changeFrequency: "monthly" },
  { path: "/manitoba",                       priority: 0.8, changeFrequency: "monthly" },
  { path: "/saskatchewan",                   priority: 0.8, changeFrequency: "monthly" },
  { path: "/nova-scotia",                    priority: 0.8, changeFrequency: "monthly" },
  { path: "/new-brunswick",                  priority: 0.8, changeFrequency: "monthly" },
  { path: "/newfoundland",                   priority: 0.8, changeFrequency: "monthly" },
  { path: "/pei",                            priority: 0.8, changeFrequency: "monthly" },
  { path: "/oral-glp1",                      priority: 0.7, changeFrequency: "monthly" },
  { path: "/generic-semaglutide",            priority: 0.9, changeFrequency: "weekly"  },
  { path: "/semaglutide-price-drop",         priority: 0.9, changeFrequency: "weekly"  },
  { path: "/felix-semaglutide-149",          priority: 0.9, changeFrequency: "weekly"  },
  { path: "/online-prescription",            priority: 0.8, changeFrequency: "monthly" },
  { path: "/side-effects",                   priority: 0.8, changeFrequency: "monthly" },
  { path: "/dosing",                         priority: 0.8, changeFrequency: "monthly" },
  { path: "/saxenda",                        priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq",                            priority: 0.7, changeFrequency: "monthly" },
  { path: "/best-generic-semaglutide-canada",priority: 0.9, changeFrequency: "weekly"  },
  { path: "/felix-generic-semaglutide",      priority: 0.9, changeFrequency: "weekly"  },
  { path: "/about",                          priority: 0.5, changeFrequency: "yearly"  },
  { path: "/disclaimer",                     priority: 0.4, changeFrequency: "yearly"  },
];

export function GET() {
  const now = new Date().toISOString();

  const urlEntries = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="en-CA" href="${SITE_URL}${route.path}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${route.path}"/>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
