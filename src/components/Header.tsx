"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, FELIX_LINK } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F6E56]">
            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
            </svg>
          </div>
          <span
            className="text-xl font-bold tracking-tight text-gray-900"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Weight Loss<span className="text-[#0F6E56]">Injections.ca</span>
          </span>
          <span className="ml-2 hidden sm:inline-flex items-center gap-1 rounded border border-gray-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-600">
            🍁 Canada
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
                  ? "bg-[#E1F5EE] text-[#0F6E56]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={FELIX_LINK}
            target="_blank"
            rel="noopener sponsored"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#0F6E56] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#063D2B] whitespace-nowrap"
          >
            Check Eligibility &rarr;
          </a>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 lg:hidden"
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
                  ? "bg-[#E1F5EE] text-[#0F6E56]"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={FELIX_LINK}
            target="_blank"
            rel="noopener sponsored"
            className="mt-2 flex items-center justify-center rounded-lg bg-[#0F6E56] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Check Eligibility with Felix &rarr;
          </a>
        </nav>
      )}
    </header>
  );
}
