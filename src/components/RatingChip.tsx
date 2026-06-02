import { Icon } from "./Icon";
import { site } from "@/lib/site";

type Props = {
  variant?: "light" | "dark" | "ghost";
  rating?: number;
  reviewsLabel?: string;
  className?: string;
};

export function RatingChip({
  variant = "light",
  rating = 5.0,
  reviewsLabel = "Google reviews",
  className = "",
}: Props) {
  const wrapMap = {
    light:
      "bg-white text-ink border border-line shadow-soft hover:shadow-card",
    dark: "bg-white/10 text-white border border-white/15 hover:bg-white/15",
    ghost:
      "bg-brand-soft text-ink border border-brand/10 hover:bg-[color:var(--color-brand)]/12",
  };
  return (
    <a
      href={site.social.google}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full pl-2 pr-4 py-1.5 transition-all ${wrapMap[variant]} ${className}`}
      aria-label={`${rating} star rating on Google — ${reviewsLabel}`}
    >
      <span className="flex items-center gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-3.5 w-3.5" />
        ))}
      </span>
      <span
        className={`text-sm font-medium ${
          variant === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {rating.toFixed(1)}
      </span>
      <span
        className={`text-xs ${
          variant === "dark" ? "text-white/70" : "text-muted"
        }`}
      >
        {reviewsLabel}
      </span>
    </a>
  );
}
