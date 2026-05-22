import { FELIX_LINK, DIRECT_MEDS_LINK } from "@/lib/constants";

export function FelixSidebar() {
  return (
    <div className="rounded-xl overflow-hidden relative" style={{ background: "linear-gradient(135deg,#0F2547,#1B3A6B)" }}>
      <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
      <div className="p-5 relative">
        <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Sponsored Partners</p>
        <h3 className="text-base font-bold text-white leading-snug mb-2" style={{ fontFamily: "Georgia, serif" }}>
          Get Your GLP-1 Delivered to Your Door
        </h3>
        <p className="text-sm text-white/75 leading-relaxed mb-4">
          Licensed Canadian providers. Prescription and home delivery included.
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { num: "$0",    label: "Delivery" },
            { num: "5 min", label: "Assessment" },
          ].map((s) => (
            <div key={s.num} className="bg-white/10 rounded-lg p-2.5 text-center">
              <span className="block text-base font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>{s.num}</span>
              <span className="block text-xs text-white/55 mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <a
            href={FELIX_LINK}
            target="_blank"
            rel="noopener sponsored"
            className="flex items-center justify-center bg-white text-[#1B3A6B] font-semibold text-sm py-2.5 rounded-lg hover:bg-[#E8EFFF] transition-colors"
          >
            Felix Health &rarr;
          </a>
          <a
            href={DIRECT_MEDS_LINK}
            target="_blank"
            rel="noopener sponsored"
            className="flex items-center justify-center bg-white/10 text-white font-semibold text-sm py-2 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            Direct Meds &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export function FelixInline() {
  return (
    <div
      className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 my-8"
      style={{ background: "linear-gradient(135deg,#0F2547,#1B3A6B)" }}
    >
      <div className="flex-1">
        <p className="text-sm font-semibold mb-1.5 text-white">Find out if you qualify for GLP-1 treatment</p>
        <p className="text-sm leading-relaxed text-white/85">Licensed Canadian providers review your eligibility in minutes - no clinic visit needed.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 shrink-0">
        <a
          href={FELIX_LINK}
          target="_blank"
          rel="noopener sponsored"
          className="bg-white text-[#1B3A6B] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#E8EFFF] transition-colors whitespace-nowrap"
        >
          Felix Health &rarr;
        </a>
        <a
          href={DIRECT_MEDS_LINK}
          target="_blank"
          rel="noopener sponsored"
          className="bg-white/10 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/20 transition-colors border border-white/20 whitespace-nowrap"
        >
          Direct Meds &rarr;
        </a>
      </div>
    </div>
  );
}
