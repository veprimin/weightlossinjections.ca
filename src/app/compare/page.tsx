import type { Metadata } from "next";
import Link from "next/link";
import { FelixBanner } from "@/components/FelixAd";
import ProvinceGrid from "@/components/ProvinceGrid";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ozempic vs Wegovy vs Mounjaro vs Rybelsus — Compare Weight Loss Injections Canada",
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
    approvalCA: "2018 — Type 2 diabetes",
    weightLoss: "~9–13%",
    cost: "$200–$450/mo",
    oDbCovered: "✅ For T2D (LU code)",
    heroColor: "#0F6E56",
    emoji: "💉",
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
    approvalCA: "2021 — Chronic weight management",
    weightLoss: "~15%",
    cost: "$385–$430/mo",
    oDbCovered: "❌ Not listed for weight mgmt",
    heroColor: "#1D9E75",
    emoji: "⚖️",
    href: "/semaglutide",
    keyFacts: [
      "Specifically approved for weight management (BMI ≥30 or ≥27 + comorbidity)",
      "Higher dose than Ozempic → greater weight loss",
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
    approvalCA: "2023 — Type 2 diabetes",
    weightLoss: "~15–21%",
    cost: "$400–$620+/mo",
    oDbCovered: "⚠️ Limited — T2D with auth.",
    heroColor: "#0F766E",
    emoji: "⚗️",
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
    approvalCA: "2020 — Type 2 diabetes",
    weightLoss: "~4–5%",
    cost: "$200–$350/mo",
    oDbCovered: "✅ For T2D in several provinces",
    heroColor: "#374151",
    emoji: "💊",
    href: "/oral-glp1",
    keyFacts: [
      "World's first approved oral GLP-1 receptor agonist",
      "No needles — daily tablet",
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
  { label: "Generic available?", values: ["✅ Yes (2025)", "✅ Yes (2025)", "❌ No", "❌ No"] },
  { label: "Provincial formulary (diabetes)", values: ["✅ Most provinces", "N/A", "⚠️ Limited", "✅ Several provinces"] },
  { label: "Off-label weight management", values: ["✅ Common", "N/A (on-label)", "✅ Common", "✅ Some use"] },
  { label: "Titration period",   values: ["4–12 weeks", "16–20 weeks", "8–20 weeks", "4–8 weeks"] },
  { label: "GI side effects",    values: ["Common (mild)", "Common (mild)", "Common (mild)", "Common (mild–mod)"] },
];

export default function ComparePage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-900 text-white px-4 sm:px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <span className="bg-[#E1F5EE] text-[#0F6E56] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">
            Drug Comparison
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            Ozempic vs. Wegovy vs. Mounjaro vs. Rybelsus
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
            A complete side-by-side comparison of all major GLP-1 weight loss medications available in Canada — efficacy, cost, dosing, and coverage.
          </p>
        </div>
      </div>

      {/* Drug Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl font-bold text-gray-900 mb-8 border-b-2 border-gray-900 pb-3" style={{ fontFamily: "Georgia, serif" }}>
          Medication Profiles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {drugs.map((d) => (
            <div key={d.name} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-28 flex items-center justify-center relative" style={{ background: d.heroColor }}>
                <span className="text-5xl">{d.emoji}</span>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Georgia, serif" }}>{d.name}</h3>
                  <p className="text-xs text-gray-400">{d.generic} · {d.manufacturer}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Form</span>
                    <span className="font-medium text-gray-800">{d.form}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Frequency</span>
                    <span className="font-medium text-gray-800">{d.frequency}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Weight loss</span>
                    <span className="font-bold text-[#0F6E56]">{d.weightLoss}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Monthly cost</span>
                    <span className="font-medium text-gray-800">{d.cost}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Public coverage</span>
                    <span className="font-medium text-gray-800 text-right max-w-[130px]">{d.oDbCovered}</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-4">
                  {d.keyFacts.map((f) => (
                    <li key={f} className="flex gap-1.5 text-xs text-gray-600 leading-snug">
                      <span className="text-[#1D9E75] shrink-0 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={d.href}
                  className="flex items-center justify-center gap-1 text-[#0F6E56] border border-[#1D9E75] text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#E1F5EE] transition-colors"
                >
                  Full {d.name} guide →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-3" style={{ fontFamily: "Georgia, serif" }}>
          Side-by-Side Comparison
        </h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left px-4 py-3 text-xs font-semibold w-40">Feature</th>
                {drugs.map((d) => (
                  <th key={d.name} className="text-left px-4 py-3 text-xs font-semibold">{d.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-xs font-semibold text-gray-700 border-b border-gray-200 align-top">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="px-4 py-3 text-xs text-gray-700 border-b border-gray-200 align-top">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Which Is Right For You */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-3" style={{ fontFamily: "Georgia, serif" }}>
          Which Should You Choose?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            {
              condition: "I have type 2 diabetes and want public coverage",
              recommendation: "Ozempic (via ODB or provincial plan)",
              reasoning: "Covered in most provinces with LU code. Most cost-effective option if you qualify.",
              emoji: "🏥",
            },
            {
              condition: "I want maximum weight loss and cost is secondary",
              recommendation: "Mounjaro 15 mg",
              reasoning: "Highest average weight loss in clinical trials (~21%). Most expensive and no generic yet.",
              emoji: "📈",
            },
            {
              condition: "I want the best weight loss at the most accessible price",
              recommendation: "Wegovy or generic semaglutide",
              reasoning: "Wegovy has a formal weight-management approval. Generic semaglutide (arriving 2025–26) will be dramatically cheaper.",
              emoji: "⚖️",
            },
            {
              condition: "I have needle phobia and prefer a pill",
              recommendation: "Rybelsus",
              reasoning: "Only approved oral GLP-1. Less weight loss than injectables at current doses, but next-generation higher doses may close the gap.",
              emoji: "💊",
            },
          ].map((s) => (
            <div key={s.condition} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="flex gap-3 items-start">
                <div className="text-2xl shrink-0">{s.emoji}</div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">If:</p>
                  <p className="text-sm font-semibold text-gray-900 mb-2">{s.condition}</p>
                  <p className="text-sm font-bold text-[#0F6E56] mb-1">→ {s.recommendation}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.reasoning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Felix Banner */}
        <div className="mb-4">
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-5 flex items-center gap-3 before:flex-1 before:h-px before:bg-gray-200 after:flex-1 after:h-px after:bg-gray-200">
            Sponsored Partner
          </p>
          <FelixBanner />
        </div>

        <p className="text-xs text-gray-400 text-center mt-4 mb-12">
          Sponsored by Felix Health. This content contains affiliate links. A licensed provider will help determine which medication is right for you.
        </p>
      </div>

      <ProvinceGrid />
    </>
  );
}
