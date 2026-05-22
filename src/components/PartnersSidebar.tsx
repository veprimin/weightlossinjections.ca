import { FELIX_LINK, DIRECT_MEDS_LINK } from "@/lib/constants";

const partners = [
  {
    rank: 1,
    name: "Direct Meds",
    url: DIRECT_MEDS_LINK,
    price: "From $99/mo",
    tagline: "Brand-name GLP-1s online. No insurance required.",
    accentColor: "#1B4F9E",
    cta: "Check eligibility",
  },
  {
    rank: 2,
    name: "Felix Health",
    url: FELIX_LINK,
    price: "From $39/mo",
    tagline: "Online prescriptions. Home delivery across Canada.",
    accentColor: "#0F6E56",
    cta: "Check eligibility",
  },
];

export default function PartnersSidebar() {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Sponsored Partners
        </p>
      </div>
      <div className="divide-y divide-gray-100">
        {partners.map((p) => (
          <div key={p.name} className="p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                style={{ background: p.accentColor }}
              >
                {p.rank}
              </span>
              <span className="text-[13px] font-bold text-gray-900">{p.name}</span>
              <span className="ml-auto text-[11px] font-semibold" style={{ color: p.accentColor }}>
                {p.price}
              </span>
            </div>
            <p className="text-[12px] text-gray-800 mb-2.5 leading-snug">{p.tagline}</p>
            <a
              href={p.url}
              target="_blank"
              rel="noopener sponsored"
              className="flex items-center justify-center text-white text-[12px] font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
              style={{ background: p.accentColor }}
            >
              {p.cta} &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
