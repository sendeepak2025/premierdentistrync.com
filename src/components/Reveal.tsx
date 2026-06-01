"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  y = 18,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    /* eslint-disable @typescript-eslint/no-explicit-any */
    <Tag
      ref={ref as any}
      style={{
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        opacity: shown ? 1 : 0,
        transition: `opacity 0.7s cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform 0.7s cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
