import Link from "next/link";
import { NAV_LINKS, SITE_NAME, MEDICAL_DISCLAIMER, PROVINCE_DISCLAIMER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0F6E56]">
                <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
                </svg>
              </div>
              <span
                className="text-lg font-bold tracking-tight text-gray-900"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Weight Loss<span className="text-[#0F6E56]">Injections.ca</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-gray-500 leading-relaxed">
              Independent editorial coverage of GLP-1 medications in Canada. Not a medical provider.
            </p>
            <Link href="/disclaimer" className="inline-flex items-center gap-1 text-xs font-medium text-[#0F6E56] hover:text-[#063D2B] transition-colors">
              Medical disclaimer &amp; disclosures
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Nav columns */}
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12" aria-label="Footer navigation">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Medications</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/semaglutide" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Semaglutide (Ozempic / Wegovy)</Link></li>
                <li><Link href="/tirzepatide" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Tirzepatide (Mounjaro)</Link></li>
                <li><Link href="/oral-glp1" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Oral GLP-1 (Rybelsus)</Link></li>
                <li><Link href="/compare" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Compare Medications</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Access &amp; Cost</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/cost" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Cost Guide</Link></li>
                <li><Link href="/insurance-coverage" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Insurance Coverage</Link></li>
                <li><Link href="/ontario" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Ontario Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Site</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Home</Link></li>
                <li><Link href="/compare" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Drug Comparison</Link></li>
                <li><Link href="/disclaimer" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Disclaimer &amp; Disclosures</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Province notice */}
        <div className="mt-8 rounded-lg border border-gray-200 bg-white px-5 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1">Province Availability Notice</p>
          <p className="text-[12px] text-gray-500 leading-relaxed">{PROVINCE_DISCLAIMER}</p>
        </div>

        {/* Disclaimers */}
        <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
          <p className="text-xs leading-relaxed text-gray-500">
            <span className="font-semibold text-gray-600">Medical Disclaimer:</span>{" "}
            {MEDICAL_DISCLAIMER}
          </p>
          <p className="text-xs leading-relaxed text-gray-500">
            <span className="font-semibold text-gray-600">Affiliate Disclosure:</span>{" "}
            This site contains sponsored content and affiliate links. We may earn a commission when you click through to partner providers. Editorial content is independent of commercial relationships.
          </p>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Not affiliated with any pharmaceutical manufacturer.
          </p>
          <p className="mt-2 flex items-center gap-1 text-xs text-gray-400">
            🍁 Canadian content only &mdash; all prices in CAD
          </p>
        </div>
      </div>
    </footer>
  );
}
