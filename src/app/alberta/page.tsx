import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections in Alberta - Alberta Blue Cross & Access Guide 2025",
  description:
    "Complete guide to Ozempic, Wegovy, and Mounjaro in Alberta: Alberta Blue Cross coverage, private insurance, virtual care access, and home delivery for Alberta residents.",
  alternates: {
    canonical: `${SITE_URL}/alberta`,
    languages: { "en-CA": `${SITE_URL}/alberta` },
  },
};

const toc = [
  { id: "ab-overview",       label: "Alberta Overview" },
  { id: "ab-blue-cross",     label: "Alberta Blue Cross Coverage" },
  { id: "wegovy-ab",         label: "Wegovy in Alberta" },
  { id: "private-insurance", label: "Private Insurance in Alberta" },
  { id: "access-online",     label: "Getting a Prescription Online" },
  { id: "cost-ab",           label: "Cost Without Coverage" },
  { id: "faq",               label: "Alberta FAQ" },
];

const related = [
  { href: "/ontario",            emoji: "🍁", title: "Ontario: ODB Coverage Guide",         date: "May 2025" },
  { href: "/british-columbia",   emoji: "🌲", title: "BC: PharmaCare Coverage Guide",       date: "May 2025" },
  { href: "/insurance-coverage", emoji: "🛡️", title: "National Insurance Coverage Guide",   date: "May 2025" },
  { href: "/cost",               emoji: "💰", title: "Province-by-Province Cost Guide",     date: "May 2025" },
];

export default function AlbertaPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Province Guide"
        readTime="7 min read"
        date="May 2025"
        headline="Weight Loss Injections in Alberta: Alberta Blue Cross & Access Guide"
        standfirst="Alberta has one of the highest rates of type 2 diabetes in Canada. Here is a complete guide for Alberta residents navigating GLP-1 medication coverage, costs, and access pathways."
      />

      <div className="prose-editorial">
        <p>
          Alberta is home to approximately 4.7 million residents, with type 2 diabetes affecting roughly 10% of the adult population - among the highest provincial rates in Canada, driven in part by demographic and lifestyle factors unique to the province. The Alberta government provides drug coverage through Alberta Blue Cross for specific eligible populations, though most working-age Albertans rely on employer group benefits or pay out-of-pocket for GLP-1 medications.
        </p>

        <h2 id="ab-overview">Alberta at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "Population",              value: "4.7M+",    sub: "Alberta residents" },
            { label: "T2D prevalence",          value: "~10%",     sub: "Among highest in Canada" },
            { label: "Ozempic (AB Blue Cross)",  value: "Covered",  sub: "With authorization for T2D" },
            { label: "Wegovy (AB Blue Cross)",   value: "Not listed", sub: "Weight management only" },
            { label: "Virtual care",            value: "Available", sub: "Province-wide via Felix" },
            { label: "Home delivery",           value: "$0 extra", sub: "Via Novo Nordisk Care Rx" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#0F6E56]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-gray-900 mt-1">{s.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="ab-blue-cross">Alberta Blue Cross Government Coverage</h2>
        <p>
          Alberta Blue Cross administers several government-sponsored drug benefit programs on behalf of Alberta Health. These programs cover specific eligible populations - they are <em>not</em> universal coverage for all Albertans. Eligible groups include:
        </p>
        <ul>
          <li><strong>Seniors (65+) on the Alberta Seniors Benefit program</strong></li>
          <li><strong>AISH (Assured Income for the Severely Handicapped) recipients</strong></li>
          <li><strong>Income Support (IS) recipients</strong></li>
          <li><strong>Widows/widowers pension recipients</strong></li>
          <li><strong>Palliative Care Drug Benefit</strong></li>
          <li><strong>Alberta Child Health Benefit (ACHB) for eligible low-income families</strong></li>
        </ul>
        <p>
          For eligible recipients, Ozempic (semaglutide) is covered under the government-sponsored plan with prior authorization for type 2 diabetes mellitus. Coverage requires documented clinical criteria including inadequate glycemic control on other agents.
        </p>
        <p>
          <strong>Most working-age Albertans are not enrolled in government-sponsored Alberta Blue Cross.</strong> If you are employed, your drug coverage will typically come through an employer group benefits plan - which may or may not be administered by Alberta Blue Cross.
        </p>

        <div className="bg-[#F2FAF7] border border-[rgba(15,110,86,0.2)] rounded-xl p-5 my-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#0F6E56] mb-2">Alberta Coverage Note</p>
          <p className="text-sm text-gray-900">
            Alberta does not have a universal pharmacare program for working-age adults. If you are not enrolled in a government-sponsored benefit program and do not have employer benefits, you will pay full list price for GLP-1 medications. This makes Alberta one of the provinces where patient support programs and generic semaglutide access is most important.
          </p>
        </div>

        <h2 id="wegovy-ab">Wegovy in Alberta</h2>
        <p>
          Wegovy (semaglutide 2.4 mg) is <strong>not listed</strong> on any Alberta government drug benefit program for weight management as of May 2025. This is consistent with all other Canadian provinces.
        </p>
        <p>
          Private employer plans are increasingly covering Wegovy for weight management, particularly at larger Alberta employers (oil and gas, government, healthcare). Check your benefits booklet or contact your plan administrator to confirm coverage.
        </p>

        <FelixInline />

        <h2 id="private-insurance">Private Insurance in Alberta</h2>
        <p>
          The majority of employed Albertans have access to private drug benefits through employer group plans. Alberta has a high employment rate in well-paying resource-sector jobs, meaning many residents have above-average group benefit coverage:
        </p>
        <ul>
          <li><strong>Energy sector employers:</strong> Suncor, CNRL, Cenovus, and other major oil and gas companies generally offer comprehensive group benefits including GLP-1 coverage for both diabetes and weight management.</li>
          <li><strong>Alberta government employees:</strong> The Alberta government employee plan (administered through Alberta Blue Cross Group Benefits) covers GLP-1 medications with prior authorization.</li>
          <li><strong>Healthcare workers:</strong> AHS (Alberta Health Services) employees have extensive drug benefits that may cover GLP-1 medications.</li>
          <li><strong>Prior authorization:</strong> All plans require PA for GLP-1 medications. Your physician or Felix Health can assist with the PA form submission.</li>
          <li><strong>Step therapy requirements:</strong> Some Alberta plans require documentation that you tried and failed metformin and/or other first-line diabetes medications before approving GLP-1 coverage.</li>
        </ul>

        <h2 id="access-online">Getting a GLP-1 Prescription Online in Alberta</h2>
        <p>
          Alberta has a well-developed virtual care framework. The College of Physicians and Surgeons of Alberta (CPSA) permits physicians to provide telehealth services to Alberta residents, making it straightforward to obtain a GLP-1 assessment and prescription online.
        </p>
        <p>
          Through <a href="https://afflat3e1.com/trk/lnk/9AC89778-AF07-4236-94B8-94E9519B0116/?o=29537&c=918271&a=776838&k=9244A3303B13F605EF0D210C5B870AF8&l=33492" target="_blank" rel="noopener sponsored">Felix Health</a>:
        </p>
        <ol>
          <li>Complete an online medical intake (5–10 minutes) from any device</li>
          <li>An Alberta-licensed physician reviews your file - usually within a few hours on weekdays</li>
          <li>A prescription is issued if appropriate and sent to a pharmacy or coordinated for home delivery in Alberta</li>
          <li>Felix can also assist with private insurance prior authorization paperwork</li>
        </ol>

        <h2 id="cost-ab">Cost in Alberta Without Coverage</h2>
        <p>Without insurance in Alberta, approximate monthly costs (list price) as of May 2025:</p>
        <ul>
          <li><strong>Ozempic 0.5 mg:</strong> ~$225–$265/month</li>
          <li><strong>Ozempic 1 mg:</strong> ~$325–$370/month</li>
          <li><strong>Ozempic 2 mg:</strong> ~$375–$415/month</li>
          <li><strong>Wegovy 2.4 mg (maintenance):</strong> ~$390–$425/month</li>
          <li><strong>Mounjaro 15 mg:</strong> ~$500–$620/month</li>
          <li><strong>Generic semaglutide (expected 2025-26):</strong> Estimated $50–$150/month</li>
        </ul>
        <p>
          See the full <Link href="/cost">province-by-province cost guide</Link> and our <Link href="/generic-semaglutide">generic semaglutide page</Link> for the latest on pricing.
        </p>

        <h2 id="faq">Alberta FAQ</h2>

        <h3>I'm a working Albertan without employer benefits. How do I afford GLP-1s?</h3>
        <p>Without employer coverage, your main options are: (1) Novo Nordisk Care Rx patient support program - ask your physician or pharmacist about enrollment; (2) Generic semaglutide (Plosbrio/Poviztra), which became available in 2025 at significantly lower prices; (3) Individually purchased drug insurance through Alberta Blue Cross or other insurers.</p>

        <h3>Does Alberta Blue Cross cover Ozempic for weight management?</h3>
        <p>The government-sponsored Alberta Blue Cross plans cover Ozempic for type 2 diabetes only, not weight management without a diabetes diagnosis. Some employer group plans administered by Alberta Blue Cross do cover GLP-1s for weight management - this varies by plan.</p>

        <h3>Is Felix available throughout Alberta?</h3>
        <p>Yes. Felix Health operates province-wide in Alberta and can prescribe GLP-1 medications and arrange delivery to any Alberta address.</p>

        <h3>Will the step therapy requirement affect my Alberta employer plan?</h3>
        <p>Step therapy requirements vary by plan. If your plan requires evidence of prior treatment failure with metformin, your physician can provide documentation of your clinical history. Felix Health can assist in preparing prior authorization documentation for Alberta plans.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-500 leading-relaxed">
          Alberta drug benefit criteria and employer plan formularies are subject to change. This information reflects general policies as of May 2025. Verify current coverage with Alberta Blue Cross (1-800-661-6995) or your employer plan administrator.
        </div>
      </div>
    </ArticleLayout>
  );
}
