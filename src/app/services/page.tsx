import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { services, site } from "@/lib/site";
import type { Service } from "@/lib/site";
import { absoluteUrl, jsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dental Services in Ballantyne, Charlotte NC",
  description:
    "Explore dental services at Premier Dentistry in Ballantyne, Charlotte NC: cleanings, same-day crowns, Invisalign, implants, veneers, root canals, emergency dentistry, nitrous oxide, whitening, and more.",
  alternates: { canonical: "/services" },
  keywords: [
    "dental services Ballantyne",
    "dentist services Charlotte NC",
    "same-day crowns Charlotte",
    "Invisalign Ballantyne",
    "dental implants Charlotte",
    "emergency dental care Ballantyne",
  ],
  openGraph: {
    title: "Dental Services in Ballantyne, Charlotte NC | Premier Dentistry",
    description:
      "Family, cosmetic, restorative, emergency, implant, Invisalign, and nitrous oxide dental care from Dr. Anand Patel, DDS.",
    url: absoluteUrl("/services"),
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "Dental services at Premier Dentistry in Ballantyne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services in Ballantyne, Charlotte NC",
    description:
      "Comprehensive dental care from Premier Dentistry in Ballantyne.",
    images: [absoluteUrl("/og-image.png")],
  },
};

const categories = ["Preventive", "Cosmetic", "Restorative", "Specialty"] as const;

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/services#webpage"),
        url: absoluteUrl("/services"),
        name: "Dental Services in Ballantyne, Charlotte NC",
        description: metadata.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#dentist") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/services#services-list"),
        name: "Dental services offered by Premier Dentistry",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.blurb,
            url: absoluteUrl(`/services/${service.slug}`),
            provider: { "@id": absoluteUrl("/#dentist") },
            areaServed: "Ballantyne, Charlotte NC",
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/services#breadcrumb"),
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
      {/* Blue banner hero */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-2 blur-3xl" />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/70 mb-6"
          >
            <Link href="/" className="hover:text-white">
              Premier Dentistry — Ballantyne
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Dental Treatments</span>
          </nav>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
            Dental Treatments
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
            Today&apos;s advanced dental treatments can restore a healthier,
            more complete smile with results designed for long-term function.
            Dr. Patel and the Premier team handle everything from routine
            cleanings to full smile makeovers — explained clearly, planned
            with care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" variant="white">
              <Icon name="calendar" className="h-5 w-5" /> Book a consult
            </Button>
            <Button
              href={site.phoneHref}
              size="lg"
              variant="ghost"
              className="text-white border border-white/25 hover:bg-white/10 hover:text-white"
            >
              <Icon name="phone" className="h-4 w-4" /> {site.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* COLORFUL SHOWCASE GRID */}
      <Section bg="white">
        <ServiceShowcase />

        {/* Category jump nav */}
        <div className="mt-16 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <a
              key={c}
              href={`#${c.toLowerCase()}`}
              className="inline-flex items-center gap-2 rounded-full bg-surface border border-line px-4 py-2 text-sm text-ink-2 hover:border-brand/40 hover:text-brand shadow-soft transition"
            >
              <Icon name="arrow-right" className="h-3.5 w-3.5 -rotate-45" />
              Browse {c}
            </a>
          ))}
        </div>
      </Section>

      {/* Service categories */}
      {categories.map((category) => {
        const list = services.filter((s) => s.category === category);
        if (list.length === 0) return null;
        return (
          <Section
            key={category}
            id={category.toLowerCase()}
            bg={category === "Cosmetic" || category === "Specialty" ? "surface" : "white"}
            className="!py-16 lg:!py-20"
          >
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <Eyebrow>{category} Care</Eyebrow>
                <Heading className="mt-3">
                  {category === "Preventive" && "Keep small problems small."}
                  {category === "Cosmetic" && "Refine the smile you show every day."}
                  {category === "Restorative" && "Repair, rebuild, and restore — comfortably."}
                  {category === "Specialty" && "Care for the moments that matter most."}
                </Heading>
              </div>
            </div>

            <div className="space-y-6">
              {list.map((s) => (
                <ServiceRow key={s.slug} service={s} />
              ))}
            </div>
          </Section>
        );
      })}

      {/* Insurance / payment strip */}
      <Section bg="brand-soft">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>Insurance &amp; payment</Eyebrow>
            <Heading className="mt-3">
              We make the financial side simple.
            </Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              Our front desk works with most PPO insurance plans and will
              verify your benefits before your visit. For uncovered care, we
              offer transparent pricing and flexible financing so you can plan
              with confidence.
            </p>
            <div className="mt-6 flex gap-3">
              <Button href="/contact">
                <Icon name="calendar" className="h-4 w-4" /> Verify my benefits
              </Button>
              <Button href={site.phoneHref} variant="secondary">
                <Icon name="phone" className="h-4 w-4" /> {site.phone}
              </Button>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Most PPO plans accepted",
              "In-house savings plan",
              "Transparent estimates up front",
              "CareCredit financing available",
              "No-surprise billing",
              "Family plans welcome",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-line shadow-soft"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-soft text-brand flex items-center justify-center shrink-0">
                  <Icon name="check" className="h-4 w-4" />
                </div>
                <span className="text-sm text-ink-2 leading-snug pt-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CallToAction />
      <div className="h-20" />
    </>
  );
}

function ServiceRow({ service }: { service: Service }) {
  return (
    <article
      id={service.slug}
      className="scroll-mt-28 group bg-white rounded-2xl border border-line p-6 lg:p-8 hover:border-brand/30 hover:shadow-card transition-all duration-300"
    >
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        <div className="lg:col-span-1">
          <div className="w-14 h-14 rounded-2xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
            {/* @ts-expect-error icon name constrained at data layer */}
            <Icon name={service.icon} className="h-7 w-7" />
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted">
            {service.category}
          </div>
          <h3 className="mt-1 font-display text-2xl lg:text-3xl text-ink leading-tight">
            <Link href={`/services/${service.slug}`} className="hover:text-brand transition-colors">
              {service.title}
            </Link>
          </h3>
          <p className="mt-3 text-ink-2 leading-relaxed">{service.blurb}</p>
          <p className="mt-3 text-sm text-ink-2 leading-relaxed">
            {service.long}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-2 font-medium"
          >
            Read the full guide
            <Icon name="arrow-right" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="lg:col-span-3 lg:pt-1">
          <div className="flex flex-col gap-2">
            <Button href={`/services/${service.slug}`} size="sm">
              Learn more
            </Button>
            <Button href="/contact" size="sm" variant="secondary">
              Book consult
            </Button>
            <a
              href={`tel:+17045448860`}
              className="text-sm text-brand hover:text-brand-2 inline-flex items-center gap-1.5 px-5 pt-1"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              Or call us
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
