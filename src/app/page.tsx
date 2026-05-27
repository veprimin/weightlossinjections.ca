import type { Metadata } from "next";
import Link from "next/link";
import ProviderCards from "@/components/ProviderCards";
import ProvinceGrid from "@/components/ProvinceGrid";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Injections Canada 2026 - Ozempic, Wegovy, Mounjaro Guide",
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
    category: "In-Depth Guide",
    readTime: "12 min",
    date: "May 2026",
    title: "The Complete Guide to Semaglutide in Canada",
    excerpt:
      "How Ozempic and Wegovy work, who qualifies, how much they cost by province, and how to get a prescription through a licensed Canadian provider.",
  },
  {
    href: "/tirzepatide",
    accentColor: "#0F766E",
    category: "Medication Guide",
    readTime: "10 min",
    date: "May 2026",
    title: "Tirzepatide (Mounjaro): The Dual-Action GLP-1",
    excerpt:
      "Mounjaro targets two gut hormones instead of one. Clinical trials show it outperforms semaglutide for weight loss - here's what that means for Canadians.",
  },
  {
    href: "/compare",
    accentColor: "#3730A3",
    category: "Comparison",
    readTime: "9 min",
    date: "May 2026",
    title: "Ozempic vs. Wegovy vs. Mounjaro vs. Rybelsus",
    excerpt:
      "Same drug class, very different medications. We break down each drug's approval status, dosing, real-world cost, and clinical evidence in Canada.",
  },
];

const quickLinks = [
  { href: "/cost",               label: "Cost Guide",         sub: "Province-by-province pricing"  },
  { href: "/insurance-checker",  label: "Insurance Checker",  sub: "Does your plan cover it?"      },
  { href: "/generic-semaglutide",label: "Generic Semaglutide",sub: "45-90% cheaper option"         },
  { href: "/online-prescription",label: "Get a Prescription", sub: "How virtual care works"        },
];

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-[#E8EFFF]/40 to-white">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <div className="mb-8 text-center">
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(27,58,107,0.25)] bg-[#E8EFFF] px-3 py-1 text-xs font-medium text-[#1B3A6B]">
              Canada&rsquo;s independent GLP-1 editorial guide
            </p>
            <h1
              className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Weight Loss Injections in{" "}
              <span className="text-[#1B3A6B]">Canada</span>
            </h1>
            <p className="mt-3 text-xl font-semibold tracking-tight text-black sm:text-2xl">
              Ozempic. Wegovy. Mounjaro. Rybelsus.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base text-black">
              Independent editorial coverage written for Canadians - real costs, province-by-province access, and clinical evidence without the marketing spin.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/compare"
              className="inline-flex items-center justify-center rounded-lg bg-[#1B3A6B] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#0F2547] sm:w-auto"
            >
              Compare Medications
            </Link>
            <a
              href="#providers"
              className="inline-flex items-center justify-center rounded-lg border border-[#D9D3C7] bg-[#FAF9F6] px-8 py-3.5 text-sm font-bold text-[#3D3530] shadow-sm transition-all hover:bg-[#F5F2EC] sm:w-auto"
            >
              Find a Provider
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <p className="text-sm text-black">Updated monthly</p>
            <p className="text-sm text-black">Independent - no pharma funding</p>
            <p className="text-sm text-black">Canadian content only</p>
          </div>
        </div>
      </section>

      {/* ── Intent Splitter ──────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#guides"
              className="flex flex-1 items-start gap-4 rounded-xl border-2 border-[rgba(27,58,107,0.2)] bg-[#E8EFFF]/30 p-5 text-left transition-colors hover:border-[#1B3A6B] hover:bg-[#E8EFFF]/60"
            >
              <div>
                <p className="text-sm font-bold text-black">Researching your options?</p>
                <p className="mt-0.5 text-sm text-black">Browse our medication guides below</p>
              </div>
            </Link>
            <a
              href="#providers"
              className="flex flex-1 items-start gap-4 rounded-xl border border-[#D9D3C7] bg-[#FAF9F6] p-5 text-left transition-colors hover:bg-[#F5F2EC]"
            >
              <div>
                <p className="text-sm font-bold text-black">Ready to get a prescription?</p>
                <p className="mt-0.5 text-sm text-black">See licensed Canadian telehealth providers</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Key Stats ────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-8">
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
                  className="block text-3xl font-bold text-black"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {s.value}
                </span>
                <span className="mt-1 block text-xs leading-snug text-black">{s.label}</span>
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
                className="text-xl font-bold text-black sm:text-2xl"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Medication Guides
              </h2>
              <p className="mt-1 text-sm text-black">
                Evidence-based guides written for Canadians.
              </p>
            </div>
            <Link
              href="/compare"
              className="text-sm font-medium text-[#1B3A6B] hover:text-[#0F2547]"
            >
              See drug comparison &rarr;
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {featuredArticles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: a.accentColor }}>
                    {a.category}
                  </span>
                  <span className="text-xs text-black">{a.date} &middot; {a.readTime}</span>
                </div>
                <h3
                  className="text-base font-bold leading-snug text-black transition-colors group-hover:text-[#1B3A6B]"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {a.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-black">{a.excerpt}</p>
                <span className="mt-auto text-sm font-semibold" style={{ color: a.accentColor }}>
                  Read the guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Links ──────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-black">Quick Guides</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {quickLinks.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-[#1B3A6B] hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-black group-hover:text-[#1B3A6B] transition-colors">{q.label}</p>
                <p className="text-xs text-black">{q.sub}</p>
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
              className="text-xl font-bold text-black sm:text-2xl"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              How it works
            </h2>
            <p className="mt-1.5 text-sm text-black">From research to prescription, here&rsquo;s the typical path.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: 1,
                title: "Research your options",
                desc: "Read our evidence-based guides to understand which medication may suit you - costs, side effects, eligibility by province.",
              },
              {
                step: 2,
                title: "Get a prescription online",
                desc: "A licensed Canadian provider reviews your eligibility in minutes. No clinic visit, no waiting room. All done from home.",
              },
              {
                step: 3,
                title: "Medication delivered to you",
                desc: "Your medication is dispensed by a licensed Canadian pharmacy and shipped directly to your door - often with free delivery.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1B3A6B] text-white text-base font-bold" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                  {item.step}
                </div>
                <h3 className="mb-2 text-base font-semibold text-black">{item.title}</h3>
                <p className="text-sm leading-relaxed text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Savings Banner ───────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-[rgba(27,58,107,0.2)] bg-[#E8EFFF]/30 p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex-1 min-w-0">
                <h2
                  className="text-lg font-bold text-black sm:text-xl"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  Generic semaglutide is now available in Canada
                </h2>
                <p className="mt-1 text-sm text-black">
                  Health Canada has approved 2 manufacturers. Prices expected to drop 45-90% vs. brand-name Ozempic.
                </p>
              </div>
              <Link
                href="/generic-semaglutide"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#1B3A6B] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0F2547] sm:w-auto sm:flex-shrink-0"
              >
                Read the full guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest Updates ───────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2
                className="text-xl font-bold text-black sm:text-2xl"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Latest Coverage
              </h2>
              <p className="mt-1 text-sm text-black">Recent updates on pricing, approvals, and access.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/semaglutide-price-drop",
                date: "May 2026",
                category: "Pricing",
                title: "Generic Semaglutide Price Drop: What Canadians Can Expect",
              },
              {
                href: "/felix-semaglutide-149",
                date: "May 2026",
                category: "News",
                title: "Felix Health Launches Generic Semaglutide at $149/month",
              },
              {
                href: "/best-generic-semaglutide-canada",
                date: "May 2026",
                category: "Comparison",
                title: "Best Generic Semaglutide Provider in Canada 2026",
              },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B]">{a.category}</span>
                  <span className="text-xs text-black">{a.date}</span>
                </div>
                <h3
                  className="text-sm font-bold leading-snug text-black transition-colors group-hover:text-[#1B3A6B]"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {a.title}
                </h3>
                <span className="mt-auto text-sm font-semibold text-[#1B3A6B]">Read &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── More Guides ──────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-black">Clinical Guides</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { href: "/faq",          label: "FAQ",             sub: "20+ questions answered"     },
              { href: "/side-effects", label: "Side Effects",    sub: "What to expect"             },
              { href: "/dosing",       label: "Dosing Guide",    sub: "Titration schedules"        },
              { href: "/saxenda",      label: "Saxenda Guide",   sub: "Liraglutide option"         },
            ].map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-[#1B3A6B] hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-black group-hover:text-[#1B3A6B] transition-colors">{q.label}</p>
                <p className="text-xs text-black">{q.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Province Grid ────────────────────────────────────── */}
      <ProvinceGrid />

      {/* ── Recommended Providers ────────────────────────────── */}
      <section id="providers" className="border-b border-gray-100 bg-white py-12 sm:py-16 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2
                className="text-xl font-bold text-black sm:text-2xl"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Recommended Online Providers
              </h2>
              <p className="mt-1 text-sm text-black">
                Licensed Canadian telehealth. Prescriptions and delivery included.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-black">
              Contains sponsored content
            </span>
          </div>
          <ProviderCards />
        </div>
      </section>

      {/* ── Stay Informed ────────────────────────────────────── */}
      <section className="bg-[#0F2547] py-14 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-[#4B7EC8] mb-3">Questions or corrections?</p>
          <h2
            className="text-xl font-bold text-white sm:text-2xl mb-3"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            We take accuracy seriously
          </h2>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">
            Coverage rules, drug approvals, and pricing change frequently. If you spot an error or have a correction, we want to know.
          </p>
          <a
            href="mailto:editorial@weightlossinjections.ca"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            editorial@weightlossinjections.ca
          </a>
        </div>
      </section>
    </>
  );
}
