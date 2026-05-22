import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ozempic vs Wegovy Canada - Same Molecule, Different Uses & Coverage 2026",
  description:
    "Ozempic and Wegovy are both semaglutide - but their indications, doses, and insurance coverage differ significantly. Complete Canadian comparison guide.",
  alternates: {
    canonical: `${SITE_URL}/compare/ozempic-vs-wegovy`,
    languages: { "en-CA": `${SITE_URL}/compare/ozempic-vs-wegovy` },
  },
};

const toc = [
  { id: "same-molecule",   label: "Same Molecule, Different Products" },
  { id: "key-differences", label: "Key Differences at a Glance" },
  { id: "comparison-table", label: "Head-to-Head Comparison Table" },
  { id: "who-chooses",     label: "Who Should Choose Which" },
  { id: "insurance",       label: "Insurance Coverage Reality" },
  { id: "off-label",       label: "Off-Label Prescribing" },
  { id: "faq",             label: "Frequently Asked Questions" },
];

const related = [
  { href: "/compare",             emoji: "⚖️", title: "Compare All Weight Loss Injections",  date: "May 2026" },
  { href: "/semaglutide",         emoji: "💉", title: "Complete Semaglutide Guide",           date: "May 2026" },
  { href: "/insurance-coverage",  emoji: "🛡️", title: "Does Insurance Cover Ozempic?",        date: "May 2026" },
  { href: "/cost",                emoji: "💰", title: "Province-by-Province Cost Breakdown",   date: "May 2026" },
];

export default function OzempicVsWegovyPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Comparison Guide"
        readTime="5 min read"
        date="May 2026"
        headline="Ozempic vs Wegovy: Same Molecule, Very Different Coverage"
        standfirst="Both drugs contain semaglutide. The difference - indication, dose ceiling, and insurance eligibility - matters enormously for Canadian patients."
      />

      <div className="prose-editorial">

        <h2 id="same-molecule">Same Molecule, Two Very Different Products</h2>
        <p>
          Ozempic and Wegovy share an identical active ingredient: semaglutide. Novo Nordisk developed Ozempic first as a type 2 diabetes (T2D) medication, then brought Wegovy to market at a higher maintenance dose specifically for chronic weight management. Because the underlying molecule is identical, the mechanism, side-effect profile, and long-term safety data largely overlap - but how they are covered, priced, and prescribed in Canada diverges considerably.
        </p>

        <h2 id="key-differences">Key Differences at a Glance</h2>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 my-6">
          {[
            { label: "Max dose - Ozempic", value: "2 mg/week" },
            { label: "Max dose - Wegovy",  value: "2.4 mg/week" },
            { label: "Weight loss (Wegovy)", value: "~15%" },
            { label: "Ozempic monthly cost", value: "$235-420" },
            { label: "Wegovy monthly cost",  value: "$400-430" },
            { label: "Insurance (T2D)", value: "Ozempic covered" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <span className="block text-2xl font-black text-[#1B3A6B] mb-1" style={{ fontFamily: "Georgia, serif" }}>{s.value}</span>
              <span className="block text-xs text-black font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        <p>
          The 0.4 mg dose difference between the two products sounds small. In clinical practice it translates to meaningfully greater weight loss - trials comparing the 2.4 mg Wegovy dose against the 1 mg or 2 mg Ozempic doses consistently show better outcomes with the higher dose. However, Wegovy is almost never covered by insurance in Canada, whereas Ozempic is reimbursed by most provincial formularies and private plans when prescribed for T2D.
        </p>

        <h2 id="comparison-table">Head-to-Head Comparison Table</h2>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="text-white" style={{ background: "#1B3A6B" }}>
                <th className="text-left px-4 py-3 text-xs font-semibold w-44">Feature</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Ozempic</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Wegovy</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Active ingredient",      "Semaglutide",                    "Semaglutide"],
                ["Maximum dose",           "2 mg/week",                      "2.4 mg/week"],
                ["Health Canada indication","Type 2 diabetes (2018)",         "Chronic weight management (2021)"],
                ["Pen device",             "FlexTouch multi-dose pen",       "Single-use prefilled pen"],
                ["Titration schedule",     "4-12 weeks to maintenance",      "16-20 weeks to 2.4 mg"],
                ["Average weight loss",    "~9-13%",                         "~15-17%"],
                ["Insurance - T2D",        "Covered most provinces/plans",   "Not applicable"],
                ["Insurance - obesity",    "Off-label; rarely covered",      "Rarely covered"],
                ["Monthly cost (no coverage)", "$235-420",                   "$400-430"],
                ["Generic available?",     "Yes (Plosbrio, Poviztra 2025)",  "Yes (same generics apply)"],
              ].map(([feature, ozempic, wegovy], i) => (
                <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-xs font-semibold text-black border-b border-gray-200">{feature}</td>
                  <td className="px-4 py-3 text-xs text-black border-b border-gray-200">{ozempic}</td>
                  <td className="px-4 py-3 text-xs text-black border-b border-gray-200">{wegovy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FelixInline />

        <h2 id="who-chooses">Who Should Choose Which</h2>

        <h3>Choose Ozempic if:</h3>
        <ul>
          <li>You have a type 2 diabetes diagnosis and want public or private insurance coverage</li>
          <li>You are starting semaglutide for the first time and want to titrate cautiously</li>
          <li>Cost is a primary concern - Ozempic with coverage can reduce out-of-pocket costs to near zero</li>
          <li>Your physician recommends beginning at lower doses before deciding whether to escalate</li>
        </ul>

        <h3>Choose Wegovy if:</h3>
        <ul>
          <li>You are pursuing obesity treatment without a T2D diagnosis and want the formally approved weight management indication</li>
          <li>You are willing and able to pay out-of-pocket and want the highest available semaglutide dose</li>
          <li>Your BMI is 30 or higher (or 27 or higher with a weight-related comorbidity) and you meet Wegovy's eligibility criteria</li>
          <li>You have already been on Ozempic and want to escalate to 2.4 mg with a product specifically indicated for that dose</li>
        </ul>

        <h2 id="insurance">The Insurance Coverage Reality</h2>
        <p>
          Coverage is where the two products diverge most sharply. Ozempic carries a T2D indication that triggers reimbursement under Ontario's ODB, BC PharmaCare, Alberta Blue Cross, and most private benefit plans - typically with a limited-use code requiring an HbA1c above a threshold. Wegovy has a weight management indication, but no Canadian public drug plan lists it for that purpose as of 2025. Some private insurers do cover Wegovy with prior authorization and documentation of BMI thresholds, but approval rates are inconsistent.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Coverage Note</p>
          <p className="text-sm text-black leading-relaxed">
            If you have T2D, Ozempic is almost always the better financial choice. If you do not have T2D, ask your insurer specifically whether Wegovy is listed under your drug plan before assuming it will be covered. See our full <Link href="/insurance-coverage" className="underline text-[#1B3A6B]">insurance coverage guide</Link> for province-by-province details.
          </p>
        </div>

        <h2 id="off-label">Off-Label Ozempic for Weight Loss</h2>
        <p>
          Many Canadian physicians prescribe Ozempic off-label for weight management in patients without T2D. Because the molecule is identical to Wegovy, the pharmacological effect at equivalent doses is the same. However, Ozempic's maximum approved dose is 2 mg - lower than Wegovy's 2.4 mg ceiling. Patients who tolerate 2 mg well and want to escalate further would need to switch to Wegovy to access the additional 0.4 mg.
        </p>
        <p>
          From a cost perspective, off-label Ozempic is often cheaper than Wegovy even without insurance, particularly now that generic semaglutide products (Plosbrio, Poviztra) are entering the Canadian market and are interchangeable with Ozempic.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Can I switch from Ozempic to Wegovy?</h3>
        <p>
          Yes. Your physician can write a new prescription for Wegovy. If you are currently at 1 mg or 2 mg Ozempic, you would typically continue at an equivalent Wegovy dose rather than restarting the full titration. Always discuss with your prescriber before switching.
        </p>

        <h3>Are Ozempic and Wegovy the same drug?</h3>
        <p>
          They contain the same active molecule - semaglutide - but they are approved as separate products with different indications and dose ceilings. Novo Nordisk filed separate drug submissions with Health Canada, and they have separate drug identification numbers (DINs).
        </p>

        <h3>Why is Wegovy more expensive than Ozempic?</h3>
        <p>
          Wegovy's higher list price reflects its weight management positioning and the fact that it competes in a market where patients often pay out-of-pocket. Ozempic's price is also anchored by provincial reimbursement negotiations tied to its diabetes indication. As generic semaglutide products become widely available, both brand-name products are expected to face pricing pressure.
        </p>

        <h3>Will generic semaglutide bring costs down?</h3>
        <p>
          Yes. Generic semaglutide products approved in Canada in 2025 are interchangeable with Ozempic at equivalent doses. Wegovy-equivalent dosing (2.4 mg) may follow as generic manufacturers seek additional dose approvals. See our <Link href="/cost" className="underline text-[#1B3A6B]">cost guide</Link> for current pricing across provinces.
        </p>

      </div>

      <div className="not-prose bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Medical Disclaimer</p>
        <p className="text-sm text-black leading-relaxed">
          This article is for informational purposes only and does not constitute medical advice. Drug availability, coverage criteria, and pricing change frequently. Always consult a licensed Canadian physician or pharmacist before starting, switching, or stopping any prescription medication. Felix Health (sponsored) can connect you with a licensed provider for an online assessment.
        </p>
      </div>
    </ArticleLayout>
  );
}
