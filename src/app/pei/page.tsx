import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections in PEI - Prince Edward Island Drug Plan & Access Guide 2026",
  description:
    "Complete guide to Ozempic, Wegovy, and Mounjaro in Prince Edward Island: PEI Pharmacare coverage, private insurance, virtual care access, and how to get GLP-1 medications on PEI.",
  alternates: {
    canonical: `${SITE_URL}/pei`,
    languages: { "en-CA": `${SITE_URL}/pei`, "x-default": `${SITE_URL}/pei` },
  },
};

const toc = [
  { id: "pei-overview",      label: "PEI Overview" },
  { id: "pei-pharmacare",    label: "PEI Pharmacare Coverage" },
  { id: "wegovy-pei",        label: "Wegovy on PEI" },
  { id: "private-insurance", label: "Private Insurance" },
  { id: "access-online",     label: "Getting a Prescription Online" },
  { id: "cost-pei",          label: "Cost Without Coverage" },
  { id: "faq",               label: "PEI FAQ" },
];

const related = [
  { href: "/newfoundland",      emoji: "🌊", title: "Newfoundland & Labrador Guide",        date: "May 2026" },
  { href: "/nova-scotia",       emoji: "🦞", title: "Nova Scotia: NS Pharmacare Guide",     date: "May 2026" },
  { href: "/insurance-coverage",emoji: "🛡️", title: "National Insurance Coverage Guide",   date: "May 2026" },
  { href: "/cost",              emoji: "💰", title: "Province-by-Province Cost Guide",     date: "May 2026" },
];

export default function PEIPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Province Guide"
        readTime="5 min read"
        date="May 2026"
        headline="Weight Loss Injections in Prince Edward Island: PEI Pharmacare & Access Guide"
        standfirst="PEI is Canada's smallest province by population but has above-average rates of obesity and diabetes. Here is what Islanders need to know about GLP-1 medication access and coverage."
      />

      <div className="prose-editorial">
        <p>
          Prince Edward Island is home to approximately 175,000 residents - Canada's smallest province by population. Despite its small size, PEI has above-average rates of obesity and type 2 diabetes. PEI Pharmacare provides income-based drug coverage for eligible Islanders, and virtual care is particularly valuable given the limited number of specialist physicians on the island.
        </p>

        <h2 id="pei-overview">PEI at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "Population",          value: "175K+",   sub: "PEI residents" },
            { label: "T2D prevalence",      value: "~10%",    sub: "Above national average" },
            { label: "Ozempic (PEI Pharmacare)", value: "Limited", sub: "Income-based programs" },
            { label: "Wegovy (PEI Pharmacare)", value: "Not listed", sub: "Weight management only" },
            { label: "Virtual care",        value: "Available", sub: "Island-wide via Felix" },
            { label: "Home delivery",       value: "$0 extra", sub: "Via Novo Nordisk Care Rx" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#1B3A6B]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-black mt-1">{s.label}</p>
              <p className="text-xs text-black mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="pei-pharmacare">PEI Pharmacare Coverage</h2>
        <p>
          PEI Pharmacare provides drug coverage through several income-based programs:
        </p>
        <ul>
          <li>
            <strong>PEI Seniors Drug Program:</strong> For Islanders 65 and over. Provides drug coverage including GLP-1 medications for type 2 diabetes, with income-based co-payments.
          </li>
          <li>
            <strong>PEI Social Assistance Drug Program:</strong> For residents receiving social assistance. Full formulary coverage including Ozempic for type 2 diabetes.
          </li>
          <li>
            <strong>PEI Catastrophic Drug Program:</strong> For Islanders facing very high drug costs relative to income. Provides a backstop for high drug expenditures after a deductible is met.
          </li>
        </ul>
        <p>
          Ozempic (semaglutide) is covered under PEI Pharmacare programs for type 2 diabetes with appropriate criteria. Working-age Islanders who are employed and not receiving social assistance rely on employer benefits or pay out-of-pocket.
        </p>
        <p>
          PEI's small population means there are fewer specialist physicians (endocrinologists, obesity medicine specialists) on the island than in larger provinces. Many PEI residents rely on their family physician for GLP-1 prescribing, and virtual care platforms provide an important supplement to this limited capacity.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">PEI Access Note</p>
          <p className="text-sm text-black">
            The Catastrophic Drug Program is particularly valuable on PEI for Islanders who do not qualify for seniors or social assistance programs but face significant drug costs. If you are spending more than a set threshold on drugs relative to your income, contact PEI Health PEI at 1-800-321-5492 to check eligibility.
          </p>
        </div>

        <h2 id="wegovy-pei">Wegovy on PEI</h2>
        <p>
          Wegovy is not listed on any PEI Pharmacare program for weight management. Private insurance is the primary alternative for Islanders seeking Wegovy coverage.
        </p>

        <FelixInline />

        <h2 id="private-insurance">Private Insurance on PEI</h2>
        <p>
          PEI's economy includes government employment, healthcare, agriculture (particularly potato farming), tourism, and a growing tech sector:
        </p>
        <ul>
          <li><strong>PEI provincial government employees</strong> have drug benefits through the provincial group plan - GLP-1 coverage requires prior authorization</li>
          <li><strong>Health PEI employees</strong> (healthcare workers) have comprehensive drug benefits</li>
          <li><strong>Agriculture, tourism, and seasonal workers</strong> may have limited or no drug benefits - the generic semaglutide option and patient support programs are most relevant for this group</li>
          <li><strong>UPEI and Holland College employees</strong> have academic group benefits</li>
        </ul>

        <h2 id="access-online">Getting a Prescription Online on PEI</h2>
        <p>
          Felix Health serves all of Prince Edward Island. Given PEI's limited specialist physician capacity, virtual care is particularly useful for Islanders who cannot easily see an endocrinologist or obesity medicine specialist. The complete online assessment and prescription process is available island-wide, with delivery to any PEI address.
        </p>

        <h2 id="cost-pei">Cost on PEI Without Coverage</h2>
        <p>Without insurance on PEI, approximate monthly costs as of May 2026:</p>
        <ul>
          <li><strong>Ozempic (0.5–2 mg):</strong> ~$235–$420/month</li>
          <li><strong>Wegovy (2.4 mg):</strong> ~$400–$430/month</li>
          <li><strong>Mounjaro (5–15 mg):</strong> ~$490–$610/month</li>
          <li><strong>Generic semaglutide (expected 2025-26):</strong> Estimated $50–$150/month</li>
        </ul>
        <p>See the full <Link href="/cost">province-by-province cost guide</Link> for more detail.</p>

        <h2 id="faq">PEI FAQ</h2>

        <h3>Is it hard to get a GLP-1 prescription on PEI?</h3>
        <p>Access can be more challenging on PEI than in larger provinces due to limited specialist capacity. Virtual care platforms like Felix Health solve this problem entirely - you can get an assessment and prescription from a PEI-licensed physician online without any wait for a clinic appointment.</p>

        <h3>Is Felix available on Prince Edward Island?</h3>
        <p>Yes. Felix Health serves all of PEI and can arrange delivery to any island address.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          PEI Pharmacare eligibility and formulary listings change periodically. This information reflects policies as of May 2026. Contact Health PEI (1-800-321-5492) for current program eligibility and drug coverage details.
        </div>
      </div>
    </ArticleLayout>
  );
}
