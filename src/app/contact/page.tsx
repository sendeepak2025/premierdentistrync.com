import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { site } from "@/lib/site";
import { AppointmentForm } from "@/components/AppointmentForm";
import { localSearchAreas, primarySeoKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Premier Dentistry | Ballantyne Dentist Appointment",
  description:
    "Request a dental appointment at Premier Dentistry in Ballantyne, Charlotte NC. Call 704-544-8860 or send a message and we will get back to you the same business day.",
  alternates: { canonical: "/contact" },
  keywords: [
    ...primarySeoKeywords,
    "book dentist appointment Ballantyne",
    "Premier Dentistry phone number",
    "dentist appointment Charlotte NC",
    ...localSearchAreas.map((area) => `dental appointment near ${area}`),
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-radial-brand pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 reveal">
              <Eyebrow>Let&apos;s talk</Eyebrow>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
                Book your visit —
                <span className="text-brand italic"> we&apos;ll take it from here.</span>
              </h1>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-2xl">
                Send us a quick request and our front desk will reach out the
                same business day to confirm a time. In a hurry? Call us — we
                love a real conversation.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={site.phoneHref}
                  className="bg-white rounded-2xl p-5 border border-line shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
                >
                  <Icon name="phone" className="h-5 w-5 text-brand" />
                  <div className="mt-3 text-xs uppercase tracking-[0.15em] text-muted">
                    Call
                  </div>
                  <div className="mt-1 font-display text-xl text-ink whitespace-nowrap">
                    {site.phone}
                  </div>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="bg-white rounded-2xl p-5 border border-line shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
                >
                  <Icon name="mail" className="h-5 w-5 text-brand" />
                  <div className="mt-3 text-xs uppercase tracking-[0.15em] text-muted">
                    Email
                  </div>
                  <div className="mt-1 text-base font-semibold leading-6 text-ink break-words">
                    {site.email}
                  </div>
                </a>
                <div className="bg-white rounded-2xl p-5 border border-line shadow-soft sm:col-span-2">
                  <div className="grid gap-3 text-sm sm:grid-cols-[auto_auto_1fr] sm:items-center sm:gap-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-muted shrink-0">
                      Fax
                    </span>
                    <span className="font-medium text-ink whitespace-nowrap">{site.fax}</span>
                    <span className="text-xs leading-5 text-muted sm:ml-auto sm:text-right">
                      Serving Ballantyne, South Charlotte &amp; Indian Land
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <Section bg="white">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-line shadow-card p-6 sm:p-10">
              <Eyebrow>Appointment request</Eyebrow>
              <Heading as="h2" className="mt-3 !text-3xl">
                Tell us a little about your visit.
              </Heading>
              <p className="mt-3 text-ink-2">
                Required fields are marked with an asterisk. We do not share your
                information with anyone.
              </p>
              <div className="mt-8">
                <AppointmentForm />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-5">
            <div className="bg-surface rounded-2xl p-6 border border-line">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-brand flex items-center justify-center shrink-0">
                  <Icon name="map-pin" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted">
                    Visit
                  </div>
                  <address className="not-italic mt-1 text-ink font-medium leading-relaxed">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </address>
                  <a
                    href={site.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-2 font-medium"
                  >
                    Get directions
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-line">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-brand flex items-center justify-center shrink-0">
                  <Icon name="clock" className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.15em] text-muted">
                    Hours
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {site.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between text-ink-2"
                      >
                        <span>{h.day}</span>
                        <span className="text-ink font-medium">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-ink text-white rounded-2xl p-6 border border-ink">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                  <Icon name="siren" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-white/70">
                    Dental emergency?
                  </div>
                  <p className="mt-1.5 text-sm text-white/80 leading-relaxed">
                    Do not wait. Call us at{" "}
                    <a
                      className="text-white font-medium underline underline-offset-2"
                      href={site.phoneHref}
                    >
                      {site.phone}
                    </a>{" "}
                    — we make every effort to see emergencies the same day.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Map */}
      <Section bg="surface" className="!py-0 lg:!py-0">
        <div className="rounded-3xl overflow-hidden border border-line shadow-soft aspect-[16/8] -mt-10 mb-20">
          <iframe
            title="Premier Dentistry on Google Maps"
            src="https://www.google.com/maps?q=16640+Hawfield+Way+Drive+Suite+101+Charlotte+NC+28277&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
