import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { Reveal } from "@/components/Reveal";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { services, site } from "@/lib/site";
import { absoluteUrl, jsonLd, primarySeoKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ballantyne Dentist in Charlotte NC | Premier Dentistry",
  description:
    "Premier Dentistry is a Ballantyne dentist in Charlotte NC led by Dr. Anand Patel, DDS. Book gentle family dentistry, same-day crowns, Invisalign, implants, veneers, emergency dental care, and nitrous oxide options.",
  alternates: { canonical: "/" },
  keywords: primarySeoKeywords,
  openGraph: {
    title: "Premier Dentistry | Ballantyne Dentist in Charlotte NC",
    description:
      "Gentle, modern family, cosmetic, restorative, emergency, implant, Invisalign, and nitrous oxide dental care in Ballantyne.",
    url: absoluteUrl("/"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "Premier Dentistry of Charlotte - Ballantyne dentist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Dentistry | Ballantyne Dentist in Charlotte NC",
    description:
      "Modern dental care in Ballantyne with Dr. Anand Patel, DDS.",
    images: [absoluteUrl("/og-image.png")],
  },
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        url: absoluteUrl("/"),
        name: "Premier Dentistry of Charlotte - Ballantyne Dentist",
        description: metadata.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#dentist") },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/hero-family-all-screens.png"),
          width: 1920,
          height: 900,
        },
        significantLink: [
          absoluteUrl("/services"),
          absoluteUrl("/contact"),
          absoluteUrl("/about"),
          absoluteUrl("/patient-info"),
          absoluteUrl("/smile-gallery"),
        ],
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/#featured-services"),
        name: "Featured dental services at Premier Dentistry",
        itemListElement: services.slice(0, 8).map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: absoluteUrl(`/services/${service.slug}`),
        })),
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#eef5fb] text-ink">
        <h1 className="sr-only">
          Modern Family Dentistry in Charlotte
        </h1>
        <p className="sr-only">
          Premier Dentistry of Charlotte provides same-day crowns, emergency appointments, advanced technology, and family-friendly dental care.
        </p>
        <div className="relative w-full h-[80vh] min-h-[700px] overflow-hidden">
          <Image
            src="/hero-family-all-screens.png"
            alt="Modern Family Dentistry in Charlotte at Premier Dentistry"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="hidden border-y border-line bg-ink text-white/85 py-5 overflow-hidden">
        <div className="marquee-mask">
          <div className="flex w-max marquee-track">
            {[...Array(2)].map((_, dup) => (
              <div
                key={dup}
                className="flex shrink-0 items-center gap-x-12 px-6"
              >
                {[
                  "Aetna",
                  "Blue Cross Blue Shield",
                  "Cigna",
                  "Delta Dental",
                  "MetLife",
                  "Guardian",
                  "Humana",
                  "Ameritas",
                  "United Healthcare",
                  "United Concordia",
                  "Principal",
                  "Assurant",
                  "UMR",
                  "Healthgram",
                  "DNOA",
                  "Careington",
                ].map((c) => (
                  <span
                    key={`${dup}-${c}`}
                    className="text-sm font-medium tracking-tight text-white/70 inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Icon name="check" className="h-3.5 w-3.5 text-white/40" />
                    {c}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE US */}
      <section className="bg-[#edf5ff] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-brand">
                Why families choose us
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-[2.15rem]">
                Exceptional Care. Honest. Comfortable. Convenient.
              </h2>
            </div>
          </Reveal>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "users" as const,
                title: "Same-Day Technology",
                body: "CEREC crowns and digital tools help save time and simplify treatment.",
              },
              {
                icon: "smile" as const,
                title: "Comfortable Visits",
                body: "A calm, friendly office designed to make every visit feel easier.",
              },
              {
                icon: "calendar" as const,
                title: "Transparent Treatment Plans",
                body: "Clear explanations and honest recommendations before treatment starts.",
              },
              {
                icon: "star" as const,
                title: "5-Star Patient Experience",
                body: "Local families trust us for personal, high-quality dental care.",
              },
            ].map((feature, i) => (
              <Reveal key={feature.title} delay={80 * (i + 1)}>
                <div className="h-full rounded-lg border border-line bg-white p-5 shadow-soft">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name={feature.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold leading-tight text-ink">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-5 text-ink-2">
                        {feature.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COLORFUL SHOWCASE PREVIEW */}
      <Section bg="white" className="[&>div]:pt-8 sm:[&>div]:pt-16">
        <Reveal>
          <ServiceShowcase
            heading="Modern dental care in Ballantyne."
            subheading="From routine cleanings to full-mouth restorations — every treatment your family needs, all under one roof."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <Button href="/services" variant="secondary" size="lg">
              Browse all 13 treatments in detail
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* SAME DAY CROWNS + IMPLANTS */}
      <Section bg="surface" className="overflow-hidden">
        <div className="grid gap-16 lg:gap-24">
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-display text-3xl leading-tight text-brand sm:text-4xl">
                  Same Day Dental Crowns
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-ink-2">
                  Thankfully, innovation in dentistry has made tooth restoration
                  easier, more convenient, more accurate and overall less
                  worrisome for patients. Our office has recently installed
                  CEREC equipment, which provides for on-site creations of
                  natural-looking ceramic fillings &amp; dental crowns - in a
                  single visit. We use a digital camera to take an optical
                  impression of the damaged tooth, design the appropriate
                  restoration using CAD software and mill tooth-colored ceramic
                  on-site. There&apos;s no need for a temporary and return visit.
                  From tooth preparation to placement and bonding, a patient can
                  have his or her smile restored in a couple hours.
                </p>
                <Button href="/services/dental-crowns" variant="secondary" className="mt-7">
                  Learn about same-day crowns
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative mx-auto aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-line">
                <Image
                  src="/cerec-crown-technology.jpg"
                  alt="CEREC same-day dental crown technology"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-line lg:min-h-[390px]">
                <Image
                  src="/dental-implants.jpg"
                  alt="Dental implant restoration illustration"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover object-[72%_center]"
                />
              </div>

              <div>
                <h2 className="font-display text-3xl leading-tight text-brand sm:text-4xl">
                  Dental Implants
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-ink-2">
                  We take pride in our state-of-the-art technology at Premier
                  Dentistry. Besides skills and experience,{" "}
                  <Link href="/about" className="font-semibold text-brand hover:text-brand-2">
                    Dr. Patel
                  </Link>{" "}
                  works with our top dental specialists who use digital 3D
                  x-rays, digital impressions, and 3D printers to plan their
                  implant and/or extraction surgeries. We are able to perform
                  guided surgeries with unparalleled accuracy and bring you
                  successful and beautiful results. See our{" "}
                  <Link href="/services/implants" className="font-semibold text-brand hover:text-brand-2">
                    Dental Implant
                  </Link>{" "}
                  page for more information.
                </p>
                <Button href="/contact" className="mt-8">
                  Free Dental Implant Consultations
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* WHY US */}
      <Section bg="surface" className="hidden">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Why Premier</Eyebrow>
            <Heading className="mt-3">
              A practice built around the patient — not the schedule.
            </Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              We made a few deliberate choices early on: take longer
              appointments, invest in modern imaging, and only recommend the
              work you actually need. The result is a calmer visit and
              dentistry you can trust.
            </p>
            <Button href="/about" variant="secondary" className="mt-6">
              Meet {site.doctor.name}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Reveal>

          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5">
            {[
              {
                icon: "clock" as const,
                title: "Unhurried appointments",
                body: "Real time to listen, examine, and explain — never a conveyor belt.",
              },
              {
                icon: "sparkle" as const,
                title: "Modern technology",
                body: "CEREC same-day crowns, 3D X-rays, intraoral scanning — no putty trays.",
              },
              {
                icon: "shield" as const,
                title: "Conservative philosophy",
                body: "We only recommend treatment when it truly serves your long-term health.",
              },
              {
                icon: "users" as const,
                title: "Family-first comfort",
                body: "From first cleaning to full smile makeover — care for every age.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={80 * (i + 1)}>
                <div className="bg-white rounded-2xl p-3 sm:p-6 border border-line shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-3 sm:mb-4">
                    <Icon name={f.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="font-display text-base sm:text-xl text-ink leading-tight">{f.title}</h3>
                  <p className="mt-2 line-clamp-3 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* REVIEWS CAROUSEL */}
      <Section id="reviews" bg="white">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>What patients notice</Eyebrow>
            <Heading className="mt-3">
              Clear care,{" "}
              <span className="text-brand italic">comfortable visits.</span>
            </Heading>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ReviewsCarousel />
        </Reveal>
      </Section>

      {/* LOCATION STRIP */}
      <Section bg="surface">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow>Find us</Eyebrow>
            <Heading className="mt-3">
              In the heart of Ballantyne, Charlotte.
            </Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              Easy parking, a calm waiting room, and a team that remembers your
              name. Stop in for a tour any time — coffee is on us.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-9 h-9 rounded-xl bg-white border border-line text-brand flex items-center justify-center">
                  <Icon name="map-pin" className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-ink">
                    {site.address.line1}, {site.address.line2}
                  </div>
                  <div className="text-sm text-muted">
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-9 h-9 rounded-xl bg-white border border-line text-brand flex items-center justify-center">
                  <Icon name="phone" className="h-4 w-4" />
                </div>
                <a href={site.phoneHref} className="font-medium text-ink hover:text-brand">
                  {site.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-9 h-9 rounded-xl bg-white border border-line text-brand flex items-center justify-center">
                  <Icon name="clock" className="h-4 w-4" />
                </div>
                <div className="text-sm text-ink-2">
                  Mon – Thu 9 AM – 5 PM<br />
                  Fri 8 AM – 1 PM (1st, 2nd &amp; 3rd)
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <Button href="/contact">
                Get directions
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
              <Button href={site.phoneHref} variant="secondary">
                <Icon name="phone" className="h-4 w-4" /> Call us
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl overflow-hidden border border-line shadow-soft aspect-[5/4]">
              <iframe
                title="Premier Dentistry on Google Maps"
                src="https://www.google.com/maps?q=16640+Hawfield+Way+Drive+Suite+101+Charlotte+NC+28277&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <CallToAction />
      <div className="h-20" />
    </>
  );
}
