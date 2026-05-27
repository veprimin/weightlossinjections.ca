import Link from "next/link";
import { SITE_NAME, MEDICAL_DISCLAIMER, PROVINCE_DISCLAIMER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

          {/* Brand */}
          <div className="flex flex-col gap-3 lg:max-w-xs">
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
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10" aria-label="Footer navigation">

            {/* Column 1: Medications */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-black">Medications</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/semaglutide"              className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Semaglutide (Ozempic / Wegovy)</Link></li>
                <li><Link href="/tirzepatide"              className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Tirzepatide (Mounjaro)</Link></li>
                <li><Link href="/oral-glp1"               className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Oral GLP-1 (Rybelsus)</Link></li>
                <li><Link href="/saxenda"                  className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Saxenda (Liraglutide)</Link></li>
                <li><Link href="/generic-semaglutide"     className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Generic Semaglutide</Link></li>
                <li><Link href="/dosing"                   className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Dosing Guide</Link></li>
              </ul>
            </div>

            {/* Column 2: Comparisons */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-black">Compare Drugs</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/compare"                          className="text-sm text-black transition-colors hover:text-[#1B3A6B]">All Medications</Link></li>
                <li><Link href="/compare/ozempic-vs-wegovy"        className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Ozempic vs Wegovy</Link></li>
                <li><Link href="/compare/ozempic-vs-mounjaro"      className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Ozempic vs Mounjaro</Link></li>
                <li><Link href="/compare/wegovy-vs-mounjaro"       className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Wegovy vs Mounjaro</Link></li>
                <li><Link href="/compare/ozempic-vs-rybelsus"      className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Ozempic vs Rybelsus</Link></li>
              </ul>
            </div>

            {/* Column 3: Access & Cost */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-black">Access &amp; Cost</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/cost"                    className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Cost Guide</Link></li>
                <li><Link href="/insurance-coverage"      className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Insurance Coverage</Link></li>
                <li><Link href="/insurance-checker"       className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Insurance Checker</Link></li>
                <li><Link href="/online-prescription"     className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Get a Prescription</Link></li>
                <li><Link href="/semaglutide-price-drop"  className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Price Drop Alert</Link></li>
                <li><Link href="/felix-semaglutide-149"   className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Felix $149/month</Link></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-black">Resources</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/faq"                              className="text-sm text-black transition-colors hover:text-[#1B3A6B]">FAQ</Link></li>
                <li><Link href="/side-effects"                     className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Side Effects Guide</Link></li>
                <li><Link href="/best-generic-semaglutide-canada"  className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Best Generic Provider</Link></li>
                <li><Link href="/about"                            className="text-sm text-black transition-colors hover:text-[#1B3A6B]">About This Site</Link></li>
                <li><Link href="/disclaimer"                       className="text-sm text-black transition-colors hover:text-[#1B3A6B]">Disclaimer &amp; Disclosures</Link></li>
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
