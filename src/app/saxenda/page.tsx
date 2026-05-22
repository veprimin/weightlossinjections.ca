import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Saxenda (Liraglutide) in Canada - Guide to GLP-1 Weight Loss Injections 2026",
  description:
    "Complete guide to Saxenda (liraglutide) in Canada - how it works, cost, insurance coverage, and how it compares to semaglutide and tirzepatide.",
  alternates: {
    canonical: `${SITE_URL}/saxenda`,
    languages: { "en-CA": `${SITE_URL}/saxenda` },
  },
};

const toc = [
  { id: "what-is-saxenda",    label: "What is Saxenda" },
  { id: "comparison",         label: "Comparison with Newer GLP-1s" },
  { id: "insurance",          label: "Insurance Coverage" },
  { id: "cost",               label: "Cost" },
  { id: "dosing",             label: "Dosing" },
  { id: "faq",                label: "FAQ" },
];

const related = [
  { href: "/semaglutide",        emoji: "💉", title: "Semaglutide (Ozempic & Wegovy) Guide",  date: "May 2026" },
  { href: "/tirzepatide",        emoji: "⚗️", title: "Tirzepatide (Mounjaro) Guide",           date: "May 2026" },
  { href: "/compare",            emoji: "⚖️", title: "Compare All Weight Loss Injections",      date: "May 2026" },
  { href: "/generic-semaglutide", emoji: "🧪", title: "Generic Semaglutide in Canada",         date: "May 2026" },
];

export default function SaxendaPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Medication Guide"
        readTime="8 min read"
        date="May 2026"
        headline="Saxenda (Liraglutide) in Canada: Complete Guide"
        standfirst="Saxenda was Canada's first approved GLP-1 medication for weight management - but newer options like Wegovy and Mounjaro have largely superseded it for most patients."
        heroEmoji="💊"
        heroGradient="linear-gradient(135deg,#1B3A6B,#2D5FA8)"
      />

      <div className="prose-editorial">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 not-prose">
          {[
            { label: "Active ingredient",  value: "Liraglutide",        sub: "Daily injection" },
            { label: "Approved for",       value: "Weight management",  sub: "Adults + adolescents 12-17" },
            { label: "Max dose",           value: "3 mg daily",         sub: "~8% avg. weight loss" },
            { label: "Status",             value: "Available",          sub: "Being displaced by newer GLP-1s" },
          ].map((s) => (
            <div key={s.label} className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-1">{s.label}</p>
              <p className="text-base font-bold text-black">{s.value}</p>
              <p className="text-xs text-black mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <h2 id="what-is-saxenda">What is Saxenda?</h2>
        <p>
          Saxenda is the brand name for liraglutide 3 mg, a once-daily subcutaneous injection approved by Health Canada for chronic weight management. It was the first GLP-1 receptor agonist specifically approved for obesity in Canada, receiving its approval in 2015. Saxenda is manufactured by Novo Nordisk - the same company that makes Ozempic and Wegovy.
        </p>
        <p>
          Liraglutide is a GLP-1 receptor agonist, meaning it mimics the gut hormone GLP-1 to suppress appetite, slow gastric emptying, and help regulate blood sugar. Unlike semaglutide (which has a 7-day half-life allowing weekly dosing), liraglutide's shorter half-life requires daily injection. Saxenda is the 3 mg weight-management dose; Victoza (liraglutide 1.2-1.8 mg) is a related product approved for type 2 diabetes at lower doses.
        </p>
        <p>
          Saxenda is also approved in Canada for adolescents aged 12-17 who have obesity (BMI at or above the 95th percentile for age and sex), making it one of few GLP-1 medications with a pediatric indication.
        </p>

        <h2 id="comparison">How Saxenda Compares to Newer GLP-1 Medications</h2>
        <p>
          Saxenda was groundbreaking when it launched in 2015 - the first medication in a new era of obesity pharmacotherapy. By current standards, however, its efficacy profile is modest compared to the newer weekly GLP-1 agents. The pivotal SCALE trial showed approximately 8% average body weight loss with Saxenda 3 mg over 56 weeks. By comparison:
        </p>
        <ul>
          <li>Wegovy (semaglutide 2.4 mg) produces approximately 15% weight loss over 68 weeks</li>
          <li>Mounjaro (tirzepatide 15 mg) produces approximately 20-22% weight loss over 72 weeks</li>
        </ul>
        <p>
          Beyond efficacy, the daily injection schedule is a practical disadvantage versus the once-weekly dosing of Ozempic, Wegovy, and Mounjaro. Most patients and prescribers now prefer weekly dosing for adherence reasons.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#EEF3FF]">
                <th className="text-left p-3 text-xs font-bold text-[#1B3A6B] border border-[rgba(27,58,107,0.15)]">Drug</th>
                <th className="text-left p-3 text-xs font-bold text-[#1B3A6B] border border-[rgba(27,58,107,0.15)]">Molecule</th>
                <th className="text-left p-3 text-xs font-bold text-[#1B3A6B] border border-[rgba(27,58,107,0.15)]">Frequency</th>
                <th className="text-left p-3 text-xs font-bold text-[#1B3A6B] border border-[rgba(27,58,107,0.15)]">Avg. Weight Loss</th>
                <th className="text-left p-3 text-xs font-bold text-[#1B3A6B] border border-[rgba(27,58,107,0.15)]">Monthly Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(27,58,107,0.08)]">
              {[
                { drug: "Saxenda",   mol: "Liraglutide",          freq: "Daily",  wl: "~8%",    cost: "$310-450" },
                { drug: "Ozempic",   mol: "Semaglutide (0.5-2mg)", freq: "Weekly", wl: "~9-13%",  cost: "$235-420" },
                { drug: "Wegovy",    mol: "Semaglutide (2.4mg)",   freq: "Weekly", wl: "~15%",   cost: "$385-430" },
                { drug: "Mounjaro",  mol: "Tirzepatide",           freq: "Weekly", wl: "~20-22%", cost: "$400-600+" },
              ].map((row) => (
                <tr key={row.drug}>
                  <td className="p-3 font-semibold text-black border border-[rgba(27,58,107,0.08)]">{row.drug}</td>
                  <td className="p-3 text-black border border-[rgba(27,58,107,0.08)]">{row.mol}</td>
                  <td className="p-3 text-black border border-[rgba(27,58,107,0.08)]">{row.freq}</td>
                  <td className="p-3 font-semibold text-[#1B3A6B] border border-[rgba(27,58,107,0.08)]">{row.wl}</td>
                  <td className="p-3 text-black border border-[rgba(27,58,107,0.08)]">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-black">
          Costs without insurance. Weight loss figures from pivotal clinical trials at approved doses. Individual results vary.
        </p>

        <h3>Who still uses Saxenda?</h3>
        <p>
          Despite its disadvantages relative to newer agents, Saxenda remains in use for several reasons:
        </p>
        <ul>
          <li><strong>Established users:</strong> Patients who started on Saxenda and are achieving adequate results may prefer not to switch medications, which requires a restart of titration and a period of adjustment.</li>
          <li><strong>Formulary availability:</strong> In some provinces and private drug plans, Saxenda has been on formularies longer than Wegovy and may have more established prior authorization pathways.</li>
          <li><strong>Adolescents:</strong> Saxenda is approved for ages 12-17 with obesity. While Wegovy received a similar indication, provincial formulary coverage for Wegovy in adolescents may lag behind Saxenda in some provinces.</li>
          <li><strong>Daily dosing preference:</strong> A minority of patients actually prefer daily injections because any one missed dose has less impact on weekly drug exposure than missing a single weekly injection.</li>
        </ul>

        <FelixInline />

        <h2 id="insurance">Insurance Coverage</h2>
        <p>
          Because Saxenda has been available in Canada since 2015, it has had more time to establish formulary presence than Wegovy (approved 2021) or Mounjaro (approved 2023). Some provincial and private formularies that do not yet cover Wegovy for weight management may still have Saxenda listed.
        </p>
        <p>
          That said, coverage for GLP-1 medications for weight management (as opposed to diabetes) remains limited at the provincial level across Canada. Most provincial drug programs cover liraglutide under the Victoza brand for diabetes - but Saxenda at the 3 mg weight-management dose has more limited provincial coverage.
        </p>
        <p>
          Private employer drug plans vary widely. Contact your plan administrator to confirm whether Saxenda (DIN 02442701) is covered under your plan, and whether step therapy requirements apply.
        </p>

        <h2 id="cost">Cost</h2>
        <p>
          Without insurance, Saxenda typically costs approximately <strong>$310-450 per month</strong> in Canada. The cost reflects the daily injection format - you use more pens per month than with weekly injections. This puts Saxenda in a similar price range to Ozempic and Wegovy, despite its lower efficacy - one reason many prescribers and patients have shifted to newer agents.
        </p>
        <p>
          Novo Nordisk operates a patient support program for Saxenda similar to the Care Rx program for Wegovy. Ask your physician or pharmacist about current eligibility criteria for cost assistance programs.
        </p>

        <h2 id="dosing">Saxenda Titration Schedule</h2>
        <p>
          Like all GLP-1 medications, Saxenda uses a gradual titration to minimize GI side effects. The titration takes 5 weeks to reach the 3 mg target dose:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#EEF3FF]">
                <th className="text-left p-3 text-xs font-bold text-[#1B3A6B] border border-[rgba(27,58,107,0.15)]">Week</th>
                <th className="text-left p-3 text-xs font-bold text-[#1B3A6B] border border-[rgba(27,58,107,0.15)]">Dose (once daily)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(27,58,107,0.08)]">
              {[
                { week: "Week 1",  dose: "0.6 mg once daily" },
                { week: "Week 2",  dose: "1.2 mg once daily" },
                { week: "Week 3",  dose: "1.8 mg once daily" },
                { week: "Week 4",  dose: "2.4 mg once daily" },
                { week: "Week 5+", dose: "3.0 mg once daily (target dose)" },
              ].map((row) => (
                <tr key={row.week}>
                  <td className="p-3 font-medium text-black border border-[rgba(27,58,107,0.08)]">{row.week}</td>
                  <td className="p-3 font-semibold text-[#1B3A6B] border border-[rgba(27,58,107,0.08)]">{row.dose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Saxenda is injected subcutaneously once daily, at any time of day - though consistency in timing is recommended. Injection sites are the abdomen, thigh, or upper arm. Rotate sites to avoid skin irritation.
        </p>
        <p>
          If you cannot tolerate a dose increase, stay at the current dose for an additional week before trying again. If you cannot tolerate the 3 mg dose after extended titration attempts, discuss with your physician whether to continue at a lower maintenance dose or consider switching to an alternative therapy.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Can I switch from Saxenda to Wegovy?</h3>
        <p>
          Yes, switching from Saxenda to Wegovy (or Ozempic) is clinically straightforward. Because both are GLP-1 receptor agonists, there is no washout period required. Your physician will typically start you at the lowest Wegovy dose (0.25 mg weekly) and titrate up over 16 weeks. Most patients tolerate the switch well, and many see additional weight loss at the full Wegovy dose due to its higher efficacy. Discuss the switch with your prescriber - and confirm insurance coverage for the new medication before switching.
        </p>

        <h3>Is Saxenda still worth prescribing in 2025?</h3>
        <p>
          For most new patients, Wegovy or Mounjaro would be the preferred first choice based on superior efficacy, better adherence profile (weekly vs. daily injection), and comparable or lower cost. Saxenda remains appropriate in specific circumstances: existing patients doing well on it, formulary/coverage situations where Saxenda is accessible and Wegovy is not, and adolescent patients where Saxenda's pediatric indication and formulary presence may be advantageous.
        </p>

        <h3>Is Saxenda the same as Victoza?</h3>
        <p>
          They contain the same active ingredient - liraglutide - but at different doses and with different indications. Victoza (1.2 mg or 1.8 mg) is approved for type 2 diabetes. Saxenda (3 mg) is approved for chronic weight management. The injection devices look similar but are different products with different DINs and dosing. Do not use Victoza pens for weight management dosing.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          <strong>Medical disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Saxenda requires a valid prescription from a licensed Canadian healthcare provider. Discuss the appropriateness of any medication with your prescribing physician. See our <Link href="/disclaimer">full medical disclaimer</Link>.
        </div>
      </div>
    </ArticleLayout>
  );
}
