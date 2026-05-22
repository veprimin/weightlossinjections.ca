import Link from "next/link";

const provinceLinks = [
  { name: "Ontario",                 href: "/ontario"          },
  { name: "British Columbia",        href: "/british-columbia" },
  { name: "Alberta",                 href: "/alberta"          },
  { name: "Manitoba",                href: "/manitoba"         },
  { name: "New Brunswick",           href: "/new-brunswick"    },
  { name: "Newfoundland & Labrador", href: "/newfoundland"     },
  { name: "Nova Scotia",             href: "/nova-scotia"      },
  { name: "PEI",                     href: "/pei"              },
  { name: "Saskatchewan",            href: "/saskatchewan"     },
];

export default function ProvinceGrid() {
  return (
    <section className="border-b border-gray-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-xl font-bold text-gray-900 sm:text-2xl"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Province guides
        </h2>
        <p className="mt-1 text-sm text-gray-800">
          Coverage criteria, drug plan details, and access options for each province.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {provinceLinks.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-[#1B3A6B] hover:bg-[#E8EFFF] hover:text-[#1B3A6B]"
            >
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#2D5FA8]" aria-hidden="true" />
              {p.name}
            </Link>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-700">
          Not available in Quebec or Canadian territories. A licensed provider will confirm eligibility after your assessment.
        </p>
      </div>
    </section>
  );
}
