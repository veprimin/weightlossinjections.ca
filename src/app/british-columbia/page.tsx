import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections in British Columbia - BC PharmaCare & Access Guide 2025",
  description:
    "Complete guide to Ozempic, Wegovy, and Mounjaro in British Columbia: BC PharmaCare Special Authority coverage, private insurance, virtual care, and home delivery options for BC residents.",
  alternates: {
    canonical: `${SITE_URL}/british-columbia`,
    languages: { "en-CA": `${SITE_URL}/british-columbia` },
  },
};

const toc = [
  { id: "bc-overview",       label: "BC Overview" },
  { id: "pharmabc",          label: "BC PharmaCare Coverage" },
  { id: "special-authority", label: "Special Authority Process" },
  { id: "wegovy-bc",         label: "Wegovy in BC" },
  { id: "private-insurance", label: "Private Insurance in BC" },
  { id: "access-online",     label: "Getting a Prescription Online" },
  { id: "cost-bc",           label: "Cost Without Coverage" },
  { id: "faq",               label: "BC FAQ" },
];

const related = [
  { href: "/ontario",           emoji: "🍁", title: "Ontario: ODB Coverage Guide",         date: "May 2025" },
  { href: "/alberta",           emoji: "🏔️", title: "Alberta: Blue Cross Coverage Guide",  date: "May 2025" },
  { href: "/insurance-coverage",emoji: "🛡️", title: "National Insurance Coverage Guide",   date: "May 2025" },
  { href: "/cost",              emoji: "💰", title: "Province-by-Province Cost Guide",     date: "May 2025" },
];

export default function BritishColumbiaPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Province Guide"
        readTime="7 min read"
        date="May 2025"
        headline="Weight Loss Injections in British Columbia: BC PharmaCare & Access Guide"
        standfirst="British Columbia has a well-established Special Authority process for GLP-1 medications. Here is a complete guide for BC residents navigating Ozempic, Wegovy, and Mounjaro coverage."
      />

      <div className="prose-editorial">
        <p>
          British Columbia is home to more than 5.6 million residents, with approximately 9% of the adult population living with diagnosed type 2 diabetes. BC PharmaCare provides drug coverage for eligible residents through several plan types, and semaglutide (Ozempic) is listed on the BC formulary for type 2 diabetes under a Special Authority process - one of the more accessible provincial pathways in Canada.
        </p>

        <h2 id="bc-overview">British Columbia at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "BC PharmaCare enrollees", value: "4.4M+",    sub: "Residents registered for PharmaCare" },
            { label: "T2D prevalence",           value: "~9%",      sub: "Of BC adult population" },
            { label: "Ozempic (PharmaCare)",     value: "Covered",  sub: "Special Authority required (T2D)" },
            { label: "Wegovy (PharmaCare)",      value: "Not listed", sub: "Weight management only" },
            { label: "Virtual care",             value: "Available", sub: "Province-wide via Felix" },
            { label: "Home delivery",            value: "$0 extra", sub: "Via Novo Nordisk Care Rx" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#0F6E56]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-gray-900 mt-1">{s.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="pharmabc">BC PharmaCare Coverage for Ozempic</h2>
        <p>
          BC PharmaCare is administered by the provincial government and provides subsidized drug coverage to eligible BC residents through several plans - most notably Plan B (regular benefits) and Plan C (Fair PharmaCare, income-based co-payments for all BC residents).
        </p>
        <p>
          Ozempic (semaglutide 0.5 mg, 1 mg, and 2 mg) is listed on the BC PharmaCare drug formulary under the <strong>Special Authority (SA)</strong> category for type 2 diabetes mellitus. This means coverage is available but requires pre-approval before the claim will be covered.
        </p>
        <p>The Special Authority criteria for Ozempic under BC PharmaCare (as of 2025) generally require:</p>
        <ul>
          <li>A diagnosis of type 2 diabetes mellitus</li>
          <li>Inadequate glycemic control despite appropriate use of other oral antihyperglycemic agents</li>
          <li>HbA1c above target (typically ≥ 7.0%) despite first-line treatment</li>
          <li>In some cases: evidence of cardiovascular disease or high cardiovascular risk, or intolerance to alternative agents</li>
        </ul>
        <p>
          Once Special Authority is granted, BC PharmaCare covers Ozempic subject to your Fair PharmaCare deductible and co-payment (based on household net income). Many BC residents with lower incomes pay $0 or a small co-pay per prescription.
        </p>

        <h2 id="special-authority">How the Special Authority Process Works in BC</h2>
        <p>
          Special Authority approval is obtained by your prescribing physician submitting a request to BC PharmaCare. The process typically takes 1–3 business days for straightforward cases, though complex situations may take longer.
        </p>
        <ol>
          <li><strong>Your physician submits an SA request</strong> online or by fax to BC PharmaCare, documenting the clinical criteria met</li>
          <li><strong>BC PharmaCare reviews</strong> the request - routine approvals are often processed within 1-2 business days</li>
          <li><strong>An SA number is issued</strong> if approved - your physician and pharmacist will receive notification</li>
          <li><strong>Your prescription is filled</strong> at a BC pharmacy with the SA number, and coverage is applied automatically</li>
          <li><strong>SA approvals are time-limited</strong> (typically 1–2 years) and require renewal with updated clinical documentation</li>
        </ol>
        <p>
          If you are working with a virtual care provider like Felix Health, they are fully equipped to manage the SA submission process and can submit the request on your behalf after your online assessment.
        </p>

        <div className="bg-[#F2FAF7] border border-[rgba(15,110,86,0.2)] rounded-xl p-5 my-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#0F6E56] mb-2">BC PharmaCare Tip</p>
          <p className="text-sm text-gray-900">
            BC PharmaCare's Fair PharmaCare plan automatically registers BC residents when they file their taxes. If you have not checked your PharmaCare deductible and coverage level recently, you can verify your status at the BC government's Health Insurance BC (HIBC) portal or by calling 1-800-663-7100.
          </p>
        </div>

        <h2 id="wegovy-bc">Wegovy in British Columbia</h2>
        <p>
          Wegovy (semaglutide 2.4 mg, approved for chronic weight management) is <strong>not currently listed on the BC PharmaCare formulary</strong> for weight management as of May 2025. This mirrors the situation in other provinces - no provincial drug plan covers Wegovy for weight management alone.
        </p>
        <p>
          BC residents who need Wegovy will either pay out-of-pocket, access coverage through private employer benefits, or explore patient support programs from Novo Nordisk.
        </p>

        <FelixInline />

        <h2 id="private-insurance">Private Insurance in BC</h2>
        <p>
          Many BC residents have private drug coverage through employer group benefits or individually purchased plans. For GLP-1 medications:
        </p>
        <ul>
          <li><strong>Major employer plans:</strong> BC's large employers (government, resource sector, tech) generally offer comprehensive group benefits. Many major plans have added GLP-1 coverage for weight management in 2023–2025.</li>
          <li><strong>BC Public Service MSP supplementary benefits:</strong> BC government employees and their families have access to the Pacific Blue Cross supplementary health plan, which may cover GLP-1 medications with prior authorization.</li>
          <li><strong>Prior authorization:</strong> All private plans require pre-approval for GLP-1 medications. Your physician or virtual care provider can submit the PA form with clinical documentation.</li>
          <li><strong>BC Medical Services Plan (MSP):</strong> MSP covers physician visits including virtual care assessments, but does not cover prescription drug costs.</li>
        </ul>

        <h2 id="access-online">Getting a GLP-1 Prescription Online in BC</h2>
        <p>
          BC has a mature virtual care ecosystem regulated by the College of Physicians and Surgeons of BC (CPSBC). GLP-1 prescriptions via telemedicine are routine for eligible patients.
        </p>
        <p>
          The process through a platform like <a href="https://afflat3e1.com/trk/lnk/9AC89778-AF07-4236-94B8-94E9519B0116/?o=29537&c=918271&a=776838&k=9244A3303B13F605EF0D210C5B870AF8&l=33492" target="_blank" rel="noopener sponsored">Felix Health</a>:
        </p>
        <ol>
          <li>Complete an online medical assessment (5–10 minutes) with your health history and weight goals</li>
          <li>A BC-licensed physician reviews your assessment - typically within a few hours on business days</li>
          <li>If clinically appropriate, a prescription is issued and forwarded to a BC pharmacy or coordinated for home delivery</li>
          <li>If you qualify for BC PharmaCare coverage, Felix can assist with the Special Authority submission</li>
        </ol>

        <h2 id="cost-bc">Cost in BC Without Coverage</h2>
        <p>Without insurance in British Columbia, approximate monthly costs (list price) as of May 2025:</p>
        <ul>
          <li><strong>Ozempic 0.5 mg:</strong> ~$210–$250/month</li>
          <li><strong>Ozempic 1 mg:</strong> ~$310–$350/month</li>
          <li><strong>Ozempic 2 mg:</strong> ~$370–$410/month</li>
          <li><strong>Wegovy 2.4 mg (maintenance):</strong> ~$385–$415/month</li>
          <li><strong>Mounjaro 15 mg:</strong> ~$490–$600/month</li>
          <li><strong>Generic semaglutide (Plosbrio/Poviztra, 2025-26):</strong> Estimated $50–$150/month</li>
        </ul>
        <p>
          See the full <Link href="/cost">province-by-province cost breakdown</Link> and our <Link href="/generic-semaglutide">generic semaglutide guide</Link> for the latest pricing.
        </p>

        <h2 id="faq">BC FAQ</h2>

        <h3>Does BC PharmaCare cover Ozempic for weight loss without diabetes?</h3>
        <p>No. BC PharmaCare's Special Authority for Ozempic is limited to type 2 diabetes mellitus. Weight management without a diabetes diagnosis is not a covered indication under PharmaCare.</p>

        <h3>How long does BC Special Authority approval take?</h3>
        <p>Routine Special Authority requests for Ozempic are typically processed within 1–3 business days. Complex or incomplete submissions may take longer. Your physician or Felix Health can track the status of your SA request.</p>

        <h3>Is Felix available throughout British Columbia?</h3>
        <p>Yes. Felix Health is available province-wide in BC and can prescribe, assist with Special Authority submissions, and arrange delivery to any BC address.</p>

        <h3>Will BC PharmaCare cover generic semaglutide?</h3>
        <p>Generic semaglutide (Plosbrio and Poviztra) approved by Health Canada in 2025 will eventually be listed on the BC PharmaCare formulary for type 2 diabetes, subject to the same Special Authority criteria as Ozempic. Formulary listing typically follows Health Canada approval within 6–18 months.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-500 leading-relaxed">
          BC PharmaCare criteria and formulary listings are subject to change. This information reflects publicly available policy as of May 2025. Verify current Special Authority criteria with your physician, pharmacist, or BC PharmaCare (1-800-663-7100).
        </div>
      </div>
    </ArticleLayout>
  );
}
