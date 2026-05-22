import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections in Ontario - ODB, OHIP+ & Access Guide 2025",
  description:
    "Ontario's complete guide to Ozempic, Wegovy, and Mounjaro: ODB coverage criteria, private insurance, virtual care access, and how to get GLP-1 medications delivered to your home in Ontario.",
  alternates: {
    canonical: `${SITE_URL}/ontario`,
    languages: { "en-CA": `${SITE_URL}/ontario` },
  },
};

const toc = [
  { id: "ontario-overview",  label: "Ontario Overview" },
  { id: "odb-coverage",      label: "ODB Coverage for Ozempic" },
  { id: "wegovy-ontario",    label: "Wegovy in Ontario" },
  { id: "private-insurance", label: "Private Insurance in Ontario" },
  { id: "access-online",     label: "Getting a Prescription Online" },
  { id: "home-delivery",     label: "Home Delivery in Ontario" },
  { id: "cost-ontario",      label: "Cost Without Coverage" },
  { id: "faq",               label: "Ontario FAQ" },
];

const related = [
  { href: "/insurance-coverage", emoji: "🛡️", title: "National Insurance Coverage Guide", date: "May 2025" },
  { href: "/cost",               emoji: "💰", title: "Cost Guide by Province",             date: "May 2025" },
  { href: "/semaglutide",        emoji: "💉", title: "Semaglutide Complete Guide",         date: "May 2025" },
  { href: "/compare",            emoji: "⚖️", title: "Compare All Medications",            date: "May 2025" },
];

export default function OntarioPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Ontario Guide"
        readTime="8 min read"
        date="May 2025"
        headline="Weight Loss Injections in Ontario: Access, ODB Coverage & How to Get Started"
        standfirst="Ontario has the largest GLP-1 patient population in Canada - and some of the most complex access pathways. Here is a complete guide for Ontario residents."
        heroEmoji="🍁"
        heroGradient="linear-gradient(135deg,#991B1B,#DC2626)"
      />

      <div className="prose-editorial">
        <p>
          Ontario is home to more than 14 million residents and approximately 1.3 million people living with diagnosed type 2 diabetes - one of the highest rates in Canada. The province has a significant population using or seeking GLP-1 medications, and its public drug program (ODB) is among the most detailed in terms of coverage criteria.
        </p>
        <p>
          Whether you're looking to access Ozempic, Wegovy, Mounjaro, or a generic alternative, this guide explains exactly how the Ontario system works and how to navigate it effectively.
        </p>

        <h2 id="ontario-overview">Ontario at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "ODB enrollees",        value: "4.4M+",    sub: "Ontarians on public drug plan" },
            { label: "T2D prevalence",       value: "~9%",      sub: "Of Ontario population" },
            { label: "Ozempic (ODB)",        value: "Covered",  sub: "With special authorization (T2D)" },
            { label: "Wegovy (ODB)",         value: "Not covered", sub: "Weight management only" },
            { label: "Virtual care",         value: "Available", sub: "Province-wide via Felix" },
            { label: "Home delivery",        value: "$0 extra", sub: "Via Novo Nordisk Care Rx" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#1B3A6B]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-gray-900 mt-1">{s.label}</p>
              <p className="text-xs text-gray-700 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="odb-coverage">ODB Coverage for Ozempic in Ontario</h2>
        <p>
          The Ontario Drug Benefit (ODB) program covers Ozempic (semaglutide 0.5 mg and 1 mg) for eligible Ontarians with type 2 diabetes. Coverage requires <strong>Limited Use (LU) authorization</strong> - a specific prescription code that your physician must include when submitting the prescription.
        </p>
        <p>
          The LU criteria for Ozempic (semaglutide) under ODB (as of 2025) include:
        </p>
        <ul>
          <li>Diagnosis of type 2 diabetes mellitus</li>
          <li>HbA1c ≥ 7.0% despite 3 months of adequate trial of at least one other antihyperglycemic agent (typically metformin)</li>
          <li>eGFR ≥ 30 mL/min/1.73 m² (kidney function threshold)</li>
        </ul>
        <p>
          If you qualify, ODB covers the full cost of Ozempic subject to your regular ODB co-payment (which is income-based for most eligible Ontarians, typically $0–$6.11 per prescription for those on OW/ODSP, and a $100 annual deductible plus 25% co-pay for seniors).
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">ODB Tip for Ontario Patients</p>
          <p className="text-sm text-gray-900">
            When your physician submits the Ozempic prescription, they must include the Limited Use code (LU). This is a specific code that tells the ODB system the clinical reason for the prescription. Without it, the claim will be rejected. Make sure your physician knows to include the LU code - your pharmacist can also assist in identifying the correct one.
          </p>
        </div>

        <h2 id="wegovy-ontario">Wegovy in Ontario</h2>
        <p>
          Wegovy (semaglutide 2.4 mg, approved for weight management) is <strong>not listed on the ODB formulary</strong> for weight management as of May 2025. This means public coverage for Wegovy in Ontario is not available for patients without a diabetes diagnosis.
        </p>
        <p>
          Ontario Trillium Drug Program (TDP) - the program for Ontarians with high drug costs relative to income - may partially cover Wegovy costs after the deductible is met, but this depends on individual income and household drug expenses.
        </p>
        <p>
          Advocates including Obesity Canada and the Canadian Medical Association are actively lobbying for provincial formulary inclusion of Wegovy for weight management. This is an evolving policy space - check Ontario's formulary updates regularly.
        </p>

        <FelixInline />

        <h2 id="private-insurance">Private Insurance in Ontario</h2>
        <p>
          Many Ontarians have private drug insurance through employer group benefits. Coverage for GLP-1 medications in Ontario private plans varies significantly:
        </p>
        <ul>
          <li><strong>Major employer plans (Sun Life, Manulife, Great-West Life/Canada Life):</strong> Many have added GLP-1 coverage for weight management in 2023–2025. Check your benefits booklet or call your plan administrator.</li>
          <li><strong>Prior authorization requirements:</strong> Almost all plans require PA for GLP-1 medications. Your physician or their office staff submits the PA form with clinical documentation.</li>
          <li><strong>Annual maximums:</strong> Watch for drug benefit maximums - a $1,500/year cap is quickly exhausted at $400/month. Many employers are increasing these caps as GLP-1 use grows.</li>
          <li><strong>OHIP+:</strong> Ontario's OHIP+ program covers eligible individuals under 25 - but GLP-1 medications for weight management are not covered by OHIP+.</li>
        </ul>

        <h2 id="access-online">Getting a Prescription in Ontario Without a Clinic Visit</h2>
        <p>
          Ontario has a well-established virtual care ecosystem, and GLP-1 prescriptions are routinely provided via telemedicine for eligible patients.
        </p>
        <p>
          The process with a platform like <a href="https://afflat3e1.com/trk/lnk/9AC89778-AF07-4236-94B8-94E9519B0116/?o=29537&c=918271&a=776838&k=9244A3303B13F605EF0D210C5B870AF8&l=33492" target="_blank" rel="noopener sponsored">Felix Health</a>:
        </p>
        <ol>
          <li>Complete an online medical assessment (5–10 minutes) including your health history, current medications, and weight goals</li>
          <li>A licensed Ontario physician reviews your assessment - typically within a few hours during business days</li>
          <li>If appropriate, the physician issues a prescription and forwards it to a pharmacy of your choice or coordinates home delivery</li>
          <li>Your medication arrives at your door - at the same price as in-store dispensing</li>
        </ol>
        <p>
          This approach is fully compliant with Ontario's Telemedicine Act and the College of Physicians and Surgeons of Ontario's standards for virtual care.
        </p>

        <h2 id="home-delivery">Home Delivery in Ontario</h2>
        <p>
          The Novo Nordisk Care Rx program is fully operational in Ontario, enabling home delivery of Ozempic and Wegovy at no extra cost compared to pharmacy pickup. Major Ontario pharmacies - including Rexall, Shoppers Drug Mart, Costco Pharmacy, and many independents - now offer home delivery of prescription medications.
        </p>
        <p>
          When using Felix Health, the entire workflow is handled online - assessment, prescription, and coordinated delivery to your Ontario address.
        </p>

        <h2 id="cost-ontario">Cost in Ontario Without Coverage</h2>
        <p>Without any insurance in Ontario, approximate monthly costs (list price) as of May 2025:</p>
        <ul>
          <li><strong>Ozempic 0.5 mg:</strong> ~$220–$260/month</li>
          <li><strong>Ozempic 1 mg:</strong> ~$320–$360/month</li>
          <li><strong>Ozempic 2 mg:</strong> ~$380–$420/month</li>
          <li><strong>Wegovy 2.4 mg (maintenance dose):</strong> ~$390–$420/month</li>
          <li><strong>Mounjaro 15 mg:</strong> ~$500–$620/month</li>
          <li><strong>Generic semaglutide (expected 2025–2026):</strong> Likely $50–$150/month</li>
        </ul>
        <p>
          See the full <Link href="/cost">province-by-province cost breakdown →</Link>
        </p>

        <h2 id="faq">Ontario FAQ</h2>

        <h3>Does ODB cover Ozempic for weight loss (not diabetes)?</h3>
        <p>No. ODB covers Ozempic only for type 2 diabetes with specific clinical criteria (the LU code). Weight management without a diabetes diagnosis is not an ODB-covered indication.</p>

        <h3>My GP won't prescribe Ozempic for weight loss. What can I do?</h3>
        <p>You have several options: seek a referral to an obesity specialist or endocrinologist; use a virtual care platform like Felix where physicians assess your full clinical picture; or ask your GP specifically about Wegovy, which has a Health Canada weight-management approval that some GPs are more comfortable prescribing on-label.</p>

        <h3>Is Felix available throughout Ontario?</h3>
        <p>Yes. Felix Health is available province-wide in Ontario and can prescribe and arrange delivery to any Ontario address.</p>

        <h3>Will Ontario ODB cover generic semaglutide for weight loss?</h3>
        <p>There is no indication that ODB will expand coverage to include generic semaglutide for weight management (without diabetes) in the near term. Coverage for generics on ODB is tied to approved indications, which does not yet include weight management alone.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-700 leading-relaxed">
          Ontario ODB criteria and formulary listings are subject to change. This information reflects publicly available policy as of May 2025. Verify current criteria with your physician, pharmacist, or the Ontario Drug Benefit formulary database.
        </div>
      </div>
    </ArticleLayout>
  );
}
