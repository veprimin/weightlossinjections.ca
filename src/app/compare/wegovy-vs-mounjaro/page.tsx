import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wegovy vs Mounjaro Canada - Weight Loss Efficacy & Cost Comparison 2026",
  description:
    "Wegovy (semaglutide 2.4mg) vs Mounjaro (tirzepatide 15mg) for weight management in Canada - efficacy, cost, and which to choose.",
  alternates: {
    canonical: `${SITE_URL}/compare/wegovy-vs-mounjaro`,
    languages: { "en-CA": `${SITE_URL}/compare/wegovy-vs-mounjaro` },
  },
};

const toc = [
  { id: "both-for-weight",     label: "Both Approved for Weight Management" },
  { id: "efficacy-comparison", label: "Efficacy: What the Trials Show" },
  { id: "head-to-head",        label: "Head-to-Head Comparison Table" },
  { id: "cost-generics",       label: "Cost and Generic Options" },
  { id: "coverage",            label: "Insurance Coverage" },
  { id: "how-to-choose",       label: "How to Choose" },
  { id: "faq",                 label: "FAQ" },
];

const related = [
  { href: "/compare",     emoji: "⚖️", title: "Compare All GLP-1 Medications",        date: "May 2026" },
  { href: "/tirzepatide", emoji: "⚗️", title: "Mounjaro (Tirzepatide) Complete Guide", date: "May 2026" },
  { href: "/semaglutide", emoji: "💉", title: "Semaglutide Complete Guide",            date: "May 2026" },
  { href: "/cost",        emoji: "💰", title: "Province-by-Province Cost Breakdown",   date: "May 2026" },
];

export default function WegovyVsMounjaroPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Comparison Guide"
        readTime="5 min read"
        date="May 2026"
        headline="Wegovy vs. Mounjaro in Canada: Which Delivers More Weight Loss?"
        standfirst="Wegovy (semaglutide 2.4 mg) and Mounjaro (tirzepatide 15 mg) are the two most powerful weight-loss drugs available in Canada. Mounjaro wins on efficacy; cost and generic access favour semaglutide."
      />

      <div className="prose-editorial">
        <p>
          When it comes to weight management specifically - not just diabetes treatment - Wegovy and Mounjaro sit at the top of the class. Both are weekly injectables approved (or widely used) for chronic obesity management. But they work through different mechanisms, produce different amounts of weight loss, and come at different price points. Understanding those differences helps you make the right choice for your situation.
        </p>

        <h2 id="both-for-weight">Both Approved for Weight Management - With an Asterisk</h2>
        <p>
          Wegovy received Health Canada approval in November 2021 for chronic weight management in adults with BMI 30 or higher, or BMI 27 or higher with at least one weight-related comorbidity such as hypertension, type 2 diabetes, or obstructive sleep apnea.
        </p>
        <p>
          Mounjaro (tirzepatide) was approved by Health Canada in 2023 for type 2 diabetes. In the United States, Eli Lilly markets tirzepatide specifically for obesity under the brand name Zepbound - but as of mid-2025, Zepbound had not received Health Canada approval for an obesity indication. That said, Mounjaro is widely prescribed off-label by Canadian physicians for weight management, and its clinical evidence for weight loss is extensive.
        </p>
        <p>
          For practical purposes, both drugs are accessible for weight loss in Canada - Wegovy on-label, Mounjaro off-label pending a formal obesity indication.
        </p>

        <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          {[
            { label: "Wegovy weight loss",    value: "~15-17%" },
            { label: "Mounjaro weight loss",  value: "~20-22%" },
            { label: "Wegovy monthly cost",   value: "$400-430" },
            { label: "Mounjaro monthly cost", value: "$490-610" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-[#1B3A6B]" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{stat.value}</p>
              <p className="text-xs text-black mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 id="efficacy-comparison">Efficacy: What the Trials Show</h2>
        <p>
          Both drugs produce substantially more weight loss than any previous medication class. The question is how much more Mounjaro delivers over Wegovy.
        </p>
        <p>
          <strong>Wegovy (STEP 1 trial):</strong> Non-diabetic adults on semaglutide 2.4 mg for 68 weeks lost an average of 14.9% of body weight. Approximately one in three participants lost more than 20% of body weight - a historically remarkable outcome for a medication.
        </p>
        <p>
          <strong>Mounjaro at 15 mg (SURMOUNT-1 trial):</strong> Non-diabetic adults on tirzepatide 15 mg for 72 weeks lost an average of 20.9% of body weight. Nearly half (47%) of participants lost 20% or more. The 10 mg dose produced 19.5% average weight loss - still comfortably ahead of Wegovy's 2.4 mg performance.
        </p>
        <p>
          The advantage Mounjaro holds over Wegovy - approximately 5-6 percentage points of body weight - is meaningful in clinical terms. For a person starting at 110 kg, that is the difference between losing roughly 17 kg (Wegovy) and 23 kg (Mounjaro).
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">The Efficacy Gap</p>
          <p className="text-sm text-black leading-relaxed">
            Both drugs represent a step change over older weight-loss medications. Mounjaro's advantage of roughly 5-6 percentage points of body weight over Wegovy is clinically meaningful - but Wegovy remains highly effective. A patient who responds well to semaglutide may achieve outcomes that rival average tirzepatide results.
          </p>
        </div>

        <h2 id="head-to-head">Head-to-Head Comparison</h2>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="text-white" style={{ background: "#1B3A6B" }}>
                <th className="text-left px-4 py-3 text-xs font-semibold w-44">Feature</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Wegovy</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Mounjaro</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Drug class",                   "GLP-1 receptor agonist",         "Dual GIP + GLP-1 agonist"],
                ["Active ingredient",            "Semaglutide 2.4 mg",             "Tirzepatide 2.5-15 mg"],
                ["HC obesity approval",          "Yes (2021)",                     "Not yet (T2D only; Zepbound pending)"],
                ["Average weight loss",          "~15-17%",                        "~20-22%"],
                ["% losing 20%+ body weight",    "~32%",                           "~47% (at 15 mg)"],
                ["Titration period",             "16-20 weeks to 2.4 mg",          "8-20 weeks to 15 mg"],
                ["Monthly cost",                 "~$400-430",                      "~$490-610"],
                ["Generic available?",           "Yes (Plosbrio, Poviztra - 2025)","No"],
                ["Provincial plan coverage",     "Not covered for weight mgmt",    "Not covered for weight mgmt (off-label)"],
                ["Private insurance",            "Some plans; variable",           "Some plans; variable"],
                ["Nausea/GI side effects",       "Common; improves with titration","Similar; slightly better tolerated per some data"],
              ].map(([feature, wegovy, mounjaro], i) => (
                <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-xs font-semibold text-black border-b border-gray-200 align-top">{feature}</td>
                  <td className="px-4 py-3 text-xs text-black border-b border-gray-200 align-top">{wegovy}</td>
                  <td className="px-4 py-3 text-xs text-black border-b border-gray-200 align-top">{mounjaro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FelixInline />

        <h2 id="cost-generics">Cost and Generic Options</h2>
        <p>
          Neither Wegovy nor Mounjaro is cheap, but the semaglutide class has a significant advantage: generics. Health Canada approved generic semaglutide in 2025, with products from Apotex (a Canadian company) and Dr. Reddy's entering the market. These generics are interchangeable with Ozempic at equivalent doses and are expected to be substantially cheaper than both Wegovy and Mounjaro.
        </p>
        <p>
          Generic semaglutide at Ozempic-equivalent doses (up to 2 mg/week) is now available. Generic versions equivalent to the full 2.4 mg Wegovy dose may follow as manufacturers seek additional approvals. No generic tirzepatide exists, and given Mounjaro's newer approval timeline, one is not expected before 2027-2028 at the earliest.
        </p>
        <p>
          If out-of-pocket cost is a primary concern, the calculus is straightforward: generic semaglutide at a fraction of brand-name prices delivers most of the weight-loss benefit of Wegovy, and well above that of older medications. Mounjaro's additional efficacy comes at a significant cost premium with no generic offset.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Generic Consideration</p>
          <p className="text-sm text-black leading-relaxed">
            Generic semaglutide (approved 2025) will likely be 45-90% cheaper than brand-name Wegovy. For budget-conscious patients, generic semaglutide plus the modest additional efficacy gap may represent better value than paying full price for Mounjaro. Your physician and pharmacist can advise on current generic pricing in your province.
          </p>
        </div>

        <h2 id="coverage">Insurance Coverage</h2>
        <p>
          On coverage for obesity/weight management, these two drugs are in a similar position: neither is reliably covered by Canadian public drug plans for weight management alone. Some private employer benefit plans have added both Wegovy and Mounjaro to their formularies, but coverage is inconsistent and often subject to prior authorization, BMI thresholds, and annual dollar maximums.
        </p>
        <p>
          The one structural difference: Wegovy has an on-label weight-management indication in Canada, which can be advantageous when submitting prior authorization to private insurers. Mounjaro being prescribed off-label for obesity (since it currently holds only a T2D indication) can complicate insurance filings. Some private plans explicitly require on-label use.
        </p>
        <p>
          See our <Link href="/insurance-coverage">insurance coverage guide</Link> for province-by-province plan details.
        </p>

        <h2 id="how-to-choose">How to Choose</h2>
        <p>Three decision scenarios cover most patients:</p>
        <ul>
          <li>
            <strong>If maximum weight loss is the priority and cost is manageable:</strong> Mounjaro 15 mg produces meaningfully more weight loss than Wegovy. If your insurer covers it, or if you can manage the out-of-pocket cost, tirzepatide's dual mechanism offers the highest probability of significant weight reduction.
          </li>
          <li>
            <strong>If you want an on-label prescription and strong clinical backing:</strong> Wegovy is Health Canada-approved specifically for obesity. Its SELECT trial data also shows cardiovascular risk reduction. For patients without T2D who want a well-documented, on-label treatment, Wegovy is appropriate.
          </li>
          <li>
            <strong>If cost is the primary consideration:</strong> Generic semaglutide beats both brand-name products on price while delivering weight loss largely equivalent to brand Wegovy. Discuss generic semaglutide availability with your physician or pharmacist.
          </li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Which drug has fewer side effects?</h3>
        <p>
          Both Wegovy and Mounjaro produce similar GI side effects: nausea, vomiting, diarrhea, and constipation are the most common, and both are managed through slow dose titration. Some studies suggest tirzepatide may be marginally better tolerated, possibly because the GIP component buffers some of the pure GLP-1-driven nausea - but the difference is modest. Individual responses vary considerably.
        </p>

        <h3>Can I switch from Wegovy to Mounjaro if I plateau?</h3>
        <p>
          Yes, with physician guidance. Patients who respond well initially to semaglutide but plateau at 12-18 months sometimes switch to tirzepatide and see further weight loss, presumably because the additional GIP mechanism provides a new stimulus. However, this is not guaranteed - some patients plateau on tirzepatide too. Your physician can assess whether a switch is clinically appropriate.
        </p>

        <h3>Is Zepbound the same as Mounjaro?</h3>
        <p>
          Zepbound and Mounjaro both contain tirzepatide - they are the same molecule. Zepbound is the brand name Eli Lilly uses in markets where tirzepatide has been specifically approved for obesity treatment (primarily the United States). In Canada as of mid-2025, only Mounjaro (the T2D brand) is approved. Canadian physicians prescribe Mounjaro off-label for obesity while an obesity indication through a separate submission is anticipated.
        </p>

        <h3>What if I plateau on Wegovy after a year?</h3>
        <p>
          Weight loss plateaus on GLP-1 medications are common at 12-18 months as the body adapts. Options include: dose optimization (confirming you are at the full 2.4 mg dose), adding lifestyle interventions, switching to tirzepatide for its dual mechanism, or discussing combination approaches with your physician. Plateaus are not a reason to stop medication - most people maintain reduced weight on continued therapy even without additional loss.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          <strong>Medical disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Drug costs, coverage criteria, and approval status reflect information available as of May 2026. Always consult a licensed Canadian physician or pharmacist before starting, switching, or stopping any prescription medication.
        </div>
      </div>
    </ArticleLayout>
  );
}
