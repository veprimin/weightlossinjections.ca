import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Generic Semaglutide in Canada: Plosbrio & Poviztra Guide (2026)",
  description:
    "Canada was the first G7 nation to approve generic semaglutide. Here is everything you need to know about Plosbrio and Poviztra - the approved generics, pricing, availability, and how to access them.",
  alternates: {
    canonical: `${SITE_URL}/generic-semaglutide`,
    languages: { "en-CA": `${SITE_URL}/generic-semaglutide`, "x-default": `${SITE_URL}/generic-semaglutide` },
  },
};

const toc = [
  { id: "what-happened",   label: "What Was Approved" },
  { id: "the-brands",      label: "Plosbrio & Poviztra" },
  { id: "price-impact",    label: "What It Means for Price" },
  { id: "timeline",        label: "Availability Timeline" },
  { id: "bioequivalence",  label: "Same as Ozempic?" },
  { id: "who-can-get",     label: "Who Can Get It" },
  { id: "insurance",       label: "Insurance Coverage" },
  { id: "how-to-access",   label: "How to Access Generic Semaglutide" },
  { id: "faq",             label: "FAQ" },
];

const related = [
  { href: "/semaglutide",       emoji: "💉", title: "Semaglutide Complete Guide",          date: "May 2026" },
  { href: "/cost",              emoji: "💰", title: "Province-by-Province Cost Guide",     date: "May 2026" },
  { href: "/insurance-coverage",emoji: "🛡️", title: "Insurance Coverage Guide",            date: "May 2026" },
  { href: "/compare",           emoji: "⚖️", title: "Compare All GLP-1 Medications",      date: "May 2026" },
];

export default function GenericSemaglutidePage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="News & Analysis"
        readTime="8 min read"
        date="May 2026"
        headline="Generic Semaglutide in Canada: Everything You Need to Know About Plosbrio & Poviztra"
        standfirst="Canada became the first G7 nation to approve generic semaglutide injections, with two manufacturers receiving Health Canada authorization in 2025. Here is the complete picture on pricing, availability, and access."
      />

      <div className="prose-editorial">
        <p>
          The approval of generic semaglutide in Canada is the most significant development in the GLP-1 market since Ozempic first launched. For the millions of Canadians who have been unable to afford brand-name semaglutide, or who have been waiting on the sidelines, this approval has the potential to transform access - though the full price impact will take 12–24 months to materialize fully.
        </p>

        <h2 id="what-happened">What Was Approved</h2>
        <p>
          In 2025, Health Canada approved two generic versions of injectable semaglutide - the active molecule in Ozempic and Wegovy. Canada became the first G7 nation to approve generic semaglutide, a milestone that attracted significant attention from global health authorities and pharmaceutical analysts.
        </p>
        <p>
          The approvals followed the expiration of Novo Nordisk's data exclusivity protection on semaglutide in Canada - a process that allows generic manufacturers to submit their own evidence of bioequivalence and obtain independent approval, without repeating the full clinical trial programme.
        </p>

        <h2 id="the-brands">Plosbrio and Poviztra: The Approved Generics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
          {[
            {
              brand: "Plosbrio",
              manufacturer: "Dr. Reddy's Laboratories",
              origin: "India",
              note: "One of the world's largest generic pharmaceutical manufacturers. Global operations in 66+ countries.",
            },
            {
              brand: "Poviztra",
              manufacturer: "Apotex Inc.",
              origin: "Canada",
              note: "Canada's largest generic drug company, headquartered in North York, Ontario. Making this a domestic success story.",
            },
          ].map((g) => (
            <div key={g.brand} className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8EFFF] flex items-center justify-center text-[#1B3A6B] font-bold text-sm shrink-0">
                  {g.brand.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black" style={{ fontFamily: "Georgia, serif" }}>{g.brand}</h3>
                  <p className="text-xs text-black">{g.manufacturer} &middot; {g.origin}</p>
                </div>
              </div>
              <p className="text-sm text-black leading-relaxed">{g.note}</p>
            </div>
          ))}
        </div>
        <p>
          Both products contain the same active ingredient (semaglutide) at the same doses (0.5 mg, 1 mg, and 2 mg) and in the same delivery format (pre-filled injection pen) as Ozempic. They are approved for the same indication: type 2 diabetes mellitus in adults.
        </p>

        <h2 id="price-impact">What Generic Approval Means for Price</h2>
        <p>
          Health Canada itself noted that generic semaglutide would be <strong>45–90% cheaper</strong> than the brand-name equivalent. This estimate is consistent with how generic drug markets typically develop in Canada after a first wave of generic competition.
        </p>
        <p>
          In practice, price declines often follow a predictable curve:
        </p>
        <ul>
          <li><strong>Launch pricing (first 6–12 months):</strong> The first generic typically launches at 25–40% below brand price. Initial production is limited and competition is just beginning.</li>
          <li><strong>Maturing market (12–24 months):</strong> As more generics enter the market (additional approvals are in progress) and production scales up, prices decline toward the 50–80% below brand range.</li>
          <li><strong>Stabilization:</strong> Most generic drug markets in Canada stabilize at roughly 10–20% of the original brand price once 4–6 manufacturers are competing. For a drug that costs $350/month as Ozempic, this could mean $35–$70/month in the long term.</li>
        </ul>
        <p>
          The practical implication: getting on semaglutide now at current (or slightly reduced) prices positions you to benefit from further price drops as the generic market matures. Switching between semaglutide products requires a new prescription, but no dose adjustment is typically needed.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-3">Price Projection Summary</p>
          <ul className="space-y-2">
            {[
              "Brand-name Ozempic (current): ~$220-$450/month depending on dose",
              "Generic semaglutide at launch (estimated): ~$100-$250/month",
              "Generic semaglutide at market maturity (estimated): ~$30-$100/month",
              "Health Canada's own estimate: 45-90% below brand price",
              "Timeline to full price impact: 12-24 months after initial availability",
            ].map((f) => (
              <li key={f} className="flex gap-2 text-sm text-black">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                  <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <h2 id="timeline">Availability Timeline</h2>
        <p>
          Health Canada approval does not mean the products are immediately on pharmacy shelves. The typical post-approval timeline for generic drug availability in Canada includes:
        </p>
        <ol>
          <li><strong>Manufacturing and importation:</strong> After approval, the manufacturer must produce or import stock. For Dr. Reddy's (Indian manufacturer), this involves coordinating international supply chain logistics.</li>
          <li><strong>Provincial formulary listing:</strong> For a generic to be covered by provincial drug plans, it must also be listed on provincial formularies - a process that can take months after Health Canada approval.</li>
          <li><strong>Pharmacy stocking:</strong> Pharmacies do not automatically stock every approved generic; they order based on demand. Consumer awareness drives stocking decisions.</li>
          <li><strong>Virtual care platform integration:</strong> Platforms like Felix Health are actively working to add generic semaglutide prescribing once products are consistently available.</li>
        </ol>
        <p>
          As of mid-2025, early availability of Plosbrio and Poviztra was being established at select pharmacies across Canada, with broader availability expected through 2025–2026.
        </p>

        <FelixInline />

        <h2 id="bioequivalence">Is Generic Semaglutide the Same as Ozempic?</h2>
        <p>
          Yes - with important caveats. Generic drugs must demonstrate <strong>bioequivalence</strong> to the reference product (in this case, Ozempic) to receive Health Canada approval. This means the generic delivers the same amount of active ingredient into the bloodstream at the same rate, within an accepted statistical margin.
        </p>
        <p>
          The active molecule (semaglutide) is identical. The formulation, excipients, and device may differ slightly - each manufacturer uses their own production process and device engineering, while meeting Health Canada specifications.
        </p>
        <p>
          In practice, patients switching from Ozempic to a generic semaglutide pen should expect the same clinical effect. Your prescribing physician may choose to issue a new prescription with the generic name ("semaglutide injection") to allow the pharmacist to dispense whatever generic is available and most affordable - or specify a brand if there is a clinical reason.
        </p>

        <h2 id="who-can-get">Who Can Get Generic Semaglutide</h2>
        <p>
          The approvals of Plosbrio and Poviztra are for the same indication as Ozempic: <strong>type 2 diabetes mellitus in adults</strong>. This means:
        </p>
        <ul>
          <li>On-label use requires a type 2 diabetes diagnosis</li>
          <li>Off-label prescribing for weight management (without diabetes) is at the prescriber's discretion - the same rules that apply to Ozempic apply to its generics</li>
          <li>There is no approved weight-management indication for these generics (equivalent to Wegovy 2.4 mg) yet</li>
        </ul>
        <p>
          A licensed Canadian physician can prescribe generic semaglutide for weight management off-label. Virtual care platforms are increasingly facilitating this access as availability improves.
        </p>

        <h2 id="insurance">Will Insurance Cover Generic Semaglutide?</h2>
        <p>
          Coverage for generic semaglutide will follow a similar trajectory to Ozempic:
        </p>
        <ul>
          <li><strong>Provincial drug plans:</strong> Will cover generic semaglutide for type 2 diabetes once listed on provincial formularies - typically with the same Special Authority or limited use criteria as Ozempic, but at a lower reimbursed price</li>
          <li><strong>Private insurance:</strong> Most plans will automatically switch to the generic as the lowest-cost alternative, potentially saving patients money on their co-pay portion</li>
          <li><strong>Weight management (no diabetes):</strong> Provincial plans are unlikely to cover generics for weight management in the near term, the same as the current situation with Ozempic</li>
        </ul>
        <p>
          See our <Link href="/insurance-coverage">insurance coverage guide</Link> for details on provincial plan formulary processes.
        </p>

        <h2 id="how-to-access">How to Access Generic Semaglutide</h2>
        <p>
          As availability expands, here are the most practical routes to access generic semaglutide:
        </p>
        <ol>
          <li><strong>Ask your pharmacist:</strong> As of mid-2025, pharmacy stocking is variable. Call ahead to check whether your local pharmacy has Plosbrio or Poviztra in stock.</li>
          <li><strong>Virtual care platforms:</strong> Platforms like Felix Health are integrating generic semaglutide prescribing as supply becomes consistent. A virtual assessment qualifies you for a generic semaglutide prescription if clinically appropriate.</li>
          <li><strong>Ask your current prescriber:</strong> If you are already on Ozempic, your physician can write a new prescription for generic semaglutide, allowing your pharmacist to dispense whichever generic version is available.</li>
          <li><strong>Generic-ready prescription:</strong> Ask your physician to write the prescription as "semaglutide injection" (generic name) rather than "Ozempic" - this allows substitution at the pharmacy level.</li>
        </ol>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Can I switch from Ozempic to a generic mid-treatment?</h3>
        <p>Yes. Switching to a bioequivalent generic does not require a dose adjustment or restart. Your physician issues a new prescription, and you simply continue on your current dose regimen with the new product. Ask your physician or pharmacist for guidance.</p>

        <h3>Is generic semaglutide available for weight loss (not diabetes)?</h3>
        <p>Generic semaglutide (Plosbrio/Poviztra) is approved for type 2 diabetes. Physicians can prescribe it off-label for weight management, as they do with Ozempic. There is no separately approved generic equivalent to Wegovy (2.4 mg) for weight management.</p>

        <h3>When will generic semaglutide be fully available at pharmacies?</h3>
        <p>Broad availability is expected through 2025-26 as production scales and provincial formulary listings are completed. Early availability at select pharmacies began in mid-2025.</p>

        <h3>Are there more generic approvals coming?</h3>
        <p>Yes. As of mid-2025, Health Canada had multiple additional generic semaglutide submissions under review. Expect further competition - and further price pressure - as additional manufacturers receive approval over the following 12-24 months.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          <strong>Note:</strong> Generic availability, pricing, and provincial formulary listings change frequently. This article reflects information as of May 2026. Verify current availability with your pharmacist. Price projections are estimates based on historical generic drug market patterns and may differ from actual outcomes.
        </div>
      </div>
    </ArticleLayout>
  );
}
