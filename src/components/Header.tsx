"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, FELIX_LINK } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 bg-[#0F6E56] rounded-md flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              Weight Loss<br />
              <span className="text-[#0F6E56]">Injections.ca</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded text-[13.5px] font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[#E1F5EE] text-[#0F6E56]"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#0F6E56] text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-[#063D2B] transition-colors whitespace-nowrap"
          >
            Check Eligibility →
          </a>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-gray-200 bg-white px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded text-sm font-medium ${
                pathname === link.href
                  ? "bg-[#E1F5EE] text-[#0F6E56]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={FELIX_LINK}
            target="_blank"
            rel="noopener sponsored"
            className="mt-2 text-center bg-[#0F6E56] text-white text-sm font-semibold px-4 py-2.5 rounded-lg"
          >
            Check Eligibility with Felix →
          </a>
        </nav>
      )}
    </header>
  );
}
