import { FELIX_LINK, PROVINCES } from "@/lib/constants";

export default function ProvinceGrid() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block bg-[#E1F5EE] text-[#0F6E56] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Available Across Canada
        </span>
        <h2 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Georgia, serif" }}>
          Get Started in Your Province
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Felix connects you with a licensed Canadian healthcare provider online — no clinic visit required.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {PROVINCES.map((p) => (
            <a
              key={p.name}
              href={FELIX_LINK}
              target="_blank"
              rel="noopener sponsored"
              className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-lg px-4 py-3 text-[13.5px] font-medium text-gray-700 hover:border-[#1D9E75] hover:text-[#0F6E56] hover:bg-[#F2FAF7] transition-all hover:-translate-y-0.5"
            >
              <span className="text-lg">{p.flag}</span>
              {p.name}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-5">
          Availability subject to provincial regulations. A licensed provider will confirm eligibility after your assessment.
        </p>
      </div>
    </section>
  );
}
