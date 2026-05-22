import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "GLP-1 Side Effects Canada - Ozempic, Wegovy, Mounjaro Complete Guide 2026",
  description: "Complete guide to GLP-1 medication side effects in Canada - what to expect with Ozempic, Wegovy, Mounjaro, and how to manage nausea, vomiting, and other reactions.",
  alternates: {
    canonical: `${SITE_URL}/side-effects`,
    languages: { "en-CA": `${SITE_URL}/side-effects` },
  },
};

const toc = [
  { id: "overview",        label: "Overview" },
  { id: "common",          label: "Common Side Effects" },
  { id: "managing-nausea", label: "Managing Nausea" },
  { id: "drug-comparison", label: "Drug Comparison" },
  { id: "serious",         label: "Serious Side Effects" },
  { id: "when-to-stop",    label: "When to Stop" },
];

const related = [
  { href: "/dosing",      emoji: "📋", title: "Dosing Schedules Guide",         date: "May 2026" },
  { href: "/semaglutide", emoji: "💉", title: "Complete Semaglutide Guide",      date: "May 2026" },
  { href: "/tirzepatide", emoji: "🔬", title: "Mounjaro: Tirzepatide Guide",      date: "May 2026" },
  { href: "/compare",     emoji: "⚖️", title: "Drug Comparison Table",           date: "May 2026" },
];

export default function SideEffectsPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Reference Guide"
        readTime="7 min read"
        date="May 2026"
        headline="GLP-1 Side Effects: Complete Guide for Canadian Patients"
        standfirst="Nausea affects roughly 30-44% of GLP-1 users, but most see significant improvement after the first 4-8 weeks. The titration schedule exists specifically to minimize discomfort. Here is what to expect."
      />

      <div className="prose-editorial">
        <p>
          GLP-1 medications have a well-understood side effect profile developed over more than 15 years of clinical use. Most side effects are gastrointestinal, dose-dependent, and temporary. The most important thing to know: rushing the titration schedule is the leading cause of unnecessary discontinuation.
        </p>

        <h2 id="overview">Side Effects at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "Nausea (most common)", value: "30-44%", sub: "Usually improves week 4-8" },
            { label: "Diarrhea",             value: "15-20%", sub: "Usually mild" },
            { label: "Constipation",         value: "10-15%", sub: "More common than expected" },
            { label: "Vomiting",             value: "10-14%", sub: "Often avoidable with slow titration" },
            { label: "Decreased appetite",   value: "~70%",   sub: "This is usually the desired effect" },
            { label: "Discontinuation rate", value: "~10-15%", sub: "Due to GI side effects in trials" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#1B3A6B]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-black mt-1">{s.label}</p>
              <p className="text-xs text-black mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="common">Common Side Effects in Detail</h2>
        <h3>Nausea</h3>
        <p>
          Nausea is the most frequently reported side effect, affecting 30-44% of patients in clinical trials. It is most common during dose escalation periods and typically improves significantly after 4-8 weeks at a stable dose. Nausea that is intolerable at one dose level often resolves if the patient stays at that dose longer before escalating.
        </p>
        <h3>Diarrhea and Constipation</h3>
        <p>
          GLP-1 medications slow gastric emptying, which can cause both diarrhea and constipation in different patients. Diarrhea occurs most often in the first few weeks; constipation can be a longer-term issue, particularly at higher doses. Staying well hydrated and maintaining dietary fiber helps significantly.
        </p>
        <h3>Vomiting</h3>
        <p>
          Vomiting is less common than nausea but tends to occur in patients who are already experiencing significant nausea and continue eating large meals. Eating smaller portions and avoiding high-fat, spicy, or rich foods during titration substantially reduces this risk.
        </p>
        <h3>Decreased appetite</h3>
        <p>
          While not technically a "side effect" from a clinical standpoint, approximately 70% of patients experience notably reduced appetite. This is the primary mechanism of weight loss. Some patients find the appetite suppression disproportionately strong at higher doses.
        </p>

        <h2 id="managing-nausea">How to Manage Nausea</h2>
        <ul>
          <li><strong>Eat smaller portions</strong> - large meals significantly worsen nausea on GLP-1s</li>
          <li><strong>Avoid fatty, fried, or spicy foods</strong> during the first weeks of each dose escalation</li>
          <li><strong>Try injecting before bedtime</strong> - sleeping through the peak nausea period helps many patients</li>
          <li><strong>Do not rush to the next dose level</strong> - staying at the current dose for an extra 2-4 weeks is always an option</li>
          <li><strong>Stay hydrated</strong> - dehydration worsens nausea</li>
          <li><strong>Avoid alcohol</strong> - GLP-1s slow gastric emptying, and alcohol effects can be stronger and more unpredictable</li>
          <li><strong>Talk to your physician</strong> about anti-nausea medications if needed (ondansetron, dimenhydrinate)</li>
        </ul>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Key Principle</p>
          <p className="text-sm text-black">
            The titration schedule is medicine's way of letting your body adjust. Never skip doses and never rush to the next level if you are experiencing significant nausea. Slow titration produces the same long-term results with far fewer side effects.
          </p>
        </div>

        <FelixInline />

        <h2 id="drug-comparison">Side Effect Comparison by Drug</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ background: "#1B3A6B" }}>
                <th className="text-left px-4 py-3 text-white font-semibold">Side Effect</th>
                <th className="text-left px-4 py-3 text-white font-semibold">Ozempic</th>
                <th className="text-left px-4 py-3 text-white font-semibold">Wegovy</th>
                <th className="text-left px-4 py-3 text-white font-semibold">Mounjaro</th>
                <th className="text-left px-4 py-3 text-white font-semibold">Saxenda</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ["Nausea",          "20-44%", "44%",  "17-40%", "39%"   ],
                ["Diarrhea",        "10-20%", "20%",  "17-23%", "21%"   ],
                ["Constipation",    "5-11%",  "11%",  "11%",    "19%"   ],
                ["Vomiting",        "5-9%",   "9%",   "8-9%",   "16%"   ],
                ["Abdominal pain",  "5-8%",   "8%",   "4-6%",   "13%"   ],
                ["Fatigue",         "5%",     "7%",   "6%",     "11%"   ],
                ["Injection site",  "Mild",   "Mild", "Mild",   "Mild"  ],
              ].map(([effect, ozempic, wegovy, mounjaro, saxenda], i) => (
                <tr key={effect} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-black">{effect}</td>
                  <td className="px-4 py-3 text-black">{ozempic}</td>
                  <td className="px-4 py-3 text-black">{wegovy}</td>
                  <td className="px-4 py-3 text-black">{mounjaro}</td>
                  <td className="px-4 py-3 text-black">{saxenda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-black">Percentages from respective pivotal clinical trials. Rates vary across dose levels and follow-up periods.</p>

        <h2 id="serious">Serious but Rare Side Effects</h2>
        <h3>Pancreatitis</h3>
        <p>
          Acute pancreatitis has been reported with GLP-1 medications. The absolute risk is very low but the condition is serious. Seek emergency care immediately if you develop severe, persistent abdominal pain - especially if it radiates to your back.
        </p>
        <h3>Gallbladder disease</h3>
        <p>
          GLP-1 medications increase the risk of gallstones (cholelithiasis) and cholecystitis. Rapid weight loss itself is a risk factor for gallstone formation. The risk appears to be approximately 1-2% in clinical trials.
        </p>
        <h3>Thyroid tumors</h3>
        <p>
          GLP-1 receptor agonists cause thyroid C-cell tumors in rodents. This has not been observed in humans in clinical trials, but all GLP-1 medications carry a black box warning for patients with personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN2). These patients should not use GLP-1 medications.
        </p>
        <h3>Hypoglycemia</h3>
        <p>
          GLP-1 medications alone rarely cause low blood sugar. However, if you are also taking insulin or sulfonylureas (glipizide, glyburide, etc.), the combination can cause hypoglycemia. Your physician may need to reduce those medications when starting a GLP-1.
        </p>

        <h2 id="when-to-stop">When to Stop and Contact a Doctor</h2>
        <ul>
          <li><strong>Severe or persistent abdominal pain</strong> - rule out pancreatitis</li>
          <li><strong>Persistent vomiting lasting more than 2 days</strong> - risk of dehydration</li>
          <li><strong>Signs of severe allergic reaction</strong> - rash, difficulty breathing, swelling of face/throat</li>
          <li><strong>Vision changes</strong> - diabetic retinopathy complications have been reported with rapid HbA1c reduction</li>
          <li><strong>Severe fatigue or weakness</strong> in combination with any other concerning symptoms</li>
        </ul>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          This information is for educational purposes only. Always consult your prescribing physician about side effects specific to your situation and health history. GLP-1 medications require a valid prescription from a licensed Canadian physician.
        </div>
      </div>
    </ArticleLayout>
  );
}
