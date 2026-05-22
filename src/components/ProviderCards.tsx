import { FELIX_LINK, DIRECT_MEDS_LINK } from "@/lib/constants";

const providers = [
  {
    rank: 1,
    name: "Direct Meds",
    logo: "https://assets.efusercontent.com/2994/assets/logo/57f89939-7407-2795-30d5-b694919d50d3.png",
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
    logo: "https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/65590110de12de54c5d6ae83_felix%20logo-svg.svg",
    url: FELIX_LINK,
    tagline: "Canada-wide digital-first healthcare with home delivery included",
    startingPrice: "From $39/month",
    badge: null,
    accentColor: "#1B3A6B",
    accentLight: "#E8EFFF",
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
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener sponsored"
          className={`block overflow-hidden rounded-xl border bg-white transition-shadow hover:shadow-md ${p.rank === 1 ? "border-[rgba(27,79,158,0.3)] ring-1 ring-[rgba(27,79,158,0.15)]" : "border-gray-200"}`}
        >
          {/* Card header */}
          <div
            className="flex items-center gap-3 border-b px-5 py-3"
            style={{ borderColor: p.rank === 1 ? "rgba(27,79,158,0.12)" : "#f3f4f6", background: p.accentLight }}
          >
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: p.accentColor }}
            >
              {p.rank}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.logo}
              alt={p.name}
              className="h-7 w-auto object-contain"
            />
            {p.badge && (
              <span
                className="ml-auto inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white"
                style={{ background: p.accentColor }}
              >
                {p.badge}
              </span>
            )}
          </div>

          {/* Card body */}
          <div className="px-5 py-5 sm:flex sm:gap-6 sm:items-start">
            <div className="flex-1 mb-4 sm:mb-0">
              <p className="mb-3 text-sm font-semibold text-black">{p.tagline}</p>
              <ul className="space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-black leading-snug">
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
                <p className="text-base font-bold text-black">{p.startingPrice}</p>
                <p className="text-xs text-black">prescription included</p>
              </div>
              <span
                className="inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm whitespace-nowrap"
                style={{ background: p.accentColor }}
              >
                {p.cta} →
              </span>
            </div>
          </div>
        </a>
      ))}
      <p className="text-center text-xs text-black">
        Sponsored partners. Contains affiliate links. A licensed provider will confirm your eligibility.
      </p>
    </div>
  );
}
