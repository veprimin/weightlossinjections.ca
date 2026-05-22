import { FELIX_LINK } from "@/lib/constants";

interface FelixAdProps {
  variant?: "banner" | "sidebar" | "inline";
}

export function FelixBanner() {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#1B3A6B 0%,#2D5FA8 60%,#4B7EC8 100%)" }}>
      <div className="px-8 py-9 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />
        <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-2">Sponsored · Felix Health</p>
        <h3 className="text-2xl font-bold text-white mb-3 max-w-md leading-snug" style={{ fontFamily: "Georgia, serif" }}>
          Canadians Can Now Get Ozempic Delivered to Their Door - at No Extra Cost
        </h3>
        <p className="text-white/85 text-[15px] font-light leading-relaxed mb-6 max-w-sm">
          A licensed Canadian provider reviews your eligibility in minutes. No clinic visit. No waiting rooms.
        </p>
        <a
          href={FELIX_LINK}
          target="_blank"
          rel="noopener sponsored"
          className="inline-flex items-center gap-2 bg-white text-[#1B3A6B] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#E8EFFF] transition-colors"
        >
          Check if you qualify with Felix →
        </a>
      </div>
      <div className="bg-black/15 px-8 py-4 flex gap-8 flex-wrap">
        {[
          { num: "45–90%", label: "cheaper with generics" },
          { num: "$0",     label: "extra for home delivery" },
          { num: "5 min",  label: "online assessment" },
        ].map((s) => (
          <div key={s.num} className="text-center">
            <span className="block text-xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>{s.num}</span>
            <span className="block text-[11px] text-white/60 mt-0.5">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FelixSidebar() {
  return (
    <div className="rounded-xl overflow-hidden relative" style={{ background: "linear-gradient(135deg,#0F2547,#1B3A6B)" }}>
      <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
      <div className="p-5 relative">
        <p className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">Sponsored · Felix Health</p>
        <h3 className="text-lg font-bold text-white leading-snug mb-2" style={{ fontFamily: "Georgia, serif" }}>
          Get Ozempic Delivered to Your Door
        </h3>
        <p className="text-[13px] text-white/75 leading-relaxed mb-4">
          Licensed Canadian provider assessment. Prescription + home delivery included.
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { num: "$0",     label: "Delivery cost" },
            { num: "5 min",  label: "Assessment" },
          ].map((s) => (
            <div key={s.num} className="bg-white/10 rounded-lg p-2.5 text-center">
              <span className="block text-base font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>{s.num}</span>
              <span className="block text-[10px] text-white/55 mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
        <a
          href={FELIX_LINK}
          target="_blank"
          rel="noopener sponsored"
          className="flex items-center justify-center gap-1.5 bg-white text-[#1B3A6B] font-semibold text-[13.5px] py-2.5 rounded-lg hover:bg-[#E8EFFF] transition-colors"
        >
          Check eligibility with Felix
        </a>
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
        <p className="font-semibold mb-1.5 text-[15px]" style={{ color: "#ffffff" }}>Find out if you qualify for GLP-1 treatment</p>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>Felix matches you with a licensed Canadian provider in minutes - no clinic visit needed.</p>
      </div>
      <a
        href={FELIX_LINK}
        target="_blank"
        rel="noopener sponsored"
        className="shrink-0 bg-white text-[#1B3A6B] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#E8EFFF] transition-colors whitespace-nowrap"
      >
        Start free assessment →
      </a>
    </div>
  );
}
