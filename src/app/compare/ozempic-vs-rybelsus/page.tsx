import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ozempic vs Rybelsus Canada - Injectable vs Oral Semaglutide Comparison 2025",
  description: "Ozempic (weekly injection) vs Rybelsus (daily pill) - both semaglutide but very different. Compare efficacy, cost, and convenience for Canadian patients.",
  alternates: {
    canonical: `${SITE_URL}/compare/ozempic-vs-rybelsus`,
    languages: { "en-CA": `${SITE_URL}/compare/ozempic-vs-rybelsus` },
  },
};

const toc = [
  { id: "overview",         label: "Overview" },
  { id: "efficacy",         label: "Efficacy Comparison" },
  { id: "comparison-table", label: "Head-to-Head Table" },
  { id: "rybelsus-details", label: "About Rybelsus" },
  { id: "which-to-choose",  label: "Which to Choose" },
  { id: "faq",              label: "FAQ" },
];

const related = [
  { href: "/compare",              emoji: "⚖️", title: "Full Drug Comparison: All 4 GLP-1s",  date: "May 2026" },
  { href: "/semaglutide",          emoji: "💉", title: "Complete Semaglutide Guide",            date: "May 2026" },
  { href: "/oral-glp1",            emoji: "💊", title: "Oral GLP-1: Rybelsus Guide",           date: "May 2026" },
  { href: "/insurance-coverage",   emoji: "🛡️", title: "Insurance Coverage Guide",             date: "May 2026" },
];

export default function OzempicVsRybelsusPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Comparison Guide"
        readTime="5 min read"
        date="May 2026"
        headline="Ozempic vs Rybelsus: The Same Molecule, Injection vs Pill"
        standfirst="Ozempic and Rybelsus both contain semaglutide, but the route of administration changes their efficacy, dosing, and convenience significantly. Here is what Canadian patients need to know."
      />

      <div className="prose-editorial">
        <p>
          Ozempic (semaglutide injection) and Rybelsus (oral semaglutide) are made by the same company, contain the same active molecule, and are both approved for type 2 diabetes management in Canada. However, because the oral tablet has much lower bioavailability than the injection, the two products require very different dosing and produce different clinical outcomes.
        </p>

        <h2 id="overview">Overview</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 not-prose">
          {[
            { label: "Ozempic max dose", value: "2mg",      sub: "Weekly subcutaneous injection" },
            { label: "Rybelsus max dose", value: "14mg",    sub: "Daily oral tablet" },
            { label: "Ozempic weight loss", value: "~10-15%", sub: "SUSTAIN trials" },
            { label: "Rybelsus weight loss", value: "~4-5%", sub: "PIONEER trials (at max dose)" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#1B3A6B]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-gray-900 mt-1">{s.label}</p>
              <p className="text-xs text-gray-700 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="efficacy">Efficacy Comparison</h2>
        <p>
          Ozempic is significantly more effective than Rybelsus for both blood sugar control and weight loss. The primary reason is bioavailability: semaglutide injected subcutaneously reaches the bloodstream with near-complete absorption, while the oral tablet has roughly 1% absolute bioavailability due to degradation in the GI tract.
        </p>
        <p>
          In the PIONEER 2 trial comparing Rybelsus 14mg to Ozempic 1mg directly, Ozempic achieved superior HbA1c reduction (-1.4% vs -1.2%) and greater weight loss (-4.4kg vs -3.3kg). When comparing Ozempic at its maximum 2mg dose, the difference is even larger.
        </p>

        <h2 id="comparison-table">Head-to-Head Table</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ background: "#1B3A6B" }}>
                <th className="text-left px-4 py-3 text-white font-semibold">Feature</th>
                <th className="text-left px-4 py-3 text-white font-semibold">Ozempic</th>
                <th className="text-left px-4 py-3 text-white font-semibold">Rybelsus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ["Active ingredient", "Semaglutide", "Semaglutide"],
                ["Route", "Subcutaneous injection", "Oral tablet"],
                ["Dosing frequency", "Once weekly", "Once daily"],
                ["Approved indication", "Type 2 diabetes", "Type 2 diabetes"],
                ["Doses available", "0.25mg, 0.5mg, 1mg, 2mg", "3mg, 7mg, 14mg"],
                ["Average HbA1c reduction", "-1.5 to -1.8%", "-1.0 to -1.4%"],
                ["Average weight loss", "~5-7kg", "~3-4kg"],
                ["Monthly cost (no coverage)", "~$235-420", "~$180-310"],
                ["Injection required", "Yes", "No"],
                ["Special instructions", "Rotate injection sites", "Fasting required (30 min pre-meal)"],
                ["Public plan coverage", "Yes (with PA, T2D)", "Varies by province"],
              ].map(([feature, ozempic, rybelsus], i) => (
                <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                  <td className="px-4 py-3 text-gray-900">{ozempic}</td>
                  <td className="px-4 py-3 text-gray-900">{rybelsus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FelixInline />

        <h2 id="rybelsus-details">About Rybelsus: The Oral Semaglutide Option</h2>
        <p>
          Rybelsus (oral semaglutide) must be taken on an empty stomach with at most 120mL of water, at least 30 minutes before any food, drink (other than water), or other oral medications. This is because even a small amount of food drastically reduces absorption. This strict fasting requirement is the most common compliance challenge with Rybelsus.
        </p>
        <p>
          Rybelsus is the right choice for patients who have a genuine needle phobia or who cannot self-inject for any reason. For all other patients, the injection produces better results and requires less daily routine disruption.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Rybelsus Fasting Requirement</p>
          <p className="text-sm text-gray-900">
            Rybelsus must be taken first thing in the morning with a maximum 120mL of water, at least 30 minutes before any food, beverage (other than plain water), or other medications. Taking Rybelsus with food reduces drug exposure by up to 75%.
          </p>
        </div>

        <h2 id="which-to-choose">Which to Choose</h2>
        <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
          <div className="rounded-xl border-2 border-[#1B3A6B] bg-[#EEF3FF] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1B3A6B] mb-2">Choose Ozempic if:</p>
            <ul className="space-y-2 text-sm text-gray-900">
              <li>Maximum efficacy for T2D or weight management is your priority</li>
              <li>You are comfortable with weekly self-injection</li>
              <li>Your provincial drug plan covers Ozempic</li>
              <li>You want the stronger weight loss effect</li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-gray-300 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Choose Rybelsus if:</p>
            <ul className="space-y-2 text-sm text-gray-900">
              <li>You have needle phobia or cannot self-inject</li>
              <li>You can reliably take a daily fasting pill</li>
              <li>Your insurance covers Rybelsus but not Ozempic</li>
              <li>Moderate T2D improvement is sufficient for your goals</li>
            </ul>
          </div>
        </div>

        <h2 id="faq">FAQ</h2>

        <h3>Is the pill as effective as the injection?</h3>
        <p>No. Rybelsus produces less HbA1c reduction and less weight loss than Ozempic. This is due to lower bioavailability with oral administration. Ozempic is the preferred option for most patients when injection is acceptable.</p>

        <h3>Can I switch from Rybelsus to Ozempic?</h3>
        <p>Yes. If you start on Rybelsus and want to switch to Ozempic, your physician can transition you. There is no specific washout period required, though the starting dose and titration of Ozempic should follow standard protocols.</p>

        <h3>Is there a generic version of Rybelsus?</h3>
        <p>No generic oral semaglutide is available in Canada as of 2025. Generic injectable semaglutide (Plosbrio and Poviztra) is available and significantly cheaper than brand-name Ozempic. See our <Link href="/generic-semaglutide">generic semaglutide guide</Link>.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-700 leading-relaxed">
          Drug pricing and formulary listings change periodically. This information reflects the situation as of May 2026. Consult your physician and pharmacist for current coverage and pricing.
        </div>
      </div>
    </ArticleLayout>
  );
}
