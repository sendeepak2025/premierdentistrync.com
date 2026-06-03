import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { site, team } from "@/lib/site";
import { localSearchAreas, primarySeoKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Dr. Anand Patel, DDS & Premier Dentistry",
  description:
    "Meet Dr. Anand Patel, DDS and the team behind Premier Dentistry — a Ballantyne, Charlotte practice built around comfort, honesty, and modern care.",
  alternates: { canonical: "/about" },
  keywords: [
    ...primarySeoKeywords,
    "Dr. Anand Patel dentist",
    "Premier Dentistry team",
    "Ballantyne dental office",
    ...localSearchAreas.map((area) => `dentist near ${area}`),
  ],
};

export default function AboutPage() {
  const doctor = team[0];
  const featuredTeam = team.filter((member) => member.name !== site.doctor.name);
  const clinicPhotos = [
    {
      src: "/clinic/clinic-1.jpg",
      title: "Welcome area",
      note: "A calm first impression with a team ready to help.",
    },
    {
      src: "/clinic/clinic-3.jpg",
      title: "Treatment room",
      note: "Modern rooms designed for clear conversations and comfortable care.",
    },
    {
      src: "/clinic/clinic-4.jpg",
      title: "Clinical technology",
      note: "Digital tools that help make treatment easier to see and understand.",
    },
  ];

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
                  { k: "Since 2005", v: "In practice" },
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
              And because comfort is half the visit, we offer nitrous oxide
              options when appropriate, gentle hygiene techniques, and a calm
              office designed to feel more like a spa than a clinic.
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

      {/* Clinic photos */}
      <Section bg="white">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Inside the practice</Eyebrow>
            <Heading className="mt-3">
              A clean, modern space made for calmer visits.
            </Heading>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-ink-2 leading-relaxed">
              From the front desk to treatment rooms, the office is designed to
              feel organized, bright, and easy to move through. You can see more
              of the space before your visit in our office tour.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {clinicPhotos.map((photo, index) => (
            <article
              key={photo.title}
              className={`overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                index === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <div className="relative aspect-[4/3] bg-surface">
                <Image
                  src={photo.src}
                  alt={`${photo.title} at Premier Dentistry`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-ink">{photo.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {photo.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/office-tour" variant="secondary">
            View the full office tour
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Doctor */}
      <Section bg="white" id="team">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-card relative">
              <Image
                src={doctor.image ?? "/dr-patel.jpg"}
                alt={`${doctor.name}, ${site.doctor.credentials}`}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-[center_18%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/82 via-ink/35 to-transparent p-8 text-center text-white">
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
                "Practicing since 2005",
                "Preventive & restorative focus",
                "Cosmetic & implant dentistry",
                "Root canal therapy",
                "Comfort-focused care",
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

      {/* Full team */}
      <Section bg="surface-2">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Meet the team</Eyebrow>
          <Heading className="mt-3">
            Familiar faces,{" "}
            <span className="text-brand italic">comfortable care.</span>
          </Heading>
          <p className="mt-5 text-ink-2">
            From scheduling to hygiene to chairside support, these are the
            people who help each visit feel organized, personal, and calm.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredTeam.map((member) => (
            <article
              key={member.name}
              className="h-full overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] bg-surface">
                {member.image && (
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Premier Dentistry`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-[center_18%]"
                  />
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl leading-tight text-brand">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-bold text-muted">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-2">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CallToAction />
      <div className="h-20" />
    </>
  );
}
