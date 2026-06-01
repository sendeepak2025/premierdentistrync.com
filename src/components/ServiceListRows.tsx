import Link from "next/link";
import { services } from "@/lib/site";
import { Icon } from "./Icon";
import { ToothIcon } from "./ToothIcon";

type Props = {
  slugs?: string[];
  heading?: string;
};

const DEFAULT_SLUGS = [
  "cleanings",
  "veneers",
  "invisalign",
  "implants",
  "dental-crowns",
  "whitening",
  "emergency",
];

export function ServiceListRows({
  slugs = DEFAULT_SLUGS,
  heading,
}: Props) {
  const items = slugs
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;

  return (
    <div className="space-y-2.5">
      {heading && (
        <h3 className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4">
          {heading}
        </h3>
      )}

      {items.map((s) => (
        <div
          key={s.slug}
          className="group flex items-stretch rounded-2xl bg-surface hover:bg-white border border-transparent hover:border-line hover:shadow-soft transition-all overflow-hidden"
        >
          <Link
            href={`/services/${s.slug}`}
            className="flex items-center gap-4 flex-1 px-4 sm:px-5 py-4 min-w-0"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-line flex items-center justify-center group-hover:border-brand/30 transition-colors">
              {/* @ts-expect-error slug name constrained at data layer */}
              <ToothIcon name={s.slug} className="h-8 w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-lg sm:text-xl text-ink leading-tight truncate">
                {s.shortTitle ?? s.title}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted">
                  {s.category}
                </span>
                <span className="hidden md:inline text-sm text-muted line-clamp-1">
                  {s.blurb}
                </span>
              </div>
            </div>
            <span className="hidden sm:inline-flex shrink-0 w-9 h-9 rounded-full bg-white border border-line text-ink-2 group-hover:text-brand group-hover:border-brand/30 items-center justify-center transition-all">
              <Icon
                name="arrow-right"
                className="h-4 w-4 group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </Link>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center px-5 sm:px-7 m-2 rounded-xl bg-brand-soft text-brand text-sm font-semibold hover:bg-brand hover:text-white transition-colors"
          >
            Book
          </Link>
        </div>
      ))}
    </div>
  );
}
