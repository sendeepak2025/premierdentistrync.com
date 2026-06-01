"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { site, testimonials } from "@/lib/site";
import { RatingChip } from "./RatingChip";

const INTERVAL = 7000;

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, INTERVAL);
    return () => window.clearInterval(id);
  }, [next, paused]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  }

  const current = testimonials[index];

  const accents = [
    "from-brand-2 via-brand to-brand-soft",
    "from-brand via-accent to-brand-2",
    "from-accent-2 via-brand to-brand-soft",
    "from-brand-2 via-brand-soft to-accent",
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Photo column */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                aria-hidden={i !== index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    accents[i % accents.length]
                  }`}
                />
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/30 blur-3xl" />
                <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-accent/30 blur-3xl mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full border border-white/15" />
                    <div className="absolute -inset-6 rounded-full border border-white/10" />
                    <div className="relative w-32 h-32 rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 flex items-center justify-center text-white font-display text-4xl">
                      {t.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </div>
                  </div>
                </div>
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 ring-1 ring-white/15">
                  <Icon name="google" className="h-3.5 w-3.5" />
                  Patient feedback
                </div>
              </div>
            ))}
          </div>

          {/* Floating rating chip */}
          <div className="absolute -left-3 sm:-left-6 -bottom-4 bg-white rounded-2xl shadow-card p-2 ring-1 ring-line">
            <RatingChip variant="ghost" />
          </div>
        </div>

        {/* Quote column */}
        <div className="lg:col-span-7">
          <div className="relative">
            <Icon
              name="quote"
              className="h-10 w-10 text-brand-soft absolute -top-2 -left-1"
            />
            <div className="pl-12">
              <div
                key={current.name}
                className="reveal"
                style={{ animationDuration: "0.6s" }}
              >
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: current.stars }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-2xl sm:text-3xl text-ink leading-snug">
                  {current.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-soft text-brand flex items-center justify-center font-semibold">
                    {current.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium text-ink">{current.name}</div>
                    <div className="text-xs text-muted">{current.role}</div>
                  </div>
                </figcaption>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full bg-white border border-line text-ink-2 hover:text-brand hover:border-brand/40 hover:shadow-soft transition-all flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="w-11 h-11 rounded-full bg-brand text-white hover:bg-brand-2 hover:shadow-card transition-all flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex gap-1.5 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-brand"
                      : "w-2 bg-line hover:bg-brand/40"
                  }`}
                />
              ))}
            </div>

            <div className="ml-auto hidden sm:block">
              <Button
                href={site.social.google}
                variant="secondary"
                size="sm"
              >
                <Icon name="google" className="h-4 w-4" /> Read more on Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
