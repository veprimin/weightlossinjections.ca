import Link from "next/link";
import { NAV_LINKS, SITE_NAME, MEDICAL_DISCLAIMER, PROVINCE_DISCLAIMER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Province notice bar */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 mb-10 flex gap-3">
          <span className="text-[#5DCAA5] text-lg shrink-0 mt-0.5">🍁</span>
          <div>
            <p className="text-[11.5px] font-semibold text-white uppercase tracking-wider mb-1">Province Availability Notice</p>
            <p className="text-[12.5px] text-gray-400 leading-relaxed">{PROVINCE_DISCLAIMER}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>
              {SITE_NAME}
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Independent editorial coverage of GLP-1 medications and weight management in Canada. Not a medical provider.
            </p>
            <div className="space-y-1">
              <Link href="/disclaimer" className="block text-xs text-[#5DCAA5] hover:text-white transition-colors">
                Medical Disclaimer &amp; Disclosures →
              </Link>
              <p className="text-xs text-gray-500">Contains sponsored content &amp; affiliate links.</p>
            </div>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Medications</p>
            <ul className="space-y-2">
              <li><Link href="/semaglutide" className="text-sm hover:text-white transition-colors">Semaglutide (Ozempic / Wegovy)</Link></li>
              <li><Link href="/tirzepatide" className="text-sm hover:text-white transition-colors">Tirzepatide (Mounjaro)</Link></li>
              <li><Link href="/oral-glp1" className="text-sm hover:text-white transition-colors">Oral GLP-1 (Rybelsus)</Link></li>
              <li><Link href="/compare" className="text-sm hover:text-white transition-colors">Compare Medications</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Access &amp; Cost</p>
            <ul className="space-y-2">
              <li><Link href="/cost" className="text-sm hover:text-white transition-colors">Cost Guide</Link></li>
              <li><Link href="/insurance-coverage" className="text-sm hover:text-white transition-colors">Insurance Coverage</Link></li>
              <li><Link href="/ontario" className="text-sm hover:text-white transition-colors">Ontario Guide</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Site</p>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/compare" className="text-sm hover:text-white transition-colors">Drug Comparison</Link></li>
              <li><Link href="/disclaimer" className="text-sm hover:text-white transition-colors">Disclaimer &amp; Disclosures</Link></li>
              <li>
                <a href="/api/medications" className="text-sm hover:text-white transition-colors" aria-label="Medications data API">
                  API: Medications
                </a>
              </li>
              <li>
                <a href="/api/provinces" className="text-sm hover:text-white transition-colors" aria-label="Provinces data API">
                  API: Provinces
                </a>
              </li>
              <li>
                <a href="/llms.txt" className="text-sm hover:text-white transition-colors" aria-label="LLMs.txt for AI">
                  llms.txt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-xs">
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            <strong className="text-gray-300">Medical Disclaimer:</strong> {MEDICAL_DISCLAIMER}
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-3 pt-3 border-t border-gray-800">
            <p className="text-gray-600">© {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Canada · en-CA</p>
            <div className="flex gap-4 sm:text-right">
              <Link href="/disclaimer" className="text-gray-500 hover:text-[#5DCAA5] transition-colors">Disclaimer</Link>
              <a href="/sitemap.xml" className="text-gray-500 hover:text-[#5DCAA5] transition-colors">Sitemap</a>
              <a href="/llms.txt" className="text-gray-500 hover:text-[#5DCAA5] transition-colors">llms.txt</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
