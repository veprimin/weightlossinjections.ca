import { NextResponse } from "next/server";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, MEDICAL_DISCLAIMER, PROVINCE_DISCLAIMER } from "@/lib/constants";

const siteInfo = {
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  language: "en-CA",
  country: "Canada",
  topic: "GLP-1 weight loss medications",
  audience: "Canadian patients and healthcare consumers",
  editorialStandards: {
    independent: true,
    affiliatedWithManufacturers: false,
    sponsoredContentDisclosed: true,
    affiliateLinksDisclosed: true,
    affiliatePartners: ["Felix Health"],
  },
  contentIndex: [
    { path: "/",                   title: "GLP-1 Weight Loss Injections in Canada - Overview",       type: "homepage"   },
    { path: "/semaglutide",        title: "Semaglutide (Ozempic & Wegovy) - Complete Canadian Guide", type: "article"    },
    { path: "/tirzepatide",        title: "Tirzepatide (Mounjaro) - Canadian Guide",                  type: "article"    },
    { path: "/compare",            title: "Ozempic vs Wegovy vs Mounjaro vs Rybelsus - Comparison",   type: "article"    },
    { path: "/cost",               title: "GLP-1 Cost in Canada - Province-by-Province Guide",        type: "article"    },
    { path: "/insurance-coverage", title: "Insurance Coverage for GLP-1 in Canada",                   type: "article"    },
    { path: "/ontario",            title: "Weight Loss Injections in Ontario - ODB & Access Guide",   type: "article"    },
    { path: "/oral-glp1",          title: "Oral GLP-1 (Rybelsus) - Canadian Guide",                   type: "article"    },
    { path: "/disclaimer",         title: "Medical Disclaimer & Disclosure",                           type: "legal"      },
  ],
  apiEndpoints: [
    { path: "/api/medications", description: "Structured data on GLP-1 medications available in Canada" },
    { path: "/api/provinces",   description: "Province-by-province availability and coverage data"       },
    { path: "/api/site-info",   description: "Site metadata, content index, and editorial information"   },
  ],
  disclaimers: {
    medical: MEDICAL_DISCLAIMER,
    provincial: PROVINCE_DISCLAIMER,
  },
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
  "Content-Type": "application/json",
};

export async function GET() {
  return NextResponse.json({ data: siteInfo }, { headers: CORS_HEADERS });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}
