import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL, FELIX_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Felix Health Generic Semaglutide: Pricing, How It Works & Reviews (2026)",
  description:
    "Felix Health offers Health Canada-authorized generic semaglutide starting at $149 per pen with free delivery and direct insurance billing. Full review of pricing, the online prescription process, patient reviews, and how Felix compares.",
  alternates: {
    canonical: `${SITE_URL}/felix-generic-semaglutide`,
    languages: {
      "en-CA": `${SITE_URL}/felix-generic-semaglutide`,
      "x-default": `${SITE_URL}/felix-generic-semaglutide`,
    },
  },
};

const toc = [
  { id: "overview",     label: "What Felix Offers" },
  { id: "pricing",      label: "Generic Semaglutide Pricing" },
  { id: "all-meds",     label: "All Medications on Felix" },
  { id: "how-it-works", label: "How It Works" },
  { id: "reviews",      label: "Patient Reviews" },
  { id: "faq",          label: "FAQ" },
  { id: "verdict",      label: "Editorial Verdict" },
];

const related = [
  { href: "/generic-semaglutide",              emoji: "💊", title: "Generic Semaglutide in Canada: Complete Guide",    date: "May 2026" },
  { href: "/best-generic-semaglutide-canada",  emoji: "⚖️", title: "Best Generic Semaglutide Providers Compared",     date: "May 2026" },
  { href: "/semaglutide-price-drop",           emoji: "📉", title: "Semaglutide Price Drop: The Full Picture",         date: "May 2026" },
  { href: "/cost",                             emoji: "💰", title: "Province-by-Province Cost Guide",                  date: "May 2026" },
];

/* ------------------------------------------------------------------ */
/*  Pricing data (Ontario, May 2026)                                   */
/* ------------------------------------------------------------------ */

const genericPricing = [
  { dose: "0.25mg", qty: "per 1 pen",  price: "$149" },
  { dose: "0.5mg",  qty: "per 1 pen",  price: "$149" },
  { dose: "1mg",    qty: "per 1 pen",  price: "$149" },
  { dose: "1.5mg",  qty: "per 2 pens", price: "$298" },
  { dose: "2mg",    qty: "per 2 pens", price: "$286" },
];

type MedCard = {
  name: string;
  subtitle: string;
  highlight: boolean;
  insurance: boolean;
  cta: boolean;
  pricing: { dose: string; qty: string; price: string }[];
};

const allMedications: MedCard[] = [
  {
    name: "Generic Semaglutide",
    subtitle: "Semaglutide",
    highlight: true,
    insurance: false,
    cta: true,
    pricing: [
      { dose: "0.25mg", qty: "per 1 pen",  price: "$149" },
      { dose: "0.5mg",  qty: "per 1 pen",  price: "$149" },
      { dose: "1mg",    qty: "per 1 pen",  price: "$149" },
      { dose: "1.5mg",  qty: "per 2 pens", price: "$298" },
      { dose: "2mg",    qty: "per 2 pens", price: "$286" },
    ],
  },
  {
    name: "Ozempic",
    subtitle: "Semaglutide",
    highlight: false,
    insurance: true,
    cta: false,
    pricing: [
      { dose: "0.25mg", qty: "per 1 pen",  price: "$149" },
      { dose: "0.5mg",  qty: "per 1 pen",  price: "$149" },
      { dose: "1mg",    qty: "per 1 pen",  price: "$149" },
      { dose: "1.5mg",  qty: "per 2 pens", price: "$298" },
      { dose: "2mg",    qty: "per 2 pens", price: "$286" },
    ],
  },
  {
    name: "Wegovy",
    subtitle: "Semaglutide",
    highlight: false,
    insurance: true,
    cta: false,
    pricing: [
      { dose: "0.25mg", qty: "per 1 pen", price: "$374.82" },
      { dose: "0.5mg",  qty: "per 1 pen", price: "$374.82" },
      { dose: "1mg",    qty: "per 1 pen", price: "$374.82" },
      { dose: ">1mg",   qty: "per 1 pen", price: "$374.82" },
    ],
  },
  {
    name: "Mounjaro",
    subtitle: "Tirzepatide",
    highlight: false,
    insurance: true,
    cta: false,
    pricing: [
      { dose: "2.5mg",  qty: "per 1 pen", price: "$350.60" },
      { dose: "5mg",    qty: "per 1 pen", price: "$364.04" },
      { dose: "7.5mg",  qty: "per 1 pen", price: "$413.55" },
      { dose: "10mg",   qty: "per 1 pen", price: "$413.55" },
      { dose: "12.5mg", qty: "per 1 pen", price: "$501.88" },
      { dose: "15mg",   qty: "per 1 pen", price: "$501.88" },
    ],
  },
  {
    name: "Zepbound",
    subtitle: "Tirzepatide",
    highlight: false,
    insurance: true,
    cta: false,
    pricing: [
      { dose: "2.5mg",  qty: "per 1 pen", price: "$350.60" },
      { dose: "5mg",    qty: "per 1 pen", price: "$364.04" },
      { dose: "7.5mg",  qty: "per 1 pen", price: "$413.55" },
      { dose: "10mg",   qty: "per 1 pen", price: "$413.55" },
      { dose: "12.5mg", qty: "per 1 pen", price: "$501.88" },
      { dose: "15mg",   qty: "per 1 pen", price: "$501.88" },
    ],
  },
  {
    name: "Contrave",
    subtitle: "Bupropion Hydrochloride + Naltrexone Hydrochloride",
    highlight: false,
    insurance: true,
    cta: false,
    pricing: [
      { dose: "150 tablets", qty: "", price: "$388.00" },
    ],
  },
  {
    name: "Rybelsus®",
    subtitle: "Semaglutide Tablets",
    highlight: false,
    insurance: true,
    cta: false,
    pricing: [
      { dose: "First 30 days", qty: "", price: "$0" },
      { dose: "Refills",       qty: "", price: "$322.80" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Patient reviews                                                    */
/* ------------------------------------------------------------------ */

const reviews = [
  {
    text: "Simple to follow and all without having to leave the house. I like the quick responses from my nurse practitioner if I have any questions or concerns.",
    name: "Patricia",
  },
  {
    text: "Fast service. Excellent, well informed doctors who help you. You have saved me time and money.",
    name: "Samantha M.",
  },
  {
    text: "The physician I was writing with went over and above. He was empathetic and also provided tips along with the prescription.",
    name: "Leslie S.",
  },
  {
    text: "Easy access to medical professionals, much faster than through my GP, quick approval, shipment and treatment, and weekly instructions plus the ability to ask my nurse anything and receive a quick reply.",
    name: "Brenda",
  },
  {
    text: "I recently moved to a smaller city in British Columbia and no longer have a family doctor. Felix Health has been a great resource. The clinicians are consistently kind, thoughtful, and encouraging.",
    name: "Robert",
  },
  {
    text: "The platform is really user friendly and my doctor has responded with compassion and informatively to all my questions, in a very timely fashion.",
    name: "Anonymous",
  },
];

/* ------------------------------------------------------------------ */
/*  Shield icon                                                        */
/* ------------------------------------------------------------------ */
function ShieldCheck() {
  return (
    <svg
      width="13" height="13"
      viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function FelixGenericSemaglutidePage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Provider Review"
        readTime="7 min"
        date="May 2026"
        headline="Felix Health Generic Semaglutide: Pricing, How It Works & Patient Reviews (2026)"
        standfirst="Felix Health is Canada's largest virtual healthcare platform, now offering Health Canada-authorized generic semaglutide starting at $149 per pen - with free delivery and direct insurance billing. Here is a complete editorial review."
      />

      <div className="prose-editorial">

        {/* Sponsored disclosure */}
        <div className="bg-[#E1F5EE] border-l-4 border-[#0F6E56] rounded-r-xl px-5 py-4 mb-8 not-prose">
          <p className="text-xs font-bold uppercase tracking-widest text-[#063D2B] mb-1">Disclosure</p>
          <p className="text-sm text-[#063D2B] leading-relaxed">
            Felix Health is a sponsored partner of WeightLossInjections.ca. This page contains affiliate links. Our editorial assessment is independent and not influenced by the commercial relationship.
          </p>
        </div>

        {/* ── Overview ── */}
        <h2 id="overview">What Felix Health Offers</h2>
        <p>
          Felix Health is a Canadian digital-first healthcare platform that has served more than 1.5 million patients since launch. It operates across all nine provinces covered by this site - Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Nova Scotia, Ontario, Prince Edward Island, and Saskatchewan.
        </p>
        <p>
          Following Health Canada&apos;s authorization of generic semaglutide in 2025-2026, Felix moved quickly to offer Apo-Semaglutide alongside its existing brand-name weight management programs. The generic is available in 2mg and 4mg injectable pens, prescribed by licensed Canadian healthcare practitioners and delivered free to your door.
        </p>

        {/* At a glance stats */}
        <div className="not-prose grid grid-cols-3 gap-3 my-6">
          {[
            { stat: "1.5M+", label: "Canadians served" },
            { stat: "4.8",   label: "Trustpilot rating" },
            { stat: "$149",  label: "Starting price / pen" },
          ].map((s) => (
            <div key={s.label} className="text-center rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-2xl font-black text-[#0F6E56] mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{s.stat}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <p>
          What sets Felix apart from pharmacy walk-ins is the end-to-end online model: health assessment, practitioner review, prescription, and home delivery all happen without you visiting a clinic or pharmacy. Felix also offers direct insurance billing - instead of paying out-of-pocket and claiming later, Felix submits to your insurer on your behalf.
        </p>

        <ul>
          <li>Prescribed by licensed Canadian healthcare professionals</li>
          <li>Direct insurance billing - no claim forms required</li>
          <li>Free delivery across all nine provinces served</li>
          <li>Ongoing practitioner messaging for dose adjustments and refills</li>
          <li>Generic semaglutide (Apo-Semaglutide) and brand-name options both available</li>
        </ul>

        {/* ── Generic Semaglutide Pricing ── */}
        <h2 id="pricing">Generic Semaglutide Pricing</h2>
        <p>
          Felix prices generic semaglutide (Apo-Semaglutide) at the same per-pen rate as Ozempic. The price is flat at $149 per pen for doses up to 1mg - representing roughly a 50% drop from the pre-generic semaglutide market. At higher maintenance doses (1.5mg and 2mg), patients require two pens per monthly supply, and pricing reflects that accordingly.
        </p>

        {/* Pricing card - styled after Felix's UI */}
        <div className="not-prose my-6 flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-full sm:max-w-xs rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <div className="px-1 py-0.5 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pt-4 pb-0">Generic Semaglutide Pricing</p>
            </div>
            <div className="px-6 pt-2 pb-4">
              <h3 className="text-2xl font-black text-black mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>
                Generic Semaglutide
              </h3>
              <p className="text-sm text-gray-500 mb-5">Semaglutide</p>
              <div className="space-y-0">
                {genericPricing.map((row, i) => (
                  <div
                    key={row.dose}
                    className={`flex justify-between items-center py-2.5 text-sm ${i < genericPricing.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <span className="text-gray-700">{row.dose} / {row.qty}</span>
                    <span className="font-semibold text-black">{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6">
              <a
                href={FELIX_LINK}
                target="_blank"
                rel="noopener sponsored"
                className="block w-full text-center bg-gray-900 text-white text-sm font-bold py-3.5 rounded-xl hover:bg-gray-700 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Key pricing notes</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#0F6E56] font-bold mt-0.5">-</span> Prices shown are for Ontario patients</li>
                <li className="flex gap-2"><span className="text-[#0F6E56] font-bold mt-0.5">-</span> Patient Support Program discount already applied</li>
                <li className="flex gap-2"><span className="text-[#0F6E56] font-bold mt-0.5">-</span> Insurance may reduce your out-of-pocket further</li>
                <li className="flex gap-2"><span className="text-[#0F6E56] font-bold mt-0.5">-</span> Felix bills insurers directly - no upfront claim process</li>
                <li className="flex gap-2"><span className="text-[#0F6E56] font-bold mt-0.5">-</span> Prices last updated May 2026</li>
              </ul>
            </div>
            <div className="rounded-xl bg-[#E1F5EE] border border-[#0F6E56]/20 p-4">
              <p className="text-sm font-semibold text-[#063D2B] mb-1">Why is the 2mg dose cheaper than 1.5mg?</p>
              <p className="text-sm text-[#063D2B] leading-relaxed">
                At 1.5mg you need two 1mg pens ($298 total). At 2mg, Felix provides a 2mg pen specifically priced at $286 - a slight saving for patients at that maintenance dose.
              </p>
            </div>
          </div>
        </div>

        {/* ── All Medications ── */}
        <h2 id="all-meds">All Weight Management Medications on Felix</h2>
        <p>
          Beyond generic semaglutide, Felix offers the full range of Health Canada-approved weight management medications. Below are current prices (Ontario, May 2026) for every medication available through the platform. Prices do not account for insurance coverage.
        </p>

        {/* Medication pricing grid */}
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 my-6">
          {allMedications.map((med) => (
            <div
              key={med.name}
              className={`rounded-2xl border bg-white overflow-hidden ${
                med.highlight
                  ? "border-[#0F6E56]/50 ring-1 ring-[#0F6E56]/20"
                  : "border-gray-200"
              }`}
            >
              {med.highlight && (
                <div className="bg-[#0F6E56] px-5 py-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Generic Semaglutide Pricing</p>
                </div>
              )}
              <div className="px-5 pt-5 pb-4">
                <h3
                  className="text-xl font-bold text-black mb-0.5 leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {med.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-snug">{med.subtitle}</p>
                <div className="space-y-0">
                  {med.pricing.map((row, i) => (
                    <div
                      key={row.dose}
                      className={`flex justify-between items-center py-2 text-sm ${
                        i < med.pricing.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <span className="text-gray-700">
                        {row.dose}{row.qty ? ` / ${row.qty}` : ""}
                      </span>
                      <span className="font-semibold text-black">{row.price}</span>
                    </div>
                  ))}
                </div>
                {med.insurance && (
                  <div className="flex items-center gap-1.5 mt-3 text-xs font-medium text-[#1B3A6B]">
                    <ShieldCheck />
                    Often covered by insurance
                  </div>
                )}
              </div>
              {med.cta && (
                <div className="px-5 pb-5">
                  <a
                    href={FELIX_LINK}
                    target="_blank"
                    rel="noopener sponsored"
                    className="block w-full text-center bg-gray-900 text-white text-sm font-bold py-3 rounded-xl hover:bg-gray-700 transition-colors"
                  >
                    Get started
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 -mt-2">
          Prices are for patients in Ontario and do not take into account insurance coverage. Generic Semaglutide prices reflect the cost after the Patient Support Program discount is applied. Prices last updated May 2026.
        </p>

        {/* ── How It Works ── */}
        <h2 id="how-it-works">How It Works</h2>
        <p>
          Felix&apos;s process is entirely online and asynchronous - no clinic visits, no pharmacy queues. The typical timeline from submitting your health assessment to receiving a prescription decision is under 24 hours. Medication is shipped free and tracked.
        </p>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {[
            {
              num: "1",
              title: "Complete an online health assessment",
              body: "Answer questions about your medical history, current medications, and weight management goals. Takes approximately 5 minutes.",
            },
            {
              num: "2",
              title: "Receive your treatment plan",
              body: "A licensed Canadian practitioner reviews your information within 24 hours via asynchronous online chat. A virtual consultation is arranged if needed.",
            },
            {
              num: "3",
              title: "Medication delivered to your door",
              body: "If prescribed, Felix ships your medication through its pharmacy partners at no extra cost. Free tracked delivery to your home.",
            },
            {
              num: "4",
              title: "Ongoing care and support",
              body: "Your assigned practitioner is available via message for dose adjustments, refills, and questions throughout your treatment - no repeat visits required.",
            },
          ].map((step) => (
            <div key={step.num} className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex gap-3 items-start">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "#0F6E56" }}
                >
                  {step.num}
                </span>
                <div>
                  <p className="text-sm font-bold text-black mb-1">{step.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <FelixInline />

        {/* ── Patient Reviews ── */}
        <h2 id="reviews">Patient Reviews</h2>
        <p>
          Felix holds a 4.8 rating on Trustpilot, 4.9 on the App Store, and 4.6 on Google - across more than 1.5 million patients. The following reviews are sourced from verified Felix patients and are reproduced here as reported.
        </p>

        {/* Review rating row */}
        <div className="not-prose flex flex-wrap gap-4 my-5">
          {[
            { platform: "Trustpilot", score: "4.8" },
            { platform: "App Store",  score: "4.9" },
            { platform: "Google",     score: "4.6" },
          ].map((r) => (
            <div key={r.platform} className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 bg-white">
              <span className="text-xl font-black text-black" style={{ fontFamily: "var(--font-playfair)" }}>{r.score}</span>
              <div>
                <p className="text-xs font-bold text-black">{r.platform}</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="10" height="10" viewBox="0 0 20 20" fill="#0F6E56" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {reviews.map((r) => (
            <div key={r.name} className="border border-gray-200 rounded-xl p-5 bg-white">
              <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-2 border-t border-gray-100 pt-3">
                <div className="w-6 h-6 rounded-full bg-[#E1F5EE] flex items-center justify-center text-[#0F6E56] text-xs font-bold shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-black">{r.name}</p>
                  <p className="text-xs text-gray-400">Verified reviewer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FAQ ── */}
        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>How do I request generic semaglutide through Felix?</h3>
        <p>
          Start by completing a health assessment at Felix&apos;s website. A licensed practitioner reviews your information within 24 hours. If approved, medication is dispensed by Felix&apos;s pharmacy partners and delivered to your door at no extra cost. There is no minimum commitment period.
        </p>

        <h3>How is generic semaglutide supplied through Felix?</h3>
        <p>
          Generic semaglutide through Felix is supplied as an injectable pen. Your healthcare practitioner determines your starting dose - typically 0.25mg per week - and increases it over time based on your response and tolerability. The medication is available in 2mg and 4mg pens.
        </p>

        <h3>How much does generic semaglutide cost through Felix?</h3>
        <p>
          Generic semaglutide and Ozempic are priced at the same rate on Felix - $149 per pen for doses up to 1mg. This reflects the Patient Support Program discount and represents roughly a 50% reduction from pre-generic pricing. Patients with private insurance or provincial drug coverage may pay significantly less. Felix offers direct insurance billing, removing the need to pay upfront and reclaim.
        </p>

        <h3>Is generic semaglutide authorized by Health Canada?</h3>
        <p>
          Yes. Generic semaglutide was authorized by Health Canada in 2025-2026, making Canada the first G7 nation to approve generic injectable semaglutide. Products dispensed through Felix&apos;s pharmacy partners are authorized for sale and meet Health Canada&apos;s national standards for quality, safety, and efficacy.
        </p>

        <h3>What is generic semaglutide?</h3>
        <p>
          Generic semaglutide contains the same active ingredient as brand-name Ozempic and Wegovy. It became available in Canada following Health Canada authorization, initially produced by Dr. Reddy&apos;s Laboratories and Apotex Inc. (Apo-Semaglutide). Both products were demonstrated to be bioequivalent to the brand-name reference product as a condition of approval.
        </p>

        <h3>Which provinces does Felix serve?</h3>
        <p>
          Felix operates in Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Nova Scotia, Ontario, Prince Edward Island, and Saskatchewan. Felix does not currently serve Quebec, the Northwest Territories, Nunavut, or Yukon.
        </p>

        {/* ── Editorial Verdict ── */}
        <h2 id="verdict">Editorial Verdict</h2>
        <p>
          Felix Health is the most established platform in the Canadian virtual weight management space, and its generic semaglutide offering reflects that maturity. The direct insurance billing, the 1.5 million patient base, the consistent practitioner review times, and the free delivery infrastructure all point to a platform that has solved the operational problems that still trip up smaller competitors.
        </p>
        <p>
          The main consideration is price. At $149 per pen, Felix sits at the same level as Ozempic - and $25 per month above competitors like Phoenix Health and Raven Health, which are offering the same Apo-Semaglutide product at $124.99/month. For patients without insurance, that difference is worth evaluating. For patients with insurance - particularly those who benefit from Felix&apos;s direct billing - the convenience premium is likely justified.
        </p>
        <p>
          For most Canadians new to GLP-1 treatment, Felix is the lowest-friction starting point: established, well-reviewed, and operating at scale.
        </p>

        {/* Final CTA */}
        <div className="not-prose rounded-xl overflow-hidden border border-[#0F6E56]/30 mt-6">
          <div className="bg-[#0F6E56] px-6 py-4">
            <p className="text-sm font-bold text-white">Felix Health - Sponsored Partner</p>
          </div>
          <div className="bg-[#E1F5EE] px-6 py-5">
            <p className="text-sm text-[#063D2B] leading-relaxed mb-4">
              WeightLossInjections.ca has a commercial relationship with Felix Health. We receive a referral fee if you sign up through our link. This does not affect our editorial assessment above.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={FELIX_LINK}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-2 bg-[#0F6E56] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#063D2B] transition-colors"
              >
                Get started with Felix Health
                <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <Link
                href="/best-generic-semaglutide-canada"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0F6E56] text-sm font-semibold px-6 py-3 rounded-lg border border-[#0F6E56]/30 hover:bg-white/70 transition-colors"
              >
                Compare all providers
              </Link>
            </div>
          </div>
        </div>

      </div>
    </ArticleLayout>
  );
}
