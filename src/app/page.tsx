import type { Metadata } from "next";
import Link from "next/link";
import ProviderCards from "@/components/ProviderCards";
import ProvinceGrid from "@/components/ProvinceGrid";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { FELIX_LINK, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections Canada 2025 - Ozempic, Wegovy, Mounjaro Guide",
  description:
    "Canada's independent editorial guide to GLP-1 weight loss injections. Expert coverage of Ozempic, Wegovy, Mounjaro, and generic semaglutide - province-by-province access, cost, and eligibility.",
  alternates: {
    canonical: SITE_URL,
    languages: { "en-CA": SITE_URL, "x-default": SITE_URL },
  },
};

const featuredArticles = [
  {
    href: "/semaglutide",
    accentColor: "#1B3A6B",
    accentLight: "#E8EFFF",
    category: "In-Depth Guide",
    readTime: "12 min",
    date: "May 2025",
    title: "The Complete Guide to Semaglutide in Canada",
    excerpt:
      "How Ozempic and Wegovy work, who qualifies, how much they cost by province, and how to get a prescription through a licensed Canadian provider.",
  },
  {
    href: "/tirzepatide",
    accentColor: "#0F766E",
    accentLight: "#CCFBF1",
    category: "Medication Guide",
    readTime: "10 min",
    date: "May 2025",
    title: "Tirzepatide (Mounjaro): The Dual-Action GLP-1",
    excerpt:
      "Mounjaro targets two gut hormones instead of one. Clinical trials show it outperforms semaglutide for weight loss - here's what that means for Canadians.",
  },
  {
    href: "/compare",
    accentColor: "#3730A3",
    accentLight: "#EEF2FF",
    category: "Comparison",
    readTime: "9 min",
    date: "May 2025",
    title: "Ozempic vs. Wegovy vs. Mounjaro vs. Rybelsus",
    excerpt:
      "Same drug class, very different medications. We break down each drug's approval status, dosing, real-world cost, and clinical evidence in Canada.",
  },
];

const quickLinks = [
  { href: "/cost",               label: "Cost Guide",         sub: "Province-by-province pricing"  },
  { href: "/insurance-coverage", label: "Insurance Coverage", sub: "What plans actually pay for"   },
  { href: "/oral-glp1",          label: "Oral GLP-1",         sub: "Rybelsus - no needles"         },
  { href: "/ontario",            label: "Ontario Guide",      sub: "ODB, private plans & access"   },
];

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-[#E8EFFF]/50 to-white">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <div className="mb-8 text-center">
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(27,58,107,0.25)] bg-[#E8EFFF] px-3 py-1 text-xs font-medium text-[#1B3A6B]">
              Canada&rsquo;s independent GLP-1 editorial guide
            </p>
            <h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Weight Loss Injections in{" "}
              <span className="text-[#1B3A6B]">Canada</span>
            </h1>
            <p className="mt-3 text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl">
              Ozempic. Wegovy. Mounjaro. Rybelsus.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-800 sm:text-lg">
              Independent editorial coverage written for Canadians - real costs, province-by-province access, and clinical evidence without the marketing spin.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B3A6B] px-8 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-[#0F2547] active:shadow-sm sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span>Compare Medications</span>
                <span className="text-xs font-medium text-white/70">Ozempic, Wegovy, Mounjaro</span>
              </span>
            </Link>
            <a
              href={FELIX_LINK}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-amber-300 bg-amber-50 px-8 py-3.5 text-base font-bold text-amber-900 shadow-sm transition-all hover:bg-amber-100 sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-amber-700">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span>Check Your Eligibility</span>
                <span className="text-xs font-medium text-amber-700">Free &middot; 5 minutes</span>
              </span>
            </a>
          </div>

          <div className="mt-3 text-center">
            <a
              href="#guides"
              className="inline-flex items-center gap-1 py-3 text-sm font-semibold text-[#1B3A6B] hover:text-[#0F2547]"
            >
              Read our medication guides
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-1.5 text-[13px] text-gray-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gray-600">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
              </svg>
              Updated monthly
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-gray-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gray-600">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
              </svg>
              Independent - no pharma funding
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-gray-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gray-600">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Canadian content only
            </div>
          </div>
        </div>
      </section>

      {/* ── Intent Splitter ──────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#guides"
              aria-label="Read our medication guides"
              className="flex flex-1 items-start gap-4 rounded-xl border-2 border-[rgba(27,58,107,0.2)] bg-[#E8EFFF]/30 p-5 text-left transition-colors hover:border-[#1B3A6B] hover:bg-[#E8EFFF]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A6B] focus-visible:ring-offset-2"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8EFFF]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[#1B3A6B]">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Researching your options?</p>
                <p className="mt-0.5 text-sm text-gray-800">Browse our medication guides below</p>
              </div>
            </Link>
            <a
              href={FELIX_LINK}
              target="_blank"
              rel="noopener sponsored"
              aria-label="Get a GLP-1 prescription online with Felix"
              className="flex flex-1 items-start gap-4 rounded-xl border-2 border-amber-300 bg-amber-50 p-5 text-left transition-colors hover:border-amber-400 hover:bg-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-amber-700">
                  <path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Ready to get a prescription?</p>
                <p className="mt-0.5 text-sm text-gray-800">See licensed Canadian telehealth providers</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Key Stats ────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gray-50/60 py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "~15%",   label: "avg. body weight lost on semaglutide" },
              { value: "2",      label: "generic semaglutides Health Canada-approved" },
              { value: "9",      label: "provinces with online prescription access" },
              { value: "45-90%", label: "potential savings with generic alternatives" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span
                  className="block text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {s.value}
                </span>
                <span className="mt-1 block text-[11.5px] leading-snug text-gray-700">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Guides ──────────────────────────────────── */}
      <section id="guides" className="border-b border-gray-100 bg-white py-12 sm:py-16 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2
                className="text-xl font-bold text-gray-900 sm:text-2xl"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Medication Guides
              </h2>
              <p className="mt-1 text-sm text-gray-800">
                Evidence-based guides written for Canadians.
              </p>
            </div>
            <Link
              href="/compare"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1B3A6B] hover:text-[#0F2547]"
            >
              See drug comparison
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {featuredArticles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ background: a.accentLight }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-bold uppercase tracking-widest" style={{ color: a.accentColor }}>
                    {a.category}
                  </span>
                  <span className="text-[11px] text-gray-600">{a.date} &middot; {a.readTime} read</span>
                </div>
                <h3
                  className="text-[17px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#1B3A6B]"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {a.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-800">{a.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-[13px] font-semibold" style={{ color: a.accentColor }}>
                  Read the guide
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Links ──────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gray-50/60 py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-700">Quick Guides</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {quickLinks.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-[#1B3A6B] hover:shadow-sm"
              >
                <p className="font-semibold text-gray-900 text-sm group-hover:text-[#1B3A6B] transition-colors">{q.label}</p>
                <p className="text-xs text-gray-700">{q.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2
              className="text-xl font-bold text-gray-900 sm:text-2xl"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              How it works
            </h2>
            <p className="mt-1.5 text-sm text-gray-700">From research to prescription, here&rsquo;s the typical path.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: 1,
                title: "Research your options",
                desc: "Read our evidence-based guides to understand which medication may suit you - costs, side effects, eligibility by province.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[#1B3A6B]">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                  </svg>
                ),
              },
              {
                step: 2,
                title: "Get a prescription online",
                desc: "A licensed Canadian provider reviews your eligibility in minutes. No clinic visit, no waiting room. All done from home.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[#1B3A6B]">
                    <path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>
                  </svg>
                ),
              },
              {
                step: 3,
                title: "Medication delivered to you",
                desc: "Your medication is dispensed by a licensed Canadian pharmacy and shipped directly to your door - often with free delivery.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[#1B3A6B]">
                    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h.01"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8EFFF]">
                  {item.icon}
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#1B3A6B]">Step {item.step}</p>
                <h3 className="mb-2 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-800">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Savings Card CTA ─────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-[rgba(27,58,107,0.2)] bg-[#E8EFFF]/30 p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[#1B3A6B]">
                  <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2
                  className="text-lg font-bold text-gray-900 sm:text-xl"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  Generic semaglutide is now available in Canada
                </h2>
                <p className="mt-1 text-sm text-gray-800">
                  Health Canada has approved 2 manufacturers. Prices expected to drop 45-90% vs. brand-name Ozempic.
                </p>
              </div>
              <Link
                href="/semaglutide#generics"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#1B3A6B] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0F2547] sm:w-auto sm:flex-shrink-0"
              >
                Read the full update
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Province Grid ────────────────────────────────────── */}
      <ProvinceGrid />

      {/* ── Recommended Providers ────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2
                className="text-xl font-bold text-gray-900 sm:text-2xl"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Recommended Online Providers
              </h2>
              <p className="mt-1 text-sm text-gray-800">
                Licensed Canadian telehealth. Prescriptions and delivery included.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-700">
              Contains sponsored content
            </span>
          </div>
          <ProviderCards />
        </div>
      </section>

      {/* ── Stay Informed ────────────────────────────────────── */}
      <section className="bg-[#0F2547] py-14 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2 text-center">
            <p className="text-sm font-medium text-[#4B7EC8]">Stay up to date</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-8 sm:px-8">
            <div className="mb-6 text-center">
              <h2
                className="text-xl font-bold text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Get notified about GLP-1 access changes in Canada
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Generic approvals, coverage changes, pricing updates - when it matters. No spam.
              </p>
            </div>
            <form className="space-y-3">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B3A6B] px-4 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#2D5FA8]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
                </svg>
                Subscribe - It&rsquo;s Free
              </button>
              <p className="text-center text-xs text-white/40">We only email about important GLP-1 updates. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
