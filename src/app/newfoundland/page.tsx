import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections in Newfoundland & Labrador - NL Drug Plan & Access Guide 2026",
  description:
    "Complete guide to Ozempic, Wegovy, and Mounjaro in Newfoundland & Labrador: NL Prescription Drug Program coverage, private insurance, virtual care, and GLP-1 access in NL.",
  alternates: {
    canonical: `${SITE_URL}/newfoundland`,
    languages: { "en-CA": `${SITE_URL}/newfoundland`, "x-default": `${SITE_URL}/newfoundland` },
  },
};

const toc = [
  { id: "nl-overview",       label: "NL Overview" },
  { id: "nl-drug-plan",      label: "NL Drug Plan Coverage" },
  { id: "wegovy-nl",         label: "Wegovy in NL" },
  { id: "private-insurance", label: "Private Insurance" },
  { id: "access-online",     label: "Getting a Prescription Online" },
  { id: "cost-nl",           label: "Cost Without Coverage" },
  { id: "faq",               label: "NL FAQ" },
];

const related = [
  { href: "/pei",               emoji: "🏝️", title: "PEI: Pharmacare Guide",               date: "May 2026" },
  { href: "/insurance-coverage",emoji: "🛡️", title: "National Insurance Coverage Guide",   date: "May 2026" },
  { href: "/cost",              emoji: "💰", title: "Province-by-Province Cost Guide",     date: "May 2026" },
  { href: "/generic-semaglutide",emoji: "🔬", title: "Generic Semaglutide in Canada",      date: "May 2026" },
];

export default function NewfoundlandPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Province Guide"
        readTime="6 min read"
        date="May 2026"
        headline="Weight Loss Injections in Newfoundland & Labrador: NL Drug Plan & Access Guide"
        standfirst="Newfoundland & Labrador has one of Canada's highest rates of obesity and type 2 diabetes. Here is a complete guide to GLP-1 medication access and coverage for NL residents."
      />

      <div className="prose-editorial">
        <p>
          Newfoundland and Labrador is home to approximately 540,000 residents and faces some of the most significant metabolic health challenges in Canada - the province has among the highest rates of obesity and type 2 diabetes nationally. The NL Prescription Drug Program provides coverage for eligible residents, while geography and healthcare provider shortages make virtual care particularly valuable in NL.
        </p>

        <h2 id="nl-overview">Newfoundland & Labrador at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "Population",           value: "540K+",   sub: "NL residents" },
            { label: "Obesity rate",         value: "~36%",    sub: "Among highest in Canada" },
            { label: "Ozempic (NL Drug Plan)",value: "Limited", sub: "Select populations only" },
            { label: "Wegovy (NL Drug Plan)", value: "Not listed", sub: "Weight management only" },
            { label: "Virtual care",         value: "Available", sub: "Province-wide via Felix" },
            { label: "Home delivery",        value: "$0 extra", sub: "Via Novo Nordisk Care Rx" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#1B3A6B]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-black mt-1">{s.label}</p>
              <p className="text-xs text-black mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="nl-drug-plan">NL Prescription Drug Program</h2>
        <p>
          The Newfoundland and Labrador Prescription Drug Program (NL PDP) provides coverage for eligible residents through several sub-programs:
        </p>
        <ul>
          <li><strong>65Plus Plan:</strong> For NL residents aged 65 and over. Co-payments apply based on income. Ozempic is listed for type 2 diabetes.</li>
          <li><strong>Access Plan:</strong> For lower-income NL residents who do not have private insurance. Covers a broad formulary including GLP-1 medications for diabetes.</li>
          <li><strong>Assurance Plan:</strong> For NL residents who have private insurance but face very high drug costs. Acts as a catastrophic backstop.</li>
          <li><strong>Cystic Fibrosis, Kidney and Phenylketonuria programs:</strong> Specialized programs not applicable to GLP-1 medications.</li>
        </ul>
        <p>
          The Access Plan is particularly important for NL residents: it provides drug coverage for residents who do not have other private insurance and meet income criteria. If you are uninsured and have limited income, the NL Access Plan may cover your Ozempic costs for type 2 diabetes.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">NL Virtual Care Note</p>
          <p className="text-sm text-black">
            Many NL communities - particularly on the island and in Labrador - face significant physician shortage challenges. Virtual care platforms like Felix Health are especially valuable in NL, allowing residents in rural and remote communities to access GLP-1 assessments and prescriptions without the barrier of finding a local prescriber. Delivery is available province-wide.
          </p>
        </div>

        <h2 id="wegovy-nl">Wegovy in Newfoundland & Labrador</h2>
        <p>
          Wegovy is not listed on the NL PDP for weight management. Given that NL has the highest obesity rates in Canada (approximately 36% of adults), this represents a significant unmet need. Advocacy organizations are pushing for coverage expansion.
        </p>

        <FelixInline />

        <h2 id="private-insurance">Private Insurance in NL</h2>
        <p>
          NL's economy has traditionally centred on oil and gas (offshore), fishing, and public sector employment:
        </p>
        <ul>
          <li><strong>Offshore energy workers</strong> (Hibernia, Terra Nova, White Rose projects) typically have excellent group benefits through operators and unions - GLP-1 coverage is often included</li>
          <li><strong>NL provincial government employees</strong> have drug benefits through the Government of Newfoundland and Labrador group plan</li>
          <li><strong>Fishing industry workers</strong> - coverage varies widely by employer size and union membership</li>
          <li><strong>Rural and remote residents</strong> with self-employment or smaller employers may have no drug benefits, making the NL Access Plan or generic semaglutide critical</li>
        </ul>

        <h2 id="access-online">Getting a Prescription Online in NL</h2>
        <p>
          Felix Health serves all of Newfoundland and Labrador, including rural areas and the coast of Labrador. This is particularly important in NL given physician shortages in many communities. Online assessment, prescription, and delivery are all available throughout the province.
        </p>

        <h2 id="cost-nl">Cost in NL Without Coverage</h2>
        <p>Without insurance in Newfoundland and Labrador, approximate monthly costs as of May 2026:</p>
        <ul>
          <li><strong>Ozempic (0.5–2 mg):</strong> ~$240–$425/month</li>
          <li><strong>Wegovy (2.4 mg):</strong> ~$405–$435/month</li>
          <li><strong>Mounjaro (5–15 mg):</strong> ~$490–$610/month</li>
          <li><strong>Generic semaglutide (expected 2025-26):</strong> Estimated $50–$150/month</li>
        </ul>
        <p>See the full <Link href="/cost">province-by-province cost guide</Link> for more detail.</p>

        <h2 id="faq">NL FAQ</h2>

        <h3>What is the NL Access Plan and do I qualify?</h3>
        <p>The NL Access Plan provides drug coverage for NL residents who do not have private drug insurance and meet income thresholds. If you have no employer benefits and limited income, you may qualify. Contact NL Health Services at 1-888-687-2657 for eligibility information.</p>

        <h3>Is Felix available in rural Newfoundland and Labrador?</h3>
        <p>Yes. Felix Health serves all NL communities with internet access. The online assessment requires no local physician, and medication can be delivered by mail to any NL address - including rural and remote communities.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          NL PDP eligibility and formulary listings change periodically. This information reflects policies as of May 2026. Contact NL Health Services (1-888-687-2657) for current eligibility and Access Plan criteria.
        </div>
      </div>
    </ArticleLayout>
  );
}
