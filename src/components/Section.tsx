import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "surface" | "surface-2" | "ink" | "brand-soft";
};

const bgMap = {
  white: "bg-white",
  surface: "bg-surface",
  "surface-2": "bg-surface-2",
  ink: "bg-ink text-white",
  "brand-soft": "bg-brand-soft",
};

export function Section({ children, className = "", id, bg = "white" }: Props) {
  return (
    <section id={id} className={`${bgMap[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {children}
      </div>
    </section>
  );
}

type EyebrowProps = { children: ReactNode; className?: string };
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-brand-2 ${className}`}
    >
      <span className="h-px w-6 bg-brand-2/40" />
      {children}
    </p>
  );
}

type HeadingProps = { children: ReactNode; className?: string; as?: "h1" | "h2" | "h3" };
export function Heading({ children, className = "", as: Tag = "h2" }: HeadingProps) {
  return (
    <Tag
      className={`font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] text-ink ${className}`}
    >
      {children}
    </Tag>
  );
}
