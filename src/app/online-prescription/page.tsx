import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL, FELIX_LINK, PROVINCES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Get a GLP-1 Prescription Online in Canada (2025 Guide)",
  description:
    "A step-by-step guide to getting Ozempic, Wegovy, or Mounjaro prescribed online in Canada - how virtual care works, which provinces are covered, what to expect, and how home delivery works.",
  alternates: {
    canonical: `${SITE_URL}/online-prescription`,
    languages: { "en-CA": `${SITE_URL}/online-prescription` },
  },
};

const toc = [
  { id: "virtual-care",     label: "How Virtual Care Works" },
  { id: "provinces",        label: "Provinces Covered" },
  { id: "the-process",      label: "Step-by-Step Process" },
  { id: "assessment",       label: "What Happens at Assessment" },
  { id: "eligibility",      label: "Who Qualifies" },
  { id: "cost-consult",     label: "Cost of the Consultation" },
  { id: "home-delivery",    label: "Home Delivery" },
  { id: "insurance",        label: "Insurance & Coverage" },
  { id: "faq",              label: "FAQ" },
];

const related = [
  { href: "/semaglutide",       emoji: "💉", title: "Semaglutide Complete Guide",          date: "May 2025" },
  { href: "/generic-semaglutide",emoji: "🔬", title: "Generic Semaglutide: Plosbrio & Poviztra", date: "May 2025" },
  { href: "/cost",              emoji: "💰", title: "Province-by-Province Cost Guide",     date: "May 2025" },
  { href: "/insurance-coverage",emoji: "🛡️", title: "Insurance Coverage Guide",            date: "May 2025" },
];

export default function OnlinePrescriptionPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Access Guide"
        readTime="7 min read"
        date="May 2025"
        headline="How to Get a GLP-1 Prescription Online in Canada"
        standfirst="Virtual care has made GLP-1 prescriptions accessible from home in most Canadian provinces. Here is exactly how the online process works - from your first assessment to medication at your door."
      />

      <div className="prose-editorial">
        <p>
          Until recently, getting a prescription for Ozempic, Wegovy, or Mounjaro meant booking a physician appointment, waiting weeks, and navigating a healthcare system that often underdiagnoses and under-treats obesity. Virtual care has changed this. Today, Canadians in most provinces can complete a medical assessment online, receive a prescription from a licensed Canadian physician within hours, and have their medication delivered to their door - often at the same cost as picking it up at a pharmacy.
        </p>

        <h2 id="virtual-care">How Virtual Care for GLP-1 Medications Works</h2>
        <p>
          Virtual care for GLP-1 prescriptions is fully legal and regulated in Canada. Provincial Colleges of Physicians and Surgeons permit physicians to assess patients and issue prescriptions via telemedicine, provided they meet the same clinical standards as an in-person consultation.
        </p>
        <p>
          The key practical difference from a traditional clinic visit: everything happens online or via app, on your schedule. There is no waiting room, no travel, and no need to take time off work. Most platforms complete the process within a few hours on a business day.
        </p>
        <p>
          Online platforms do not prescribe GLP-1 medications indiscriminately. A licensed Canadian physician reviews your health history, current medications, and weight-related concerns before making a prescribing decision. If you do not meet clinical criteria, the physician will decline to prescribe and may recommend alternative care pathways.
        </p>

        <h2 id="provinces">Which Provinces Are Covered</h2>
        <p>
          Felix Health (our affiliate partner) currently offers GLP-1 virtual care in the following provinces:
        </p>
        <div className="flex flex-wrap gap-2 my-5 not-prose">
          {PROVINCES.map((p) => (
            <span key={p.name} className="inline-flex items-center rounded-full border border-[rgba(15,110,86,0.25)] bg-[#E1F5EE]/50 px-4 py-1.5 text-sm font-medium text-gray-800">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#1D9E75]" aria-hidden="true" />
              {p.name}
            </span>
          ))}
        </div>
        <p>
          <strong>Not currently available:</strong> Quebec and Canadian territories (Northwest Territories, Nunavut, Yukon). Quebec has distinct telehealth regulations (Collège des médecins du Québec) that currently limit cross-provincial virtual prescribing.
        </p>

        <h2 id="the-process">Step-by-Step: The Online GLP-1 Prescription Process</h2>
        <ol>
          <li>
            <strong>Complete an online medical assessment</strong> - You fill out a detailed health intake covering your current weight, BMI, medical history, current medications, past weight-loss attempts, and relevant conditions (diabetes, cardiovascular disease, thyroid history, etc.). This typically takes 5–10 minutes.
          </li>
          <li>
            <strong>Physician review</strong> - A licensed Canadian physician in your province reviews your intake. This is an asynchronous review (not a live video call in most cases), typically completed within a few hours during business hours. The physician may ask follow-up questions via the platform's messaging system.
          </li>
          <li>
            <strong>Prescription decision</strong> - The physician issues a prescription if you are clinically appropriate, or declines with an explanation and optional alternative recommendations. You receive a notification either way.
          </li>
          <li>
            <strong>Pharmacy selection or home delivery</strong> - You choose to have the prescription sent to your preferred pharmacy for pickup, or you opt into home delivery coordination. Most platforms can arrange home delivery at no premium over in-store dispensing.
          </li>
          <li>
            <strong>Ongoing management</strong> - Follow-up prescriptions and dose adjustments are handled through the same platform. Most platforms require check-ins every 1–3 months.
          </li>
        </ol>

        <h2 id="assessment">What Happens During Your Online Assessment</h2>
        <p>
          The online assessment is a medical intake form that serves the same function as an in-person consultation. A well-designed assessment will ask about:
        </p>
        <ul>
          <li><strong>Current health:</strong> Weight, height, BMI calculation, blood pressure (if known), recent lab results (if available)</li>
          <li><strong>Medical history:</strong> Diabetes diagnosis, cardiovascular disease, thyroid conditions, kidney function, gastrointestinal disorders</li>
          <li><strong>Contraindications screening:</strong> Personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia type 2 (MEN2); pregnancy or breastfeeding; known hypersensitivity to semaglutide or tirzepatide</li>
          <li><strong>Current medications:</strong> Drug interactions are assessed, particularly with insulin and other diabetes medications</li>
          <li><strong>Weight history:</strong> Prior weight-loss attempts, outcomes, current lifestyle factors</li>
        </ul>
        <p>
          You do not need recent bloodwork to start the assessment, though having lab results available (particularly HbA1c and creatinine/eGFR if you have diabetes or kidney concerns) can help your physician make a more informed decision. Some platforms will request you get baseline labs before starting treatment.
        </p>

        <FelixInline />

        <h2 id="eligibility">Who Qualifies for an Online GLP-1 Prescription</h2>
        <p>
          The clinical criteria are the same whether you see a physician in person or online. You are most likely to be approved if you:
        </p>
        <ul>
          <li>Have a BMI ≥ 30, or BMI ≥ 27 with at least one weight-related health condition (hypertension, type 2 diabetes, dyslipidemia, sleep apnea, or cardiovascular disease)</li>
          <li>Have type 2 diabetes and need glycemic improvement (for Ozempic/Rybelsus on-label)</li>
          <li>Have no contraindications to GLP-1 medications</li>
          <li>Reside in a province where the platform operates</li>
          <li>Are 18 or older</li>
        </ul>
        <p>
          You may be declined if you have a personal or family history of medullary thyroid carcinoma or MEN2, if you are pregnant or planning pregnancy, or if you have certain gastrointestinal conditions that make GLP-1 therapy inappropriate.
        </p>

        <h2 id="cost-consult">Cost of the Online Consultation</h2>
        <p>
          Platform fees vary. Felix Health's model includes the physician consultation as part of the prescription service, with no separate per-visit fee in most cases. The medication cost is then a separate pharmacy transaction at standard dispensing prices.
        </p>
        <p>
          Provincial health insurance (OHIP, MSP, AHCIP, etc.) does not cover online GLP-1 consultations at private virtual care platforms - these are outside the public system. However, many employer flexible spending accounts (FSAs) and health spending accounts (HSAs) can be used to cover consultation fees.
        </p>

        <h2 id="home-delivery">Home Delivery: How It Works</h2>
        <p>
          Home delivery of GLP-1 medications is now available at the same price as in-store pickup in most provinces, thanks to the Novo Nordisk Care Rx program and pharmacy delivery services that have integrated with virtual care platforms.
        </p>
        <p>
          When you opt for home delivery through Felix Health:
        </p>
        <ul>
          <li>Your prescription is sent electronically to a partner pharmacy</li>
          <li>The pharmacy processes the prescription and ships it to your address</li>
          <li>Delivery typically arrives within 1–3 business days depending on your location</li>
          <li>Cold-chain packaging is used where required for injection pens</li>
          <li>Subsequent refills can be set up for automatic dispatch so you never run out</li>
        </ul>
        <p>
          <strong>Note:</strong> GLP-1 injection pens require proper cold storage (2–8°C / 36–46°F) before first use. Once opened, most pens can be kept at room temperature for up to 56 days (Ozempic) or 28 days (Wegovy, Mounjaro) - check your product monograph for exact instructions.
        </p>

        <h2 id="insurance">Can I Use Insurance for an Online Prescription?</h2>
        <p>
          Yes - insurance coverage applies to the medication cost, regardless of whether the prescription was written by a clinic physician or a virtual care physician. The prescription itself is identical legally.
        </p>
        <p>
          If you are on BC PharmaCare, ODB, or another provincial plan, your provincial coverage applies to the dispensed medication. If you have private drug insurance, your plan covers the same drugs it would at a brick-and-mortar pharmacy.
        </p>
        <p>
          For medications requiring prior authorization (which includes most GLP-1 medications on private plans), the virtual care physician can submit the PA form on your behalf - the same as a GP would.
        </p>
        <p>
          See our <Link href="/insurance-coverage">insurance coverage guide</Link> for province-by-province details.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Do I need to see a physician in person first?</h3>
        <p>No. For GLP-1 prescriptions via Felix Health, the entire process is conducted online. You do not need a prior in-person visit or a referral. A licensed physician reviews your health intake and makes an independent prescribing decision.</p>

        <h3>Is a virtual GLP-1 prescription as valid as one from my GP?</h3>
        <p>Yes. Prescriptions issued by licensed Canadian physicians through virtual care platforms are legally identical to in-person prescriptions. Your pharmacy processes them identically, and your insurance treats them the same.</p>

        <h3>What if my assessment is declined?</h3>
        <p>If the physician determines you are not a suitable candidate, you will receive an explanation. Common reasons include contraindications (thyroid history, pregnancy) or not meeting BMI/comorbidity criteria. The physician may recommend alternative care pathways, including a referral to an in-person obesity specialist.</p>

        <h3>How quickly can I start treatment?</h3>
        <p>From completing your assessment to having medication in hand: typically 2–5 business days if home delivery is selected. If you pick up at a local pharmacy, it can be within 24 hours of your prescription being issued.</p>

        <h3>Can I use a virtual prescription with my regular pharmacy?</h3>
        <p>Yes. If you prefer your regular pharmacy, the prescription can be sent electronically or you can bring a printed copy. There is no requirement to use a platform's partner pharmacy.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-500 leading-relaxed">
          <strong>Affiliate disclosure:</strong> This page contains affiliate links to Felix Health. We may earn a commission when you start a Felix assessment through our links, at no additional cost to you. Felix is our recommended virtual care platform for GLP-1 prescriptions in Canada.
        </div>
      </div>
    </ArticleLayout>
  );
}
