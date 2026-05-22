"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="flex h-9 items-center justify-center border-b border-[rgba(15,110,86,0.15)] bg-[#E1F5EE] px-4 text-xs sm:text-sm">
      <p className="truncate text-[#063D2B]">
        <span className="font-medium">Generic semaglutide update:</span>{" "}
        2 of 9 manufacturers now approved by Health Canada.{" "}
        <Link
          href="/semaglutide#generics"
          className="inline-flex items-center font-semibold underline underline-offset-2 transition-colors hover:text-[#0F6E56]"
        >
          See what this means for prices&nbsp;&rarr;
        </Link>
      </p>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="ml-3 flex-shrink-0 rounded p-1.5 text-[#0F6E56] transition-colors hover:bg-[rgba(15,110,86,0.12)] min-h-[32px] min-w-[32px] flex items-center justify-center"
        aria-label="Dismiss banner"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18" /><path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
}
