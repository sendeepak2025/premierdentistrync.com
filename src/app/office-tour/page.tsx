import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Office Tour",
  description:
    "Take a virtual tour of Premier Dentistry — a calm, modern dental office in Ballantyne, Charlotte NC.",
  alternates: { canonical: "/office-tour" },
};

const rooms = [
  {
    name: "Welcome Lounge",
    note: "Calm seating, fresh coffee, and a front-desk team that knows you by name.",
    accent: "from-brand-soft to-white",
    icon: "users" as const,
  },
  {
    name: "Consultation Room",
    note: "Big-screen imaging so you can see what we see — and ask anything.",
    accent: "from-brand-2 to-brand",
    icon: "sparkle" as const,
  },
  {
    name: "Treatment Suite",
    note: "Ergonomic chairs, soft lighting, optional noise-cancelling headphones.",
    accent: "from-brand to-accent",
    icon: "shield" as const,
  },
  {
    name: "Imaging Bay",
    note: "Digital sensors with up to 90% less radiation than traditional X-rays.",
    accent: "from-accent-2 to-brand-2",
    icon: "heartbeat" as const,
  },
  {
    name: "Sterilization Center",
    note: "Hospital-grade sterilization — every instrument, every visit.",
    accent: "from-brand to-brand-2",
    icon: "shield" as const,
  },
  {
    name: "Hygiene Suite",
    note: "Comfortable cleanings with gentle ultrasonic scalers and warm towels.",
    accent: "from-brand-soft to-brand",
    icon: "sparkle" as const,
  },
];

export default function OfficeTourPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-radial-brand opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="max-w-3xl reveal">
            <Eyebrow>The office</Eyebrow>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              A calm, modern space —
              <span className="text-brand italic"> designed for comfort.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-2 leading-relaxed">
              Step inside our Ballantyne office. You will find natural light,
              quiet treatment rooms, and the kind of small touches — warm
              towels, fresh blankets, noise-cancelling headphones — that make
              every visit a little easier.
            </p>
            <div className="mt-8">
              <Button href="/contact">
                <Icon name="calendar" className="h-4 w-4" /> Schedule a tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section bg="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((r) => (
            <article
              key={r.name}
              className="rounded-2xl overflow-hidden border border-line shadow-soft hover:shadow-card transition-all bg-white"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${r.accent}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name={r.icon} className="h-16 w-16 text-white/70" />
                </div>
                <div className="absolute top-3 left-3 bg-white/90 text-ink text-[11px] font-medium uppercase tracking-[0.15em] rounded-full px-2.5 py-1">
                  Office
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-ink">{r.name}</h3>
                <p className="mt-1 text-sm text-ink-2 leading-relaxed">{r.note}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Comfort amenities */}
      <Section bg="surface">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Little extras</Eyebrow>
          <Heading className="mt-3">Comfort amenities, every visit.</Heading>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Warm blankets",
            "Noise-cancelling headphones",
            "Streaming in every room",
            "Sedation options",
            "Aromatherapy on request",
            "Sparkling & still water",
            "Kid-friendly chair time",
            "Same-day CEREC restorations",
          ].map((a) => (
            <div
              key={a}
              className="bg-white rounded-xl p-4 border border-line text-sm text-ink-2 flex items-start gap-2.5 shadow-soft"
            >
              <Icon name="check" className="h-4 w-4 text-brand mt-0.5 shrink-0" />
              {a}
            </div>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>Easy to find</Eyebrow>
            <Heading className="mt-3">Right on Hawfield Way.</Heading>
            <p className="mt-5 text-ink-2">
              Free parking out front, suite entrance on the ground floor.
            </p>
            <div className="mt-6 space-y-2 text-sm text-ink-2">
              <div>
                {site.address.line1}, {site.address.line2}
              </div>
              <div>
                {site.address.city}, {site.address.state} {site.address.zip}
              </div>
              <a href={site.phoneHref} className="block text-brand hover:text-brand-2 font-medium">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-line shadow-soft aspect-[5/4]">
            <iframe
              title="Premier Dentistry — office location"
              src="https://www.google.com/maps?q=16640+Hawfield+Way+Drive+Suite+101+Charlotte+NC+28277&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      <CallToAction />
      <div className="h-20" />
    </>
  );
}
