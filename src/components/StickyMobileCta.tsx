"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

export function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-3 bottom-3 z-40 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <div className="flex gap-2 rounded-2xl bg-white/95 backdrop-blur-md border border-line shadow-card p-2">
        <a
          href={site.phoneHref}
          aria-label="Call us"
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-soft text-brand active:scale-95 transition-transform"
        >
          <Icon name="phone" className="h-5 w-5" />
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white font-semibold text-[15px] active:bg-brand-2 transition-colors"
        >
          <Icon name="calendar" className="h-4 w-4" />
          Book a Visit
        </Link>
      </div>
    </div>
  );
}
