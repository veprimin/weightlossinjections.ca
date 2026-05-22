import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections in Nova Scotia - NS Pharmacare & Access Guide 2025",
  description:
    "Complete guide to Ozempic, Wegovy, and Mounjaro in Nova Scotia: Nova Scotia Pharmacare coverage, private insurance, virtual care access, and how to get GLP-1 medications in NS.",
  alternates: {
    canonical: `${SITE_URL}/nova-scotia`,
    languages: { "en-CA": `${SITE_URL}/nova-scotia` },
  },
};

const toc = [
  { id: "ns-overview",       label: "Nova Scotia Overview" },
  { id: "ns-pharmacare",     label: "NS Pharmacare Coverage" },
  { id: "wegovy-ns",         label: "Wegovy in Nova Scotia" },
  { id: "private-insurance", label: "Private Insurance" },
  { id: "access-online",     label: "Getting a Prescription Online" },
  { id: "cost-ns",           label: "Cost Without Coverage" },
  { id: "faq",               label: "Nova Scotia FAQ" },
];

const related = [
  { href: "/new-brunswick",     emoji: "🔔", title: "New Brunswick: NB PDP Guide",         date: "May 2025" },
  { href: "/insurance-coverage",emoji: "🛡️", title: "National Insurance Coverage Guide",   date: "May 2025" },
  { href: "/cost",              emoji: "💰", title: "Province-by-Province Cost Guide",     date: "May 2025" },
  { href: "/generic-semaglutide",emoji: "🔬", title: "Generic Semaglutide in Canada",      date: "May 2025" },
];

export default function NovaScotiaPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Province Guide"
        readTime="6 min read"
        date="May 2025"
        headline="Weight Loss Injections in Nova Scotia: NS Pharmacare & Access Guide"
        standfirst="Nova Scotia Pharmacare primarily covers seniors and social assistance recipients for GLP-1 medications. Here is what Nova Scotians need to know about coverage, costs, and how to access treatment."
      />

      <div className="prose-editorial">
        <p>
          Nova Scotia is home to approximately 1.0 million residents. The province has one of Canada's older population profiles, with a significant proportion of seniors who may benefit from GLP-1 medications for type 2 diabetes management. Nova Scotia Pharmacare provides coverage for seniors and certain low-income residents, while most working-age Nova Scotians rely on private employer benefits.
        </p>

        <h2 id="ns-overview">Nova Scotia at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "Population",              value: "1.0M+",   sub: "Nova Scotia residents" },
            { label: "T2D prevalence",          value: "~10%",    sub: "Above national average" },
            { label: "Ozempic (NS Pharmacare)", value: "Limited", sub: "Seniors/social assistance only" },
            { label: "Wegovy (NS Pharmacare)",  value: "Not listed", sub: "Weight management only" },
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

        <h2 id="ns-pharmacare">Nova Scotia Pharmacare Coverage</h2>
        <p>
          Nova Scotia Pharmacare is primarily structured around two programs:
        </p>
        <ul>
          <li>
            <strong>NS Seniors Pharmacare:</strong> For Nova Scotians 65 and older. Provides drug coverage subject to an annual deductible (income-based) and co-pays. Ozempic is listed for type 2 diabetes under this program with appropriate clinical criteria.
          </li>
          <li>
            <strong>NS Pharmacare for Low-Income Residents:</strong> For residents receiving Income Assistance or Disability Support. Provides broader coverage including GLP-1 medications for diabetes.
          </li>
          <li>
            <strong>NS Pharmacare for Children/Youth:</strong> Does not typically apply to GLP-1 medications.
          </li>
        </ul>
        <p>
          <strong>For working-age Nova Scotians who are employed and do not receive social assistance, there is no provincial pharmacare coverage</strong> - you rely on employer group benefits or pay out-of-pocket.
        </p>
        <p>
          Nova Scotia has one of the higher rates of type 2 diabetes in Canada (~10% of adults), partly reflecting older population demographics and lower average incomes. This makes the coverage gap for working-age adults a significant health equity issue in the province.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Nova Scotia Coverage Note</p>
          <p className="text-sm text-gray-900">
            Nova Scotia announced plans to expand pharmacare coverage in 2024-2025. Check the NS Health website for the most current program eligibility updates, as coverage for working-age low-income Nova Scotians may expand. Call 1-800-387-6665 for the NS Pharmacare information line.
          </p>
        </div>

        <h2 id="wegovy-ns">Wegovy in Nova Scotia</h2>
        <p>
          Wegovy is not listed on any Nova Scotia Pharmacare program for weight management. Private insurance or out-of-pocket payment are required. Given that NS Pharmacare for working-age adults is limited, Nova Scotians seeking Wegovy typically rely entirely on private employer benefits.
        </p>

        <FelixInline />

        <h2 id="private-insurance">Private Insurance in Nova Scotia</h2>
        <p>
          Private employer drug benefits are the primary coverage pathway for working-age Nova Scotians. Key employers and sectors:
        </p>
        <ul>
          <li><strong>Nova Scotia Health Authority (NSHA)</strong> - the largest employer in the province, healthcare workers have comprehensive benefits</li>
          <li><strong>Provincial government employees</strong> - covered under the NS Government collective agreement, typically with good drug benefits</li>
          <li><strong>University and academic sector</strong> - Dalhousie, NSCC, and other institutions have group benefits plans</li>
          <li><strong>Small business and self-employed Nova Scotians</strong> face the most limited access - GLP-1 costs are entirely out-of-pocket unless they purchase individual health insurance</li>
        </ul>

        <h2 id="access-online">Getting a Prescription Online in Nova Scotia</h2>
        <p>
          Felix Health operates province-wide in Nova Scotia. The complete online assessment, prescription, and home delivery process is available to NS residents. A Nova Scotia-licensed physician reviews your health intake and can prescribe GLP-1 medications for eligible patients.
        </p>

        <h2 id="cost-ns">Cost in Nova Scotia Without Coverage</h2>
        <p>Without insurance in Nova Scotia, approximate monthly costs as of May 2025:</p>
        <ul>
          <li><strong>Ozempic (0.5–2 mg):</strong> ~$230–$415/month</li>
          <li><strong>Wegovy (2.4 mg):</strong> ~$400–$430/month</li>
          <li><strong>Mounjaro (5–15 mg):</strong> ~$490–$610/month</li>
          <li><strong>Generic semaglutide (expected 2025-26):</strong> Estimated $50–$150/month</li>
        </ul>
        <p>See the full <Link href="/cost">province-by-province cost guide</Link> for more detail.</p>

        <h2 id="faq">Nova Scotia FAQ</h2>

        <h3>I'm a working Nova Scotian with no employer benefits. What are my options?</h3>
        <p>Your main options are: (1) Novo Nordisk Care Rx patient support program - ask your physician or pharmacist about enrollment; (2) Generic semaglutide (Plosbrio/Poviztra), available at 45-90% lower cost than brand-name Ozempic; (3) Individual health insurance through Blue Cross or another insurer. See our <Link href="/generic-semaglutide">generic semaglutide guide</Link>.</p>

        <h3>Is Felix available throughout Nova Scotia?</h3>
        <p>Yes. Felix Health operates province-wide in Nova Scotia including rural areas, and can arrange delivery to any NS address.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-700 leading-relaxed">
          NS Pharmacare eligibility and formulary listings change periodically. This information reflects policies as of May 2025. Contact NS Pharmacare (1-800-387-6665) for current eligibility and coverage details.
        </div>
      </div>
    </ArticleLayout>
  );
}
