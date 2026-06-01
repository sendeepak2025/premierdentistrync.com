import Link from "next/link";
import { services } from "@/lib/site";
import { ToothIcon } from "./ToothIcon";

type Props = {
  heading?: string;
  subheading?: string;
  limit?: number;
};

export function ServiceShowcase({
  heading = "Modern dental care in Ballantyne.",
  subheading = "From routine cleanings to full-mouth restorations — every treatment your family needs, all under one roof.",
  limit,
}: Props) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-5 text-ink-2 text-lg leading-relaxed">{subheading}</p>
        )}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
        {list.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 rounded-2xl"
          >
            <div className="relative flex h-full min-h-[126px] flex-col overflow-hidden rounded-2xl border border-line bg-white p-2.5 transition-all duration-300 hover:border-brand/30 hover:shadow-card group-hover:-translate-y-1 sm:min-h-[190px] sm:p-5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-accent to-brand opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-surface to-brand-soft/50 transition-colors group-hover:from-brand-soft group-hover:to-brand-soft/80 sm:h-16 sm:w-16 sm:rounded-2xl">
                  <ToothIcon
                    /* @ts-expect-error slug name constrained at data layer */
                    name={s.slug}
                    className="h-7 w-7 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 sm:h-11 sm:w-11"
                  />
                </div>
                <div className="min-w-0">
                  <span className="font-display text-[0.98rem] text-ink leading-tight sm:text-xl">
                    {s.shortTitle ?? s.title}
                  </span>
                  <div className="mt-1 text-[9px] font-semibold tracking-[0.16em] uppercase text-brand sm:text-[10px] sm:tracking-[0.18em]">
                    {s.category}
                  </div>
                </div>
              </div>

              <p className="mt-3 hidden line-clamp-3 text-sm leading-relaxed text-ink-2 sm:block">
                {s.blurb}
              </p>

              <div className="mt-auto flex items-center justify-end pt-2 sm:justify-between sm:pt-5">
                <span className="hidden text-xs font-semibold text-brand sm:inline sm:text-sm">
                  Learn more
                </span>
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white sm:h-8 sm:w-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
