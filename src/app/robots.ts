import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI search crawlers - explicitly permitted for Generative Engine Optimization
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Claude-Web",
          "anthropic-ai",
          "Google-Extended",
          "Googlebot",
          "PerplexityBot",
          "YouBot",
          "Bytespider",
          "CCBot",
          "cohere-ai",
          "AI2Bot",
          "Diffbot",
          "FacebookBot",
          "meta-externalagent",
          "OAI-SearchBot",
        ],
        allow: "/",
        disallow: "/_next/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
