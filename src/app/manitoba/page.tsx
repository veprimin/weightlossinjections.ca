import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections in Manitoba - Manitoba Pharmacare & Access Guide 2026",
  description:
    "Complete guide to Ozempic, Wegovy, and Mounjaro in Manitoba: Manitoba Pharmacare coverage, private insurance, virtual care, and how to get GLP-1 medications in Manitoba.",
  alternates: {
    canonical: `${SITE_URL}/manitoba`,
    languages: { "en-CA": `${SITE_URL}/manitoba`, "x-default": `${SITE_URL}/manitoba` },
  },
};

const toc = [
  { id: "mb-overview",       label: "Manitoba Overview" },
  { id: "mb-pharmacare",     label: "Manitoba Pharmacare" },
  { id: "wegovy-mb",         label: "Wegovy in Manitoba" },
  { id: "private-insurance", label: "Private Insurance" },
  { id: "access-online",     label: "Getting a Prescription Online" },
  { id: "cost-mb",           label: "Cost Without Coverage" },
  { id: "faq",               label: "Manitoba FAQ" },
];

const related = [
  { href: "/ontario",            emoji: "🍁", title: "Ontario: ODB Coverage Guide",        date: "May 2026" },
  { href: "/insurance-coverage", emoji: "🛡️", title: "National Insurance Coverage Guide",  date: "May 2026" },
  { href: "/cost",               emoji: "💰", title: "Province-by-Province Cost Guide",    date: "May 2026" },
  { href: "/generic-semaglutide",emoji: "🔬", title: "Generic Semaglutide in Canada",      date: "May 2026" },
];

export default function ManitobaPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Province Guide"
        readTime="6 min read"
        date="May 2026"
        headline="Weight Loss Injections in Manitoba: Manitoba Pharmacare & Access Guide"
        standfirst="Manitoba Pharmacare uses an income-based deductible model that can make GLP-1 medications significantly more accessible for lower-income Manitobans. Here is how the system works."
      />

      <div className="prose-editorial">
        <p>
          Manitoba is home to approximately 1.4 million residents. The province operates a unique pharmacare model - Manitoba Pharmacare - that is income-based and open to all registered Manitobans, rather than limited to specific demographic groups. This structure means GLP-1 access is somewhat more equitable than in provinces with more restricted public drug programs, particularly for lower-income residents.
        </p>

        <h2 id="mb-overview">Manitoba at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
          {[
            { label: "Population",             value: "1.4M+",   sub: "Manitoba residents" },
            { label: "T2D prevalence",         value: "~9%",     sub: "Of adult population" },
            { label: "Ozempic (Pharmacare)",   value: "Covered", sub: "Income-based deductible (T2D)" },
            { label: "Wegovy (Pharmacare)",    value: "Not listed", sub: "Weight management only" },
            { label: "Virtual care",           value: "Available", sub: "Province-wide via Felix" },
            { label: "Home delivery",          value: "$0 extra", sub: "Via Novo Nordisk Care Rx" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xl font-bold text-[#1B3A6B]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</p>
              <p className="text-sm font-medium text-black mt-1">{s.label}</p>
              <p className="text-xs text-black mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="mb-pharmacare">Manitoba Pharmacare Coverage</h2>
        <p>
          Manitoba Pharmacare is a universal income-based drug coverage program. Unlike Ontario's ODB or Nova Scotia's Pharmacare - which primarily serve seniors and social assistance recipients - Manitoba Pharmacare is available to any Manitoban who registers, regardless of age or employment status.
        </p>
        <p>
          <strong>How it works:</strong> Every household pays an annual deductible based on household net income (roughly 3.19% of household income). Once your out-of-pocket drug spending reaches that deductible in a calendar year, Manitoba Pharmacare covers 100% of eligible drug costs for the remainder of the year.
        </p>
        <p>
          For GLP-1 medications:
        </p>
        <ul>
          <li><strong>Ozempic (semaglutide)</strong> is listed on the Manitoba Pharmacare formulary for type 2 diabetes mellitus, subject to eligibility criteria similar to other provinces (inadequate glycemic control, HbA1c above target)</li>
          <li>Lower-income Manitobans may reach their deductible threshold quickly and benefit from full coverage - making Manitoba Pharmacare more accessible than many provincial programs for this population</li>
          <li>Higher-income households have a higher deductible and may not benefit from coverage unless their drug costs are substantial</li>
        </ul>
        <p>
          To register for Manitoba Pharmacare, you need a Manitoba Health Registration Number and must apply through Manitoba Health's Pharmacare program. Registration is free.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Manitoba Pharmacare Tip</p>
          <p className="text-sm text-black">
            If your household income is modest, registering for Manitoba Pharmacare before starting GLP-1 treatment can significantly reduce your costs. Once your deductible is met, Pharmacare covers all listed drugs at 100%. Contact Manitoba Health at 1-800-742-6837 to register and confirm your deductible amount.
          </p>
        </div>

        <h2 id="wegovy-mb">Wegovy in Manitoba</h2>
        <p>
          Wegovy (semaglutide 2.4 mg for weight management) is not listed on the Manitoba Pharmacare formulary as of May 2026. This is consistent with all other provincial plans nationally. Private employer drug plans are the primary coverage pathway for Wegovy in Manitoba.
        </p>

        <FelixInline />

        <h2 id="private-insurance">Private Insurance in Manitoba</h2>
        <p>
          Many employed Manitobans have group benefits through their employer. Manitoba has a significant public sector, including healthcare (Shared Health Manitoba), education, and government workers - these employers typically offer comprehensive drug benefits that may cover GLP-1 medications with prior authorization.
        </p>
        <ul>
          <li><strong>Prior authorization</strong> is required by virtually all private plans for GLP-1 medications</li>
          <li><strong>Employer plans</strong> in Manitoba's large agricultural, manufacturing, and public sectors vary widely in GLP-1 coverage</li>
          <li>Check your benefits booklet under "specialty drugs" or contact your HR department to confirm coverage</li>
        </ul>

        <h2 id="access-online">Getting a Prescription Online in Manitoba</h2>
        <p>
          Felix Health is available province-wide in Manitoba. A Manitoba-licensed physician reviews your online assessment and can issue a prescription for Ozempic, Wegovy, or Mounjaro if clinically appropriate. Delivery to Manitoba addresses is available at no premium over pharmacy pickup prices.
        </p>

        <h2 id="cost-mb">Cost in Manitoba Without Coverage</h2>
        <p>Without insurance in Manitoba, approximate monthly costs as of May 2026:</p>
        <ul>
          <li><strong>Ozempic (0.5–2 mg):</strong> ~$220–$400/month</li>
          <li><strong>Wegovy (2.4 mg):</strong> ~$390–$420/month</li>
          <li><strong>Mounjaro (5–15 mg):</strong> ~$480–$600/month</li>
          <li><strong>Generic semaglutide (expected 2025-26):</strong> Estimated $50–$150/month</li>
        </ul>
        <p>See the full <Link href="/cost">province-by-province cost guide</Link> for more detail.</p>

        <h2 id="faq">Manitoba FAQ</h2>

        <h3>Can any Manitoban register for Manitoba Pharmacare?</h3>
        <p>Yes. Unlike most provincial drug plans that are limited to seniors, social assistance recipients, or specific groups, Manitoba Pharmacare is open to all Manitoba Health cardholders. Your annual deductible is income-based, so lower-income households benefit most.</p>

        <h3>Is Felix available throughout Manitoba?</h3>
        <p>Yes. Felix Health operates province-wide in Manitoba and can prescribe and arrange delivery to any Manitoba address.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          Manitoba Pharmacare deductibles and formulary listings change annually. This information reflects policies as of May 2026. Contact Manitoba Health (1-800-742-6837) to verify your current deductible and coverage.
        </div>
      </div>
    </ArticleLayout>
  );
}
