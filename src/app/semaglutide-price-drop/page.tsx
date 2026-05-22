import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL, FELIX_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Semaglutide Price Drops Over 50% in Canada - Felix Now Offering $149/Month",
  description:
    "Canada became the first G7 country to approve generic semaglutide in April 2026. Felix Health is now dispensing Apo-Semaglutide at $149 CAD per month - a reduction of more than 50% from brand-name Ozempic pricing.",
  alternates: {
    canonical: `${SITE_URL}/semaglutide-price-drop`,
    languages: { "en-CA": `${SITE_URL}/semaglutide-price-drop` },
  },
};

const toc = [
  { id: "what-happened",     label: "What Happened" },
  { id: "felix-149",         label: "Felix at $149/Month" },
  { id: "the-generics",      label: "The Approved Generics" },
  { id: "why-now",           label: "Why Did Prices Drop Now?" },
  { id: "brand-vs-generic",  label: "Brand vs. Generic" },
  { id: "pharmacies",        label: "Where to Get It" },
  { id: "more-coming",       label: "More Generics Coming" },
  { id: "what-to-do",        label: "What to Do Now" },
];

const related = [
  { href: "/generic-semaglutide", emoji: "💊", title: "Generic Semaglutide in Canada: Complete Guide", date: "May 2026" },
  { href: "/cost",                emoji: "💰", title: "Province-by-Province Cost Guide",               date: "May 2026" },
  { href: "/semaglutide",         emoji: "💉", title: "Semaglutide (Ozempic & Wegovy) Guide",          date: "May 2026" },
  { href: "/insurance-coverage",  emoji: "🛡️", title: "Insurance Coverage Guide",                      date: "May 2026" },
];

export default function SemaglutidePriceDropPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="News & Analysis"
        readTime="6 min"
        date="May 2026"
        headline="Semaglutide Price Drops More Than 50% - Felix Health Now Offering $149 a Month"
        standfirst="Canada became the first G7 nation to approve generic semaglutide in April 2026. Felix Health confirmed it is dispensing Apo-Semaglutide - a Health Canada-approved generic - at $149 CAD per month all-in, cutting the cost of treatment by more than half."
      />

      <div className="prose-editorial">

        {/* Breaking news callout */}
        <div className="bg-[#E1F5EE] border-l-4 border-[#0F6E56] rounded-r-xl px-5 py-4 mb-8 not-prose">
          <p className="text-xs font-bold uppercase tracking-widest text-[#063D2B] mb-1">Confirmed - May 2026</p>
          <p className="text-sm text-[#063D2B] leading-relaxed">
            Felix Health is offering Apo-Semaglutide (Apotex's Health Canada-approved generic) at <strong>$149 CAD per month, all-in</strong>, as of May 21, 2026. The drug is also rolling out to Rexall, Shoppers Drug Mart, and other major Canadian pharmacy chains.
          </p>
        </div>

        <h2 id="what-happened">What Happened</h2>
        <p>
          On April 28, 2026, Health Canada approved the first generic version of semaglutide in Canada - and in the entire G7. The submission came from Dr. Reddy's Laboratories, one of the world's largest generic pharmaceutical companies. Just three days later, on May 1, 2026, Health Canada approved a second generic: Apo-Semaglutide, manufactured by Apotex Inc., Canada's own largest generic drug company.
        </p>
        <p>
          These two approvals triggered an immediate competitive response. Within weeks, Felix Health - Canada's largest virtual weight loss clinic - announced it would pass the savings directly to patients, lowering semaglutide pricing across its platform by up to 65%.
        </p>
        <p>
          The result: Canadians who previously paid $300 to $450 per month for brand-name Ozempic can now access a Health Canada-approved, bioequivalent alternative for $149 per month through Felix Health.
        </p>

        <h2 id="felix-149">Felix Health at $149 Per Month</h2>
        <p>
          On May 12, 2026, Felix Health published an official announcement confirming it would lower semaglutide pricing by up to 65% as generic options became available. By May 21, 2026, the clinic confirmed it was actively dispensing Apo-Semaglutide at <strong>$149 CAD per month, all-in</strong>.
        </p>
        <p>
          That all-in price covers the medication itself - no hidden fees for the prescription, the injection device, or home delivery. Felix coordinates the virtual medical assessment, the prescription, and delivery to your door through a single integrated service.
        </p>

        {/* Price comparison card */}
        <div className="grid grid-cols-2 gap-4 my-6 not-prose">
          <div className="border border-gray-200 rounded-xl p-5 bg-white text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">Brand-Name Ozempic</p>
            <p className="text-3xl font-black text-black" style={{ fontFamily: "Georgia, serif" }}>$300-$450</p>
            <p className="text-xs text-black mt-1">per month (without insurance)</p>
            <p className="text-xs text-black mt-2 leading-relaxed">Previous cost for most Canadians seeking semaglutide for weight management</p>
          </div>
          <div className="border-2 border-[#0F6E56] rounded-xl p-5 bg-[#E1F5EE] text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#063D2B] mb-2">Apo-Semaglutide via Felix</p>
            <p className="text-3xl font-black text-[#063D2B]" style={{ fontFamily: "Georgia, serif" }}>$149</p>
            <p className="text-xs text-[#063D2B] mt-1">per month, all-in</p>
            <p className="text-xs text-[#063D2B] mt-2 leading-relaxed">Health Canada-approved generic, confirmed available as of May 21, 2026</p>
          </div>
        </div>

        <h2 id="the-generics">The Approved Generics: What Was Authorized</h2>
        <p>
          Health Canada approved two distinct generic semaglutide products in quick succession:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
          {[
            {
              name: "Dr. Reddy's Generic Semaglutide",
              approved: "April 28, 2026",
              maker: "Dr. Reddy's Laboratories (India)",
              note: "First generic semaglutide approved in Canada and the entire G7. Dr. Reddy's operates in 66+ countries and is one of the world's largest generics manufacturers.",
            },
            {
              name: "Apo-Semaglutide",
              approved: "May 1, 2026",
              maker: "Apotex Inc. (Canada)",
              note: "The second generic approved, and the first from a Canadian-based company. Apotex is headquartered in North York, Ontario. This is the version Felix Health is currently dispensing at $149/month.",
            },
          ].map((g) => (
            <div key={g.name} className="border border-gray-200 rounded-xl p-5 bg-white">
              <p className="text-sm font-bold text-black mb-1" style={{ fontFamily: "Georgia, serif" }}>{g.name}</p>
              <p className="text-xs text-[#0F6E56] font-semibold mb-2">Approved {g.approved}</p>
              <p className="text-xs text-black mb-2 font-medium">{g.maker}</p>
              <p className="text-sm text-black leading-relaxed">{g.note}</p>
            </div>
          ))}
        </div>

        <p>
          Both products are approved for the same indication as Ozempic: type 2 diabetes mellitus in adults. Canadian physicians can prescribe either generic off-label for weight management, consistent with existing practice around Ozempic.
        </p>

        <h2 id="why-now">Why Did Prices Drop Now?</h2>
        <p>
          The timing of Canada's generic approvals came down to a specific and unusual event: Novo Nordisk did not pay a C$250 patent maintenance fee, causing one of its key Canadian patents on semaglutide to lapse. This opened the door for generic manufacturers to submit applications to Health Canada under the standard bioequivalence pathway.
        </p>
        <p>
          Canada's pricing framework for generic drugs - managed through the pan-Canadian Pharmaceutical Alliance - mandates specific price thresholds depending on how many generics are competing:
        </p>
        <ul>
          <li><strong>One generic manufacturer:</strong> Price capped at 75% of the brand-name reference price, eventually dropping to 55%</li>
          <li><strong>Two generic manufacturers:</strong> Mandated price drops to 50% of brand price</li>
          <li><strong>Three or more generic manufacturers:</strong> Mandated price drops to 35% of brand price</li>
        </ul>
        <p>
          With two generics already approved and seven additional submissions currently under review at Health Canada, Canada's semaglutide market is rapidly moving through these pricing tiers. The competitive dynamics are already driving prices below the mandated minimums in the private market.
        </p>

        <FelixInline />

        <h2 id="brand-vs-generic">Is the Generic the Same as Ozempic?</h2>
        <p>
          Yes, clinically. Health Canada's generic approval process requires manufacturers to demonstrate bioequivalence - meaning the generic delivers the same amount of active semaglutide into the bloodstream at the same rate as the branded product, within an accepted statistical tolerance.
        </p>
        <p>
          The active molecule is identical. The delivery device and formulation may differ slightly between manufacturers, but these differences do not affect clinical outcomes. Health Canada's own position is that approved generics are interchangeable with their reference brand.
        </p>
        <p>
          For patients currently on Ozempic, switching to a generic requires a new prescription (written as "semaglutide injection" generically, or by the generic brand name) but no dose adjustment. Your current weekly injection schedule and dose level continue unchanged.
        </p>

        <h2 id="pharmacies">Where to Get Generic Semaglutide in Canada</h2>
        <p>
          As of late May 2026, generic semaglutide is available through:
        </p>
        <ul>
          <li>
            <strong>Felix Health ($149/month all-in):</strong> The most straightforward route if you do not have a current semaglutide prescription. Felix's virtual assessment qualifies you for a prescription and coordinates home delivery through their pharmacy network. Start at <a href={FELIX_LINK} target="_blank" rel="noopener sponsored">felixforyou.ca</a>.
          </li>
          <li>
            <strong>Rexall, Shoppers Drug Mart, and major pharmacy chains:</strong> Apo-Semaglutide is rolling out to major chains. Availability varies by location - call ahead to confirm stock.
          </li>
          <li>
            <strong>Your existing pharmacy:</strong> If you have a standing Ozempic prescription, ask your pharmacist or physician to switch the prescription to the generic name ("semaglutide injection") to allow generic substitution. This may significantly reduce what you pay, including through insurance.
          </li>
        </ul>

        <h2 id="more-coming">More Generics Are Coming</h2>
        <p>
          The two approvals in April and May 2026 are not the end. Health Canada has confirmed it is reviewing <strong>seven additional generic semaglutide submissions</strong> from other manufacturers. Each new approval increases competition and applies further downward pressure on price.
        </p>
        <p>
          The trajectory is clear: semaglutide is moving from a premium specialty medication toward the commodity pricing typical of mature generic drug markets. At the three-or-more manufacturer threshold, the pan-Canadian framework mandates pricing at 35% of brand reference - which, if applied to current Ozempic list prices, would place generic semaglutide below $150/month in the public drug market.
        </p>
        <p>
          In the long run, analysts and Health Canada's own estimates suggest generic semaglutide could stabilize at <strong>$30-$100 per month</strong> once the market reaches full generic saturation - a scenario likely within 18-24 months.
        </p>

        <h2 id="what-to-do">What to Do Now</h2>
        <p>
          If you have been waiting to start semaglutide treatment because of cost, the barrier has fallen significantly. Here is what to consider:
        </p>
        <ol>
          <li><strong>If you are not yet on semaglutide:</strong> A virtual assessment through Felix Health can qualify you for an Apo-Semaglutide prescription at $149/month, delivered to your door. This is now the most accessible entry point for Canadians in the nine provinces Felix serves.</li>
          <li><strong>If you are already on Ozempic:</strong> Ask your physician or Felix to switch your prescription to generic semaglutide. You can switch mid-treatment without restarting the dose titration protocol.</li>
          <li><strong>If you have insurance:</strong> Contact your insurer or plan administrator. Provincial drug plans and private plans that cover Ozempic for type 2 diabetes will generally also cover the approved generics - often at a lower co-pay because the reimbursed price is lower.</li>
          <li><strong>If you are in Quebec or a Canadian territory:</strong> Generic semaglutide through Felix is not available in your region. Felix Health serves AB, BC, MB, NB, NL, NS, ON, PE, and SK only.</li>
        </ol>

        <div className="bg-[#E1F5EE] border border-[rgba(15,110,86,0.2)] rounded-xl p-5 mt-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#063D2B] mb-3">Start at Felix Health</p>
          <p className="text-sm text-[#063D2B] leading-relaxed mb-4">
            Felix Health is Canada's largest virtual weight loss clinic and has confirmed Apo-Semaglutide availability at $149/month all-in. Their online assessment takes under 20 minutes and, if approved, medication is shipped directly to your home.
          </p>
          <a
            href={FELIX_LINK}
            target="_blank"
            rel="noopener sponsored"
            className="inline-block bg-[#0F6E56] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#063D2B] transition-colors"
          >
            See if you qualify at Felix Health
          </a>
          <p className="text-xs text-[#0F6E56] mt-2">Sponsored link - Felix Health is an affiliate partner.</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-8 text-xs text-black leading-relaxed">
          <strong>Sources and accuracy note:</strong> The facts in this article - Health Canada approval dates, Felix Health pricing of $149/month, and pharmacy rollout details - are drawn from Health Canada official announcements (April 28 and May 1, 2026), the Felix Health GlobeNewsWire press release (May 12, 2026), and confirmed Felix Health patient communications (May 21, 2026). Pharmacy availability and pricing may vary. Always confirm current pricing directly with Felix Health or your pharmacy. This article does not constitute medical advice.
        </div>
      </div>
    </ArticleLayout>
  );
}
