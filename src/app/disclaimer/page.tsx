import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, MEDICAL_DISCLAIMER, PROVINCE_DISCLAIMER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Medical Disclaimer, Affiliate Disclosure & Editorial Standards",
  description:
    "Full medical disclaimer, affiliate disclosure, editorial standards, and province availability notice for WeightLossInjections.ca.",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
    languages: { "en-CA": `${SITE_URL}/disclaimer` },
  },
  robots: { index: true, follow: true },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the content on WeightLossInjections.ca medical advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Content on this site is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a licensed Canadian healthcare provider before starting any medication.",
      },
    },
    {
      "@type": "Question",
      name: "Which Canadian provinces can get online GLP-1 prescriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online GLP-1 prescriptions through Felix Health (our affiliate partner) are available in Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland & Labrador, Nova Scotia, Ontario, Prince Edward Island, and Saskatchewan. Service is not currently available in Quebec or Canadian territories.",
      },
    },
    {
      "@type": "Question",
      name: "Does this site receive compensation for recommending Felix Health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WeightLossInjections.ca has an affiliate relationship with Felix Health and may receive compensation when readers click affiliate links and complete an assessment. All sponsored content and affiliate links are clearly disclosed.",
      },
    },
  ],
};

export default function DisclaimerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-700 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1B3A6B] transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Disclaimer</span>
        </nav>

        <h1
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Disclaimer, Disclosures &amp; Editorial Standards
        </h1>
        <p className="text-gray-700 text-sm mb-10">Last updated: May 18, 2026</p>

        <div className="prose-editorial space-y-10">

          {/* Medical Disclaimer */}
          <section id="medical">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-amber-800 uppercase tracking-wide mb-2">Medical Disclaimer</p>
              <p className="text-amber-900 text-sm leading-relaxed">{MEDICAL_DISCLAIMER}</p>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Medical Disclaimer
            </h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              {SITE_NAME} is an independent editorial publication. We are <strong>not</strong> a medical clinic,
              pharmacy, or healthcare provider. Nothing published on this website - including articles, guides,
              comparison tables, cost estimates, or sponsored content - constitutes medical advice, a clinical
              recommendation, or a substitute for professional medical consultation.
            </p>
            <p className="text-gray-900 leading-relaxed mb-4">
              GLP-1 receptor agonists (including semaglutide, tirzepatide, and oral semaglutide) are
              <strong> prescription medications</strong> in Canada. They may only be obtained through a valid
              prescription issued by a licensed Canadian physician or nurse practitioner following a proper
              clinical assessment. Eligibility criteria, dosing, and appropriateness vary by individual.
            </p>
            <p className="text-gray-900 leading-relaxed">
              Always consult a qualified healthcare professional before starting, stopping, or modifying any
              medication. If you experience adverse effects, contact your prescriber or call Health Link 811
              (available in most provinces).
            </p>
          </section>

          {/* Province Availability */}
          <section id="provinces">
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Province &amp; Territory Availability
            </h2>
            <div className="bg-[#E8EFFF] border border-[rgba(15,110,86,0.25)] rounded-xl p-5 mb-5">
              <p className="text-[#0F2547] text-sm leading-relaxed">{PROVINCE_DISCLAIMER}</p>
            </div>
            <p className="text-gray-900 leading-relaxed mb-4">
              Online prescription services for GLP-1 medications through our affiliate partner{" "}
              <strong>Felix Health</strong> are currently available to residents of the following provinces:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
              {[
                { code: "AB", name: "Alberta" },
                { code: "BC", name: "British Columbia" },
                { code: "MB", name: "Manitoba" },
                { code: "NB", name: "New Brunswick" },
                { code: "NL", name: "Newfoundland & Labrador" },
                { code: "NS", name: "Nova Scotia" },
                { code: "ON", name: "Ontario" },
                { code: "PE", name: "Prince Edward Island" },
                { code: "SK", name: "Saskatchewan" },
              ].map((p) => (
                <div key={p.code} className="flex items-center gap-2 bg-white border border-[rgba(27,58,107,0.2)] rounded-lg px-3 py-2">
                  <span className="text-[10px] font-bold text-[#1B3A6B] bg-[#E8EFFF] px-1.5 py-0.5 rounded">{p.code}</span>
                  <span className="text-sm text-gray-700">{p.name}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Not currently available in:</strong> Quebec, Northwest Territories, Nunavut, and Yukon.
              Quebec residents and residents of Canadian territories should consult a local physician or clinic
              directly. Quebec operates under different telehealth and online pharmacy regulations (governed by
              the Collège des médecins du Québec and the Ordre des pharmaciens du Québec).
            </p>
          </section>

          {/* Affiliate Disclosure */}
          <section id="affiliate">
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Affiliate &amp; Sponsored Content Disclosure
            </h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              {SITE_NAME} has an affiliate relationship with{" "}
              <strong>Felix Health</strong>, a licensed Canadian telehealth provider. When you click an affiliate
              link on this site and complete an assessment or purchase through Felix, we may receive a commission
              at no additional cost to you.
            </p>
            <p className="text-gray-900 leading-relaxed mb-4">
              All sponsored and affiliate content is clearly labelled with disclosures such as{" "}
              <em>"Sponsored · Felix Health"</em> or <em>"Sponsored Partner."</em> Sponsored content does not
              influence our independent editorial coverage, cost estimates, clinical summaries, or comparisons.
            </p>
            <p className="text-gray-900 leading-relaxed">
              We are <strong>not</strong> affiliated with, endorsed by, or compensated by Novo Nordisk (maker
              of Ozempic/Wegovy/Rybelsus), Eli Lilly (maker of Mounjaro), or any other pharmaceutical
              manufacturer.
            </p>
          </section>

          {/* Editorial Standards */}
          <section id="editorial">
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Editorial Standards &amp; Sources
            </h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              Editorial content on {SITE_NAME} is produced by our independent editorial team. We aim to present
              accurate, up-to-date information drawn from authoritative sources including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-[15px]">
              <li>Health Canada drug approvals and monographs</li>
              <li>Peer-reviewed clinical trials (SUSTAIN, STEP, SURMOUNT series)</li>
              <li>Provincial drug formularies (ODB, PharmaCare, RAMQ, Alberta Blue Cross, etc.)</li>
              <li>The New England Journal of Medicine, The Lancet, and other peer-reviewed journals</li>
              <li>Canadian Diabetes Care Guidelines</li>
              <li>Obesity Canada clinical practice guidelines</li>
            </ul>
            <p className="text-gray-900 leading-relaxed">
              Despite our best efforts, drug coverage, pricing, and availability change frequently. Always
              verify current information with your pharmacist, provincial drug plan, or healthcare provider
              before making medical or financial decisions.
            </p>
          </section>

          {/* Regulatory Notice */}
          <section id="regulatory">
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Regulatory Notice
            </h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              All medications referenced on this site are regulated by <strong>Health Canada</strong>. Only
              medications approved by Health Canada may be legally prescribed and dispensed in Canada.
              Importation of prescription medications from other countries without Health Canada authorization
              is illegal and potentially dangerous.
            </p>
            <p className="text-gray-900 leading-relaxed">
              Telehealth prescribers featured via our affiliate links are licensed by the appropriate provincial
              College of Physicians and Surgeons and are required to follow Canadian prescribing standards,
              including conducting a medically appropriate assessment before issuing any prescription.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-700">
              Questions about this disclosure? Contact us at{" "}
              <a href="mailto:editorial@weightlossinjections.ca" className="text-[#1B3A6B] hover:underline">
                editorial@weightlossinjections.ca
              </a>
              . Return to{" "}
              <Link href="/" className="text-[#1B3A6B] hover:underline">
                WeightLossInjections.ca
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
