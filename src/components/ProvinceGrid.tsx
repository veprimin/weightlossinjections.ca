import { FELIX_LINK, PROVINCES } from "@/lib/constants";

export default function ProvinceGrid() {
  return (
    <section className="py-14 px-4 sm:px-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-[10.5px] font-bold uppercase tracking-widest text-[#0F6E56] mb-2">Available Across Canada</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Georgia, serif" }}>
            Start your assessment in your province
          </h2>
          <p className="text-sm text-gray-500">
            Felix connects you with a licensed Canadian healthcare provider online. No clinic visit required.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {PROVINCES.map((p) => (
            <a
              key={p.name}
              href={FELIX_LINK}
              target="_blank"
              rel="noopener sponsored"
              className="flex items-center gap-2.5 border border-gray-200 rounded-lg px-4 py-3 text-[13.5px] font-medium text-gray-700 hover:border-[#0F6E56] hover:text-[#0F6E56] hover:bg-[#F2FAF7] transition-all bg-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] shrink-0" />
              {p.name}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-5">
          Not available in Quebec or Canadian territories. A licensed provider will confirm eligibility after your assessment.
        </p>
      </div>
    </section>
  );
}
