import { NextResponse } from "next/server";
import { SITE_URL, MEDICAL_DISCLAIMER } from "@/lib/constants";

const medications = [
  {
    id: "semaglutide",
    name: "Semaglutide",
    brands: ["Ozempic", "Wegovy"],
    genericAvailable: true,
    type: "GLP-1 receptor agonist",
    manufacturer: "Novo Nordisk",
    healthCanadaApproved: true,
    approvalYear: { Ozempic: 2018, Wegovy: 2021 },
    form: "subcutaneous injection (weekly)",
    indications: ["type 2 diabetes (Ozempic)", "chronic weight management in adults (Wegovy)"],
    weightLossEfficacy: "~15% body weight (STEP trials)",
    estimatedMonthlyCostCAD: { branded: "300-500", generic: "50-150" },
    sideEffects: ["nausea", "vomiting", "diarrhea", "constipation", "fatigue"],
    url: `${SITE_URL}/semaglutide`,
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    brands: ["Mounjaro"],
    genericAvailable: false,
    type: "GLP-1/GIP dual receptor agonist",
    manufacturer: "Eli Lilly",
    healthCanadaApproved: true,
    approvalYear: { Mounjaro: 2023 },
    form: "subcutaneous injection (weekly)",
    indications: ["type 2 diabetes", "chronic weight management in adults"],
    weightLossEfficacy: "~20% body weight (SURMOUNT trials)",
    estimatedMonthlyCostCAD: { branded: "400-600" },
    sideEffects: ["nausea", "diarrhea", "vomiting", "constipation", "decreased appetite"],
    url: `${SITE_URL}/tirzepatide`,
  },
  {
    id: "oral-semaglutide",
    name: "Oral Semaglutide",
    brands: ["Rybelsus"],
    genericAvailable: false,
    type: "GLP-1 receptor agonist (oral tablet)",
    manufacturer: "Novo Nordisk",
    healthCanadaApproved: true,
    approvalYear: { Rybelsus: 2020 },
    form: "oral tablet (daily)",
    indications: ["type 2 diabetes"],
    weightLossEfficacy: "~5% body weight (approved for diabetes only, not weight loss)",
    estimatedMonthlyCostCAD: { branded: "200-350" },
    sideEffects: ["nausea", "diarrhea", "vomiting", "stomach pain"],
    url: `${SITE_URL}/oral-glp1`,
  },
];

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
  "Content-Type": "application/json",
};

export async function GET() {
  return NextResponse.json(
    {
      data: medications,
      meta: {
        count: medications.length,
        lastUpdated: "2026-05-22",
        source: `${SITE_URL} editorial team`,
        country: "Canada",
        currency: "CAD",
        disclaimer: MEDICAL_DISCLAIMER,
      },
    },
    { headers: CORS_HEADERS }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}
