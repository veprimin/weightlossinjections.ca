import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ozempic vs Mounjaro Canada - Which GLP-1 Works Better for Weight Loss? 2025",
  description:
    "Mounjaro (tirzepatide) vs Ozempic (semaglutide) - we compare efficacy, cost, insurance coverage, and availability in Canada.",
  alternates: {
    canonical: `${SITE_URL}/compare/ozempic-vs-mounjaro`,
    languages: { "en-CA": `${SITE_URL}/compare/ozempic-vs-mounjaro` },
  },
};

const toc = [
  { id: "different-molecules",  label: "Different Molecules Explained" },
  { id: "efficacy",             label: "Weight Loss Efficacy" },
  { id: "head-to-head",         label: "Head-to-Head Comparison Table" },
  { id: "cost-coverage",        label: "Cost and Coverage" },
  { id: "who-wins",             label: "Category Winners" },
  { id: "how-to-choose",        label: "How to Choose" },
  { id: "faq",                  label: "FAQ" },
];

const related = [
  { href: "/compare",      emoji: "⚖️", title: "Compare All GLP-1 Medications",       date: "May 2026" },
  { href: "/tirzepatide",  emoji: "⚗️", title: "Mounjaro (Tirzepatide) Complete Guide", date: "May 2026" },
  { href: "/semaglutide",  emoji: "💉", title: "Semaglutide Complete Guide",            date: "May 2026" },
  { href: "/cost",         emoji: "💰", title: "Province-by-Province Cost Breakdown",   date: "May 2026" },
];

export default function OzempicVsMounjaroPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Comparison Guide"
        readTime="5 min read"
        date="May 2026"
        headline="Ozempic vs. Mounjaro: Which GLP-1 Works Better for Weight Loss in Canada?"
        standfirst="Ozempic (semaglutide) and Mounjaro (tirzepatide) are different molecules with different mechanisms. Mounjaro wins on weight loss; Ozempic wins on cost and coverage."
      />

      <div className="prose-editorial">
        <p>
          Ozempic and Mounjaro are both injectable GLP-1 medications prescribed for type 2 diabetes and weight management, but they are not the same drug. Ozempic contains semaglutide, a GLP-1 receptor agonist. Mounjaro contains tirzepatide, a dual agonist that activates both the GLP-1 and GIP (glucose-dependent insulinotropic polypeptide) receptors simultaneously. That dual mechanism is why Mounjaro consistently outperforms Ozempic on weight loss in clinical trials - and why it costs more.
        </p>

        <h2 id="different-molecules">Different Molecules, Different Mechanisms</h2>
        <p>
          GLP-1 receptor agonists work by mimicking the gut hormone GLP-1, which reduces appetite, slows gastric emptying, and regulates blood sugar. Semaglutide (Ozempic) acts exclusively on the GLP-1 receptor.
        </p>
        <p>
          Tirzepatide (Mounjaro) adds a second mechanism: it also activates the GIP receptor. GIP is another incretin hormone involved in fat metabolism and insulin secretion. The combination appears to produce synergistic effects on both glucose control and appetite suppression - explaining why tirzepatide achieves greater weight loss than any single-agonist GLP-1 drug at equivalent points in treatment.
        </p>

        <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          {[
            { label: "Ozempic weight loss",   value: "~9-13%" },
            { label: "Mounjaro weight loss",  value: "~20-22%" },
            { label: "Ozempic monthly cost",  value: "$235-420" },
            { label: "Mounjaro monthly cost", value: "$490-610" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-[#1B3A6B]" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{stat.value}</p>
              <p className="text-xs text-gray-700 mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 id="efficacy">Weight Loss Efficacy: Trial Evidence</h2>
        <p>
          The gap in weight loss between these two drugs is clinically meaningful, not just statistical noise:
        </p>
        <ul>
          <li><strong>SUSTAIN-1 through SUSTAIN-6 (Ozempic):</strong> Participants on semaglutide lost an average of 9-13% of body weight. In STEP 1, non-diabetic adults on the Wegovy dose (2.4 mg) lost approximately 14.9%.</li>
          <li><strong>SURMOUNT-1 (Mounjaro 15 mg):</strong> Non-diabetic participants lost an average of 20.9% of body weight over 72 weeks. Approximately 47% of participants lost 20% or more - a threshold that was historically considered achievable only with bariatric surgery.</li>
          <li><strong>SURPASS-2 direct comparison:</strong> Tirzepatide 15 mg was directly compared to semaglutide 1 mg (the most common Ozempic dose) and produced significantly greater HbA1c reduction and weight loss at every dose level tested.</li>
        </ul>
        <p>
          The weight loss advantage of Mounjaro over Ozempic ranges from roughly 5 to 10 percentage points of body weight depending on the doses compared. For a 100 kg person, that is a difference of 5-10 kg of additional weight loss.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Trial Highlight</p>
          <p className="text-sm text-gray-900 leading-relaxed">
            In SURMOUNT-1, participants on tirzepatide 15 mg lost an average of 20.9% of body weight - comparable to outcomes historically associated with bariatric surgery. No other approved weekly injectable had achieved this before.
          </p>
        </div>

        <h2 id="head-to-head">Head-to-Head Comparison</h2>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="text-white" style={{ background: "#1B3A6B" }}>
                <th className="text-left px-4 py-3 text-xs font-semibold w-44">Feature</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Ozempic</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Mounjaro</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Drug class",              "GLP-1 receptor agonist",          "Dual GIP + GLP-1 agonist"],
                ["Active ingredient",       "Semaglutide",                     "Tirzepatide"],
                ["Dose range",              "0.5 mg - 2 mg/week",              "2.5 mg - 15 mg/week"],
                ["Health Canada indication","Type 2 diabetes (2018)",           "Type 2 diabetes (2023)"],
                ["Average weight loss",     "~9-13%",                          "~20-22%"],
                ["% losing 20%+ body wt",   "~10-15%",                         "~47% (at 15 mg)"],
                ["Provincial drug plan",    "Covered most provinces (T2D)",    "Limited; authorization required"],
                ["Private insurance",       "Usually covered for T2D",         "Variable by plan"],
                ["Monthly cost",            "~$235-420",                       "~$490-610"],
                ["Generic available?",      "Yes (2025)",                      "No"],
                ["Nausea/GI tolerance",     "Common; improves with titration", "Similar; may be slightly better"],
                ["Titration period",        "4-12 weeks",                      "8-20 weeks"],
                ["Availability",            "Widely stocked nationally",       "Occasional shortages reported"],
              ].map(([feature, ozempic, mounjaro], i) => (
                <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-xs font-semibold text-gray-700 border-b border-gray-200 align-top">{feature}</td>
                  <td className="px-4 py-3 text-xs text-gray-700 border-b border-gray-200 align-top">{ozempic}</td>
                  <td className="px-4 py-3 text-xs text-gray-700 border-b border-gray-200 align-top">{mounjaro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FelixInline />

        <h2 id="cost-coverage">Cost and Coverage in Canada</h2>
        <p>
          Cost and insurance are where Ozempic has a clear structural advantage over Mounjaro in Canada.
        </p>
        <p>
          <strong>Ozempic</strong> is listed on most provincial drug formularies for type 2 diabetes, typically requiring special authorization with an elevated HbA1c and documented inadequate response to metformin. For qualifying T2D patients, this can bring monthly costs close to zero. Private insurance plans reliably cover it for T2D.
        </p>
        <p>
          <strong>Mounjaro</strong> was approved by Health Canada in 2023 for type 2 diabetes, but formulary listing varies considerably by province. Some provincial plans have added it with prior authorization requirements; others have not. Private plans cover it variably, and premiums and co-pays can be substantial given its higher list price. No generic tirzepatide exists as of mid-2025.
        </p>
        <p>
          Without insurance, Mounjaro costs roughly $250-200 more per month than Ozempic, depending on dose. Over a year of treatment, the cost differential can reach $2,400-3,000.
        </p>

        <h2 id="who-wins">Category Winners</h2>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {[
            { category: "Weight loss efficacy", winner: "Mounjaro",  detail: "~20-22% vs ~9-13% - a clinically significant margin across all trials." },
            { category: "Cost (no insurance)",  winner: "Ozempic",   detail: "~$235-420/mo vs $490-610/mo. Generic semaglutide widens this gap further." },
            { category: "Insurance coverage",   winner: "Ozempic",   detail: "On most provincial formularies for T2D. Mounjaro coverage is more limited and variable." },
            { category: "GI tolerability",      winner: "Roughly equal", detail: "Both cause similar GI side effects. Mounjaro may be marginally better tolerated at equivalent weight-loss doses, though evidence is limited." },
          ].map((row) => (
            <div key={row.category} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">{row.category}</p>
              <p className="text-base font-black text-[#1B3A6B] mb-2" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{row.winner}</p>
              <p className="text-xs text-gray-700 leading-relaxed">{row.detail}</p>
            </div>
          ))}
        </div>

        <h2 id="how-to-choose">How to Choose Between Them</h2>
        <p>The right choice depends on your clinical picture and financial situation:</p>
        <ul>
          <li><strong>If you have T2D and want coverage:</strong> Start with Ozempic. It is on-label for your condition, widely covered, and well-studied. You can always escalate to Mounjaro later if you need greater weight loss.</li>
          <li><strong>If maximum weight loss is the priority and cost is manageable:</strong> Mounjaro's 15 mg dose produces roughly twice the weight loss of typical Ozempic doses in trials. For patients who have previously responded inadequately to semaglutide, tirzepatide's dual mechanism may achieve results that single-agonist therapy cannot.</li>
          <li><strong>If you want the most affordable out-of-pocket option:</strong> Generic semaglutide (now available in Canada) will significantly undercut both brand-name products on price, while delivering equivalent efficacy to brand Ozempic.</li>
          <li><strong>If your employer plan covers Mounjaro:</strong> Take advantage of it. The extra efficacy at no extra personal cost is a clear argument for choosing tirzepatide.</li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Is Mounjaro worth the extra cost?</h3>
        <p>
          For patients without insurance, the monthly premium of $250-200 over Ozempic is significant. Whether it is "worth it" depends on how much additional weight loss matters to you and your health goals. Patients who have plateaued on semaglutide or who need 20%+ weight loss to achieve meaningful metabolic benefit may find the extra cost justified. For many others, semaglutide at a lower price point - especially generic semaglutide - achieves clinically meaningful results.
        </p>

        <h3>Can I switch between Ozempic and Mounjaro?</h3>
        <p>
          Yes, with physician guidance. Switching from Ozempic to Mounjaro involves starting tirzepatide at a low dose (typically 2.5 mg) and titrating up, rather than jumping to a dose equivalent to your current Ozempic level. This is because they are different molecules with different potencies per milligram. Your prescribing physician will advise on the appropriate transition.
        </p>

        <h3>Does a generic exist for either?</h3>
        <p>
          Generic semaglutide (interchangeable with Ozempic at equivalent doses) received Health Canada approval in 2025, with products from Apotex and Dr. Reddy's. No generic tirzepatide is available in Canada as of mid-2025. This makes the cost advantage of the semaglutide class even more pronounced as generics become widely dispensed.
        </p>

        <h3>Which drug has better cardiovascular evidence?</h3>
        <p>
          Both have cardiovascular outcome data. Ozempic's SELECT trial (2023) showed a 20% reduction in major adverse cardiovascular events in adults with overweight/obesity and established cardiovascular disease. Mounjaro's SURPASS-CVOT trial results are anticipated but had not been fully published as of this writing. For patients with established cardiovascular disease, semaglutide currently has stronger evidence.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-500 leading-relaxed">
          <strong>Medical disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Drug costs, coverage criteria, and clinical data reflect information available as of May 2026. Always consult a licensed Canadian physician or pharmacist before starting, switching, or stopping any prescription medication.
        </div>
      </div>
    </ArticleLayout>
  );
}
