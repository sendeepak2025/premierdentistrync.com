import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { RatingChip } from "@/components/RatingChip";
import { Reveal } from "@/components/Reveal";
import { CategoryTeaser } from "@/components/CategoryTeaser";
import { ServiceListRows } from "@/components/ServiceListRows";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { TeamCarousel } from "@/components/TeamCarousel";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#cfd2d5] text-ink">
        <Image
          src="/hero-doctor-wide-sharp.webp"
          alt="Premier Dentistry doctor in modern scrubs"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="z-0 object-cover object-[70%_center] sm:object-[82%_center] lg:object-center"
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_26%,rgba(255,255,255,0.46),transparent_34%),linear-gradient(90deg,rgba(241,243,246,0.98)_0%,rgba(232,236,241,0.94)_54%,rgba(207,210,213,0.18)_72%,rgba(207,210,213,0)_100%)] sm:bg-[radial-gradient(circle_at_18%_26%,rgba(255,255,255,0.42),transparent_32%),linear-gradient(90deg,rgba(232,235,238,0.96)_0%,rgba(224,228,233,0.88)_38%,rgba(207,210,213,0.16)_62%,rgba(207,210,213,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-t from-[#cfd2d5] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:min-h-[640px] sm:px-6 sm:py-16 lg:min-h-[680px] lg:px-8">
          <Reveal className="flex max-w-[680px] flex-col justify-center sm:min-h-[560px] lg:min-h-[600px]" y={24}>
            <div className="hidden max-w-[320px] flex-wrap items-center gap-2 sm:flex sm:max-w-none sm:gap-3">
              <RatingChip variant="light" reviewsLabel="local Google reviews" />
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-ink shadow-soft sm:px-4 sm:text-sm">
                <Icon name="map-pin" className="h-4 w-4 text-brand" />
                Ballantyne, Charlotte NC
              </span>
            </div>

            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.22em] text-brand sm:mt-10 sm:text-sm">
              Premier Dentistry of Charlotte
            </p>
            <h1 className="mt-3 max-w-[360px] font-display text-[3.45rem] leading-[0.86] text-[#17233b] drop-shadow-[0_2px_0_rgba(255,255,255,0.55)] sm:mt-4 sm:max-w-[620px] sm:text-[6rem] lg:text-[7.4rem]">
              There&apos;s a reason...
            </h1>
            <p className="mt-5 max-w-[390px] text-2xl font-extrabold leading-tight text-[#0d1830] sm:mt-6 sm:max-w-xl sm:text-4xl">
              Families choose Premier for{" "}
              <span className="whitespace-nowrap text-[#2f5dc4]">5.0-star</span> dental care.
            </p>
            <p className="mt-3 max-w-[350px] text-base font-medium leading-relaxed text-[#33415f] sm:mt-4 sm:max-w-xl sm:text-lg">
              Modern dentistry with {site.doctor.name}, {site.doctor.credentials},
              clear treatment plans, same-day technology, and a calmer visit
              from the first call.
            </p>

            <div className="mt-6 grid max-w-[350px] grid-cols-2 gap-2 sm:mt-8 sm:flex sm:max-w-none sm:flex-row sm:items-center sm:gap-3">
              <a
                href="#reviews"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#bff6ff] px-4 py-3 text-sm font-extrabold text-[#0d1830] shadow-soft ring-1 ring-cyan-100 transition-all hover:-translate-y-0.5 hover:bg-[#a6f0fb] hover:shadow-card sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              >
                <Icon name="star" className="h-4 w-4 text-brand" />
                Reviews
              </a>
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-extrabold text-[#0d1830] shadow-soft ring-1 ring-white/70 transition-all hover:-translate-y-0.5 hover:shadow-card sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              >
                <Icon name="calendar" className="h-4 w-4 text-brand" />
                Book
              </a>
            </div>

            <div className="mt-5 grid max-w-[350px] grid-cols-3 gap-2 sm:mt-8 sm:max-w-2xl sm:gap-3">
              {[
                ["Same day", "CEREC crowns"],
                ["Emergency", "Pain visits"],
                ["14+", "Treatments"],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white/78 p-3 shadow-soft ring-1 ring-white/70 backdrop-blur-sm sm:p-4"
                >
                  <div className="font-display text-xl leading-none text-ink sm:text-3xl">
                    {title}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold leading-tight text-muted sm:text-sm">
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
      <Section bg="white">
        <Reveal>
          <ServiceShowcase
            heading="The best dental care in Ballantyne."
            subheading="From routine cleanings to full-mouth restorations — every treatment your family needs, all under one roof."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <Button href="/services" variant="secondary" size="lg">
              Browse all 14 treatments in detail
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
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

      {/* FIRST VISIT WALKTHROUGH */}
      <Section bg="white">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>What to expect</Eyebrow>
            <Heading className="mt-3">Your first visit, end to end.</Heading>
            <p className="mt-5 text-ink-2">
              No surprises, no upsell. Here is what a comprehensive new-patient
              visit looks like at Premier.
            </p>
          </div>
        </Reveal>

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              n: "01",
              t: "Warm welcome",
              b: "A short intake, a comfortable chair, and answers to whatever questions you brought with you.",
            },
            {
              n: "02",
              t: "Modern imaging",
              b: "Low-radiation digital X-rays and an intraoral scan — no putty, no gagging.",
            },
            {
              n: "03",
              t: "Honest exam",
              b: `${site.doctor.name} reviews everything on screen with you and explains what he sees.`,
            },
            {
              n: "04",
              t: "Personal plan",
              b: "Options ranked by urgency, with clear pricing and insurance estimates up front.",
            },
          ].map((step, i) => (
            <Reveal as="li" key={step.n} delay={60 * i}>
              <div className="relative bg-white rounded-2xl border border-line p-6 h-full">
                <div className="font-display text-4xl text-brand/25">{step.n}</div>
                <h3 className="mt-2 font-display text-xl text-ink">{step.t}</h3>
                <p className="mt-2 text-sm text-ink-2 leading-relaxed">{step.b}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* CATEGORY TEASER STRIP */}
      <Section bg="surface-2">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Quick paths</Eyebrow>
            <Heading className="mt-3">
              Tell us what you need —{" "}
              <span className="text-brand italic">we&apos;ll take it from here.</span>
            </Heading>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <CategoryTeaser />
        </Reveal>
      </Section>

      {/* DIRECT SERVICE LIST WITH BOOK BUTTONS */}
      <Section bg="white">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <Eyebrow>Experience</Eyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-ink leading-[1.05]">
              Experience{" "}
              <span className="text-brand italic">personalized comfort.</span>
            </h2>
            <p className="mt-5 text-ink-2 text-lg leading-relaxed">
              Whatever brings you in — a routine cleaning, a new smile, or a
              tooth that&apos;s been bothering you — book directly below and
              we&apos;ll take care of the rest.
            </p>
            <p className="mt-2 text-sm text-muted italic">
              (And see why our patients love coming back.)
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact">
                <Icon name="calendar" className="h-4 w-4" /> Book a visit
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-brand transition-colors"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-line shadow-soft text-brand">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                {site.phone}
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <ServiceListRows />
          </Reveal>
        </div>
      </Section>

      {/* TEAM CAROUSEL */}
      <Section bg="surface">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-20">
          <Reveal>
            <Eyebrow>Our team is everything</Eyebrow>
            <Heading className="mt-3 max-w-2xl">
              The people you will{" "}
              <span className="text-brand italic">see every visit.</span>
            </Heading>
          </Reveal>
          <Reveal delay={80}>
            <Button href="/about#team" variant="secondary">
              Meet the full team
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <TeamCarousel />
        </Reveal>
      </Section>

      {/* REVIEWS CAROUSEL */}
      <Section bg="white">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>What patients say</Eyebrow>
            <Heading className="mt-3">
              Kind words,{" "}
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
                  Fri 9 AM – 2 PM (1st &amp; 3rd)
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
