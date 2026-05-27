import type { Metadata } from "next";
import ArticleHeader from "@/components/ArticleHeader";
import Link from "next/link";
import { SITE_URL, FELIX_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Generic Semaglutide Provider in Canada (2026) - Compared",
  description:
    "Comparing the top Canadian providers for generic semaglutide in 2026 - Felix Health, Phoenix Health, Raven, MedExpress, and Hims Canada. Pricing, fees, and what sets each apart.",
  alternates: {
    canonical: `${SITE_URL}/best-generic-semaglutide-canada`,
    languages: {
      "en-CA": `${SITE_URL}/best-generic-semaglutide-canada`,
      "x-default": `${SITE_URL}/best-generic-semaglutide-canada`,
    },
  },
};

const related = [
  { href: "/generic-semaglutide",    title: "Generic Semaglutide in Canada: Complete Guide",  date: "May 2026" },
  { href: "/semaglutide-price-drop", title: "Semaglutide Price Drops Over 50%",              date: "May 2026" },
  { href: "/cost",                   title: "Province-by-Province Cost Guide",                date: "May 2026" },
  { href: "/insurance-coverage",     title: "Insurance Coverage Guide",                       date: "May 2026" },
];

/* ------------------------------------------------------------------ */
/*  Provider data                                                       */
/* ------------------------------------------------------------------ */
const ACCENT_GREEN = "#0F6E56";

type ProviderData = {
  rank: number;
  name: string;
  logo: string;
  tagline: string;
  features: string[];
  rating: number;
  userVotes: number;
  price: string;
  badge: string | null;
  accentColor: string;
  url: string | null;
  sponsored: boolean;
  assessmentFee: string;
  followUp: string;
  shipping: string;
};

const providers: ProviderData[] = [
  {
    rank: 1,
    name: "Felix Health",
    logo: "https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/65590110de12de54c5d6ae83_felix%20logo-svg.svg",
    tagline: "Direct insurance billing included - most patients pay less than list price",
    features: [
      "Generic semaglutide (Apo-Semaglutide) at $149/month all-in",
      "Direct insurance billing - no claim forms to fill out",
      "Ongoing practitioner support - message your provider anytime",
      "1.5 million+ Canadians served. 4.8 Trustpilot rating.",
    ],
    rating: 9.8,
    userVotes: 4812,
    price: "$149/month",
    badge: "Editor's Choice",
    accentColor: ACCENT_GREEN,
    url: FELIX_LINK,
    sponsored: true,
    assessmentFee: "$0",
    followUp: "Included",
    shipping: "Free",
  },
  {
    rank: 2,
    name: "Phoenix Health",
    logo: "",
    tagline: "Canadian-owned. Unlimited doctor follow-ups included.",
    features: [
      "$124.99/month - $25 less than the $149 tier",
      "Unlimited doctor follow-ups bundled in - no extra fees",
      "Apotex generic semaglutide - same product as Felix dispenses",
    ],
    rating: 9.1,
    userVotes: 1876,
    price: "$124.99/month",
    badge: null,
    accentColor: "#374151",
    url: null,
    sponsored: false,
    assessmentFee: "$0",
    followUp: "Unlimited, included",
    shipping: "Free",
  },
  {
    rank: 3,
    name: "Raven Health",
    logo: "",
    tagline: "Women-focused. Ongoing check-ins included.",
    features: [
      "$124.99/month with $0 assessment fee and free shipping",
      "Women-focused clinic - includes PCOS and menopause contexts",
      "Ongoing check-ins, easy dose adjustments, responsive care team",
    ],
    rating: 9.0,
    userVotes: 1543,
    price: "$124.99/month",
    badge: null,
    accentColor: "#374151",
    url: null,
    sponsored: false,
    assessmentFee: "$0",
    followUp: "Included",
    shipping: "Free (2-3 days)",
  },
  {
    rank: 4,
    name: "MedExpress Canada",
    logo: "",
    tagline: "Clinical-first. Global network of 1.5M+ patients.",
    features: [
      "$124.99/pen - program fee (~$59) typically waived with promo code",
      "Led by endocrinologist and obesity medicine specialists",
      "Clinical review within 48 hours. LegitScript-certified.",
    ],
    rating: 8.8,
    userVotes: 1102,
    price: "$124.99/pen",
    badge: null,
    accentColor: "#374151",
    url: null,
    sponsored: false,
    assessmentFee: "~$59 (often waived)",
    followUp: "No clear recurring fee",
    shipping: "Free / discreet",
  },
  {
    rank: 5,
    name: "Hims Canada",
    logo: "",
    tagline: "Next-day delivery. 2.4M+ global subscribers.",
    features: [
      "$149/pen - free initial consultation and provider messaging included",
      "Free next-day shipping - fastest delivery option reviewed",
      "2.4M+ global subscribers. Designed by certified Canadian specialists.",
    ],
    rating: 8.7,
    userVotes: 987,
    price: "$149/pen",
    badge: null,
    accentColor: "#374151",
    url: null,
    sponsored: false,
    assessmentFee: "Free",
    followUp: "Appears included",
    shipping: "Free next-day",
  },
];

/* ------------------------------------------------------------------ */
/*  Star component                                                      */
/* ------------------------------------------------------------------ */
function StarRow({ score, color }: { score: number; color: string }) {
  const filled = Math.round((score / 10) * 5 * 2) / 2;
  return (
    <div className="flex gap-0.5 justify-center">
      {[1, 2, 3, 4, 5].map((star) => {
        const diff = filled - (star - 1);
        const full = diff >= 1;
        const half = diff >= 0.5 && !full;
        return (
          <svg key={star} width="14" height="14" viewBox="0 0 20 20"
            fill={full ? color : "none"} stroke={color} strokeWidth="1">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`hs-${star}`} x1="0" x2="1" y1="0" y2="0">
                    <stop offset="50%" stopColor={color} />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#hs-${star})`}
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </>
            ) : (
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            )}
          </svg>
        );
      })}
    </div>
  );
}

function scoreWording(s: number) {
  if (s >= 9.8) return "Outstanding";
  if (s >= 9.5) return "Excellent";
  if (s >= 9.0) return "Very Good";
  if (s >= 8.5) return "Good";
  return "Fair";
}

/* ------------------------------------------------------------------ */
/*  Provider card                                                       */
/* ------------------------------------------------------------------ */
function CardShell({
  p,
  children,
}: {
  p: ProviderData;
  children: React.ReactNode;
}) {
  const cardStyle = {
    borderRadius: 4,
    border: `1px solid ${p.rank === 1 ? p.accentColor + "55" : "#e5e7eb"}`,
  } as const;
  const cardClass = "block bg-white transition-shadow duration-200 hover:shadow-md";

  if (p.url) {
    return (
      <a href={p.url} target="_blank" rel="noopener sponsored" className={cardClass} style={cardStyle}>
        {children}
      </a>
    );
  }
  return (
    <div className={cardClass} style={cardStyle}>
      {children}
    </div>
  );
}

function ProviderCard({ p }: { p: ProviderData }) {
  return (
    <div className="relative mt-5">
      {/* Rank badge */}
      <div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-sm"
        style={{ backgroundColor: p.accentColor, color: "#fff", border: "2px solid white" }}
        aria-hidden="true"
      >
        {p.rank}
      </div>

      {/* Ribbon label */}
      {p.badge && (
        <div
          className="absolute top-0 left-5 -translate-y-1/2 z-10 flex items-center gap-1 px-3 py-1 text-xs font-bold text-white"
          style={{ backgroundColor: p.accentColor, borderRadius: 2 }}
          aria-hidden="true"
        >
          {p.rank === 1 && (
            <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}
          {p.badge}
        </div>
      )}

      <CardShell p={p}>
        <div className="flex gap-3 px-5 pt-7 pb-3">
          {/* Left: logo + tagline + features */}
          <div className="flex-1 min-w-0">
            <div className="h-12 flex items-center mb-3">
              {p.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  style={{ height: 40, maxWidth: 180, objectFit: "contain", objectPosition: "left center" }}
                  loading={p.rank <= 3 ? "eager" : "lazy"}
                />
              ) : (
                <span className="text-lg font-bold" style={{ color: "#111827" }}>{p.name}</span>
              )}
            </div>
            <p className="text-sm font-semibold mb-3 leading-snug" style={{ color: p.accentColor }}>
              {p.tagline}
            </p>
            <ul className="space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#111827" }}>
                  <svg
                    width="16" height="16"
                    fill="currentColor" viewBox="0 0 20 20"
                    aria-hidden="true"
                    style={{ color: "#111827", flexShrink: 0, marginTop: 2 }}
                  >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: score column */}
          <div className="flex-shrink-0 w-24 flex flex-col items-center text-center pt-1">
            <span className="text-4xl font-black leading-none" style={{ color: "#000" }}>
              {p.rating.toFixed(1)}
            </span>
            <span className="text-xs font-medium mt-0.5" style={{ color: "#111827" }}>
              {scoreWording(p.rating)}
            </span>
            <div className="mt-1.5">
              <StarRow score={p.rating} color={p.accentColor} />
            </div>
            <div className="mt-3 flex flex-col items-center leading-tight">
              <span className="font-bold text-base" style={{ color: "#000" }}>
                {p.userVotes.toLocaleString()}
              </span>
              <span className="text-xs" style={{ color: "#6b7280" }}>User Votes</span>
            </div>
          </div>
        </div>

        {/* CTA - only shown when there is an affiliate link */}
        {p.url && (
          <div className="px-5 pb-4 pt-1">
            <div
              className="w-full flex items-center justify-center gap-2 text-white text-sm font-bold py-2.5 rounded-full"
              style={{ backgroundColor: p.accentColor }}
            >
              Visit Site
              <svg width="16" height="13" viewBox="0 0 20 16" fill="none" aria-hidden="true">
                <path d="M16.6875 8.71875L11.6875 13.7188C11.3125 14.125 10.6562 14.125 10.2812 13.7188C9.875 13.3438 9.875 12.6875 10.2812 12.3125L13.5625 9H4C3.4375 9 3 8.5625 3 8C3 7.46875 3.4375 7 4 7H13.5625L10.2812 3.71875C9.875 3.34375 9.875 2.6875 10.2812 2.3125C10.6562 1.90625 11.3125 1.90625 11.6875 2.3125L16.6875 7.3125C17.0938 7.6875 17.0938 8.34375 16.6875 8.71875Z" fill="#fff" />
              </svg>
            </div>
            {p.sponsored && (
              <p className="text-center text-xs mt-2" style={{ color: p.accentColor }}>
                Sponsored partner - affiliate link
              </p>
            )}
          </div>
        )}
      </CardShell>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
export default function BestGenericSemaglutideCanadaPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

      <ArticleHeader
        category="Provider Comparison"
        readTime="9 min"
        date="May 2026"
        headline="Best Generic Semaglutide Provider in Canada (2026)"
      />

      <div className="space-y-6 mb-12">
        {providers.map((p) => (
          <ProviderCard key={p.name} p={p} />
        ))}
      </div>

      {/* ── Comparison Table ── */}
      <div className="overflow-x-auto mt-10 mb-2 rounded-xl border border-gray-200">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ background: "#0F6E56" }} className="text-white">
              <th className="text-left px-4 py-3 text-xs font-semibold min-w-[130px]">Provider</th>
              <th className="text-left px-4 py-3 text-xs font-semibold min-w-[120px]">Price</th>
              <th className="text-left px-4 py-3 text-xs font-semibold min-w-[120px]">Assessment Fee</th>
              <th className="text-left px-4 py-3 text-xs font-semibold min-w-[130px]">Follow-Up Fees</th>
              <th className="text-left px-4 py-3 text-xs font-semibold min-w-[100px]">Shipping</th>
              <th className="text-left px-4 py-3 text-xs font-semibold min-w-[90px]">Our Rating</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((p, i) => (
              <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 border-b border-gray-200 align-top">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: p.accentColor }}>{p.rank}</span>
                    <span className="text-xs font-bold text-black">{p.name}</span>
                    {p.sponsored && <span className="text-xs font-semibold text-[#0F6E56] bg-[#E1F5EE] px-1.5 py-0.5 rounded">Partner</span>}
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 align-top">
                  <span className="text-xs font-semibold text-black">{p.price}</span>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 align-top">
                  <span className="text-xs text-black">{p.assessmentFee}</span>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 align-top">
                  <span className="text-xs text-black">{p.followUp}</span>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 align-top">
                  <span className="text-xs text-black">{p.shipping}</span>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 align-top">
                  <span className="text-xs font-bold" style={{ color: p.accentColor }}>{p.rating}/10</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-black mb-10">
        Prices as of May 2026. Promotional rates and program fees may vary. Felix Health is an affiliate partner of WeightLossInjections.ca.
      </p>

      {/* ── Guide content ── */}
      <div className="max-w-3xl">
        <div className="prose-editorial">

          {/* Market context callout */}
          <div className="bg-[#E1F5EE] border-l-4 border-[#0F6E56] rounded-r-xl px-5 py-4 mb-8 not-prose">
            <p className="text-xs font-bold uppercase tracking-widest text-[#063D2B] mb-1">Market Update - May 2026</p>
            <p className="text-sm text-[#063D2B] leading-relaxed">
              Health Canada approved two generic semaglutide products in April-May 2026 - one from Dr. Reddy&apos;s Laboratories and Apo-Semaglutide from Apotex. The Canadian market has quickly organized into two price tiers: <strong>$124.99/month</strong> from challengers Phoenix and Raven, and <strong>$149/month</strong> from the established platforms Felix Health and Hims Canada.
            </p>
          </div>

          <h2 id="overview">Market Overview</h2>
          <p>
            The approval of generic semaglutide in Canada triggered an immediate competitive response from virtual healthcare providers. Within weeks, a half-dozen platforms announced pricing for the new Health Canada-authorized generics - and a clear market structure began to emerge.
          </p>
          <p>
            Two price tiers dominate the current market. At <strong>$124.99 per month</strong>, Phoenix Health and Raven Health are competing on price, bundling $0 assessment fees, unlimited follow-up care, and free shipping into a single monthly rate. At <strong>$149 per month</strong>, Felix Health and Hims Canada are positioning on brand trust, user experience, and established patient networks - Felix with direct insurance billing and Hims with next-day delivery.
          </p>
          <p>
            MedExpress Canada occupies a hybrid position: $124.99 per pen with a separate program fee (currently waived with a promotional code) and a clinical-first brand identity drawn from its global operations.
          </p>

          {/* How to choose */}
          <h2 id="how-to-choose">How to Choose the Right Provider</h2>
          <p>
            The right provider depends on what matters most to you. Here is a practical decision framework:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {[
            {
              num: "1",
              condition: "You have private health insurance",
              rec: "Start with Felix Health",
              reason: "Direct insurance billing can reduce your effective monthly cost significantly below the $149 list price. Felix is the only provider in this comparison that explicitly offers direct billing.",
            },
            {
              num: "2",
              condition: "You want the lowest upfront cost",
              rec: "Compare Phoenix Health and Raven Health",
              reason: "Both Phoenix Health and Raven Health offer $124.99/month with $0 assessment fees and unlimited follow-ups included.",
            },
            {
              num: "3",
              condition: "You are a woman seeking clinical continuity",
              rec: "Consider Raven Health or Felix Health",
              reason: "Raven is women-focused and offers $124.99/month with check-ins tailored to women's health contexts including PCOS and menopause.",
            },
            {
              num: "4",
              condition: "You want the fastest delivery",
              rec: "Consider Hims Canada",
              reason: "Hims offers next-day free shipping - faster than the 2-3 business day window most competitors quote.",
            },
          ].map((s) => (
            <div key={s.condition} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white bg-[#0F6E56]">
                  {s.num}
                </span>
                <div>
                  <p className="text-xs font-semibold text-black uppercase tracking-wider mb-1">If:</p>
                  <p className="text-sm font-semibold text-black mb-2">{s.condition}</p>
                  <p className="text-sm font-bold text-[#0F6E56] mb-1">&rarr; {s.rec}</p>
                  <p className="text-xs text-black leading-relaxed">{s.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div
          className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 my-8"
          style={{ background: "linear-gradient(135deg,#0F2547,#1B3A6B)" }}
        >
          <div className="flex-1">
            <p className="text-sm font-semibold mb-1.5 text-white">Ready to get started with generic semaglutide?</p>
            <p className="text-sm leading-relaxed text-white/85">
              Felix Health offers direct insurance billing and serves 1.5 million+ Canadians. Licensed virtual clinic with free shipping.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <a
              href={FELIX_LINK}
              target="_blank"
              rel="noopener sponsored"
              className="bg-white text-[#1B3A6B] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#E8EFFF] transition-colors whitespace-nowrap"
            >
              Felix Health &rarr;
            </a>
          </div>
        </div>

        <div className="prose-editorial">
          <h2 id="faq">Frequently Asked Questions</h2>

          <h3>Is generic semaglutide the same as Ozempic?</h3>
          <p>
            Yes, clinically. Health Canada requires generic medications to demonstrate bioequivalence to the reference brand - meaning the same active ingredient (semaglutide) is delivered into the bloodstream at the same rate and to the same extent. The device, packaging, and manufacturer differ, but the clinical effect is the same. Both Health Canada-approved generics (from Dr. Reddy&apos;s and Apotex) have received a Notice of Compliance confirming this equivalence.
          </p>

          <h3>Why is there a $25 price gap between the $124.99 and $149 tiers?</h3>
          <p>
            The market has quickly organized into two price tiers. The $124.99 tier (Phoenix, Raven, MedExpress) reflects competitive pressure from newer entrants positioning on price. The $149 tier (Felix, Hims) reflects established platforms charging for additional services - Felix for direct insurance billing and its patient infrastructure, Hims for next-day delivery and brand recognition. The effective out-of-pocket cost through Felix can be lower than $124.99 for patients with private insurance.
          </p>

          <h3>Can I switch providers if I am already on semaglutide?</h3>
          <p>
            Yes. Switching providers does not require restarting your dose titration. You will need a new prescription from the new provider, which typically involves completing a new online assessment. Your current dose level and injection schedule continue unchanged. There is no clinical reason to restart at the lowest dose when switching between bioequivalent products.
          </p>

          <h3>Which provinces are covered?</h3>
          <p>
            Felix Health serves AB, BC, MB, NB, NL, NS, ON, PE, and SK - the nine provinces covered by our site. Phoenix Health and Raven Health serve the same nine provinces. MedExpress Canada and Hims Canada serve multiple provinces but confirm coverage during the eligibility check. None of these providers serve Quebec, Northwest Territories, Nunavut, or Yukon.
          </p>

          <h3>How many more generic approvals are coming?</h3>
          <p>
            Health Canada has confirmed seven additional generic semaglutide submissions are currently under review. Each new approval increases competition and applies further downward pressure on price. See our <Link href="/generic-semaglutide">generic semaglutide guide</Link> for the full analysis of Canada&apos;s pricing trajectory.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed not-prose">
            <strong>Editorial transparency:</strong> Felix Health is an affiliate partner of WeightLossInjections.ca - we earn a commission if you use our link. Phoenix Health, Raven Health, MedExpress Canada, and Hims Canada are not affiliate partners and are included for editorial completeness. Our ranking reflects market position, service breadth, and reader utility alongside the commercial relationship. Prices accurate as of May 2026 - confirm current pricing with each provider. This content does not constitute medical advice.
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-xs font-bold uppercase tracking-widest text-black mb-4">Related Articles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="flex gap-3 group items-start">
                <div className="w-1 self-stretch rounded-full bg-[#E8EFFF] group-hover:bg-[#1B3A6B] transition-colors shrink-0" />
                <div>
                  <p className="text-sm font-medium text-black leading-snug group-hover:text-[#1B3A6B] transition-colors">{r.title}</p>
                  <p className="text-xs text-black mt-0.5">{r.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
