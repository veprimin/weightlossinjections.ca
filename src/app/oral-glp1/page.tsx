import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Oral GLP-1 Medications in Canada - Rybelsus & Beyond",
  description:
    "A complete guide to oral GLP-1 medications in Canada, including Rybelsus (oral semaglutide), how it compares to injectable options, who it's best for, and what it costs.",
  alternates: {
    canonical: `${SITE_URL}/oral-glp1`,
    languages: { "en-CA": `${SITE_URL}/oral-glp1` },
  },
};

const toc = [
  { id: "what-is-oral",     label: "What Are Oral GLP-1s?" },
  { id: "rybelsus",         label: "Rybelsus (Oral Semaglutide)" },
  { id: "how-it-differs",   label: "How It Differs From Injections" },
  { id: "evidence",         label: "Clinical Evidence" },
  { id: "who-its-for",      label: "Who Should Consider It" },
  { id: "side-effects",     label: "Side Effects" },
  { id: "cost",             label: "Cost in Canada" },
  { id: "future",           label: "The Future of Oral GLP-1s" },
  { id: "faq",              label: "FAQ" },
];

const related = [
  { href: "/semaglutide",   emoji: "💉", title: "Semaglutide Guide (Ozempic & Wegovy)", date: "May 2025" },
  { href: "/tirzepatide",   emoji: "⚗️", title: "Tirzepatide (Mounjaro) Guide",          date: "May 2025" },
  { href: "/compare",       emoji: "⚖️", title: "Compare All Weight Loss Medications",   date: "May 2025" },
  { href: "/cost",          emoji: "💰", title: "Cost Guide by Province",                date: "May 2025" },
];

export default function OralGlp1Page() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Medication Guide"
        readTime="8 min read"
        date="May 2025"
        headline="Oral GLP-1 Medications in Canada: Rybelsus and the No-Needle Option"
        standfirst="For Canadians who want the benefits of GLP-1 therapy without injections, oral semaglutide is already available - and the next generation of oral GLP-1 pills is on the horizon."
        heroEmoji="💊"
        heroGradient="linear-gradient(135deg,#334155,#64748B)"
      />

      <div className="prose-editorial">
        <p>
          The word "injection" is a significant barrier for many Canadians considering GLP-1 treatment. Fear of needles, discomfort with self-injection, or simply preferring oral medication are all valid concerns. The good news: <strong>oral semaglutide (Rybelsus) is already available in Canada</strong>, and several more potent oral GLP-1 medications are in advanced development globally.
        </p>

        <h2 id="what-is-oral">What Are Oral GLP-1 Medications?</h2>
        <p>
          GLP-1 receptor agonists were historically available only as injections, because the GLP-1 molecule is a peptide that is rapidly degraded in the gut before it can be absorbed. Oral formulations require specialized drug delivery technology to survive the digestive tract and reach the bloodstream intact.
        </p>
        <p>
          Novo Nordisk solved this challenge for semaglutide using a technology called <strong>SNAC (sodium N-[8-(2-hydroxybenzoyl) aminocaprylate])</strong> - an absorption enhancer that protects semaglutide from enzymatic digestion in the stomach and facilitates absorption through the gastric lining, bypassing the small intestine where digestion would otherwise destroy it.
        </p>

        <h2 id="rybelsus">Rybelsus (Oral Semaglutide) in Canada</h2>
        <p>
          <strong>Rybelsus</strong> was approved by Health Canada in 2020 for the treatment of type 2 diabetes in adults. It is the world's first approved oral GLP-1 receptor agonist.
        </p>
        <p>Available doses: <strong>3 mg</strong> (starting), <strong>7 mg</strong>, and <strong>14 mg</strong> (maximum).</p>
        <p>
          Rybelsus must be taken on an empty stomach with a small amount of plain water (no more than 120 mL / half a cup), and the patient must wait at least 30 minutes before eating or taking other medications. This fasting requirement relates to how SNAC absorption works - food and larger fluid volumes significantly reduce bioavailability.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700 mb-2">Important: How to Take Rybelsus Correctly</p>
          <ul className="space-y-1.5">
            {[
              "Take on a completely empty stomach, first thing in the morning",
              "Use no more than ½ cup (120 mL) of plain water only - no coffee, tea, or juice",
              "Wait at least 30 minutes before eating, drinking anything else, or taking other medications",
              "Swallow tablet whole - do not crush, chew, or split",
              "Consistent daily timing improves effectiveness",
            ].map((f) => (
              <li key={f} className="flex gap-2 text-sm text-gray-900">
                <span className="text-amber-600 font-bold shrink-0">•</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <h2 id="how-it-differs">How Oral Semaglutide Differs From Injectable</h2>
        <p>
          The active molecule is the same semaglutide - but the route of administration creates meaningful pharmacokinetic differences:
        </p>
        <ul>
          <li><strong>Bioavailability:</strong> Oral semaglutide has approximately 1% bioavailability (compared to ~89% for injectable). The tablet contains a much larger dose (3–14 mg vs. 0.25–2 mg injectable) to compensate.</li>
          <li><strong>Weight loss effectiveness:</strong> Rybelsus 14 mg produces meaningful but generally somewhat lower weight loss than injectable semaglutide at equivalent efficacy doses. In the PIONEER trials, Rybelsus achieved 4–5% weight reduction vs. ~9–15% for injectable Wegovy.</li>
          <li><strong>Convenience:</strong> Daily pill vs. weekly injection - depending on the patient, either might be preferred. Some find the daily discipline of an oral drug with strict timing requirements more challenging than a single weekly injection.</li>
          <li><strong>Approval status:</strong> Rybelsus is approved for diabetes only. It is not currently approved for weight management in Canada, though it is prescribed off-label.</li>
        </ul>

        <h2 id="evidence">Clinical Evidence</h2>
        <p>
          The PIONEER clinical trial programme evaluated oral semaglutide across numerous populations. Key weight-related findings:
        </p>
        <ul>
          <li><strong>PIONEER 1:</strong> Rybelsus 14 mg reduced body weight by 4.1 kg over 26 weeks vs. 0.9 kg on placebo in adults with type 2 diabetes</li>
          <li><strong>PIONEER 10:</strong> In Japanese patients with type 2 diabetes, Rybelsus 14 mg showed 3.8 kg weight reduction</li>
          <li><strong>OASIS 1</strong> (ongoing, non-diabetic adults with obesity): Early data showed ~15% weight loss with a higher-dose oral semaglutide formulation (25 mg and 50 mg investigational doses) - suggesting the gap with injections may narrow significantly with higher doses</li>
        </ul>
        <p>
          Novo Nordisk has developed a higher-dose oral semaglutide formulation (25 mg and 50 mg) designed specifically for weight management. These higher doses are in or have completed Phase 3 trials globally and may receive Health Canada review in 2025–2026.
        </p>

        <FelixInline />

        <h2 id="who-its-for">Who Should Consider Oral GLP-1 Therapy?</h2>
        <p>Rybelsus may be a good fit if you:</p>
        <ul>
          <li>Have type 2 diabetes and want GLP-1 benefits without injections</li>
          <li>Have significant needle phobia or injection anxiety</li>
          <li>Prefer oral medication for lifestyle or personal reasons</li>
          <li>Can reliably follow the fasting-before-dose protocol each morning</li>
        </ul>
        <p>Injectable semaglutide (Ozempic/Wegovy) may be preferable if you:</p>
        <ul>
          <li>Want maximum weight-loss efficacy</li>
          <li>Have an irregular morning schedule that makes consistent fasting difficult</li>
          <li>Are targeting weight management specifically (Wegovy has a formal approval)</li>
          <li>Are price-sensitive (oral may be more or less expensive depending on plan; generics exist only for injectable forms as of 2025)</li>
        </ul>

        <h2 id="side-effects">Side Effects</h2>
        <p>
          The side effect profile is similar to injectable semaglutide - primarily gastrointestinal - but some patients find GI symptoms with oral semaglutide slightly different in character due to gastric-level absorption:
        </p>
        <ul>
          <li>Nausea (common, especially at dose increases)</li>
          <li>Diarrhea, stomach discomfort</li>
          <li>Decreased appetite</li>
          <li>Heartburn or acid reflux (more reported with oral form vs. injectable)</li>
        </ul>

        <h2 id="cost">Cost in Canada</h2>
        <p>
          Rybelsus costs approximately <strong>$200–$350 per month</strong> depending on dose and province - broadly comparable to or slightly below Ozempic injectable. It is covered by some provincial formularies for type 2 diabetes (subject to eligibility criteria), and by many private drug plans.
        </p>

        <h2 id="future">The Future of Oral GLP-1s in Canada</h2>
        <p>
          The next few years promise significant advances in oral GLP-1 options:
        </p>
        <ul>
          <li><strong>Higher-dose oral semaglutide (25 mg / 50 mg):</strong> Novo Nordisk's Phase 3 OASIS programme data showed weight loss comparable to injectable Wegovy. A Health Canada submission is likely in the near future.</li>
          <li><strong>Oral tirzepatide:</strong> Eli Lilly is developing oral tirzepatide (SURPASS/OWL programme). Early Phase 2 data is promising.</li>
          <li><strong>Orforglipron (oral small-molecule GLP-1):</strong> Eli Lilly's orforglipron does not require SNAC technology, can be taken with food, and Phase 3 data showed ~15% weight loss - potentially a game-changer for accessibility. Regulatory submissions are expected.</li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Is Rybelsus as effective as Ozempic for weight loss?</h3>
        <p>At currently approved doses (max 14 mg), Rybelsus typically produces less weight loss than injectable Ozempic or Wegovy. The gap narrows significantly at investigational higher doses (25–50 mg), which may be approved in the coming years.</p>

        <h3>Can I get oral GLP-1 for weight loss (not diabetes) in Canada?</h3>
        <p>Rybelsus is approved only for diabetes, but physicians can and do prescribe it off-label for weight management. A physician who conducts a proper assessment and determines it clinically appropriate may prescribe it at their discretion.</p>

        <h3>Is there a generic oral semaglutide?</h3>
        <p>Not as of mid-2025. The Health Canada approvals for generic semaglutide announced in 2025 are for injectable formulations only. Generic oral semaglutide is likely years away.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-500 leading-relaxed">
          <strong>Medical disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Rybelsus requires a prescription from a licensed healthcare provider.
        </div>
      </div>
    </ArticleLayout>
  );
}
