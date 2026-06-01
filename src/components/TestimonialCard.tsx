import { Icon } from "./Icon";

type Props = {
  name: string;
  role: string;
  quote: string;
  stars: number;
};

export function TestimonialCard({ name, role, quote, stars }: Props) {
  return (
    <figure className="relative h-full bg-white rounded-2xl border border-line p-7 shadow-soft">
      <Icon name="quote" className="h-7 w-7 text-brand-soft absolute top-5 right-5" />
      <div className="flex gap-0.5 text-accent">
        {Array.from({ length: stars }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4" />
        ))}
      </div>
      <blockquote className="mt-4 text-ink-2 text-[15px] leading-relaxed">
        {quote}
      </blockquote>
      <figcaption className="mt-6 pt-4 border-t border-line">
        <div className="font-medium text-ink">{name}</div>
        <div className="text-xs text-muted mt-0.5">{role}</div>
      </figcaption>
    </figure>
  );
}
