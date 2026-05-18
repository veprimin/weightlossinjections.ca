import { FELIX_LINK, DIRECT_MEDS_LINK } from "@/lib/constants";

const providers = [
  {
    rank: 1,
    name: "Direct Meds",
    url: DIRECT_MEDS_LINK,
    promo: "Lose 15% of your body weight with GLP-1 medications",
    startingPrice: "From $99/month",
    userVotes: 10240,
    accentColor: "#1B4F9E",
    features: [
      "100% online medical visit - brand-name GLP-1 injections and oral options available",
      "Prescription and telemed visits included - no insurance required",
      "Free shipping - arrives in 1-2 days",
    ],
    cta: "Start with Direct Meds",
  },
  {
    rank: 2,
    name: "Felix Health",
    url: FELIX_LINK,
    promo: "Digital-first healthcare and home delivery",
    startingPrice: "From $39/month",
    userVotes: 8965,
    accentColor: "#0F6E56",
    features: [
      "Canada-wide availability serving all provinces",
      "Brand-name weight loss programs: Ozempic, Wegovy, Saxenda",
      "Consultations and prescriptions completed fully online",
      "Medications delivered directly to your home",
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
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
          <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 bg-gray-50">
            <span
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
              style={{ background: p.accentColor }}
            >
              {p.rank}
            </span>
            <span className="font-bold text-gray-900 text-[15px]" style={{ fontFamily: "Georgia, serif" }}>
              {p.name}
            </span>
            <span className="ml-auto text-[11px] text-gray-400">
              {p.userVotes.toLocaleString()} verified reviews
            </span>
          </div>
          <div className="px-5 py-4 sm:flex sm:gap-6 sm:items-start">
            <div className="flex-1 mb-4 sm:mb-0">
              <p className="text-[13px] font-semibold text-gray-700 mb-2">{p.promo}</p>
              <ul className="space-y-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-xs text-gray-600 leading-snug">
                    <span style={{ color: p.accentColor }} className="shrink-0 mt-0.5 font-bold">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 flex flex-col items-start sm:items-end gap-2 sm:min-w-[160px]">
              <p className="text-sm font-bold text-gray-900">{p.startingPrice}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90 whitespace-nowrap"
                style={{ background: p.accentColor }}
              >
                {p.cta} &rarr;
              </a>
            </div>
          </div>
        </div>
      ))}
      <p className="text-[11px] text-gray-400 text-center">
        Sponsored partners. This section contains affiliate links. A licensed provider will confirm your eligibility.
      </p>
    </div>
  );
}
