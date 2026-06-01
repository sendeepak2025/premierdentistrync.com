import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "Explore cosmetic and restorative smile treatment options at Premier Dentistry in Ballantyne, Charlotte NC, including veneers, Invisalign, implants, whitening, and crowns.",
  alternates: { canonical: "/smile-gallery" },
};

const cases = [
  {
    title: "Porcelain Veneers",
    detail: "Eight upper veneers · 2 visits",
    tone: "from-brand-2 to-brand",
  },
  {
    title: "Invisalign",
    detail: "11-month aligner case · adult",
    tone: "from-brand to-accent",
  },
  {
    title: "Implant + Crown",
    detail: "Single tooth replacement · 4 months",
    tone: "from-accent-2 to-brand-2",
  },
  {
    title: "Smile Makeover",
    detail: "Whitening + bonding + 4 veneers",
    tone: "from-brand-soft to-brand",
  },
  {
    title: "Full-Mouth Whitening",
    detail: "In-office Zoom whitening · single visit",
    tone: "from-brand to-brand-2",
  },
  {
    title: "Crown Restoration",
    detail: "Same-day porcelain crown · 1 visit",
    tone: "from-accent to-brand-2",
  },
];

export default function SmileGalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-radial-brand opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="max-w-3xl reveal">
            <Eyebrow>Treatment possibilities</Eyebrow>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Smile treatments,
              <span className="text-brand italic"> planned personally.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-2 leading-relaxed">
              Every smile starts with a different concern, a different bite,
              and a different goal. These examples show the kinds of cosmetic
              and restorative treatment plans we discuss in the office. Actual
              before-and-after photography is shared only with patient consent.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Section bg="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <article
              key={c.title + i}
              className="group rounded-2xl overflow-hidden border border-line bg-white shadow-soft hover:shadow-card transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${c.tone}`} />
                <div className="absolute inset-0 flex">
                  <div className="flex-1 flex flex-col items-center justify-center text-white/90 border-r border-white/30">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                      Before
                    </span>
                    <Icon name="smile" className="h-12 w-12 mt-3 opacity-60" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center text-white">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/80">
                      After
                    </span>
                    <Icon name="sparkle" className="h-12 w-12 mt-3" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 text-ink text-xs font-medium rounded-full px-3 py-1 shadow-soft">
                  Treatment option
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted max-w-2xl mx-auto">
          Results vary by patient. During a consultation, Dr. Patel can review
          examples, explain what is realistic for your teeth, and recommend the
          most conservative path to the result you want.
        </p>
      </Section>

      <CallToAction />
      <div className="h-20" />
    </>
  );
}
