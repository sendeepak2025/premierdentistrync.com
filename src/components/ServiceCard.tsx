import Link from "next/link";
import { Icon } from "./Icon";
import type { Service } from "@/lib/site";

type Props = { service: Service; compact?: boolean };

export function ServiceCard({ service, compact = false }: Props) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block bg-white rounded-2xl border border-line p-6 hover:border-brand/40 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
          {/* @ts-expect-error name is constrained at the data layer */}
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted">
            {service.category}
          </div>
          <h3 className="mt-1 font-display text-xl text-ink leading-snug">
            {service.title}
          </h3>
          {!compact && (
            <p className="mt-2 text-sm text-ink-2 leading-relaxed">
              {service.blurb}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm text-brand font-medium">
        Learn more
        <Icon
          name="arrow-right"
          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
        />
      </div>
    </Link>
  );
}
