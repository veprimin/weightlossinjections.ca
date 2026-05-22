import type { Metadata } from "next";
import Link from "next/link";
import ProviderCards from "@/components/ProviderCards";
import ProvinceGrid from "@/components/ProvinceGrid";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ozempic vs Wegovy vs Mounjaro vs Rybelsus - Compare Weight Loss Injections Canada",
  description:
    "Side-by-side comparison of all major GLP-1 weight loss medications available in Canada: Ozempic, Wegovy, Mounjaro, Rybelsus, and generic semaglutide. Compare efficacy, cost, dosing, and approval status.",
  alternates: {
    canonical: `${SITE_URL}/compare`,
    languages: { "en-CA": `${SITE_URL}/compare` },
  },
};

const drugs = [
  {
    name: "Ozempic",
    generic: "semaglutide",
    manufacturer: "Novo Nordisk",
    form: "Injectable (pen)",
    frequency: "Once weekly",
    doses: "0.5 mg → 1 mg → 2 mg",
    approvalCA: "2018 - Type 2 diabetes",
    weightLoss: "~9–13%",
    cost: "$200–$450/mo",
    oDbCovered: "For T2D (LU code)",
    heroColor: "#1B3A6B",
    href: "/semaglutide",
    keyFacts: [
      "Most commonly prescribed GLP-1 in Canada",
      "Widely prescribed off-label for weight management",
      "Weekly auto-inject pen",
      "Generic versions now approved (2025)",
      "Covered by most provincial plans for T2D",
    ],
  },
  {
    name: "Wegovy",
    generic: "semaglutide 2.4 mg",
    manufacturer: "Novo Nordisk",
    form: "Injectable (pen)",
    frequency: "Once weekly",
    doses: "0.25 → 0.5 → 1 → 1.7 → 2.4 mg",
    approvalCA: "2021 - Chronic weight management",
    weightLoss: "~15%",
    cost: "$385–$430/mo",
    oDbCovered: "Not listed for weight mgmt",
    heroColor: "#2D5FA8",
    href: "/semaglutide",
    keyFacts: [
      "Specifically approved for weight management (BMI ≥30 or ≥27 + comorbidity)",
      "Higher dose than Ozempic - greater weight loss",
      "16–20 week titration to maintenance dose",
      "Home delivery at no extra cost via Care Rx",
      "Not covered provincially for weight management alone",
    ],
  },
  {
    name: "Mounjaro",
    generic: "tirzepatide",
    manufacturer: "Eli Lilly",
    form: "Injectable (autoinjector)",
    frequency: "Once weekly",
    doses: "2.5 → 5 → 7.5 → 10 → 12.5 → 15 mg",
    approvalCA: "2023 - Type 2 diabetes",
    weightLoss: "~15–21%",
    cost: "$400–$620+/mo",
    oDbCovered: "Limited - T2D with auth.",
    heroColor: "#0F766E",
    href: "/tirzepatide",
    keyFacts: [
      "Dual GIP + GLP-1 receptor agonist (unique mechanism)",
      "Greatest average weight loss of any approved GLP-1",
      "~47% of patients lose ≥20% body weight (SURMOUNT-1, 15 mg)",
      "Not yet separately approved for weight management in Canada",
      "Highest price of the class; no generics yet",
    ],
  },
  {
    name: "Rybelsus",
    generic: "oral semaglutide",
    manufacturer: "Novo Nordisk",
    form: "Oral tablet",
    frequency: "Once daily",
    doses: "3 mg → 7 mg → 14 mg",
    approvalCA: "2020 - Type 2 diabetes",
    weightLoss: "~4–5%",
    cost: "$200–$350/mo",
    oDbCovered: "For T2D in several provinces",
    heroColor: "#374151",
    href: "/oral-glp1",
    keyFacts: [
      "World's first approved oral GLP-1 receptor agonist",
      "No needles - daily tablet",
      "Must be taken fasted, with ≤120 mL plain water, 30 min before eating",
      "Less weight loss than injectable at approved doses",
      "Higher-dose versions (25–50 mg) in trials; may close gap with injectable",
    ],
  },
];

const comparisonRows = [
  { label: "Drug class",         values: ["GLP-1 agonist", "GLP-1 agonist", "GIP + GLP-1 agonist", "GLP-1 agonist"] },
  { label: "Administration",     values: ["Weekly injection", "Weekly injection", "Weekly injection", "Daily tablet"] },
  { label: "Health Canada approved for", values: ["Type 2 diabetes", "Weight management", "Type 2 diabetes", "Type 2 diabetes"] },
  { label: "Average weight loss",values: ["~9–13%", "~15%", "~15–21%", "~4–5%"] },
  { label: "Monthly cost (no insurance)", values: ["$200–$450", "$385–$430", "$400–$620+", "$200–$350"] },
  { label: "Generic available?", values: ["Yes (2025)", "Yes (2025)", "No", "No"] },
  { label: "Provincial formulary (diabetes)", values: ["Most provinces", "N/A", "Limited", "Several provinces"] },
  { label: "Off-label weight management", values: ["Common", "N/A (on-label)", "Common", "Some use"] },
  { label: "Titration period",   values: ["4–12 weeks", "16–20 weeks", "8–20 weeks", "4–8 weeks"] },
  { label: "GI side effects",    values: ["Common (mild)", "Common (mild)", "Common (mild)", "Common (mild-mod)"] },
];

export default function ComparePage() {
  return (
    <>
      {/* Editorial Page Header */}
      <div className="border-b border-gray-200 bg-gradient-to-b from-[#E8EFFF]/40 to-white px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B]">Drug Comparison</span>
          <div className="border-l-4 border-[#1B3A6B] pl-5 my-4">
            <h1
              className="text-3xl sm:text-4xl font-black text-black leading-tight"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Ozempic vs. Wegovy vs. Mounjaro vs. Rybelsus
            </h1>
          </div>
          <p className="text-lg text-black font-light max-w-2xl leading-relaxed">
            A complete side-by-side comparison of all major GLP-1 weight loss medications available in Canada - efficacy, cost, dosing, and coverage.
          </p>
          <div className="flex items-center gap-4 mt-5 text-sm text-black">
            <span>Updated May 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>4 medications compared</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Canadian pricing</span>
          </div>
        </div>
      </div>

      {/* Drug Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2
          className="text-xl font-bold text-black mb-6 pb-3 border-b border-gray-200"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Medication Profiles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {drugs.map((d) => (
            <Link
              key={d.name}
              href={d.href}
              className="group block border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all"
            >
              <div className="h-1.5" style={{ background: d.heroColor }} />
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ background: d.heroColor }}
                  >
                    {d.name.charAt(0)}
                  </div>
                  <div>
                    <h3
                      className="text-sm font-bold text-black group-hover:text-[#1B3A6B] transition-colors"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {d.name}
                    </h3>
                    <p className="text-xs text-black">{d.generic} &middot; {d.manufacturer}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-black">Form</span>
                    <span className="font-medium text-black">{d.form}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-black">Frequency</span>
                    <span className="font-medium text-black">{d.frequency}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-black">Weight loss</span>
                    <span className="font-bold" style={{ color: d.heroColor }}>{d.weightLoss}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-black">Monthly cost</span>
                    <span className="font-medium text-black">{d.cost}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-black">Public coverage</span>
                    <span className="font-medium text-black text-right max-w-[130px]">{d.oDbCovered}</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-5 flex-1">
                  {d.keyFacts.map((f) => (
                    <li key={f} className="flex gap-1.5 text-xs text-black leading-snug">
                      <span className="mt-0.5 shrink-0 text-xs" style={{ color: d.heroColor }}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <span
                  className="flex items-center justify-center text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-opacity group-hover:opacity-90"
                  style={{ background: d.heroColor }}
                >
                  {`Full ${d.name} guide →`}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Comparison Table */}
        <h2
          className="text-xl font-bold text-black mb-6 pb-3 border-b border-gray-200"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Side-by-Side Comparison
        </h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="text-white" style={{ background: "#1B3A6B" }}>
                <th className="text-left px-4 py-3 text-xs font-semibold w-40">Feature</th>
                {drugs.map((d) => (
                  <th key={d.name} className="text-left px-4 py-3 text-xs font-semibold">{d.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-xs font-semibold text-black border-b border-gray-200 align-top">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="px-4 py-3 text-xs text-black border-b border-gray-200 align-top">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Which Is Right For You */}
        <h2
          className="text-xl font-bold text-black mb-6 pb-3 border-b border-gray-200"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Which Should You Choose?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            {
              num: 1,
              condition: "I have type 2 diabetes and want public coverage",
              recommendation: "Ozempic (via ODB or provincial plan)",
              reasoning: "Covered in most provinces with LU code. Most cost-effective option if you qualify.",
            },
            {
              num: 2,
              condition: "I want maximum weight loss and cost is secondary",
              recommendation: "Mounjaro 15 mg",
              reasoning: "Highest average weight loss in clinical trials (~21%). Most expensive and no generic yet.",
            },
            {
              num: 3,
              condition: "I want the best weight loss at the most accessible price",
              recommendation: "Wegovy or generic semaglutide",
              reasoning: "Wegovy has a formal weight-management approval. Generic semaglutide (arriving 2025-26) will be dramatically cheaper.",
            },
            {
              num: 4,
              condition: "I have needle phobia and prefer a pill",
              recommendation: "Rybelsus",
              reasoning: "Only approved oral GLP-1. Less weight loss than injectables at current doses, but next-generation higher doses may close the gap.",
            },
          ].map((s) => (
            <div key={s.condition} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white bg-[#1B3A6B]">
                  {s.num}
                </span>
                <div>
                  <p className="text-xs font-semibold text-black uppercase tracking-wider mb-1">If:</p>
                  <p className="text-sm font-semibold text-black mb-2">{s.condition}</p>
                  <p className="text-sm font-bold text-[#1B3A6B] mb-1">&rarr; {s.recommendation}</p>
                  <p className="text-xs text-black leading-relaxed">{s.reasoning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsored Partners */}
        <div className="mb-12">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-black mb-5 flex items-center gap-3 before:flex-1 before:h-px before:bg-gray-200 after:flex-1 after:h-px after:bg-gray-200">
            Recommended Providers
          </p>
          <ProviderCards />
        </div>
      </div>

      <ProvinceGrid />
    </>
  );
}
