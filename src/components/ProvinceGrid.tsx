import { FELIX_LINK, PROVINCES } from "@/lib/constants";

export default function ProvinceGrid() {
  return (
    <section className="border-b border-gray-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-xl font-bold text-gray-900 sm:text-2xl"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Start your assessment by province
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Felix connects you with a licensed Canadian provider online - no clinic visit required.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {PROVINCES.map((p) => (
            <a
              key={p.name}
              href={FELIX_LINK}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-[#0F6E56] hover:bg-[#E1F5EE] hover:text-[#0F6E56]"
            >
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#1D9E75]" aria-hidden="true" />
              {p.name}
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Not available in Quebec or Canadian territories. A licensed provider will confirm eligibility after your assessment.
        </p>
      </div>
    </section>
  );
}
