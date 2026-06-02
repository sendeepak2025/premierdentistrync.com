"use client";

import { useState } from "react";

type Props = {
  before: string;
  after: string;
  title: string;
  eager?: boolean;
};

export function BeforeAfterSlider({ before, after, title, eager = false }: Props) {
  const [position, setPosition] = useState(50);
  const move = (amount: number) => {
    setPosition((current) => Math.min(100, Math.max(0, current + amount)));
  };

  return (
    <div className="group relative aspect-[4/3] overflow-hidden bg-surface">
      <img
        src={before}
        alt={`${title} before treatment`}
        loading={eager ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <img
          src={after}
          alt={`${title} after treatment`}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
        Before
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
        After
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(13,24,48,0.14)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white text-brand shadow-card">
          <span className="text-lg leading-none">‹›</span>
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label={`Move before and after comparison for ${title}`}
        onChange={(event) => setPosition(Number(event.target.value))}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-5);
          if (event.key === "ArrowRight") move(5);
          if (event.key === "Home") setPosition(0);
          if (event.key === "End") setPosition(100);
        }}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
