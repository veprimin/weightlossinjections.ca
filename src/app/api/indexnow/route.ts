import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

const INDEXNOW_KEY = "1aa1ff9c1f414464827a12cd078d5602";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

const URL_PATHS = [
  "/",
  // Medication guides
  "/semaglutide",
  "/tirzepatide",
  "/oral-glp1",
  "/saxenda",
  "/generic-semaglutide",
  "/best-generic-semaglutide-canada",
  // Comparisons
  "/compare",
  "/compare/ozempic-vs-wegovy",
  "/compare/ozempic-vs-mounjaro",
  "/compare/wegovy-vs-mounjaro",
  "/compare/ozempic-vs-rybelsus",
  // Cost & insurance
  "/cost",
  "/insurance-coverage",
  "/insurance-checker",
  // Clinical info
  "/dosing",
  "/side-effects",
  "/online-prescription",
  "/faq",
  // Province guides
  "/ontario",
  "/british-columbia",
  "/alberta",
  "/manitoba",
  "/saskatchewan",
  "/nova-scotia",
  "/new-brunswick",
  "/newfoundland",
  "/pei",
  // News / affiliate
  "/semaglutide-price-drop",
  "/felix-semaglutide-149",
  // Site pages
  "/about",
  "/disclaimer",
];

export async function POST() {
  const host = new URL(SITE_URL).hostname;
  const urlList = URL_PATHS.map((path) => `${SITE_URL}${path}`);

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return NextResponse.json(
    { submitted: urlList.length, status: response.status, ok: response.ok },
    { status: response.ok ? 200 : response.status }
  );
}

export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    keyFile: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urls: URL_PATHS.length,
    endpoint: INDEXNOW_ENDPOINT,
    usage: "POST /api/indexnow to submit all URLs",
  });
}
