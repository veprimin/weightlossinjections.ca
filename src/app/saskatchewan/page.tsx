import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections in Saskatchewan - SK Drug Plan & Access Guide 2025",
  description:
    "Complete guide to Ozempic, Wegovy, and Mounjaro in Saskatchewan: Saskatchewan Drug Plan coverage, private insurance, virtual care, and how to access GLP-1 medications in Saskatchewan.",
  alternates: {
    canonical: `${SITE_URL}/saskatchewan`,
    languages: { "en-CA": `${SITE_URL}/saskatchewan` },
  },
};

const toc = [
  { id: "sk-overview",       label: "Saskatchewan Overview" },
  { id: "sk-drug-plan",      label: "SK Drug Plan Coverage" },
  { id: "wegovy-sk",         label: "Wegovy in Saskatchewan" },
  { id: "private-insurance", label: "Private Insurance" },
  { id: "access-online",     label: "Getting a Prescription Online" },
  { id: "cost-sk",           label: "Cost Without Coverage" },
  { id: "faq",               label: "Saskatchewan FAQ" },
];

const related = [
  { href: "/alberta",            emoji: "🏔️", title: "Alberta: Blue Cross Coverage Guide",  date: "May 2025" },
  { href: "/insurance-coverage", emoji: "🛡️", title: "National Insurance Coverage Guide",   date: "May 2025" },
  { href: "/cost",               emoji: "💰", title: "Province-by-Province Cost Guide",     date: "May 2025" },
  { href: "/generic-semaglutide",emoji: "🔬", title: "Generic Semaglutide in Canada",       date: "May 2025" },
];

export default function SaskatchewanPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Province Guide"
        readTime="6 min read"
        date="May 2025"
        headline="Weight Loss Injections in Saskatchewan: SK Drug Plan & Access Guide"
        standfirst="Saskatchewan's Drug Plan covers Ozempic for type 2 diabetes with special authorization. Here is what Saskatchewan residents need to know about access and coverage for GLP-1 medications."
      />

      <div className="prose-editorial">
        <p>
          Saskatchewan is home to approximately 1.2 million residents. The Saskatchewan Drug Plan provides prescription drug coverage to eligible residents, with Ozempic listed on the formulary for type 2 diabetes under a special authorization process. Like most provinces, there is no provincial coverage for GLP-1 medications prescribed solely for weight management.
        </p>

        <h2 id="sk-overview">Saskatchewan at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "Population",              value: "1.2M+",   sub: "Saskatchewan residents" },
            { label: "T2D prevalence",          value: "~9%",     sub: "Of adult population" },
            { label: "Ozempic (SK Drug Plan)",  value: "Covered", sub: "Special authorization (T2D)" },
            { label: "Wegovy (SK Drug Plan)",   value: "Not listed", sub: "Weight management only" },
            { label: "Virtual care",            value: "Available", sub: "Province-wide via Felix" },
            { label: "Home delivery",           value: "$0 extra", sub: "Via Novo Nordisk Care Rx" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#1B3A6B]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-gray-900 mt-1">{s.label}</p>
              <p className="text-xs text-gray-700 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="sk-drug-plan">Saskatchewan Drug Plan Coverage</h2>
        <p>
          The Saskatchewan Drug Plan (SK Drug Plan) provides prescription drug coverage to eligible Saskatchewan residents. Coverage is provided to seniors (65+), residents on social assistance, and those with certain disabilities. Ozempic (semaglutide) is listed on the SK Drug Plan formulary under special authorization for type 2 diabetes.
        </p>
        <p>
          Special authorization criteria for Ozempic under the SK Drug Plan generally require:
        </p>
        <ul>
          <li>Confirmed diagnosis of type 2 diabetes mellitus</li>
          <li>HbA1c above target (typically ≥ 7.0%) despite other antihyperglycemic therapy</li>
          <li>Documented prior use of metformin (or contraindication to it)</li>
          <li>No absolute contraindications to semaglutide</li>
        </ul>
        <p>
          Working-age Saskatchewanians who are employed and not on social assistance typically rely on employer group benefits for drug coverage. The SK Drug Plan is primarily for seniors and socially assisted residents.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Saskatchewan Note</p>
          <p className="text-sm text-gray-900">
            Saskatchewan also has the Family Health Benefits program for low-income families with children who do not qualify for social assistance but have low household income. This program includes drug coverage and may apply to some residents seeking GLP-1 coverage. Contact SK Health Authority to determine eligibility.
          </p>
        </div>

        <h2 id="wegovy-sk">Wegovy in Saskatchewan</h2>
        <p>
          Wegovy is not listed on the SK Drug Plan formulary for weight management. Private employer benefits or out-of-pocket payment are the primary options for Saskatchewanians seeking Wegovy.
        </p>

        <FelixInline />

        <h2 id="private-insurance">Private Insurance in Saskatchewan</h2>
        <p>
          Saskatchewan's economy includes significant agricultural, resource (potash, oil), and public sector employment - all sectors that often provide group drug benefits. GLP-1 coverage through private plans varies significantly by employer:
        </p>
        <ul>
          <li><strong>Resource and energy sector employers</strong> (Mosaic, Nutrien, Saskatchewan Oil/Gas) typically have comprehensive benefit plans that may cover GLP-1s with prior authorization</li>
          <li><strong>Provincial government employees</strong> covered under the Saskatchewan Government and General Employees' Union (SGEU) plan may have GLP-1 coverage with PA</li>
          <li><strong>Smaller employers</strong> often have more limited formularies - check your specific benefits booklet</li>
        </ul>

        <h2 id="access-online">Getting a Prescription Online in Saskatchewan</h2>
        <p>
          Felix Health is available province-wide in Saskatchewan. The online assessment and prescription process is identical to other provinces - a Saskatchewan-licensed physician reviews your health intake and can prescribe GLP-1 medications if clinically appropriate, with delivery to any Saskatchewan address.
        </p>

        <h2 id="cost-sk">Cost in Saskatchewan Without Coverage</h2>
        <p>Without insurance in Saskatchewan, approximate monthly costs as of May 2025:</p>
        <ul>
          <li><strong>Ozempic (0.5–2 mg):</strong> ~$225–$410/month</li>
          <li><strong>Wegovy (2.4 mg):</strong> ~$395–$425/month</li>
          <li><strong>Mounjaro (5–15 mg):</strong> ~$490–$610/month</li>
          <li><strong>Generic semaglutide (expected 2025-26):</strong> Estimated $50–$150/month</li>
        </ul>
        <p>See the full <Link href="/cost">province-by-province cost guide</Link> for more detail.</p>

        <h2 id="faq">Saskatchewan FAQ</h2>

        <h3>Does the SK Drug Plan cover Ozempic for weight loss without diabetes?</h3>
        <p>No. The SK Drug Plan covers semaglutide for type 2 diabetes only. Weight management without a diabetes diagnosis is not a covered indication.</p>

        <h3>Is Felix available throughout Saskatchewan?</h3>
        <p>Yes. Felix Health operates province-wide in Saskatchewan and can prescribe GLP-1 medications and arrange delivery to any Saskatchewan address.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-700 leading-relaxed">
          SK Drug Plan criteria change periodically. This information reflects policies as of May 2025. Verify current special authorization criteria at saskatchewandrug plan.ca or by calling 1-800-667-7581.
        </div>
      </div>
    </ArticleLayout>
  );
}
