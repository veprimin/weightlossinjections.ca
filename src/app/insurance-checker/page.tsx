import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import InsuranceCheckerClient from "./InsuranceCheckerClient";

export const metadata: Metadata = {
  title: "GLP-1 Insurance Coverage Checker - Does My Plan Cover Ozempic or Wegovy?",
  description:
    "Free interactive tool: find out if your Canadian insurance covers Ozempic, Wegovy, or Mounjaro. Answer 4 questions to get a personalized coverage assessment and next steps.",
  alternates: {
    canonical: `${SITE_URL}/insurance-checker`,
    languages: { "en-CA": `${SITE_URL}/insurance-checker` },
  },
};

export default function InsuranceCheckerPage() {
  return <InsuranceCheckerClient />;
}
