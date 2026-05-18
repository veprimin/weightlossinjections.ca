import type { Metadata } from "next";
import Link from "next/link";
import { FelixBanner } from "@/components/FelixAd";
import ProvinceGrid from "@/components/ProvinceGrid";
import { FELIX_LINK, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Weight Loss Injections in Canada - Ozempic, Wegovy, Mounjaro Guide",
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
    accentColor: "#0F6E56",
    accentLight: "#E1F5EE",
    category: "In-Depth Guide",
    readTime: "12 min",
    date: "May 2025",
    title: "The Complete Guide to Semaglutide in Canada",
    excerpt: "How Ozempic and Wegovy work, who qualifies, how much they cost by province, and how to get a prescription through a licensed Canadian provider.",
  },
  {
    href: "/tirzepatide",
    accentColor: "#0F766E",
    accentLight: "#CCFBF1",
    category: "Medication Guide",
    readTime: "10 min",
    date: "May 2025",
    title: "Tirzepatide (Mounjaro): The Dual-Action GLP-1",
    excerpt: "Mounjaro targets two gut hormones instead of one. Clinical trials show it outperforms semaglutide for weight loss - here's what that means for Canadians.",
  },
  {
    href: "/compare",
    accentColor: "#3730A3",
    accentLight: "#EEF2FF",
    category: "Comparison",
    readTime: "9 min",
    date: "May 2025",
    title: "Ozempic vs. Wegovy vs. Mounjaro vs. Rybelsus",
    excerpt: "Same drug class, very different medications. We break down each drug's approval status, dosing, real-world cost, and clinical evidence in Canada.",
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
      {/* Breaking Banner */}
      <div className="bg-[#E1F5EE] border-b border-[rgba(15,110,86,0.2)] px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="shrink-0 bg-[#0F6E56] text-white text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">New</span>
          <p className="text-sm text-[#063D2B]">
            Health Canada approves first generic semaglutide - prices expected to drop 45–90%.{" "}
            <Link href="/semaglutide#generics" className="font-semibold underline underline-offset-2">Read more →</Link>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 bg-[#063D2B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#5DCAA5] mb-6">
              Canada&rsquo;s GLP-1 Resource
            </p>
            <h1
              className="text-4xl sm:text-5xl xl:text-[3.75rem] font-black text-white leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)", letterSpacing: "-0.01em" }}
            >
              The straight facts on weight loss injections in Canada.
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-10" style={{ fontFamily: "var(--font-source-serif, Georgia, serif)" }}>
              Independent editorial coverage of Ozempic, Wegovy, Mounjaro, and generic semaglutide - what the research actually shows, how much they cost, and how to access them in your province.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/compare"
                className="inline-flex items-center gap-2 bg-white text-[#0F6E56] font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-[#E1F5EE] transition-colors"
              >
                Compare medications →
              </Link>
              <a
                href={FELIX_LINK}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center gap-2 border border-white/25 text-white/80 text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/50 transition-colors"
              >
                Check eligibility with Felix
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 mt-16 pt-8 border-t border-white/10">
            <div>
              <span className="block text-2xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>~15%</span>
              <span className="block text-[11.5px] text-white/50 mt-1">avg. body weight lost on semaglutide</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>2</span>
              <span className="block text-[11.5px] text-white/50 mt-1">generic semaglutides now Health Canada-approved</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>9</span>
              <span className="block text-[11.5px] text-white/50 mt-1">provinces with online prescription access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-baseline justify-between gap-4 pb-3 mb-8 border-b-2 border-gray-900">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Georgia, serif" }}>Featured Coverage</h2>
          <Link href="/compare" className="text-sm font-medium text-[#0F6E56] hover:underline">All articles →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
          {featuredArticles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group bg-white p-6 sm:p-7 flex flex-col gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-[10.5px] font-bold uppercase tracking-widest"
                  style={{ color: a.accentColor }}
                >
                  {a.category}
                </span>
                <span className="text-[11px] text-gray-400">{a.date} · {a.readTime} read</span>
              </div>
              <div
                className="w-10 h-[3px] rounded-full"
                style={{ background: a.accentColor }}
              />
              <h3
                className="font-bold text-gray-900 text-[19px] leading-snug group-hover:text-[#0F6E56] transition-colors"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                {a.title}
              </h3>
              <p className="text-[14.5px] text-gray-600 leading-relaxed flex-1">{a.excerpt}</p>
              <span
                className="text-[13px] font-semibold self-start"
                style={{ color: a.accentColor }}
              >
                Read the guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-y border-gray-200 bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Quick Guides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {quickLinks.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex flex-col gap-1 border-l-2 border-gray-300 pl-4 hover:border-[#0F6E56] transition-colors"
              >
                <p className="font-semibold text-gray-900 text-[14.5px] group-hover:text-[#0F6E56] transition-colors">{q.label}</p>
                <p className="text-xs text-gray-500">{q.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProvinceGrid />

      {/* Felix Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-5 flex items-center gap-3 before:flex-1 before:h-px before:bg-gray-200 after:flex-1 after:h-px after:bg-gray-200">
          Sponsored Partner
        </p>
        <FelixBanner />
      </section>

      {/* Stay Informed */}
      <section className="px-4 sm:px-6 py-16 bg-gray-900">
        <div className="max-w-lg mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Stay informed on GLP-1 access in Canada
          </h2>
          <p className="text-gray-400 text-[15px] mb-7 leading-relaxed">
            Coverage changes, pricing updates, and policy news - when it matters.
          </p>
          <form className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-gray-600 text-sm outline-none focus:border-white/30 transition-colors"
            />
            <button type="submit" className="px-5 py-3 bg-[#0F6E56] text-white font-semibold text-sm rounded-lg hover:bg-[#1D9E75] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-gray-600 text-xs mt-3">No spam. Unsubscribe any time.</p>
        </div>
      </section>
    </>
  );
}
