import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Office Tour",
  description:
    "Take a virtual tour of Premier Dentistry, a calm, modern dental office in Ballantyne, Charlotte NC.",
  alternates: { canonical: "/office-tour" },
};

const rooms = [
  {
    name: "Welcome Lounge",
    note: "Calm seating, fresh coffee, and a front-desk team that knows you by name.",
    image: "/clinic/clinic-1.jpg",
  },
  {
    name: "Consultation Room",
    note: "Big-screen imaging so you can see what we see and ask anything.",
    image: "/clinic/clinic-2.jpg",
  },
  {
    name: "Treatment Suite",
    note: "Ergonomic chairs, soft lighting, and comfort-focused treatment rooms.",
    image: "/clinic/clinic-3.jpg",
  },
  {
    name: "Imaging Bay",
    note: "Digital imaging tools that support clear, efficient diagnosis.",
    image: "/clinic/clinic-4.jpg",
  },
  {
    name: "Sterilization Center",
    note: "Careful sterilization protocols for every instrument and every visit.",
    image: "/clinic/clinic-5.jpg",
  },
  {
    name: "Hygiene Suite",
    note: "Comfortable cleanings with gentle hygiene care and modern equipment.",
    image: "/clinic/clinic-6.jpg",
  },
];

export default function OfficeTourPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-radial-brand opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <div className="max-w-3xl reveal">
            <Eyebrow>The office</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              A calm, modern space
              <span className="text-brand italic"> designed for comfort.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              Step inside our Ballantyne office. You will find natural light,
              quiet treatment rooms, and the kind of small touches that make
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] bg-surface">
                <img
                  src={room.image}
                  alt={`${room.name} at Premier Dentistry`}
                  loading={room.name === "Welcome Lounge" ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-ink">
                  Office
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-ink">{room.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">
                  {room.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Little extras</Eyebrow>
          <Heading className="mt-3">Comfort amenities, every visit.</Heading>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Warm blankets",
            "Noise-cancelling headphones",
            "Streaming in every room",
            "Nitrous oxide options when appropriate",
            "Aromatherapy on request",
            "Sparkling and still water",
            "Kid-friendly chair time",
            "Same-day CEREC restorations",
          ].map((amenity) => (
            <div
              key={amenity}
              className="flex items-start gap-2.5 rounded-xl border border-line bg-white p-4 text-sm text-ink-2 shadow-soft"
            >
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {amenity}
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
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
              <a
                href={site.phoneHref}
                className="block font-medium text-brand hover:text-brand-2"
              >
                {site.phone}
              </a>
            </div>
          </div>
          <div className="aspect-[5/4] overflow-hidden rounded-3xl border border-line shadow-soft">
            <iframe
              title="Premier Dentistry office location"
              src="https://www.google.com/maps?q=16640+Hawfield+Way+Drive+Suite+101+Charlotte+NC+28277&output=embed"
              className="h-full w-full"
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
