import Link from "next/link";
import { SITE_NAME, MEDICAL_DISCLAIMER, PROVINCE_DISCLAIMER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span
                className="text-lg font-bold tracking-tight text-black"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Weight Loss<span className="text-[#1B3A6B]">Injections.ca</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-black leading-relaxed">
              Independent editorial coverage of GLP-1 medications in Canada. Not a medical provider.
            </p>
            <Link href="/disclaimer" className="inline-flex items-center gap-1 text-xs font-medium text-[#1B3A6B] hover:text-[#0F2547] transition-colors">
              Medical disclaimer &amp; disclosures
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Nav columns */}
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12" aria-label="Footer navigation">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-black">Medications</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/semaglutide" className="text-sm text-black transition-colors hover:text-black">Semaglutide (Ozempic / Wegovy)</Link></li>
                <li><Link href="/tirzepatide" className="text-sm text-black transition-colors hover:text-black">Tirzepatide (Mounjaro)</Link></li>
                <li><Link href="/oral-glp1" className="text-sm text-black transition-colors hover:text-black">Oral GLP-1 (Rybelsus)</Link></li>
                <li><Link href="/compare" className="text-sm text-black transition-colors hover:text-black">Compare Medications</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-black">Access &amp; Cost</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/cost" className="text-sm text-black transition-colors hover:text-black">Cost Guide</Link></li>
                <li><Link href="/insurance-coverage" className="text-sm text-black transition-colors hover:text-black">Insurance Coverage</Link></li>
                <li><Link href="/insurance-checker" className="text-sm text-black transition-colors hover:text-black">Insurance Checker</Link></li>
                <li><Link href="/ontario" className="text-sm text-black transition-colors hover:text-black">Ontario Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-black">Site</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/" className="text-sm text-black transition-colors hover:text-black">Home</Link></li>
                <li><Link href="/compare" className="text-sm text-black transition-colors hover:text-black">Drug Comparison</Link></li>
                <li><Link href="/disclaimer" className="text-sm text-black transition-colors hover:text-black">Disclaimer &amp; Disclosures</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Province notice */}
        <div className="mt-8 rounded-lg border border-gray-200 bg-white px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-black mb-1">Province Availability Notice</p>
          <p className="text-xs text-black leading-relaxed">{PROVINCE_DISCLAIMER}</p>
        </div>

        {/* Disclaimers */}
        <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
          <p className="text-xs leading-relaxed text-black">
            <span className="font-semibold text-black">Medical Disclaimer:</span>{" "}
            {MEDICAL_DISCLAIMER}
          </p>
          <p className="text-xs leading-relaxed text-black">
            <span className="font-semibold text-black">Affiliate Disclosure:</span>{" "}
            This site contains sponsored content and affiliate links. We may earn a commission when you click through to partner providers. Editorial content is independent of commercial relationships.
          </p>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-xs text-black">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Not affiliated with any pharmaceutical manufacturer.
          </p>
          <p className="mt-2 flex items-center gap-1 text-xs text-black">
            Canadian content only - all prices in CAD
          </p>
        </div>
      </div>
    </footer>
  );
}
