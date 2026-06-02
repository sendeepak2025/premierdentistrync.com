import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { Reveal } from "@/components/Reveal";
import { educationTopics, educationOrder } from "@/lib/patientEducation";
import { site } from "@/lib/site";
import { localSearchAreas, primarySeoKeywords } from "@/lib/seo";

type Params = { topic: string };

export function generateStaticParams(): Params[] {
  return educationOrder.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { topic } = await params;
  const data = educationTopics[topic];
  if (!data) return {};
  return {
    title: `${data.title} | Patient Education`,
    description: data.blurb,
    alternates: { canonical: `/patient-info/education/${topic}` },
    keywords: [
      ...primarySeoKeywords,
      `${data.title} dentist Charlotte`,
      `${data.title} Ballantyne`,
      ...localSearchAreas.map((area) => `${data.title} near ${area}`),
    ],
  };
}

export default async function EducationDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { topic } = await params;
  const data = educationTopics[topic];
  if (!data) notFound();

  const related = data.related
    .map((r) => educationTopics[r])
    .filter(Boolean);

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
            <Link href="/patient-info/education" className="hover:text-white">
              Patient Education
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">{data.title}</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            {data.title}
          </h1>
          <p className="mt-2 text-sm font-medium tracking-[0.18em] uppercase text-white/70">
            {data.eyebrow}
          </p>
        </div>
      </section>

      {/* Intro */}
      <Section bg="white" className="!pt-12 lg:!pt-16">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-lg text-ink-2 leading-relaxed">{data.blurb}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact">
                  <Icon name="calendar" className="h-4 w-4" /> Book a consult
                </Button>
                <Button href={site.phoneHref} variant="secondary">
                  <Icon name="phone" className="h-4 w-4" /> {site.phone}
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-brand-soft border border-brand/10 p-6">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white text-brand flex items-center justify-center shrink-0">
                    <Icon name={data.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-brand font-semibold">
                      Quick takeaways
                    </div>
                    <ul className="mt-3 space-y-2">
                      {data.takeaways.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-2">
                          <Icon
                            name="check"
                            className="h-4 w-4 text-brand mt-0.5 shrink-0"
                          />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Sections */}
      <Section bg="white">
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32">
              <div className="text-xs uppercase tracking-[0.18em] text-brand font-semibold mb-3">
                On this page
              </div>
              <ul className="space-y-2 text-sm">
                {data.sections.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="text-ink-2 hover:text-brand transition-colors block py-1"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
                {data.dictionary && (
                  <li>
                    <a
                      href="#glossary"
                      className="text-ink-2 hover:text-brand transition-colors block py-1"
                    >
                      A–Z Glossary
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </aside>

          <article className="lg:col-span-9 space-y-12">
            {data.sections.map((s, i) => (
              <Reveal key={i}>
                <section id={`section-${i}`} className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand text-white text-sm font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl text-ink">
                      {s.title}
                    </h2>
                  </div>
                  <div className="space-y-4 text-ink-2 text-[17px] leading-relaxed pl-0 lg:pl-12">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}

            {data.dictionary && (
              <Reveal>
                <section id="glossary" className="scroll-mt-32 pt-4">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-white text-sm font-bold">
                      AZ
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl text-ink">
                      A–Z Glossary of dental terms
                    </h2>
                  </div>
                  <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                    {data.dictionary.map((d) => (
                      <div
                        key={d.term}
                        className="border-l-2 border-brand/30 pl-4"
                      >
                        <dt className="font-display text-lg text-ink leading-tight">
                          {d.term}
                        </dt>
                        <dd className="mt-1 text-sm text-ink-2 leading-relaxed">
                          {d.def}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </Reveal>
            )}
          </article>
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section bg="surface">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <Eyebrow>Keep reading</Eyebrow>
              <Heading className="mt-3 !text-3xl">Related guides.</Heading>
            </div>
            <Link
              href="/patient-info/education"
              className="text-brand hover:text-brand-2 inline-flex items-center gap-1.5 text-sm font-medium"
            >
              All patient education
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/patient-info/education/${r.slug}`}
                className="group block bg-white rounded-2xl border border-line p-6 shadow-soft hover:shadow-card hover:border-brand/30 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                    <Icon name={r.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted">
                      {r.eyebrow}
                    </div>
                    <h3 className="mt-1 font-display text-xl text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-2 leading-relaxed">
                      {r.blurb}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CallToAction />
      <div className="h-20" />
    </>
  );
}
