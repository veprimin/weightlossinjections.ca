import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How Much Do Weight Loss Injections Cost in Canada? (2025 Province Guide)",
  description:
    "Province-by-province breakdown of Ozempic, Wegovy, and Mounjaro costs in Canada, including insurance coverage, out-of-pocket estimates, and what generic semaglutide will mean for prices.",
  alternates: {
    canonical: `${SITE_URL}/cost`,
    languages: { "en-CA": `${SITE_URL}/cost` },
  },
};

const toc = [
  { id: "overview",        label: "Cost Overview" },
  { id: "ozempic-cost",    label: "Ozempic Cost by Province" },
  { id: "wegovy-cost",     label: "Wegovy Cost" },
  { id: "mounjaro-cost",   label: "Mounjaro (Tirzepatide) Cost" },
  { id: "rybelsus-cost",   label: "Rybelsus (Oral) Cost" },
  { id: "generics",        label: "Impact of Generic Semaglutide" },
  { id: "insurance",       label: "Reducing Costs with Insurance" },
  { id: "programs",        label: "Patient Support Programs" },
  { id: "home-delivery",   label: "Home Delivery: No Extra Cost" },
];

const related = [
  { href: "/insurance-coverage", emoji: "🛡️", title: "Insurance Coverage Guide",              date: "May 2025" },
  { href: "/semaglutide",        emoji: "💉", title: "Semaglutide (Ozempic & Wegovy) Guide",   date: "May 2025" },
  { href: "/ontario",            emoji: "🍁", title: "Ontario Guide: ODB & Private Plans",     date: "May 2025" },
  { href: "/compare",            emoji: "⚖️", title: "Compare All Medications",                date: "May 2025" },
];

const provinceData = [
  { prov: "Ontario",                  ozempic: "$220–$395", wegovy: "$390–$420", notes: "ODB covers Ozempic for T2D with criteria" },
  { prov: "British Columbia",         ozempic: "$210–$380", wegovy: "$385–$415", notes: "BC PharmaCare: Ozempic for T2D" },
  { prov: "Alberta",                  ozempic: "$225–$400", wegovy: "$390–$425", notes: "AB Blue Cross covers with authorization" },
  { prov: "Quebec",                   ozempic: "$200–$360", wegovy: "$375–$410", notes: "RAMQ covers Ozempic for T2D" },
  { prov: "Nova Scotia",              ozempic: "$230–$410", wegovy: "$400–$430", notes: "NS Pharmacare: Ozempic T2D criteria" },
  { prov: "Manitoba",                 ozempic: "$220–$395", wegovy: "$390–$420", notes: "Manitoba Pharmacare: limited GLP-1 coverage" },
  { prov: "Saskatchewan",             ozempic: "$225–$405", wegovy: "$395–$425", notes: "SK Drug Plan: Ozempic T2D with approval" },
  { prov: "New Brunswick",            ozempic: "$235–$415", wegovy: "$400–$430", notes: "NB Prescription Drug Program: T2D" },
  { prov: "Newfoundland & Labrador",  ozempic: "$240–$420", wegovy: "$405–$435", notes: "NL Prescription Drug Program" },
  { prov: "PEI",                      ozempic: "$235–$415", wegovy: "$400–$430", notes: "PEI Pharmacare: T2D criteria" },
];

export default function CostPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Cost Guide"
        readTime="8 min read"
        date="May 2025"
        headline="How Much Do Weight Loss Injections Cost in Canada? Province-by-Province Breakdown"
        standfirst="The cost of GLP-1 medications in Canada varies by drug, dose, province, and insurance coverage. Here is everything you need to budget for treatment - and how to reduce what you pay."
        heroEmoji="💰"
        heroGradient="linear-gradient(135deg,#92400E,#F59E0B)"
      />

      <div className="prose-editorial">
        <p>
          The cost of weight loss injections in Canada is one of the biggest practical barriers to access. Without insurance, monthly expenses can run into the hundreds of dollars - but with the right coverage, patient support programs, and the arrival of generic semaglutide, the picture is changing quickly.
        </p>

        <h2 id="overview">Cost Overview at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 not-prose">
          {[
            { drug: "Ozempic", dose: "0.5–2 mg",  cost: "$200–$450", sub: "per month" },
            { drug: "Wegovy",  dose: "2.4 mg",    cost: "~$400",     sub: "per month" },
            { drug: "Mounjaro",dose: "5–15 mg",   cost: "$400–$600+",sub: "per month" },
            { drug: "Rybelsus",dose: "7–14 mg",   cost: "$200–$350", sub: "per month" },
          ].map((d) => (
            <div key={d.drug} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">{d.drug}</p>
              <p className="text-2xl font-bold text-[#1B3A6B]" style={{ fontFamily: "Georgia, serif" }}>{d.cost}</p>
              <p className="text-xs text-gray-700 mt-0.5">{d.sub}</p>
              <p className="text-[10px] text-gray-600 mt-1">{d.dose}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-700 -mt-2 mb-6">Prices are approximate list prices without insurance. Actual costs vary by province, pharmacy, and plan. Generics will reduce these figures significantly.</p>

        <h2 id="ozempic-cost">Ozempic Cost by Province</h2>
        <p>
          Ozempic (semaglutide injectable, 0.5–2 mg) is the most widely used GLP-1 medication in Canada. Its price varies somewhat by province due to provincial price regulations and dispensing fee differences.
        </p>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="text-white" style={{ background: "#1B3A6B" }}>
                <th className="text-left px-4 py-3 text-xs font-semibold">Province</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Ozempic / month</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Wegovy / month</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Public coverage notes</th>
              </tr>
            </thead>
            <tbody>
              {provinceData.map((row, i) => (
                <tr key={row.prov} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-200">{row.prov}</td>
                  <td className="px-4 py-3 text-gray-900 border-b border-gray-200">{row.ozempic}</td>
                  <td className="px-4 py-3 text-gray-900 border-b border-gray-200">{row.wegovy}</td>
                  <td className="px-4 py-3 text-gray-800 border-b border-gray-200 text-xs">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600">Source: Pharmacy list prices, provincial formularies, and patient reports as of May 2025. Prices are approximate and subject to change. Consult your pharmacy for exact current pricing.</p>

        <h2 id="wegovy-cost">Wegovy Cost in Canada</h2>
        <p>
          Wegovy (semaglutide 2.4 mg) is priced at approximately <strong>$385–$435 per month</strong> nationally. The pricing is relatively consistent across provinces because Novo Nordisk sets a national list price, though dispensing fees and pharmacy markups vary.
        </p>
        <p>
          Wegovy is currently not on any provincial formulary for weight management alone. Private insurance coverage is growing but remains inconsistent. See our <Link href="/insurance-coverage">insurance guide</Link>.
        </p>

        <h2 id="mounjaro-cost">Mounjaro (Tirzepatide) Cost</h2>
        <p>
          Mounjaro is priced at approximately <strong>$400–$600+ per month</strong> depending on dose (2.5 mg to 15 mg). As the highest-dose medication in this class, and with no generic competition, it currently carries the highest price tag.
        </p>
        <p>
          Coverage under provincial plans is limited to type 2 diabetes with specific criteria. Private employer drug plans vary.
        </p>

        <h2 id="rybelsus-cost">Rybelsus (Oral Semaglutide) Cost</h2>
        <p>
          Rybelsus costs approximately <strong>$200–$350 per month</strong> depending on dose (7 mg or 14 mg). It is on several provincial formularies for type 2 diabetes, making it one of the more accessible GLP-1 options for diabetic patients.
        </p>

        <FelixInline />

        <h2 id="generics">The Impact of Generic Semaglutide on Cost</h2>
        <p>
          The Health Canada approval of generic semaglutide (from Dr. Reddy's Laboratories and Apotex) in 2025 is the most significant cost event in the GLP-1 market since these medications launched. Generics are typically priced <strong>45–90% below the brand-name equivalent</strong>.
        </p>
        <p>
          If this pricing pattern holds - and historical generic drug markets suggest it will - a monthly supply of injectable semaglutide could fall from ~$300–$400 to <strong>$30–$150 per month</strong> once generics reach full market penetration. This timeline typically takes 12–24 months after initial approval.
        </p>
        <p>
          The practical advice: if cost has been a barrier, the window to access cheaper semaglutide is opening. Platforms like Felix can help you get on treatment now at current prices, positioning you to benefit from price reductions as they materialize.
        </p>

        <h2 id="insurance">Reducing Costs with Insurance</h2>
        <p>
          Canadians have several options for reducing out-of-pocket GLP-1 costs:
        </p>
        <ul>
          <li><strong>Provincial drug plans:</strong> Cover Ozempic for type 2 diabetes in most provinces. Submit your prescription to your provincial plan before paying out-of-pocket.</li>
          <li><strong>Private employer benefits:</strong> Many employer drug plans cover GLP-1 medications, sometimes even for weight management. Review your benefits booklet or contact your HR department.</li>
          <li><strong>Personal health insurance:</strong> Plans purchased individually (e.g., through Blue Cross or Manulife) vary in GLP-1 coverage - check your policy details.</li>
        </ul>
        <p>See our detailed <Link href="/insurance-coverage">insurance coverage guide</Link> for province-by-province details and tips for getting prior authorization approved.</p>

        <h2 id="programs">Patient Support Programs</h2>
        <p>
          Both Novo Nordisk and Eli Lilly offer patient support programs that can reduce costs for qualifying Canadians:
        </p>
        <ul>
          <li><strong>Novo Nordisk Care Rx:</strong> Supports patients on Ozempic and Wegovy, including coordination with insurance and home delivery at no extra charge</li>
          <li><strong>Lilly Cares (for Mounjaro):</strong> A co-pay assistance program; eligibility varies</li>
        </ul>
        <p>Ask your prescribing physician or pharmacist about enrolment in these programs, or ask Felix Health about patient support options during your assessment.</p>

        <h2 id="home-delivery">Home Delivery: No Extra Cost</h2>
        <p>
          One of the most practical recent developments: <strong>home delivery of semaglutide is now available at the same price as picking up from a pharmacy</strong> in most provinces. This is enabled through the Novo Nordisk Care Rx program and pharmacy delivery services.
        </p>
        <p>
          Virtual care platforms like <a href="https://afflat3e1.com/trk/lnk/9AC89778-AF07-4236-94B8-94E9519B0116/?o=29537&c=918271&a=776838&k=9244A3303B13F605EF0D210C5B870AF8&l=33492" target="_blank" rel="noopener sponsored">Felix Health</a> coordinate the entire process - assessment, prescription, and delivery - from a single platform at no premium over standard dispensing prices.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-gray-700 leading-relaxed">
          <strong>Note on prices:</strong> All costs are approximate and based on list prices as of May 2025. Actual prices may vary by pharmacy, province, and plan. Contact your pharmacy or insurance provider for exact current pricing. Generic pricing is based on typical market patterns and may differ once products fully launch.
        </div>
      </div>
    </ArticleLayout>
  );
}
