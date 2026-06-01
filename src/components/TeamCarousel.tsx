"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { team } from "@/lib/site";

export function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function updateButtons() {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  function scrollByCard(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-team-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <div className="relative">
      {/* Top controls */}
      <div className="hidden lg:flex absolute -top-16 right-0 gap-2">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          className={`w-11 h-11 rounded-full bg-white border border-line text-ink-2 hover:text-brand hover:border-brand/40 hover:shadow-soft transition-all flex items-center justify-center disabled:opacity-30 disabled:hover:text-ink-2 disabled:hover:border-line`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          className={`w-11 h-11 rounded-full bg-brand text-white hover:bg-brand-2 hover:shadow-card transition-all flex items-center justify-center disabled:opacity-30 disabled:hover:bg-brand`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-pl-4 -mx-4 px-4 pb-4 lg:pb-0 lg:-mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {team.map((m) => (
          <article
            key={m.name}
            data-team-card
            className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] bg-white rounded-2xl overflow-hidden border border-line shadow-soft hover:shadow-card transition-all"
          >
            <div className={`relative aspect-[5/4] bg-gradient-to-br ${m.accent}`}>
              {m.name === "Dr. Anand Patel" && (
                <Image
                  src="/dr-patel.jpg"
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 78vw"
                  className="object-cover object-[center_22%]"
                />
              )}
              <div
                className={`absolute inset-0 ${
                  m.name === "Dr. Anand Patel"
                    ? "bg-gradient-to-t from-ink/60 via-ink/10 to-transparent"
                    : ""
                }`}
              />
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/25 blur-3xl" />
              <div className="absolute -bottom-16 -left-12 w-48 h-48 rounded-full bg-accent/30 blur-3xl mix-blend-overlay" />
              <div
                className={`absolute inset-0 flex items-center justify-center ${
                  m.name === "Dr. Anand Patel" ? "hidden" : ""
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full border border-white/15" />
                  <div className="absolute -inset-6 rounded-full border border-white/8" />
                  <div className="relative w-24 h-24 rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 flex items-center justify-center text-white font-display text-3xl">
                    {m.initials}
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="absolute left-4 right-4 bottom-4 inline-flex items-center justify-center rounded-full bg-white text-brand text-sm font-semibold py-2.5 shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5"
              >
                Book with {m.name.split(" ")[0]}
              </Link>
            </div>
            <div className="p-5">
              <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-brand">
                {m.role}
              </div>
              <h3 className="mt-1.5 font-display text-xl text-ink leading-snug">
                {m.name}
              </h3>
              <p className="mt-2 text-sm text-ink-2 leading-relaxed line-clamp-3">
                {m.bio}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile arrows below */}
      <div className="mt-5 flex lg:hidden items-center justify-center gap-2">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          className="w-11 h-11 rounded-full bg-white border border-line text-ink-2 disabled:opacity-30 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          className="w-11 h-11 rounded-full bg-brand text-white disabled:opacity-30 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <div className="ml-3 inline-flex items-center gap-1.5">
          <Icon name="arrow-right" className="h-3.5 w-3.5 text-muted" />
          <span className="text-xs text-muted">Swipe</span>
        </div>
      </div>
    </div>
  );
}
