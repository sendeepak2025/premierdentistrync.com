import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { TestimonialCard } from "@/components/TestimonialCard";
import { services, testimonials, site } from "@/lib/site";
import { serviceDetails } from "@/lib/serviceDetails";
import { ToothIcon } from "@/components/ToothIcon";
import {
  absoluteUrl,
  jsonLd,
  localSearchAreas,
  primarySeoKeywords,
} from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) return {};
  const canonical = `/services/${slug}`;
  return {
    title: `${service.title} in Ballantyne, Charlotte NC`,
    description: `${detail.hero.subtitle} Premier Dentistry provides ${service.title.toLowerCase()} in Ballantyne, Charlotte NC with Dr. Anand Patel, DDS.`,
    alternates: { canonical },
    keywords: [
      ...primarySeoKeywords,
      `${service.title} Charlotte NC`,
      `${service.title} Ballantyne`,
      `${service.title} near me`,
      `${service.title} Premier Dentistry`,
      `${service.shortTitle ?? service.title} South Charlotte`,
      "Dr. Anand Patel DDS",
    ],
    openGraph: {
      title: `${service.title} in Ballantyne, Charlotte NC | Premier Dentistry`,
      description: `${detail.hero.subtitle} Book with Premier Dentistry in Ballantyne.`,
      url: absoluteUrl(canonical),
      type: "article",
      images: [
        {
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
          alt: `${service.title} at Premier Dentistry in Ballantyne`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} in Ballantyne, Charlotte NC`,
      description: detail.hero.subtitle,
      images: [absoluteUrl("/og-image.png")],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const related = detail.related
    .map((r) => services.find((s) => s.slug === r))
    .filter(Boolean) as typeof services;

  const featuredReview = testimonials[0];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": absoluteUrl(`/services/${service.slug}#service`),
        name: `${service.title} in Ballantyne, Charlotte NC`,
        serviceType: service.title,
        category: service.category,
        description: detail.hero.subtitle,
        url: absoluteUrl(`/services/${service.slug}`),
        image: absoluteUrl("/og-image.png"),
        mainEntityOfPage: absoluteUrl(`/services/${service.slug}`),
        provider: { "@id": absoluteUrl("/#dentist") },
        audience: {
          "@type": "Audience",
          audienceType: "Dental patients in Ballantyne and South Charlotte",
        },
        areaServed: localSearchAreas.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: absoluteUrl("/contact"),
          servicePhone: site.phone,
          availableLanguage: "English",
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: absoluteUrl("/contact"),
          name: `Request an appointment for ${service.title}`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl(`/services/${service.slug}#faqs`),
        mainEntity: detail.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl(`/services/${service.slug}#breadcrumb`),
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Dental Services",
            item: absoluteUrl("/services"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: absoluteUrl(`/services/${service.slug}`),
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      {/* BLUE BANNER HERO */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-2 blur-3xl" />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/75 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-white">
              Premier Dentistry — Ballantyne
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/services" className="hover:text-white">
              Dental Treatments
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-2 text-sm font-medium tracking-[0.18em] uppercase text-white/70">
            {detail.hero.eyebrow}
          </p>
        </div>
      </section>

      {/* HERO INTRO */}
      <Section bg="white" className="!pt-12 lg:!pt-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl text-brand leading-[1.15]">
              {detail.hero.title}
            </h2>
            <p className="mt-5 text-lg text-ink-2 leading-relaxed">
              {detail.hero.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                <Icon name="calendar" className="h-5 w-5" /> Book a consult
              </Button>
              <Button href={site.phoneHref} size="lg" variant="secondary">
                <Icon name="phone" className="h-4 w-4" /> {site.phone}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-surface border border-line flex items-center justify-center p-10 shadow-soft">
                {/* @ts-expect-error slug name constrained at data layer */}
                <ToothIcon name={service.slug} className="h-full w-full" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-soft text-brand flex items-center justify-center">
                  <Icon name="check" className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-ink">{service.category}</div>
                  <div className="text-xs text-muted">Personalized care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Jump nav */}
      <section className="border-y border-line bg-surface sticky top-16 lg:top-20 z-30 backdrop-blur-md bg-surface/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex items-center gap-1 text-sm whitespace-nowrap">
            {[
              { id: "overview", label: "Overview" },
              { id: "candidacy", label: "Who it's for" },
              { id: "process", label: "How it works" },
              { id: "benefits", label: "Benefits" },
              { id: "faqs", label: "FAQs" },
              { id: "related", label: "Related" },
            ].map((j) => (
              <a
                key={j.id}
                href={`#${j.id}`}
                className="px-3 py-1.5 rounded-full text-ink-2 hover:text-brand hover:bg-white transition-colors"
              >
                {j.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <Section bg="white" id="overview" className="scroll-mt-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>What it is</Eyebrow>
            <Heading className="mt-3 !text-3xl">Overview.</Heading>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ink-2 text-[17px] leading-relaxed">
            {detail.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* CANDIDACY */}
      <Section bg="surface" id="candidacy" className="scroll-mt-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Is it right for you?</Eyebrow>
            <Heading className="mt-3 !text-3xl">{detail.candidacy.title}</Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              Not sure if you are a candidate? A 20-minute consult with Dr.
              Patel is the fastest way to find out what treatment options fit
              your goals, health, and timeline.
            </p>
            <Button href="/contact" className="mt-6">
              <Icon name="calendar" className="h-4 w-4" /> Book a consultation
            </Button>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-3">
              {detail.candidacy.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-line shadow-soft"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
                    <Icon name="check" className="h-5 w-5" />
                  </div>
                  <span className="text-ink-2 leading-snug pt-1.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section bg="white" id="process" className="scroll-mt-32">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>How it works</Eyebrow>
          <Heading className="mt-3">{detail.process.title}</Heading>
        </div>
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {detail.process.steps.map((step, i) => (
            <li
              key={i}
              className="relative bg-white rounded-2xl border border-line p-6 shadow-soft hover:shadow-card transition-all"
            >
              <div className="absolute -top-3 left-6 bg-brand text-white text-xs font-medium tracking-[0.18em] uppercase rounded-full px-3 py-1 shadow-soft">
                Step {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-xl text-ink leading-snug">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* BENEFITS */}
      <Section bg="surface-2" id="benefits" className="scroll-mt-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Why it works</Eyebrow>
            <Heading className="mt-3 !text-3xl">{detail.benefits.title}</Heading>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-4">
              {detail.benefits.items.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-line shadow-soft"
                >
                  <div className="w-9 h-9 rounded-xl bg-accent/15 text-accent-2 flex items-center justify-center shrink-0">
                    <Icon name="sparkle" className="h-5 w-5" />
                  </div>
                  <span className="text-ink-2 leading-snug pt-1">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* AFTERCARE */}
      <Section bg="white" className="scroll-mt-32">
        <div className="rounded-3xl bg-brand-soft border border-brand/10 p-8 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-2 flex lg:justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white text-brand flex items-center justify-center shadow-soft">
                <Icon name="heartbeat" className="h-8 w-8" />
              </div>
            </div>
            <div className="lg:col-span-10">
              <Eyebrow>Aftercare</Eyebrow>
              <h3 className="mt-2 font-display text-2xl text-ink">
                {detail.aftercare.title}
              </h3>
              <p className="mt-3 text-ink-2 leading-relaxed">
                {detail.aftercare.body}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section bg="surface" id="faqs" className="scroll-mt-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>Common questions</Eyebrow>
            <Heading className="mt-3 !text-3xl">
              FAQs about {service.title.toLowerCase()}.
            </Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              Still have a question? Call us at{" "}
              <a
                href={site.phoneHref}
                className="text-brand font-medium hover:underline"
              >
                {site.phone}
              </a>{" "}
              or send a note — we are happy to talk it through.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {detail.faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-line shadow-soft overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 lg:p-6 hover:bg-surface">
                  <span className="font-medium text-ink text-[17px]">
                    {f.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-brand-soft text-brand flex items-center justify-center group-open:rotate-45 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-6 text-ink-2 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* PATIENT EXPERIENCE */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Patient experience</Eyebrow>
          <Heading className="mt-3">Clear care, comfortable visits.</Heading>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <TestimonialCard {...featuredReview} />
        </div>
      </Section>

      {/* RELATED */}
      {related.length > 0 && (
        <Section bg="surface" id="related" className="scroll-mt-32">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <Eyebrow>Related care</Eyebrow>
              <Heading className="mt-3 !text-3xl">
                You may also be interested in.
              </Heading>
            </div>
            <Link
              href="/services"
              className="text-brand hover:text-brand-2 inline-flex items-center gap-1.5 text-sm font-medium"
            >
              See all 14 services
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group bg-white rounded-2xl border border-line p-6 shadow-soft hover:shadow-card hover:border-brand/30 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors mb-4">
                  {/* @ts-expect-error icon name constrained at data layer */}
                  <Icon name={r.icon} className="h-6 w-6" />
                </div>
                <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted">
                  {r.category}
                </div>
                <h3 className="mt-1 font-display text-xl text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-ink-2 leading-relaxed">
                  {r.blurb}
                </p>
                <div className="mt-4 flex items-center text-sm text-brand font-medium">
                  Learn more
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  />
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
