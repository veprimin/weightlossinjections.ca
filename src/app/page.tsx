import type { Metadata } from "next";
import Link from "next/link";
import { FelixBanner } from "@/components/FelixAd";
import ProvinceGrid from "@/components/ProvinceGrid";
import { FELIX_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Weight Loss Injections in Canada — Ozempic, Wegovy, Mounjaro Guide",
  description:
    "Canada's independent editorial guide to GLP-1 weight loss injections. Expert coverage of Ozempic, Wegovy, Mounjaro, and generic semaglutide.",
};

const featuredArticles = [
  {
    href: "/semaglutide",
    emoji: "💉",
    gradient: "linear-gradient(135deg,#0F6E56,#2DB88A)",
    category: "In-Depth Guide",
    readTime: "12 min",
    date: "May 2025",
    title: "The Complete Guide to Semaglutide (Ozempic & Wegovy) in Canada",
    excerpt: "From how GLP-1 receptor agonists work to province-by-province access — everything you need to start or continue treatment.",
  },
  {
    href: "/tirzepatide",
    emoji: "⚗️",
    gradient: "linear-gradient(135deg,#0F766E,#2DD4BF)",
    category: "Medication Guide",
    readTime: "10 min",
    date: "May 2025",
    title: "Tirzepatide (Mounjaro) in Canada: The Dual-Action GLP-1",
    excerpt: "Mounjaro targets two gut hormones instead of one — and clinical trials show it outperforms semaglutide for weight loss.",
  },
  {
    href: "/compare",
    emoji: "⚖️",
    gradient: "linear-gradient(135deg,#3730A3,#818CF8)",
    category: "Comparison",
    readTime: "9 min",
    date: "May 2025",
    title: "Ozempic vs. Wegovy vs. Mounjaro vs. Rybelsus: Which Is Right for You?",
    excerpt: "Same drug class, very different drugs. We break down each medication's approval, dosing, cost, and clinical evidence.",
  },
];

const quickLinks = [
  { href: "/cost",               emoji: "💰", label: "Cost Guide",         sub: "Province-by-province pricing"  },
  { href: "/insurance-coverage", emoji: "🛡️", label: "Insurance Coverage", sub: "What plans actually cover"     },
  { href: "/oral-glp1",          emoji: "💊", label: "Oral GLP-1",         sub: "Rybelsus — no needles"         },
  { href: "/ontario",            emoji: "🍁", label: "Ontario Guide",      sub: "ODB, private plans & access"   },
];

export default function HomePage() {
  return (
    <>
      {/* Breaking Banner */}
      <div className="bg-[#E1F5EE] border-b border-[rgba(15,110,86,0.2)] px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="shrink-0 bg-[#0F6E56] text-white text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Breaking</span>
          <p className="text-sm text-[#063D2B]">
            Health Canada approves first generic semaglutide — prices expected to drop 45–90%.{" "}
            <Link href="/semaglutide#generics" className="font-semibold underline underline-offset-2">Read more →</Link>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24" style={{ background: "linear-gradient(135deg,#063D2B 0%,#0F6E56 55%,#1D9E75 100%)" }}>
        <div className="absolute -right-20 -top-20 w-[500px] h-[500px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/60 mb-4">
            <span className="inline-block w-6 h-px bg-[#5DCAA5]" />
            {"Canada's GLP-1 Resource"}
          </p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight max-w-3xl mb-5" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            The Straight Facts on Weight Loss Injections in Canada
          </h1>
          <p className="text-lg font-light text-white/80 max-w-xl leading-relaxed mb-8">
            Independent editorial coverage of Ozempic, Wegovy, Mounjaro, and the new generic semaglutides — access, cost, and what the research actually shows.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/compare" className="inline-flex items-center gap-2 bg-white text-[#0F6E56] font-semibold text-[14.5px] px-6 py-3.5 rounded-lg hover:bg-[#E1F5EE] transition-colors">
              Compare Medications →
            </Link>
            <a href={FELIX_LINK} target="_blank" rel="noopener sponsored" className="inline-flex items-center gap-2 text-white/85 border border-white/30 text-[14.5px] font-medium px-6 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/60 transition-colors">
              Check eligibility with Felix
            </a>
          </div>
          <div className="flex flex-wrap gap-8 sm:gap-10 mt-14 pt-8 border-t border-white/15">
            {[
              { num: "5M+",  label: "Canadians living with obesity" },
              { num: "~15%", label: "Avg body weight lost on semaglutide" },
              { num: "2",    label: "Generic semaglutides now approved" },
              { num: "$0",   label: "Extra cost for Felix home delivery" },
            ].map((s) => (
              <div key={s.num}>
                <span className="block text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>{s.num}</span>
                <span className="block text-[11.5px] text-white/55 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-baseline justify-between gap-4 border-b-2 border-gray-900 pb-3 mb-8">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Georgia, serif" }}>Featured Coverage</h2>
          <Link href="/compare" className="text-sm font-medium text-[#0F6E56] hover:underline">All articles →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((a) => (
            <Link key={a.href} href={a.href} className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-44 flex items-center justify-center text-5xl" style={{ background: a.gradient }}>{a.emoji}</div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#E1F5EE] text-[#0F6E56] text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">{a.category}</span>
                  <span className="text-xs text-gray-400">{a.date} · {a.readTime}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-[17px] leading-snug mb-2 group-hover:text-[#0F6E56] transition-colors" style={{ fontFamily: "Georgia, serif" }}>{a.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>Quick Guides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((q) => (
              <Link key={q.href} href={q.href} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-sm transition-all group">
                <div className="text-3xl mb-3">{q.emoji}</div>
                <p className="font-semibold text-gray-900 text-[14px] group-hover:text-[#0F6E56] transition-colors">{q.label}</p>
                <p className="text-xs text-gray-500 mt-1">{q.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProvinceGrid />

      {/* Felix Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-5 flex items-center gap-3 before:flex-1 before:h-px before:bg-gray-200 after:flex-1 after:h-px after:bg-gray-200">
          Sponsored Partner
        </p>
        <FelixBanner />
      </section>

      {/* Newsletter */}
      <section className="px-4 sm:px-6 py-16" style={{ background: "linear-gradient(135deg,#063D2B,#0F6E56)" }}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "Georgia, serif" }}>Stay Informed</h2>
          <p className="text-white/75 text-[15px] mb-7">Weekly updates on GLP-1 access, pricing changes, and policy news across Canada.</p>
          <form className="flex gap-2 max-w-sm mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/25 text-white placeholder:text-white/40 text-sm outline-none focus:border-white/60 transition-colors" />
            <button type="submit" className="px-5 py-3 bg-white text-[#0F6E56] font-semibold text-sm rounded-lg hover:bg-[#E1F5EE] transition-colors whitespace-nowrap">Subscribe</button>
          </form>
          <p className="text-white/35 text-xs mt-3">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </>
  );
}
