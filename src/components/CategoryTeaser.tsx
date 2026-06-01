import Link from "next/link";
import { Icon } from "./Icon";
import { ToothIcon } from "./ToothIcon";

type Card = {
  title: string;
  href: string;
  icon: "cleanings" | "veneers" | "invisalign" | "implants" | "emergency" | "whitening";
  tone: string;
};

const cards: Card[] = [
  {
    title: "Schedule My Cleaning",
    href: "/services/cleanings",
    icon: "cleanings",
    tone: "from-brand-2 via-brand to-brand-soft",
  },
  {
    title: "Straighten My Smile",
    href: "/services/invisalign",
    icon: "invisalign",
    tone: "from-brand via-accent to-brand-2",
  },
  {
    title: "Fix My Tooth Pain",
    href: "/services/emergency",
    icon: "emergency",
    tone: "from-accent-2 via-brand to-brand-soft",
  },
  {
    title: "Meet Our Team",
    href: "/about#team",
    icon: "whitening",
    tone: "from-brand-2 via-brand-soft to-accent",
  },
];

export function CategoryTeaser() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {cards.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className="group relative block aspect-[5/4] rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${c.tone}`} />
          {/* light bloom */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent/30 blur-3xl mix-blend-overlay" />

          {/* Icon */}
          <div className="relative h-full flex items-center justify-center pb-16">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-white/15" />
              <div className="absolute -inset-6 rounded-full border border-white/8" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 flex items-center justify-center">
                <ToothIcon name={c.icon} className="h-9 w-9 sm:h-11 sm:w-11" />
              </div>
            </div>
          </div>

          {/* Bottom dark gradient + label */}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
            <div className="absolute inset-x-0 -top-12 bottom-0 bg-gradient-to-t from-ink/70 via-ink/35 to-transparent pointer-events-none" />
            <div className="relative inline-flex w-full items-center justify-between gap-2 rounded-full bg-white/95 backdrop-blur-md text-ink px-4 py-2.5 shadow-soft">
              <span className="text-sm font-semibold leading-none">{c.title}</span>
              <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand text-white group-hover:bg-brand-2 transition-colors">
                <Icon
                  name="arrow-right"
                  className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform"
                />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
