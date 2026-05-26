import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Does Insurance Cover Ozempic and Wegovy in Canada? (2026 Guide)",
  description:
    "A complete guide to Canadian insurance coverage for GLP-1 weight loss medications - provincial drug plans, private employer benefits, prior authorization, and tips for getting coverage approved.",
  alternates: {
    canonical: `${SITE_URL}/insurance-coverage`,
    languages: { "en-CA": `${SITE_URL}/insurance-coverage`, "x-default": `${SITE_URL}/insurance-coverage` },
  },
};

const toc = [
  { id: "overview",          label: "Coverage at a Glance" },
  { id: "provincial-plans",  label: "Provincial Drug Plans" },
  { id: "private-insurance", label: "Private Insurance" },
  { id: "prior-auth",        label: "Prior Authorization Tips" },
  { id: "appeals",           label: "If You're Denied" },
  { id: "patient-support",   label: "Manufacturer Support Programs" },
  { id: "province-table",    label: "Province-by-Province Table" },
  { id: "faq",               label: "FAQ" },
];

const related = [
  { href: "/cost",        emoji: "💰", title: "Cost Guide by Province",              date: "May 2026" },
  { href: "/ontario",     emoji: "🍁", title: "Ontario: ODB & Coverage Details",     date: "May 2026" },
  { href: "/semaglutide", emoji: "💉", title: "Semaglutide Complete Guide",          date: "May 2026" },
  { href: "/compare",     emoji: "⚖️", title: "Compare All Medications",             date: "May 2026" },
];

export default function InsurancePage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Insurance Guide"
        readTime="9 min read"
        date="May 2026"
        headline="Does Insurance Cover Ozempic and Wegovy in Canada?"
        standfirst="Coverage for GLP-1 medications in Canada is fragmented, inconsistent, and actively evolving. Here is the complete picture - and how to maximize your chances of getting covered."
        heroEmoji="🛡️"
        heroGradient="linear-gradient(135deg,#1e3a5f,#2563EB)"
      />

      <div className="prose-editorial">
        <p>
          The short answer: <strong>it depends</strong>. Coverage for GLP-1 weight loss medications in Canada varies significantly by drug, indication, province, and the type of insurance plan you have. Ozempic for diabetes is widely covered; Wegovy for weight management is much less so. Understanding the landscape can save you hundreds of dollars per month.
        </p>

        <h2 id="overview">Coverage at a Glance</h2>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="text-white" style={{ background: "#1B3A6B" }}>
                <th className="text-left px-4 py-3 text-xs font-semibold">Drug</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Indication</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Provincial Plans</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Private Insurance</th>
              </tr>
            </thead>
            <tbody>
              {[
                { drug: "Ozempic",   ind: "Type 2 diabetes",     prov: "✅ Covered in most provinces (criteria apply)", priv: "✅ Usually covered for diabetes" },
                { drug: "Ozempic",   ind: "Weight management (off-label)", prov: "❌ Not covered (no weight indication)", priv: "⚠️ Variable - often denied" },
                { drug: "Wegovy",    ind: "Weight management",    prov: "❌ Not on any provincial formulary",           priv: "⚠️ Growing; still inconsistent" },
                { drug: "Mounjaro",  ind: "Type 2 diabetes",     prov: "⚠️ Some coverage with authorization",          priv: "⚠️ Variable by plan" },
                { drug: "Rybelsus",  ind: "Type 2 diabetes",     prov: "✅ Covered in several provinces",              priv: "✅ Usually covered for diabetes" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-black border-b border-gray-200">{row.drug}</td>
                  <td className="px-4 py-3 text-black border-b border-gray-200 text-xs">{row.ind}</td>
                  <td className="px-4 py-3 text-black border-b border-gray-200 text-xs">{row.prov}</td>
                  <td className="px-4 py-3 text-black border-b border-gray-200 text-xs">{row.priv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="provincial-plans">Provincial Drug Plans</h2>
        <p>
          Canada does not have a national pharmacare program, so drug coverage varies significantly by province. Here is the general picture for GLP-1 medications:
        </p>

        <h3>For Type 2 Diabetes (Ozempic/Rybelsus)</h3>
        <p>
          Most provincial drug plans cover semaglutide for type 2 diabetes when prescribed on-label and meeting specific clinical criteria. These typically include:
        </p>
        <ul>
          <li>Established type 2 diabetes diagnosis</li>
          <li>Inadequate glycemic control on first-line medications (often metformin)</li>
          <li>BMI or cardiovascular risk criteria (varies by province)</li>
          <li>Prior authorization or "special authorization" from the prescribing physician</li>
        </ul>

        <h3>For Weight Management</h3>
        <p>
          As of mid-2025, <strong>no provincial drug plan in Canada covers Wegovy or any GLP-1 medication specifically for weight management</strong> without a comorbid diabetes diagnosis. This is a significant access gap that advocacy groups and medical associations are actively pushing to change.
        </p>

        <h2 id="private-insurance">Private Insurance</h2>
        <p>
          Private drug insurance - whether through an employer group benefits plan or individually purchased - is the most likely source of coverage for weight-management GLP-1 use.
        </p>
        <p>
          Coverage varies enormously by plan. Factors that affect whether your plan covers Wegovy or off-label Ozempic for weight management include:
        </p>
        <ul>
          <li><strong>Plan formulary:</strong> Whether the specific drug is listed on your plan's approved drug list</li>
          <li><strong>Indication requirement:</strong> Some plans cover only on-label use; some cover off-label at physician discretion</li>
          <li><strong>Annual or lifetime maximums:</strong> Even if covered, many plans have dollar caps (e.g., $1,500/year for drug benefits), which quickly get exhausted at $400/month</li>
          <li><strong>Prior authorization:</strong> Most plans require prior authorization for high-cost drugs like GLP-1 medications</li>
        </ul>
        <p>
          <strong>The trend is improving:</strong> In 2023–2025, several major Canadian benefit plan administrators updated their formularies to include Wegovy for weight management. Plans associated with large employers tend to have broader coverage than smaller group plans.
        </p>

        <FelixInline />

        <h2 id="prior-auth">Prior Authorization: How to Get It</h2>
        <p>
          Prior authorization (PA) is the process where your insurer or provincial plan pre-approves coverage before dispensing. It typically requires your physician to submit clinical documentation. Here is how to maximize approval chances:
        </p>
        <ol>
          <li><strong>Document your clinical picture thoroughly:</strong> Ensure your chart includes your BMI, weight history, comorbidities, past weight-loss attempts, and any cardiovascular risk factors. The more clinical detail, the stronger the case.</li>
          <li><strong>Request the right indication:</strong> If you have type 2 diabetes, prediabetes, or cardiovascular disease, these comorbidities significantly strengthen a PA request.</li>
          <li><strong>Use your drug plan's specific PA form:</strong> Each insurer has its own form. Ask your pharmacy or physician's office for the correct one.</li>
          <li><strong>Ask your physician to emphasize medical necessity:</strong> Language like "obesity as a chronic disease requiring pharmacological management" and references to cardiovascular risk reduction are persuasive.</li>
          <li><strong>Request a letter of support:</strong> A letter from a specialist (endocrinologist, cardiologist, obesity physician) carries more weight than a GP note alone.</li>
        </ol>

        <h2 id="appeals">If You Are Denied</h2>
        <p>
          A denial is not the end. Most drug plans have a formal appeals process:
        </p>
        <ol>
          <li><strong>Request the denial in writing</strong> with the specific reason - you need to know exactly what criterion was not met.</li>
          <li><strong>Address the specific reason</strong> in your appeal - if denied for lack of a comorbidity, document all relevant conditions.</li>
          <li><strong>Involve a specialist:</strong> A letter from an endocrinologist or obesity specialist often changes the outcome on appeal.</li>
          <li><strong>Consider a different plan option:</strong> If on an employer plan, open enrollment may allow you to switch to a plan with better formulary coverage.</li>
          <li><strong>Use patient support programs</strong> (see below) while you appeal.</li>
        </ol>

        <h2 id="patient-support">Manufacturer Patient Support Programs</h2>
        <p>
          Both Novo Nordisk and Eli Lilly offer financial assistance programs for Canadians who cannot access coverage:
        </p>
        <ul>
          <li><strong>Novo Nordisk Care Rx:</strong> Supports patients on Ozempic and Wegovy with insurance navigation assistance and, in some cases, co-pay support. Contact through your physician or pharmacist.</li>
          <li><strong>Mounjaro Patient Support (Lilly):</strong> Lilly Cares provides co-pay assistance for qualifying patients; eligibility and terms vary.</li>
        </ul>
        <p>
          Ask your prescribing provider or pharmacist to connect you with these programs - they can significantly reduce out-of-pocket costs while you navigate coverage.
        </p>

        <h2 id="province-table">Province-by-Province Provincial Plan Coverage</h2>
        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="text-white" style={{ background: "#1B3A6B" }}>
                <th className="text-left px-4 py-3 text-xs font-semibold">Province</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Public Plan</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Ozempic Coverage (Diabetes)</th>
                <th className="text-left px-4 py-3 text-xs font-semibold">Weight Mgmt Coverage</th>
              </tr>
            </thead>
            <tbody>
              {[
                { prov: "Ontario",               plan: "ODB",                ozempic: "✅ With special authorization",   weight: "❌ Not covered" },
                { prov: "British Columbia",      plan: "BC PharmaCare",      ozempic: "✅ On formulary (criteria)",       weight: "❌ Not covered" },
                { prov: "Alberta",               plan: "AB Blue Cross (Seniors/AISH)", ozempic: "✅ With authorization",   weight: "❌ Not covered" },
                { prov: "Quebec",                plan: "RAMQ",               ozempic: "✅ On formulary",                  weight: "❌ Not covered" },
                { prov: "Manitoba",              plan: "Manitoba Pharmacare",ozempic: "⚠️ Limited; deductible applies",  weight: "❌ Not covered" },
                { prov: "Saskatchewan",          plan: "SK Drug Plan",       ozempic: "✅ With special authorization",   weight: "❌ Not covered" },
                { prov: "Nova Scotia",           plan: "NS Pharmacare",      ozempic: "⚠️ Senior/social assistance only",weight: "❌ Not covered" },
                { prov: "New Brunswick",         plan: "NB PDP",             ozempic: "✅ With authorization",           weight: "❌ Not covered" },
                { prov: "Newfoundland",          plan: "NL Prescription Drug",ozempic: "⚠️ Select populations",         weight: "❌ Not covered" },
                { prov: "PEI",                   plan: "PEI Pharmacare",     ozempic: "⚠️ Income-based programs",        weight: "❌ Not covered" },
              ].map((row, i) => (
                <tr key={row.prov} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-black border-b border-gray-200">{row.prov}</td>
                  <td className="px-4 py-3 text-black border-b border-gray-200 text-xs">{row.plan}</td>
                  <td className="px-4 py-3 text-black border-b border-gray-200 text-xs">{row.ozempic}</td>
                  <td className="px-4 py-3 text-black border-b border-gray-200 text-xs">{row.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Does my employer benefits plan cover Wegovy?</h3>
        <p>It depends entirely on your specific plan. Review your benefits booklet for GLP-1 medications or contact your plan administrator. Many major employer plans have added Wegovy coverage in 2023–2025 as obesity medicine evolves.</p>

        <h3>My plan denied Wegovy - can I still get it?</h3>
        <p>Yes. You can pay out-of-pocket, appeal the decision, enrol in a manufacturer support program, or - if you have type 2 diabetes - explore whether Ozempic for diabetes is covered instead. Some patients also access coverage under a different clinical justification (e.g., cardiovascular risk reduction following the SELECT trial).</p>

        <h3>Will national pharmacare cover GLP-1 medications?</h3>
        <p>The federal government's pharmacare legislation (Bill C-64) is currently focused on diabetes medications and contraceptives. GLP-1 coverage for weight management under a national plan is not imminent as of 2025, though it is an active advocacy issue.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          Coverage information reflects general policies as of May 2026. Drug plan formularies change frequently. Confirm coverage with your provincial plan or private insurer before filling a prescription.
        </div>
      </div>
    </ArticleLayout>
  );
}
