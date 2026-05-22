import { FELIX_LINK, DIRECT_MEDS_LINK } from "@/lib/constants";

const partners = [
  {
    rank: 1,
    name: "Direct Meds",
    logo: "https://assets.efusercontent.com/2994/assets/logo/57f89939-7407-2795-30d5-b694919d50d3.png",
    url: DIRECT_MEDS_LINK,
    price: "From $99/mo",
    tagline: "Brand-name GLP-1s online. No insurance required.",
    accentColor: "#1B4F9E",
    cta: "Check eligibility",
  },
  {
    rank: 2,
    name: "Felix Health",
    logo: "https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/65590110de12de54c5d6ae83_felix%20logo-svg.svg",
    url: FELIX_LINK,
    price: "From $39/mo",
    tagline: "Online prescriptions. Home delivery across Canada.",
    accentColor: "#1B3A6B",
    cta: "Check eligibility",
  },
];

export default function PartnersSidebar() {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <p className="text-xs font-bold uppercase tracking-widest text-black">
          Sponsored Partners
        </p>
      </div>
      <div className="divide-y divide-gray-100">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener sponsored"
            className="block p-4 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ background: p.accentColor }}
              >
                {p.rank}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo}
                alt={p.name}
                className="h-5 w-auto object-contain"
              />
              <span className="ml-auto text-xs font-semibold shrink-0" style={{ color: p.accentColor }}>
                {p.price}
              </span>
            </div>
            <p className="text-xs text-black mb-2.5 leading-snug">{p.tagline}</p>
            <span
              className="flex items-center justify-center text-white text-xs font-semibold px-3 py-2 rounded-lg"
              style={{ background: p.accentColor }}
            >
              {p.cta} →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
