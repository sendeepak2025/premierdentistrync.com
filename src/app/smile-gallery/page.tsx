import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "Explore cosmetic and restorative before-and-after smile photos at Premier Dentistry in Ballantyne, Charlotte NC.",
  alternates: { canonical: "/smile-gallery" },
};

const cases = Array.from({ length: 7 }, (_, index) => ({
  title: `Patient Smile Case ${index + 1}`,
  before: `/smile-gallery/case-${index + 1}-before.jpg`,
  after: `/smile-gallery/case-${index + 1}-after.jpg`,
}));

export default function SmileGalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-radial-brand opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <div className="max-w-3xl reveal">
            <Eyebrow>Patient photo portfolio</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Before and after
              <span className="text-brand italic"> smile results.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              Every smile starts with a different concern, a different bite, and
              a different goal. These before-and-after photos are shared with
              patient consent so you can see examples of real treatment results.
            </p>
          </div>
        </div>
      </section>

      <Section bg="white">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow>Smile gallery</Eyebrow>
          <Heading className="mt-3">Real patient before-and-after photos.</Heading>
          <p className="mt-4 text-base leading-7 text-ink-2">
            Compare each case side by side. Treatment recommendations vary by
            patient, so Dr. Patel will explain what is realistic for your teeth
            during a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all hover:shadow-card"
            >
              <div className="grid grid-cols-2 gap-px bg-line">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={c.before}
                    alt={`${c.title} before treatment`}
                    loading={c.title.endsWith("1") ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-2 top-2 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Before
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={c.after}
                    alt={`${c.title} after treatment`}
                    loading={c.title.endsWith("1") ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-2 top-2 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    After
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-ink">{c.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Actual patient before-and-after photos.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-surface p-5 text-center shadow-soft sm:p-7">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand">
            <Icon name="smile" className="h-5 w-5" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted">
            Results vary by patient. During a consultation, Dr. Patel can review
            examples, explain what is realistic for your teeth, and recommend
            the most conservative path to the result you want.
          </p>
          <Button href="/contact" className="mt-5">
            Schedule a smile consultation
          </Button>
        </div>
      </Section>

      <CallToAction />
      <div className="h-20" />
    </>
  );
}
