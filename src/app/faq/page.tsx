import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "GLP-1 Medications FAQ Canada - Ozempic, Wegovy, Mounjaro Questions Answered 2025",
  description:
    "Answers to the most common questions about GLP-1 weight loss medications in Canada - how to get a prescription, costs, insurance, side effects, and more.",
  alternates: {
    canonical: `${SITE_URL}/faq`,
    languages: { "en-CA": `${SITE_URL}/faq` },
  },
};

const toc = [
  { id: "getting-started", label: "Getting Started" },
  { id: "medications",     label: "Medications" },
  { id: "cost-insurance",  label: "Cost & Insurance" },
  { id: "side-effects",    label: "Side Effects & Safety" },
  { id: "quick-reference", label: "Quick Reference" },
];

const related = [
  { href: "/semaglutide",       emoji: "💉", title: "Semaglutide (Ozempic & Wegovy) Guide",  date: "May 2026" },
  { href: "/tirzepatide",       emoji: "⚗️", title: "Tirzepatide (Mounjaro) Guide",           date: "May 2026" },
  { href: "/insurance-coverage",emoji: "🛡️", title: "Insurance Coverage Guide",               date: "May 2026" },
  { href: "/side-effects",      emoji: "📋", title: "GLP-1 Side Effects Complete Guide",      date: "May 2026" },
];

export default function FaqPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="FAQ"
        readTime="14 min read"
        date="May 2026"
        headline="GLP-1 Medications FAQ: Your Questions Answered"
        standfirst="From getting a prescription to managing side effects - answers to the 20+ most common questions Canadians ask about Ozempic, Wegovy, Mounjaro, and GLP-1 medications."
        heroEmoji="❓"
        heroGradient="linear-gradient(135deg,#1B3A6B,#2D5FA8)"
      />

      <div className="prose-editorial">

        <h2 id="getting-started">Getting Started</h2>

        <h3>What is a GLP-1 medication?</h3>
        <p>
          GLP-1 medications are a class of drugs that mimic glucagon-like peptide-1 (GLP-1), a hormone naturally produced in the gut after eating. By activating GLP-1 receptors, these medications suppress appetite through the brain's hypothalamus, slow gastric emptying so you feel full longer, and stimulate insulin release in response to meals. The result for most patients is a significant and sustained reduction in caloric intake - without the willpower battles associated with traditional dieting.
        </p>
        <p>
          The class includes semaglutide (Ozempic, Wegovy, Rybelsus), liraglutide (Saxenda, Victoza), and tirzepatide (Mounjaro) - which adds a second receptor pathway (GIP) for enhanced effect.
        </p>

        <h3>Do I need a prescription for Ozempic or Wegovy in Canada?</h3>
        <p>
          Yes, always. Ozempic, Wegovy, Mounjaro, Rybelsus, and Saxenda are all Schedule F prescription drugs in Canada. They cannot be legally dispensed without a valid prescription from a licensed Canadian physician or nurse practitioner. Anyone offering these medications without a prescription is operating illegally.
        </p>

        <h3>How do I get a GLP-1 prescription in Canada?</h3>
        <p>
          There are three main pathways. The first is through your family physician - the traditional route. If your GP is comfortable prescribing GLP-1 medications, this can be seamless, though wait times vary significantly by region. The second is through an obesity specialist or endocrinologist, typically by GP referral, which offers more comprehensive metabolic management but involves longer waits. The third is through a virtual care platform like <a href="https://afflat3e1.com/trk/lnk/9AC89778-AF07-4236-94B8-94E9519B0116/?o=29537&c=918271&a=776838&k=9244A3303B13F605EF0D210C5B870AF8&l=33492" target="_blank" rel="noopener sponsored">Felix Health</a>, where a licensed Canadian physician reviews your intake form online and can issue a prescription within hours, delivered to your home.
        </p>

        <h3>Am I eligible for GLP-1 treatment?</h3>
        <p>
          Eligibility depends on the specific medication and indication:
        </p>
        <ul>
          <li><strong>For type 2 diabetes (Ozempic, Rybelsus, Mounjaro):</strong> Diagnosed T2D inadequately controlled on other medications</li>
          <li><strong>For weight management (Wegovy):</strong> BMI of 30 or higher, or BMI 27 or higher with at least one weight-related condition (hypertension, sleep apnea, dyslipidemia, cardiovascular disease)</li>
          <li><strong>Off-label (Ozempic for weight management):</strong> Many physicians will prescribe at their discretion for patients outside strict Wegovy criteria</li>
        </ul>
        <p>
          Absolute contraindications include a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2 (MEN2), current pregnancy, and known hypersensitivity to the drug.
        </p>

        <h3>How long does it take to get a prescription?</h3>
        <p>
          Through virtual care platforms, most patients complete a medical assessment the same day and receive a prescription within 1-3 business days, with pharmacy delivery typically arriving within a few additional days. Through a family physician, timing depends entirely on appointment availability - same week to several weeks. Through a specialist referral, it can take weeks to months depending on the province.
        </p>

        <h2 id="medications">Medications</h2>

        <h3>What is the difference between Ozempic and Wegovy?</h3>
        <p>
          Ozempic and Wegovy contain the exact same active ingredient - semaglutide - but are different products with different doses and approved indications. Ozempic (0.5 mg, 1 mg, 2 mg weekly) was approved in Canada in 2018 for type 2 diabetes. Wegovy (up to 2.4 mg weekly) received Health Canada approval in 2021 specifically for chronic weight management. Because Wegovy reaches a higher maintenance dose and uses a longer titration schedule, it produces greater average weight loss (~15% vs ~9-13% for Ozempic's diabetes doses).
        </p>

        <h3>What is Mounjaro? Is it better than Ozempic?</h3>
        <p>
          Mounjaro (tirzepatide) is a dual GLP-1 and GIP receptor agonist made by Eli Lilly. By activating two gut hormone pathways simultaneously, it produces greater average weight loss than semaglutide - approximately 20-22% of body weight at the highest dose (15 mg) compared to approximately 15% for Wegovy. Clinical trial data consistently shows tirzepatide outperforming semaglutide for weight loss. However, Mounjaro is more expensive, has no generic alternative yet, and semaglutide has a longer safety track record. See our full <Link href="/compare">comparison guide</Link>.
        </p>

        <h3>Is there a generic version of Ozempic in Canada?</h3>
        <p>
          Yes. Canada became the first G7 nation to approve generic semaglutide in 2024-2025. Health Canada approved Plosbrio by Dr. Reddy's Laboratories and Poviztra by Apotex (a Canadian company). Generic medications typically cost 45-90% less than brand-name equivalents, though retail pricing was still being established at the time of writing. This represents a significant affordability development for Canadian patients. See our <Link href="/generic-semaglutide">generic semaglutide guide</Link>.
        </p>

        <h3>How do the injections work?</h3>
        <p>
          All injectable GLP-1 medications (Ozempic, Wegovy, Mounjaro, Saxenda) are administered as subcutaneous injections - meaning they go under the skin, not into muscle. Patients typically inject into the abdomen, front of the thigh, or upper arm. Pre-filled auto-injector pens make the process straightforward - most patients report it is much less intimidating than expected. Ozempic, Wegovy, and Mounjaro are injected once weekly; Saxenda is daily.
        </p>

        <h3>Can I take an oral GLP-1 instead of injections?</h3>
        <p>
          Yes - Rybelsus (oral semaglutide) is available in Canada and is the world's first approved oral GLP-1 receptor agonist. It is taken as a daily tablet (3 mg, 7 mg, or 14 mg), though it must be taken in a very specific way: fasting, with no more than 120 mL of plain water, at least 30 minutes before any food or other medication. Rybelsus produces less weight loss than injectable semaglutide (approximately 4-5% vs 15%) at currently approved doses. It is approved for type 2 diabetes, not weight management specifically. See our <Link href="/oral-glp1">Oral GLP-1 guide</Link>.
        </p>

        <FelixInline />

        <h2 id="cost-insurance">Cost & Insurance</h2>

        <h3>How much does Ozempic cost without insurance in Canada?</h3>
        <p>
          Ozempic typically costs approximately $235-$420 per month without insurance, varying by dose and province. The 0.5 mg dose is at the lower end; the 2 mg dose at the higher end. Wegovy (semaglutide 2.4 mg for weight management) runs approximately $385-$430 per month nationally. Prices vary by pharmacy and province due to dispensing fees and provincial pricing regulations. See our <Link href="/cost">province-by-province cost guide</Link>.
        </p>

        <h3>Does provincial health insurance cover Ozempic?</h3>
        <p>
          Coverage varies significantly by province and indication. For type 2 diabetes, most provincial drug plans (ODB in Ontario, BC PharmaCare, Alberta Blue Cross, etc.) cover Ozempic subject to specific eligibility criteria, prior authorization, and formulary listing requirements. For weight management alone, provincial drug plans generally do not cover Ozempic or Wegovy as of 2025. See our <Link href="/insurance-coverage">insurance coverage guide</Link> for province-by-province details.
        </p>

        <h3>Does my employer drug plan cover GLP-1 medications?</h3>
        <p>
          Many private employer drug plans cover Ozempic and Mounjaro for type 2 diabetes, often requiring prior authorization. Coverage for weight management indications (Wegovy, off-label Ozempic) is more variable - some plans have added weight management coverage while many have not. Saxenda has broader private coverage given its longer history. Contact your plan administrator or pharmacist with your drug identification number (DIN) to confirm coverage before filling a prescription.
        </p>

        <h3>What is the Novo Nordisk Care Rx program?</h3>
        <p>
          Care Rx is Novo Nordisk's patient support program for Wegovy in Canada. It provides free medication for eligible low-income patients who cannot afford it and have no insurance coverage. The program also includes nursing support and home delivery. Eligibility is determined by income criteria. Your prescribing physician or Felix Health can provide a referral to the program.
        </p>

        <h3>Are generic semaglutide medications covered by insurance?</h3>
        <p>
          Some provincial formularies and private insurance plans have begun adding generic semaglutide to their formularies as it becomes commercially available. Coverage is evolving rapidly through 2025-2026. Check with your provincial drug plan or insurer using the DIN of the specific generic product. Generic coverage is likely to become much more widespread as products establish market presence.
        </p>

        <h2 id="side-effects">Side Effects & Safety</h2>

        <h3>What are the most common side effects of GLP-1 medications?</h3>
        <p>
          The most common side effects are gastrointestinal and dose-dependent: nausea (reported by 30-44% of patients in clinical trials), diarrhea (15-20%), constipation (10-15%), vomiting (10-14%), and abdominal discomfort (5-10%). These side effects are almost always most intense during the dose titration phase and improve significantly for most patients after weeks 4-8 as the body adapts. Decreased appetite - reported by approximately 70% of patients - is an intended effect of the medications, not a side effect per se. See our full <Link href="/side-effects">side effects guide</Link>.
        </p>

        <h3>Are GLP-1 medications safe long-term?</h3>
        <p>
          GLP-1 medications have been in clinical use since the early 2000s (liraglutide for diabetes since 2010), giving researchers a substantial long-term safety dataset. The SUSTAIN and STEP trial programmes for semaglutide ran for 68-104 weeks, and the landmark SELECT cardiovascular outcomes trial (2023) followed patients for over 3 years - showing not just safety but a 20% reduction in major cardiovascular events. Current evidence supports long-term use for most patients, though as with any medication, ongoing monitoring by a healthcare provider is appropriate.
        </p>

        <h3>Who should NOT take GLP-1 medications?</h3>
        <p>
          GLP-1 medications are contraindicated in:
        </p>
        <ul>
          <li>Patients with a personal or family history of medullary thyroid carcinoma (MTC) - due to theoretical thyroid C-cell risk based on rodent data</li>
          <li>Patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN2)</li>
          <li>Pregnant women or those planning pregnancy (discontinue at least 2 months before attempting conception)</li>
          <li>Patients with a history of severe pancreatitis (relative contraindication - discuss with your physician)</li>
          <li>Patients with known hypersensitivity to the active ingredient</li>
        </ul>

        <h3>What happens if I stop taking GLP-1 medications?</h3>
        <p>
          Weight regain is common and expected when GLP-1 medications are discontinued. The STEP 4 trial found that patients who stopped semaglutide after 20 weeks regained approximately two-thirds of their lost weight within one year. This is not a personal failing - it reflects the biological nature of obesity as a chronic condition requiring ongoing treatment. Many clinicians now approach GLP-1 medications the same way they approach antihypertensives or statins: as long-term maintenance therapy, not a short-term fix.
        </p>

        <h3>Can I drink alcohol while on GLP-1 medications?</h3>
        <p>
          There is no absolute prohibition on alcohol with GLP-1 medications, but moderation is strongly advised. GLP-1 medications slow gastric emptying, which can alter how quickly alcohol is absorbed - the onset may be delayed but the effects potentially amplified. Some patients also report that GLP-1 medications reduce their desire for alcohol (the same appetite-reduction mechanism appears to extend to addictive substances for some patients). Discuss your specific situation with your prescribing physician.
        </p>

        <h2 id="quick-reference">Quick Reference</h2>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-4">GLP-1 Medications at a Glance</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[rgba(27,58,107,0.2)]">
                  <th className="text-left py-2 pr-4 text-xs font-bold text-gray-900">Medication</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold text-gray-900">Molecule</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold text-gray-900">Frequency</th>
                  <th className="text-left py-2 text-xs font-bold text-gray-900">Avg. Weight Loss</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { drug: "Ozempic",   mol: "Semaglutide",  freq: "Weekly",     wl: "~9-13%" },
                  { drug: "Wegovy",    mol: "Semaglutide",  freq: "Weekly",     wl: "~15%" },
                  { drug: "Mounjaro",  mol: "Tirzepatide",  freq: "Weekly",     wl: "~20-22%" },
                  { drug: "Rybelsus",  mol: "Semaglutide",  freq: "Daily",      wl: "~4-5%" },
                  { drug: "Saxenda",   mol: "Liraglutide",  freq: "Daily",      wl: "~8%" },
                ].map((row, i) => (
                  <tr key={row.drug} className={i % 2 === 0 ? "" : "bg-[rgba(27,58,107,0.04)]"}>
                    <td className="py-2 pr-4 text-xs font-semibold text-gray-900">{row.drug}</td>
                    <td className="py-2 pr-4 text-xs text-gray-700">{row.mol}</td>
                    <td className="py-2 pr-4 text-xs text-gray-700">{row.freq}</td>
                    <td className="py-2 text-xs font-bold text-[#1B3A6B]">{row.wl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p>
          For detailed dosing schedules, see our <Link href="/dosing">GLP-1 dosing guide</Link>. For a full side-by-side comparison, see the <Link href="/compare">medication comparison page</Link>.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-500 leading-relaxed">
          <strong>Medical disclaimer:</strong> This FAQ is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. GLP-1 medications require a valid prescription from a licensed Canadian healthcare provider. Always consult a qualified clinician before starting, changing, or stopping any medication.
        </div>
      </div>
    </ArticleLayout>
  );
}
