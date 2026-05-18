import { NextResponse } from "next/server";
import { MEDICAL_DISCLAIMER, SITE_URL } from "@/lib/constants";

const provinces = [
  {
    id: "AB",
    name: "Alberta",
    telehealthAvailable: true,
    publicCoverage: { semaglutide: "Limited — Alberta Blue Cross (income-based)", tirzepatide: "Not covered" },
    privateInsuranceCoverage: "Common for Ozempic (diabetes indication); variable for Wegovy",
    felixServiceAvailable: true,
    notes: "AB Health covers Ozempic for diabetes patients meeting specific criteria.",
  },
  {
    id: "BC",
    name: "British Columbia",
    telehealthAvailable: true,
    publicCoverage: { semaglutide: "PharmaCare Plan B/C (income-based)", tirzepatide: "Special authority required" },
    privateInsuranceCoverage: "Common for Ozempic; increasingly covered for Wegovy",
    felixServiceAvailable: true,
    notes: "BC PharmaCare may cover GLP-1s with special authority for diabetes patients.",
  },
  {
    id: "MB",
    name: "Manitoba",
    telehealthAvailable: true,
    publicCoverage: { semaglutide: "Manitoba Drug Benefits (limited)", tirzepatide: "Not routinely covered" },
    privateInsuranceCoverage: "Variable; Ozempic more commonly covered than Wegovy",
    felixServiceAvailable: true,
    notes: "Manitoba covers some GLP-1s under the Manitoba Drug Benefits program for eligible patients.",
  },
  {
    id: "NB",
    name: "New Brunswick",
    telehealthAvailable: true,
    publicCoverage: { semaglutide: "NB Prescription Drug Program (limited)", tirzepatide: "Not covered" },
    privateInsuranceCoverage: "Variable",
    felixServiceAvailable: true,
    notes: "Coverage primarily for diabetes indication through the provincial drug plan.",
  },
  {
    id: "NL",
    name: "Newfoundland & Labrador",
    telehealthAvailable: true,
    publicCoverage: { semaglutide: "NL Prescription Drug Program (limited)", tirzepatide: "Not covered" },
    privateInsuranceCoverage: "Variable",
    felixServiceAvailable: true,
    notes: "GLP-1 coverage limited to diabetes patients under the provincial drug plan.",
  },
  {
    id: "NS",
    name: "Nova Scotia",
    telehealthAvailable: true,
    publicCoverage: { semaglutide: "NS Pharmacare (limited)", tirzepatide: "Not routinely covered" },
    privateInsuranceCoverage: "Variable; Ozempic commonly covered",
    felixServiceAvailable: true,
    notes: "Provincial drug plans primarily cover the diabetes indication.",
  },
  {
    id: "ON",
    name: "Ontario",
    telehealthAvailable: true,
    publicCoverage: { semaglutide: "ODB — Ozempic listed; Wegovy not listed (2025)", tirzepatide: "Not ODB-listed" },
    privateInsuranceCoverage: "Ozempic widely covered; Wegovy increasingly available",
    felixServiceAvailable: true,
    notes: "Ontario Drug Benefit (ODB) covers Ozempic for eligible low-income patients with type 2 diabetes. Wegovy is NOT on the ODB formulary as of 2025.",
    guideUrl: `${SITE_URL}/ontario`,
  },
  {
    id: "PE",
    name: "Prince Edward Island",
    telehealthAvailable: true,
    publicCoverage: { semaglutide: "PEI Pharmacare (limited)", tirzepatide: "Not covered" },
    privateInsuranceCoverage: "Variable",
    felixServiceAvailable: true,
    notes: "Limited public coverage; primarily diabetes indication.",
  },
  {
    id: "SK",
    name: "Saskatchewan",
    telehealthAvailable: true,
    publicCoverage: { semaglutide: "Saskatchewan Drug Plan (limited)", tirzepatide: "Not routinely covered" },
    privateInsuranceCoverage: "Variable; Ozempic commonly covered",
    felixServiceAvailable: true,
    notes: "GLP-1 coverage through Saskatchewan Drug Plan requires meeting specific eligibility criteria.",
  },
  {
    id: "QC",
    name: "Quebec",
    telehealthAvailable: false,
    publicCoverage: { semaglutide: "RAMQ — limited coverage", tirzepatide: "Not covered" },
    privateInsuranceCoverage: "Variable",
    felixServiceAvailable: false,
    notes: "Quebec operates under different telehealth and online pharmacy regulations. Felix Health online prescriptions are NOT currently available in Quebec. Consult a Quebec-licensed physician directly.",
  },
];

const territories = [
  { id: "NT", name: "Northwest Territories", telehealthAvailable: false, felixServiceAvailable: false },
  { id: "NU", name: "Nunavut",               telehealthAvailable: false, felixServiceAvailable: false },
  { id: "YT", name: "Yukon",                 telehealthAvailable: false, felixServiceAvailable: false },
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
      data: { provinces, territories },
      meta: {
        lastUpdated: "2026-05-18",
        source: `${SITE_URL} editorial team`,
        country: "Canada",
        disclaimer: `${MEDICAL_DISCLAIMER} Coverage information changes frequently. Always verify with your provincial drug plan and healthcare provider.`,
        felixServiceProvinces: provinces.filter((p) => p.felixServiceAvailable).map((p) => p.id),
      },
    },
    { headers: CORS_HEADERS }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}
