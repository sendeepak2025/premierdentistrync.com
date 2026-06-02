import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { RatingChip } from "@/components/RatingChip";
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
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
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
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#cfd2d5] text-ink">
        <Image
          src="/hero-doctor-wide.png"
          alt="Premier Dentistry doctor in modern scrubs"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="z-0 object-cover object-[64%_top] sm:object-[82%_center] lg:object-center"
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(241,243,246,0.98)_0%,rgba(238,241,245,0.93)_54%,rgba(232,235,240,0.55)_74%,rgba(207,210,213,0.12)_100%)] sm:bg-[radial-gradient(circle_at_18%_26%,rgba(255,255,255,0.42),transparent_32%),linear-gradient(90deg,rgba(232,235,238,0.96)_0%,rgba(224,228,233,0.88)_38%,rgba(207,210,213,0.16)_62%,rgba(207,210,213,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-t from-[#cfd2d5] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:min-h-[640px] sm:px-6 sm:py-16 lg:min-h-[680px] lg:px-8">
          <Reveal className="flex max-w-[680px] flex-col justify-center sm:min-h-[560px] lg:min-h-[600px]" y={16}>
            <div className="hidden max-w-[320px] flex-wrap items-center gap-2 sm:flex sm:max-w-none sm:gap-3">
              <RatingChip variant="light" reviewsLabel="local Google reviews" />
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-ink shadow-soft sm:px-4 sm:text-sm">
                <Icon name="map-pin" className="h-4 w-4 text-brand" />
                Ballantyne, Charlotte NC
              </span>
            </div>

            <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand sm:mt-10 sm:text-sm">
              Premier Dentistry of Charlotte
            </p>
            <h1 className="mt-3 max-w-[305px] font-display text-[2.75rem] leading-[0.88] text-[#17233b] drop-shadow-[0_2px_0_rgba(255,255,255,0.55)] min-[390px]:text-[3rem] sm:mt-4 sm:max-w-[620px] sm:text-[6rem] lg:text-[7.4rem]">
              There&apos;s a reason...
            </h1>
            <p className="mt-3 max-w-[330px] text-[1.22rem] font-extrabold leading-tight text-[#0d1830] min-[390px]:text-[1.35rem] sm:mt-6 sm:max-w-xl sm:text-4xl">
              Families choose Premier for{" "}
              <span className="whitespace-nowrap text-[#2f5dc4]">5.0-star</span> dental care.
            </p>
            <p className="mt-3 max-w-[320px] text-[0.9rem] font-medium leading-6 text-[#33415f] min-[390px]:max-w-[350px] sm:mt-4 sm:max-w-xl sm:text-lg sm:leading-relaxed">
              Modern dentistry with {site.doctor.name}, {site.doctor.credentials},
              clear treatment plans, same-day technology, and a calmer visit
              from the first call.
            </p>

            <div className="mt-4 grid max-w-[320px] grid-cols-2 gap-2 min-[390px]:max-w-[350px] sm:mt-8 sm:flex sm:max-w-none sm:flex-row sm:items-center sm:gap-3">
              <a
                href="#reviews"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#bff6ff] px-4 py-2.5 text-sm font-extrabold text-[#0d1830] shadow-soft ring-1 ring-cyan-100 transition-all hover:-translate-y-0.5 hover:bg-[#a6f0fb] hover:shadow-card sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              >
                <Icon name="star" className="h-4 w-4 text-brand" />
                Reviews
              </a>
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-extrabold text-[#0d1830] shadow-soft ring-1 ring-white/70 transition-all hover:-translate-y-0.5 hover:shadow-card sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              >
                <Icon name="calendar" className="h-4 w-4 text-brand" />
                Book
              </a>
            </div>

            <div className="mt-3 grid max-w-[320px] grid-cols-3 gap-2 min-[390px]:max-w-[350px] sm:mt-8 sm:max-w-2xl sm:gap-3">
              {[
                ["Same day", "CEREC crowns"],
                ["Emergency", "Pain visits"],
                ["13", "Treatments"],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-xl bg-white/82 p-2 shadow-soft ring-1 ring-white/75 backdrop-blur-sm sm:rounded-2xl sm:p-4"
                >
                  <div className="font-display text-base leading-none text-ink min-[390px]:text-lg sm:text-3xl">
                    {title}
                  </div>
                  <div className="mt-1 text-[9px] font-semibold leading-tight text-muted sm:text-sm">
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="hidden">
            <div className="relative ml-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-card">
              <Image
                src="/dr-patel-official.webp"
                alt={`${site.doctor.name}, ${site.doctor.credentials}`}
                fill
                sizes="460px"
                className="object-cover object-[center_22%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent p-5">
                <div className="font-display text-2xl text-white">
                  {site.doctor.name}
                </div>
                <div className="mt-1 text-sm font-medium text-white/75">
                  {site.doctor.credentials} · Premier Dentistry
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="border-y border-line bg-ink text-white/85 py-5 overflow-hidden">
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
      <Section bg="surface">
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
