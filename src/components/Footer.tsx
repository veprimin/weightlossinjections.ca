import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>
              {SITE_NAME}
            </p>
            <p className="text-sm leading-relaxed">
              Independent editorial coverage of GLP-1 medications and weight management in Canada. Not a medical provider. May contain sponsored content and affiliate links.
            </p>
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
              {NAV_LINKS.slice(0, 2).map(l => null)}
            </ul>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Pages</p>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/compare" className="text-sm hover:text-white transition-colors">Drug Comparison</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="sm:text-right max-w-lg">
            This site contains sponsored content and affiliate links. Content is for informational purposes only and does not constitute medical advice. Always consult a licensed healthcare provider before starting any medication.
          </p>
        </div>
      </div>
    </footer>
  );
}
