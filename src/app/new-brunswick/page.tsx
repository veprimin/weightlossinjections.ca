import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections in New Brunswick - NB Drug Plan & Access Guide 2025",
  description:
    "Complete guide to Ozempic, Wegovy, and Mounjaro in New Brunswick: NB Prescription Drug Program coverage, private insurance, virtual care, and how to get GLP-1 medications in New Brunswick.",
  alternates: {
    canonical: `${SITE_URL}/new-brunswick`,
    languages: { "en-CA": `${SITE_URL}/new-brunswick` },
  },
};

const toc = [
  { id: "nb-overview",       label: "New Brunswick Overview" },
  { id: "nb-pdp",            label: "NB Drug Plan Coverage" },
  { id: "wegovy-nb",         label: "Wegovy in New Brunswick" },
  { id: "private-insurance", label: "Private Insurance" },
  { id: "access-online",     label: "Getting a Prescription Online" },
  { id: "cost-nb",           label: "Cost Without Coverage" },
  { id: "faq",               label: "New Brunswick FAQ" },
];

const related = [
  { href: "/nova-scotia",       emoji: "🦞", title: "Nova Scotia: NS Pharmacare Guide",    date: "May 2026" },
  { href: "/insurance-coverage",emoji: "🛡️", title: "National Insurance Coverage Guide",  date: "May 2026" },
  { href: "/cost",              emoji: "💰", title: "Province-by-Province Cost Guide",    date: "May 2026" },
  { href: "/generic-semaglutide",emoji: "🔬", title: "Generic Semaglutide in Canada",     date: "May 2026" },
];

export default function NewBrunswickPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Province Guide"
        readTime="6 min read"
        date="May 2026"
        headline="Weight Loss Injections in New Brunswick: NB Drug Plan & Access Guide"
        standfirst="New Brunswick's Prescription Drug Program covers Ozempic for eligible type 2 diabetes patients. Here is what New Brunswick residents need to know about accessing GLP-1 medications."
      />

      <div className="prose-editorial">
        <p>
          New Brunswick is home to approximately 810,000 residents and is Canada's only officially bilingual province. The New Brunswick Prescription Drug Program (NB PDP) provides drug coverage for eligible residents, with Ozempic listed for type 2 diabetes with authorization requirements.
        </p>

        <h2 id="nb-overview">New Brunswick at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "Population",          value: "810K+",   sub: "New Brunswick residents" },
            { label: "T2D prevalence",      value: "~11%",    sub: "Among highest provincially" },
            { label: "Ozempic (NB PDP)",    value: "Covered", sub: "With authorization (T2D)" },
            { label: "Wegovy (NB PDP)",     value: "Not listed", sub: "Weight management only" },
            { label: "Virtual care",        value: "Available", sub: "Province-wide via Felix" },
            { label: "Home delivery",       value: "$0 extra", sub: "Via Novo Nordisk Care Rx" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#1B3A6B]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-gray-900 mt-1">{s.label}</p>
              <p className="text-xs text-gray-700 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="nb-pdp">New Brunswick Prescription Drug Program</h2>
        <p>
          The New Brunswick Prescription Drug Program (NB PDP) provides prescription drug coverage for eligible New Brunswick residents. Eligible groups include seniors (65+), residents receiving social assistance, and those with certain disabilities. The program uses a formulary system with some drugs requiring prior authorization.
        </p>
        <p>
          Ozempic (semaglutide) is listed on the NB PDP formulary for type 2 diabetes mellitus with prior authorization. Criteria typically require:
        </p>
        <ul>
          <li>Documented type 2 diabetes diagnosis</li>
          <li>Inadequate glycemic control despite other oral antihyperglycemic agents</li>
          <li>HbA1c above target at the time of authorization request</li>
          <li>No contraindications to semaglutide use</li>
        </ul>
        <p>
          New Brunswick has one of the highest provincial rates of type 2 diabetes (approximately 11% of adults), driven in part by demographic factors and higher rates of obesity and sedentary lifestyles. This makes access to GLP-1 medications particularly relevant for the province.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Bilingual Access Note</p>
          <p className="text-sm text-gray-900">
            All NB PDP services and prior authorization processes are available in both English and French. Virtual care platforms including Felix Health can serve both francophone and anglophone New Brunswickers through their bilingual assessment process.
          </p>
        </div>

        <h2 id="wegovy-nb">Wegovy in New Brunswick</h2>
        <p>
          Wegovy is not listed on the NB PDP formulary for weight management. Private insurance through an employer benefits plan is the primary alternative for New Brunswickers seeking weight management coverage.
        </p>

        <FelixInline />

        <h2 id="private-insurance">Private Insurance in New Brunswick</h2>
        <p>
          New Brunswick's economy includes significant public sector employment (provincial government, healthcare, education) and manufacturing. Key considerations for private coverage:
        </p>
        <ul>
          <li><strong>NB provincial government employees</strong> have access to the NB Public Service benefits plan, which may cover GLP-1 medications with prior authorization</li>
          <li><strong>Healthcare workers</strong> at Horizon Health Network and Vitalite Health Network typically have comprehensive group benefits</li>
          <li><strong>Manufacturing and forestry sector workers</strong> (Irving, J.D. Irving, Cooke Aquaculture) - larger employers often have good benefits; smaller employers may not</li>
        </ul>

        <h2 id="access-online">Getting a Prescription Online in New Brunswick</h2>
        <p>
          Felix Health is available throughout New Brunswick. A New Brunswick-licensed physician (fully bilingual service available) reviews your online assessment and can prescribe GLP-1 medications if appropriate, with delivery to any NB address.
        </p>

        <h2 id="cost-nb">Cost in New Brunswick Without Coverage</h2>
        <p>Without insurance in New Brunswick, approximate monthly costs as of May 2026:</p>
        <ul>
          <li><strong>Ozempic (0.5–2 mg):</strong> ~$235–$420/month</li>
          <li><strong>Wegovy (2.4 mg):</strong> ~$400–$430/month</li>
          <li><strong>Mounjaro (5–15 mg):</strong> ~$490–$610/month</li>
          <li><strong>Generic semaglutide (expected 2025-26):</strong> Estimated $50–$150/month</li>
        </ul>
        <p>See the full <Link href="/cost">province-by-province cost guide</Link> for more detail.</p>

        <h2 id="faq">New Brunswick FAQ</h2>

        <h3>Is the NB PDP available to all New Brunswickers?</h3>
        <p>No. The NB PDP primarily covers seniors (65+), residents on social assistance, and those with certain disabilities. Working-age employed New Brunswickers typically rely on employer group benefits for drug coverage.</p>

        <h3>Is Felix available in French in New Brunswick?</h3>
        <p>Yes. Felix Health provides services in both English and French, making it accessible to francophone New Brunswickers throughout the province.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-700 leading-relaxed">
          NB PDP criteria and formulary listings change periodically. This information reflects policies as of May 2026. Contact NB Prescription Drug Program (1-800-332-3692 / Service bilingue disponible) for current eligibility and coverage.
        </div>
      </div>
    </ArticleLayout>
  );
}
