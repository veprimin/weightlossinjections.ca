import { FELIX_LINK, DIRECT_MEDS_LINK } from "@/lib/constants";

const providers = [
  {
    rank: 1,
    name: "Direct Meds",
    url: DIRECT_MEDS_LINK,
    tagline: "Online prescriptions and brand-name GLP-1 injections delivered to your door",
    startingPrice: "From $99/month",
    badge: "Top Rated",
    accentColor: "#1B4F9E",
    accentLight: "#EFF6FF",
    features: [
      "100% online medical visit - brand-name GLP-1 injections and oral options",
      "Prescription and telehealth visits included - no insurance required",
      "Free shipping - arrives in 1-2 business days",
    ],
    cta: "Start with Direct Meds",
  },
  {
    rank: 2,
    name: "Felix Health",
    url: FELIX_LINK,
    tagline: "Canada-wide digital-first healthcare with home delivery included",
    startingPrice: "From $39/month",
    badge: null,
    accentColor: "#0F6E56",
    accentLight: "#E1F5EE",
    features: [
      "Available in all 9 provinces served by our site",
      "Brand-name programs: Ozempic, Wegovy, Saxenda",
      "Prescriptions completed fully online - medications delivered to your home",
    ],
    cta: "Start with Felix Health",
  },
];

export default function ProviderCards() {
  return (
    <div className="space-y-4">
      {providers.map((p) => (
        <div
          key={p.name}
          className={`overflow-hidden rounded-xl border bg-white ${p.rank === 1 ? "border-[rgba(27,79,158,0.3)] ring-1 ring-[rgba(27,79,158,0.15)]" : "border-gray-200"}`}
        >
          {/* Card header */}
          <div
            className="flex items-center gap-3 border-b px-5 py-3"
            style={{ borderColor: p.rank === 1 ? "rgba(27,79,158,0.12)" : "#f3f4f6", background: p.accentLight }}
          >
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
              style={{ background: p.accentColor }}
            >
              {p.rank}
            </span>
            <span
              className="font-bold text-gray-900 text-[15px]"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              {p.name}
            </span>
            {p.badge && (
              <span
                className="ml-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white"
                style={{ background: p.accentColor }}
              >
                {p.badge}
              </span>
            )}
          </div>

          {/* Card body */}
          <div className="px-5 py-5 sm:flex sm:gap-6 sm:items-start">
            <div className="flex-1 mb-5 sm:mb-0">
              <p className="mb-3 text-[13.5px] font-semibold text-gray-800">{p.tagline}</p>
              <ul className="space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[12.5px] text-gray-600 leading-snug">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 flex flex-col items-start sm:items-end gap-3 sm:min-w-[170px]">
              <div className="text-left sm:text-right">
                <p className="text-base font-bold text-gray-900">{p.startingPrice}</p>
                <p className="text-[11px] text-gray-400">prescription included</p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90 whitespace-nowrap"
                style={{ background: p.accentColor }}
              >
                {p.cta} &rarr;
              </a>
            </div>
          </div>
        </div>
      ))}
      <p className="text-center text-[11px] text-gray-400">
        Sponsored partners. Contains affiliate links. A licensed provider will confirm your eligibility.
      </p>
    </div>
  );
}
