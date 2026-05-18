import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Semaglutide in Canada — Complete Guide to Ozempic & Wegovy",
  description:
    "Everything Canadians need to know about semaglutide: how Ozempic and Wegovy work, eligibility, cost by province, side effects, and how to get a prescription online.",
  alternates: {
    canonical: `${SITE_URL}/semaglutide`,
    languages: { "en-CA": `${SITE_URL}/semaglutide` },
  },
};

const toc = [
  { id: "how-it-works",      label: "How Semaglutide Works" },
  { id: "clinical-evidence", label: "Clinical Evidence" },
  { id: "canada-approval",   label: "Health Canada Approval" },
  { id: "generics",          label: "Generic Semaglutide (New)" },
  { id: "eligibility",       label: "Who Qualifies" },
  { id: "how-to-get",        label: "How to Get a Prescription" },
  { id: "side-effects",      label: "Side Effects" },
  { id: "cost",              label: "Cost in Canada" },
  { id: "faq",               label: "FAQ" },
];

const related = [
  { href: "/tirzepatide",      emoji: "⚗️", title: "Tirzepatide (Mounjaro) Guide",         date: "May 2025" },
  { href: "/compare",          emoji: "⚖️", title: "Compare All Weight Loss Injections",     date: "May 2025" },
  { href: "/cost",             emoji: "💰", title: "Province-by-Province Cost Breakdown",    date: "May 2025" },
  { href: "/insurance-coverage", emoji: "🛡️", title: "Does Insurance Cover Ozempic?",       date: "May 2025" },
];

export default function SemaglutidePage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="In-Depth Guide"
        readTime="12 min read"
        date="May 2025"
        headline="Semaglutide in Canada: The Complete Guide to Ozempic & Wegovy"
        standfirst="Semaglutide has transformed weight management globally. Here is everything Canadians need to know — from the biology to the pharmacy counter."
        heroEmoji="💉"
        heroGradient="linear-gradient(135deg,#0F6E56,#2DB88A)"
      />

      <div className="prose-editorial">
        <p>
          Semaglutide is the active molecule in both Ozempic and Wegovy — two medications that have become synonymous with a new era in obesity treatment. Originally developed by Novo Nordisk for type 2 diabetes, semaglutide's remarkable weight-loss effects in clinical trials prompted Health Canada to approve a higher-dose formulation specifically for chronic weight management.
        </p>

        <h2 id="how-it-works">How Semaglutide Works</h2>
        <p>
          Semaglutide is a <strong>GLP-1 receptor agonist</strong> — a synthetic analogue of glucagon-like peptide-1, a hormone produced in the gut after eating. By mimicking and prolonging GLP-1 signalling, semaglutide produces several interconnected effects:
        </p>
        <ul>
          <li><strong>Appetite suppression:</strong> Acts on hypothalamic receptors to reduce hunger signals and food cravings</li>
          <li><strong>Delayed gastric emptying:</strong> Food leaves the stomach more slowly, extending feelings of fullness</li>
          <li><strong>Glucose regulation:</strong> Stimulates insulin release in response to meals; reduces glucagon secretion</li>
          <li><strong>Reduced "food noise":</strong> Many patients report a quieting of the constant preoccupation with food that makes dieting psychologically exhausting</li>
        </ul>
        <p>
          Unlike older appetite suppressants that worked primarily as stimulants or serotonin modulators, semaglutide works through a pathway the body already uses — which is why its effects feel natural to most patients and its long-term safety profile is favourable.
        </p>

        <h2 id="clinical-evidence">What the Clinical Evidence Shows</h2>
        <p>
          The STEP (Semaglutide Treatment Effect in People with Obesity) trial programme is the most comprehensive weight-management drug trial programme ever conducted. Key findings:
        </p>
        <ul>
          <li><strong>STEP 1:</strong> Non-diabetic adults on 2.4 mg semaglutide lost an average <strong>14.9% of body weight</strong> over 68 weeks vs. 2.4% on placebo</li>
          <li><strong>STEP 2:</strong> Adults with type 2 diabetes lost an average <strong>9.6%</strong> — still dramatically better than any prior medication</li>
          <li><strong>STEP 4:</strong> Patients who discontinued after achieving weight loss regained approximately two-thirds of lost weight within a year, underscoring obesity as a chronic condition requiring ongoing management</li>
          <li><strong>SELECT trial (2023):</strong> Semaglutide 2.4 mg reduced major cardiovascular events by <strong>20%</strong> in adults with overweight/obesity and established cardiovascular disease — a landmark finding that expanded its clinical relevance far beyond aesthetics</li>
        </ul>

        <div className="bg-[#F2FAF7] border border-[rgba(15,110,86,0.2)] rounded-xl p-5 my-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#0F6E56] mb-3 flex items-center gap-2">📊 Key Clinical Numbers</p>
          <ul className="space-y-2">
            {[
              "~15% average body weight loss over 68 weeks (STEP 1)",
              "~1 in 3 STEP 1 participants lost more than 20% of body weight",
              "20% reduction in major cardiovascular events (SELECT trial)",
              "Blood pressure, cholesterol, and HbA1c improvements alongside weight loss",
              "Effects are sustained with continued treatment; most weight is regained after stopping",
            ].map((f) => (
              <li key={f} className="flex gap-2 text-sm text-gray-700">
                <span className="text-[#1D9E75] font-bold shrink-0">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <h2 id="canada-approval">Health Canada Approval</h2>
        <p>
          <strong>Ozempic</strong> (semaglutide 0.5 mg, 1 mg, 2 mg) was approved in 2018 for the treatment of type 2 diabetes mellitus in adults. It is widely prescribed off-label for weight management.
        </p>
        <p>
          <strong>Wegovy</strong> (semaglutide 2.4 mg) received Health Canada approval in November 2021 specifically for chronic weight management in adults with:
        </p>
        <ul>
          <li>BMI ≥ 30 kg/m², <em>or</em></li>
          <li>BMI ≥ 27 kg/m² plus at least one weight-related comorbidity (e.g., hypertension, type 2 diabetes, dyslipidemia, obstructive sleep apnea, cardiovascular disease)</li>
        </ul>
        <p>
          <strong>Rybelsus</strong> (oral semaglutide, 3 mg / 7 mg / 14 mg) is approved for type 2 diabetes. See our <Link href="/oral-glp1">Oral GLP-1 guide</Link> for details.
        </p>

        <h2 id="generics">Generic Semaglutide — The Game-Changer</h2>
        <p>
          In a significant milestone for Canadian patients, Health Canada approved two generic versions of semaglutide in 2025:
        </p>
        <ul>
          <li><strong>Dr. Reddy's Laboratories</strong> — Indian pharmaceutical giant, one of the world's largest generic producers</li>
          <li><strong>Apotex</strong> — A Canadian company, making this a domestic success story</li>
        </ul>
        <p>
          Canada became the first G7 nation to approve generic semaglutide. Generics typically cost <strong>45–90% less</strong> than brand-name equivalents. Exact retail pricing was being established at press time, but this development promises to significantly expand affordability over 2025–2026.
        </p>

        <FelixInline />

        <h2 id="eligibility">Who Qualifies for Semaglutide in Canada?</h2>
        <p>Eligibility depends on the indication:</p>
        <ul>
          <li><strong>For diabetes (Ozempic):</strong> Diagnosed type 2 diabetes mellitus; no contraindications</li>
          <li><strong>For weight management (Wegovy):</strong> BMI ≥ 30, or BMI ≥ 27 with a weight-related comorbidity</li>
          <li><strong>Off-label use:</strong> Many physicians prescribe Ozempic for weight management in patients outside the strict Wegovy criteria — particularly those with BMI 25–30 and significant health risks</li>
        </ul>
        <p>
          Absolute contraindications include: personal or family history of medullary thyroid carcinoma (MTC), Multiple Endocrine Neoplasia syndrome type 2 (MEN2), current pregnancy, and known hypersensitivity to semaglutide.
        </p>

        <h2 id="how-to-get">How to Get Semaglutide in Canada</h2>
        <p>Three main pathways exist:</p>
        <ol>
          <li><strong>Your family physician:</strong> The traditional route — potentially the most seamless if your GP is familiar with GLP-1 medications and comfortable prescribing them. Wait times and prescribing habits vary widely by physician and province.</li>
          <li><strong>Online virtual care:</strong> Platforms like <a href="https://afflat3e1.com/trk/lnk/9AC89778-AF07-4236-94B8-94E9519B0116/?o=29537&c=918271&a=776838&k=9244A3303B13F605EF0D210C5B870AF8&l=33492" target="_blank" rel="noopener sponsored">Felix Health</a> connect you with a licensed Canadian physician online. You complete a medical intake form, a physician reviews and responds within hours, and if appropriate, issues a prescription that can be delivered to your home. Many patients find this significantly faster and more convenient.</li>
          <li><strong>Obesity specialist / endocrinologist:</strong> For complex cases or when a GP referral is required. Often involves a longer wait but provides more comprehensive metabolic management.</li>
        </ol>

        <h2 id="side-effects">Side Effects</h2>
        <p>
          Most side effects are gastrointestinal and dose-dependent. They are managed through the standard slow dose-escalation protocol (starting at 0.25 mg weekly and titrating up every 4 weeks):
        </p>
        <ul>
          <li><strong>Nausea</strong> — most common (~44% in STEP trials); usually improves after weeks 4–8</li>
          <li><strong>Vomiting</strong> — less common; slow titration and eating smaller meals helps</li>
          <li><strong>Diarrhea or constipation</strong></li>
          <li><strong>Fatigue</strong> — especially early in treatment</li>
          <li><strong>Reduced appetite</strong> — intentional effect, but can feel extreme initially</li>
        </ul>
        <p>Rare but important concerns to discuss with your provider:</p>
        <ul>
          <li>Pancreatitis (seek care for severe, persistent abdominal pain)</li>
          <li>Gallbladder disease (slightly elevated risk; gallstones more common with rapid weight loss)</li>
          <li>Thyroid: animal data shows increased C-cell tumours — avoid in patients with MTC/MEN2 personal or family history</li>
        </ul>

        <h2 id="cost">Cost of Semaglutide in Canada</h2>
        <p>
          Without insurance, Ozempic typically costs <strong>$200–$450 per month</strong> depending on dose and province. Wegovy runs approximately <strong>$380–$430 per month</strong> nationally. See our <Link href="/cost">full province-by-province cost breakdown →</Link>
        </p>
        <p>
          Coverage under provincial drug plans is mainly limited to Ozempic for diagnosed type 2 diabetes. Wegovy for weight management alone is generally not covered by provincial plans as of 2025, though private employer benefits increasingly include it. See our <Link href="/insurance-coverage">insurance coverage guide →</Link>
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Does Ozempic work if I don't have diabetes?</h3>
        <p>Yes. Semaglutide's weight-loss mechanism operates independently of blood-sugar effects. Wegovy clinical trials enrolled non-diabetic adults and showed comparable results. Many non-diabetic Canadians are prescribed Ozempic off-label or Wegovy on-label for weight management.</p>

        <h3>Will I regain weight when I stop?</h3>
        <p>Most patients regain significant weight after stopping — this is not a failure. It reflects the chronic, biological nature of obesity. Many clinicians now prescribe semaglutide long-term, similar to antihypertensives or statins.</p>

        <h3>Is it covered by provincial drug plans?</h3>
        <p>Coverage varies. Ontario ODB, BC PharmaCare, and other provincial plans cover Ozempic for type 2 diabetes under specific criteria. Wegovy for weight management is typically not covered provincially but is increasingly covered by private insurance. See our <Link href="/insurance-coverage">insurance guide</Link> for details.</p>

        <h3>Can I use semaglutide while pregnant or breastfeeding?</h3>
        <p>No. Semaglutide is contraindicated in pregnancy. Women of childbearing potential should use effective contraception during treatment and for at least 2 months after the last dose.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-500 leading-relaxed">
          <strong>Medical disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Semaglutide requires a valid prescription from a licensed healthcare provider. Always consult a qualified clinician before starting or changing any medication.
        </div>
      </div>
    </ArticleLayout>
  );
}
