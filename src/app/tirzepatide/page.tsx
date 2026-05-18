import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tirzepatide (Mounjaro) in Canada — Complete Guide 2025",
  description:
    "Everything Canadians need to know about tirzepatide (Mounjaro & Zepbound): how the dual GLP-1/GIP mechanism works, clinical evidence, cost, availability, and how to get a prescription.",
};

const toc = [
  { id: "what-is",          label: "What Is Tirzepatide?" },
  { id: "mechanism",        label: "Dual Mechanism Explained" },
  { id: "evidence",         label: "Clinical Evidence (SURMOUNT)" },
  { id: "vs-semaglutide",   label: "Tirzepatide vs. Semaglutide" },
  { id: "canada-access",    label: "Availability in Canada" },
  { id: "eligibility",      label: "Who Qualifies" },
  { id: "side-effects",     label: "Side Effects" },
  { id: "cost",             label: "Cost" },
  { id: "faq",              label: "FAQ" },
];

const related = [
  { href: "/semaglutide",        emoji: "💉", title: "Semaglutide (Ozempic & Wegovy) Guide", date: "May 2025" },
  { href: "/compare",            emoji: "⚖️", title: "Compare All Weight Loss Injections",    date: "May 2025" },
  { href: "/cost",               emoji: "💰", title: "Province-by-Province Cost Guide",       date: "May 2025" },
  { href: "/insurance-coverage", emoji: "🛡️", title: "Insurance Coverage Guide",             date: "May 2025" },
];

export default function TirzepatidePage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Medication Guide"
        readTime="10 min read"
        date="May 2025"
        headline="Tirzepatide (Mounjaro) in Canada: The Dual-Action Weight Loss Injection"
        standfirst="Tirzepatide targets two gut hormones simultaneously — and it is producing weight-loss results that surprised even its developers. Here is what Canadians need to know."
        heroEmoji="⚗️"
        heroGradient="linear-gradient(135deg,#0F766E,#2DD4BF)"
      />

      <div className="prose-editorial">
        <p>
          Tirzepatide — sold under the brand names <strong>Mounjaro</strong> (for type 2 diabetes) and <strong>Zepbound</strong> (for weight management, approved in the US) — represents a new generation of GLP-1 based medications. By activating two receptor pathways instead of one, it has produced weight-loss results in clinical trials that exceed those of semaglutide, the previous benchmark.
        </p>

        <h2 id="what-is">What Is Tirzepatide?</h2>
        <p>
          Tirzepatide is a <strong>dual GIP/GLP-1 receptor agonist</strong> developed by Eli Lilly. GIP (glucose-dependent insulinotropic polypeptide) is a second gut hormone that, like GLP-1, is released after eating and plays a role in insulin secretion, fat storage, and energy metabolism. Tirzepatide is the first medication to simultaneously activate both GIP and GLP-1 receptors.
        </p>
        <p>
          Health Canada approved Mounjaro (tirzepatide) in November 2023 for the treatment of type 2 diabetes in adults. As of 2025, it is not yet separately approved in Canada specifically for weight management (as Zepbound is in the United States), but it is widely prescribed off-label for weight management by Canadian physicians.
        </p>

        <h2 id="mechanism">The Dual Mechanism Explained</h2>
        <p>
          The combination of GIP and GLP-1 activation appears to produce effects that are greater than either receptor alone:
        </p>
        <ul>
          <li><strong>GLP-1 pathway:</strong> Reduces appetite, slows gastric emptying, stimulates insulin release, reduces glucagon</li>
          <li><strong>GIP pathway:</strong> Enhances insulin secretion, may improve insulin sensitivity, appears to act synergistically with GLP-1 to reduce caloric intake</li>
          <li><strong>Combined effect:</strong> Greater reduction in food intake and greater improvement in metabolic markers than semaglutide alone in head-to-head trials</li>
        </ul>
        <p>
          Interestingly, GIP alone does not suppress appetite — but when combined with GLP-1 receptor activation, the appetite-suppressing effect appears amplified. The exact mechanism continues to be an active area of research.
        </p>

        <h2 id="evidence">Clinical Evidence: The SURMOUNT Trials</h2>
        <p>
          The SURMOUNT trial programme is the pivotal clinical evidence base for tirzepatide in weight management:
        </p>
        <ul>
          <li>
            <strong>SURMOUNT-1</strong> (non-diabetic adults with obesity or overweight plus comorbidities): Participants on the highest dose (15 mg) lost an average of <strong>20.9% of body weight</strong> over 72 weeks vs. 3.1% on placebo. Nearly half achieved ≥20% weight loss.
          </li>
          <li>
            <strong>SURMOUNT-2</strong> (adults with type 2 diabetes): Average weight loss of <strong>14.7%</strong> on 15 mg — again markedly better than earlier-generation medications.
          </li>
          <li>
            <strong>SURMOUNT-4</strong> (maintenance phase): Patients who continued tirzepatide maintained their weight loss; those who switched to placebo regained weight — consistent with findings across GLP-1 medications.
          </li>
        </ul>

        <div className="bg-[#F0FDFA] border border-teal-200 rounded-xl p-5 my-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-teal-700 mb-3">📊 SURMOUNT-1 Highlights (15 mg dose)</p>
          <ul className="space-y-2">
            {[
              "20.9% average body weight reduction over 72 weeks",
              "47.4% of participants achieved ≥20% body weight loss",
              "Significant reductions in waist circumference, blood pressure, and lipids",
              "Greater weight loss than any GLP-1 medication previously approved",
            ].map((f) => (
              <li key={f} className="flex gap-2 text-sm text-gray-700">
                <span className="text-teal-600 font-bold shrink-0">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <h2 id="vs-semaglutide">Tirzepatide vs. Semaglutide: How Do They Compare?</h2>
        <p>
          The SURPASS-2 trial provided a direct head-to-head comparison of tirzepatide (5 mg, 10 mg, 15 mg) versus semaglutide 1 mg (the Ozempic dose, not the higher Wegovy dose). All tirzepatide doses outperformed semaglutide for both blood sugar reduction and weight loss.
        </p>
        <p>
          No head-to-head trial has directly compared tirzepatide 15 mg against semaglutide 2.4 mg (Wegovy). However, indirect comparisons from separate trials suggest tirzepatide 15 mg produces approximately <strong>5–6 additional percentage points</strong> of weight loss compared to semaglutide 2.4 mg.
        </p>
        <p>
          The practical implication: tirzepatide is likely more effective for weight loss for most patients, but semaglutide has a longer safety track record, is available as a generic (since 2025), and may be significantly cheaper. See our full <Link href="/compare">medication comparison →</Link>
        </p>

        <FelixInline />

        <h2 id="canada-access">Availability in Canada</h2>
        <p>
          Mounjaro (tirzepatide) has been available in Canada since late 2023 for type 2 diabetes. It is stocked at most major pharmacy chains.
        </p>
        <p>
          Unlike in the United States — where Eli Lilly launched Zepbound as a separate brand specifically for weight management — Canada has not received a separate weight-management approval as of mid-2025. Canadian physicians prescribe Mounjaro off-label for weight management, which is legal and common.
        </p>
        <p>
          Supply has generally been more stable than early Ozempic availability, though spot shortages can occur.
        </p>

        <h2 id="eligibility">Who Can Get Tirzepatide in Canada?</h2>
        <ul>
          <li><strong>On-label (diabetes):</strong> Adults with type 2 diabetes mellitus inadequately controlled on other medications</li>
          <li><strong>Off-label (weight management):</strong> Patients with BMI ≥ 27 with comorbidities, or BMI ≥ 30; at prescriber discretion</li>
          <li><strong>Contraindications:</strong> Personal or family history of MTC or MEN2; known hypersensitivity to tirzepatide; pregnancy</li>
        </ul>

        <h2 id="side-effects">Side Effects</h2>
        <p>The side effect profile is very similar to semaglutide — primarily gastrointestinal and dose-dependent:</p>
        <ul>
          <li>Nausea (most common early on)</li>
          <li>Diarrhea, constipation, vomiting</li>
          <li>Decreased appetite (the intended effect)</li>
          <li>Fatigue, particularly in the dose-escalation phase</li>
        </ul>
        <p>
          Tirzepatide uses the same slow titration approach as semaglutide — typically starting at 2.5 mg weekly and increasing by 2.5 mg every 4 weeks to a maximum of 15 mg. GI symptoms in SURMOUNT trials were comparable to or slightly more common than semaglutide at equivalent weight-loss doses.
        </p>

        <h2 id="cost">Cost of Tirzepatide in Canada</h2>
        <p>
          Mounjaro is generally priced in the <strong>$400–$600+ per month</strong> range without insurance, making it more expensive than Ozempic and similar to or slightly higher than Wegovy. As a newer medication with no generic competition as of 2025, costs remain high.
        </p>
        <p>
          Private drug insurance may cover Mounjaro for diabetes; coverage for off-label weight management use is more variable. See our <Link href="/insurance-coverage">insurance coverage guide</Link> for details.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Is tirzepatide available in Canada for weight loss?</h3>
        <p>Mounjaro (tirzepatide) is approved in Canada for type 2 diabetes and is commonly prescribed off-label for weight management. A Canadian physician can prescribe it for weight management at their discretion.</p>

        <h3>Is tirzepatide better than Ozempic?</h3>
        <p>Clinical trial data suggests tirzepatide produces greater average weight loss (~20% vs. ~15% of body weight). However, individual responses vary, costs differ, and semaglutide now has generic versions available. The best medication for you depends on your health history, cost considerations, and prescriber assessment.</p>

        <h3>Does Zepbound exist in Canada?</h3>
        <p>As of 2025, Zepbound has not received a separate Health Canada approval. Mounjaro (the same molecule, approved for diabetes) is available and frequently prescribed off-label for weight management.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-500 leading-relaxed">
          <strong>Medical disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Tirzepatide requires a prescription from a licensed healthcare provider. Off-label prescribing is at the discretion of the treating physician.
        </div>
      </div>
    </ArticleLayout>
  );
}
