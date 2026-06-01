import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { site, team } from "@/lib/site";
import { TeamCarousel } from "@/components/TeamCarousel";

export const metadata: Metadata = {
  title: "About Premier Dentistry",
  description:
    "Meet Dr. Anand Patel, DDS and the team behind Premier Dentistry — a Ballantyne, Charlotte practice built around comfort, honesty, and modern care.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const doctor = team[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-radial-brand pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 reveal">
              <Eyebrow>About the practice</Eyebrow>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
                A dental home you actually
                <span className="text-brand italic"> look forward to.</span>
              </h1>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-2xl">
                We opened Premier Dentistry with a simple idea: combine the
                warmth of a neighborhood practice with the technology and
                comfort of a modern one. No high-pressure sales, no rushed
                visits — just careful, personal care for every patient who
                sits in our chair.
              </p>
              <div className="mt-8 flex gap-3">
                <Button href="/contact">
                  <Icon name="calendar" className="h-4 w-4" /> Book a visit
                </Button>
                <Button href="#team" variant="secondary">
                  Meet the team
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 reveal reveal-delay-2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "Since 2011", v: "In practice" },
                  { k: "NYU '05", v: "DDS, Dr. Patel" },
                  { k: "Modern", v: "Digital workflows" },
                  { k: "Family", v: "All ages welcome" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="bg-white rounded-2xl p-5 border border-line shadow-soft"
                  >
                    <div className="font-display text-2xl text-brand">{s.k}</div>
                    <div className="mt-1 text-sm text-ink-2">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section bg="white">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Our promise</Eyebrow>
            <Heading className="mt-3">
              Care first. Technology second. Hurry — never.
            </Heading>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-2 leading-relaxed">
            <p>
              Great dentistry starts with listening. Before we ever pick up an
              instrument, we want to understand how your mouth feels, what
              concerns you, and what kind of smile you want a year from now.
              Only then do we recommend treatment — and we always offer
              options.
            </p>
            <p>
              Our team has invested in the technology that genuinely improves
              the patient experience: low-radiation digital imaging, intraoral
              scanning instead of goopy impressions, and same-day CEREC
              restorations. The goal is fewer visits, less waiting, and a
              result you are proud of.
            </p>
            <p>
              And because comfort is half the visit, we offer multiple sedation
              options, gentle hygiene techniques, and a calm office designed to
              feel more like a spa than a clinic.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section bg="surface">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>What guides us</Eyebrow>
          <Heading className="mt-3">Four values, every visit.</Heading>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: "heartbeat" as const,
              t: "Compassion",
              b: "Gentle hands and honest conversation — never a sales pitch.",
            },
            {
              icon: "shield" as const,
              t: "Integrity",
              b: "If you do not need it, we will not recommend it. Full stop.",
            },
            {
              icon: "sparkle" as const,
              t: "Craftsmanship",
              b: "Dental work that is built to last and looks like nature intended.",
            },
            {
              icon: "users" as const,
              t: "Community",
              b: "Families across Ballantyne trust us — and we do not take that lightly.",
            },
          ].map((v) => (
            <div
              key={v.t}
              className="bg-white rounded-2xl p-6 border border-line shadow-soft"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-4">
                <Icon name={v.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-ink">{v.t}</h3>
              <p className="mt-2 text-sm text-ink-2 leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Doctor */}
      <Section bg="white" id="team">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-card relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${doctor.accent}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                <div className="w-28 h-28 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mb-6 ring-4 ring-white/20">
                  <span className="font-display text-4xl">{doctor.initials}</span>
                </div>
                <p className="font-display text-2xl">{doctor.name}</p>
                <p className="text-sm text-white/80 mt-1">
                  {doctor.role}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>Meet your dentist</Eyebrow>
            <Heading className="mt-3">
              {doctor.name}, {site.doctor.credentials}
            </Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              {doctor.bio}
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "DDS · NYU College of Dentistry (2005)",
                "BS · Binghamton University",
                "Residency · St. Joseph Hospital, NJ",
                "Practicing since 2011",
                "Preventive & restorative focus",
                "Cosmetic & implant dentistry",
                "Root canal therapy",
                "Sedation-trained",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm text-ink-2"
                >
                  <Icon name="check" className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <Button href="/contact">Schedule with Dr. Patel</Button>
              <Link
                href="/services"
                className="text-brand hover:text-brand-2 inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium"
              >
                See services he offers
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Full team carousel */}
      <Section bg="surface-2">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-20">
          <div>
            <Eyebrow>Meet the team</Eyebrow>
            <Heading className="mt-3">
              The people you will{" "}
              <span className="text-brand italic">see every visit.</span>
            </Heading>
          </div>
          <p className="text-ink-2 max-w-md">
            Behind every comfortable appointment is a team that has been doing
            this together for years — and genuinely likes each other.
          </p>
        </div>
        <TeamCarousel />
      </Section>

      <CallToAction />
      <div className="h-20" />
    </>
  );
}
