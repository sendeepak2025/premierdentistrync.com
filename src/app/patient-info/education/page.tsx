import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CallToAction } from "@/components/CallToAction";
import { educationTopics, educationOrder } from "@/lib/patientEducation";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Education",
  description:
    "Plain-English guides to oral hygiene, child dentistry, gum health, dental terminology and more — patient education from Premier Dentistry in Ballantyne, Charlotte NC.",
  alternates: { canonical: "/patient-info/education" },
};

export default function EducationHubPage() {
  return (
    <>
      {/* Blue banner hero */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-2 blur-3xl" />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/75 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-white">
              Premier Dentistry — Ballantyne
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/patient-info" className="hover:text-white">
              Patient Information
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Patient Education</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            Patient Education
          </h1>
          <p className="mt-2 text-sm font-medium tracking-[0.18em] uppercase text-white/70">
            Plain-English guides for your dental health
          </p>
        </div>
      </section>

      {/* Intro */}
      <Section bg="white" className="!pt-12 lg:!pt-16">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl text-brand leading-[1.15]">
                Healthier smiles start with answers.
              </h2>
              <p className="mt-5 text-lg text-ink-2 leading-relaxed">
                Our team is happy to explain anything in person — but if you
                came here looking to read about a specific topic, you are in
                the right place. Pick a guide below for a clear, jargon-free
                walkthrough.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact">
                  <Icon name="calendar" className="h-4 w-4" /> Book a visit
                </Button>
                <Button href={site.phoneHref} variant="secondary">
                  <Icon name="phone" className="h-4 w-4" /> Ask us anything
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-surface border border-line p-8 shadow-soft">
                <div className="text-xs uppercase tracking-[0.18em] text-brand font-semibold">
                  Quick start
                </div>
                <ul className="mt-4 space-y-2.5">
                  {educationOrder.slice(0, 4).map((slug) => {
                    const t = educationTopics[slug];
                    return (
                      <li key={slug}>
                        <Link
                          href={`/patient-info/education/${slug}`}
                          className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-white hover:shadow-soft transition-all text-ink-2 hover:text-brand"
                        >
                          <span className="font-medium">{t.title}</span>
                          <Icon name="arrow-right" className="h-4 w-4" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* All topics grid */}
      <Section bg="surface">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>All guides</Eyebrow>
          <Heading className="mt-3">Browse by topic.</Heading>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {educationOrder.map((slug, i) => {
            const t = educationTopics[slug];
            return (
              <Reveal key={slug} delay={60 * i}>
                <Link
                  href={`/patient-info/education/${slug}`}
                  className="group block bg-white rounded-2xl border border-line p-6 shadow-soft hover:shadow-card hover:border-brand/30 hover:-translate-y-1 transition-all h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                      <Icon name={t.icon} className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted">
                        {t.eyebrow}
                      </div>
                      <h3 className="mt-1 font-display text-xl text-ink leading-snug">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-2 leading-relaxed">
                        {t.blurb}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center text-sm text-brand font-medium">
                    Read the guide
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CallToAction />
      <div className="h-20" />
    </>
  );
}
