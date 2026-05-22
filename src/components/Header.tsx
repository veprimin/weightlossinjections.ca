"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <span
            className="text-xl font-bold tracking-tight text-black"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Weight Loss<span className="text-[#1B3A6B]">Injections.ca</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[#E8EFFF] text-[#1B3A6B]"
                  : "text-black hover:bg-gray-50 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#providers"
            className="hidden sm:inline-flex items-center rounded-lg bg-[#1B3A6B] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0F2547] whitespace-nowrap"
          >
            Find a Provider &rarr;
          </Link>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-black hover:bg-gray-100 hover:text-black lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {open
                ? <><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></>
                : <><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gray-200 bg-white px-4 py-3 flex flex-col gap-1 lg:hidden" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[#E8EFFF] text-[#1B3A6B]"
                  : "text-black hover:bg-gray-50 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#providers"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center rounded-lg bg-[#1B3A6B] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Find a Provider &rarr;
          </Link>
        </nav>
      )}
    </header>
  );
}
