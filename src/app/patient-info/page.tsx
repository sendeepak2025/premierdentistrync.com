import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { site, insuranceCarriers } from "@/lib/site";
import { educationTopics, educationOrder } from "@/lib/patientEducation";
import { localSearchAreas, primarySeoKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Patient Info — First Visit, Insurance & Financing",
  description:
    "Everything new patients need: what to bring on your first visit, insurance estimates, PremierCare savings plan details, financial policy, and the technology behind your care.",
  alternates: { canonical: "/patient-info" },
  keywords: [
    ...primarySeoKeywords,
    "Premier Dentistry insurance",
    "PremierCare savings plan",
    "new patient dentist Ballantyne",
    "dental financing Charlotte NC",
    ...localSearchAreas.map((area) => `new patient dentist near ${area}`),
  ],
};

const sections = [
  { id: "first-visit", label: "First Visit" },
  { id: "registration", label: "Registration" },
  { id: "insurance", label: "Insurance" },
  { id: "premiercare", label: "PremierCare Plan" },
  { id: "financial-policy", label: "Financial Policy" },
  { id: "technology", label: "Advanced Technology" },
  { id: "education", label: "Patient Education" },
];

export default function PatientInfoPage() {
  return (
    <>
      {/* Blue banner hero */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-2 blur-3xl" />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/75 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-white">
              Premier Dentistry — Ballantyne
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Patient Central</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            Patient Central
          </h1>
          <p className="mt-3 text-sm font-medium tracking-[0.18em] uppercase text-white/70">
            Everything you need before your first visit
          </p>
          <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-2xl">
            We have answered the most common questions up front — what to bring,
            how estimates work, how insurance is verified, and the tools we use behind
            the chair. If anything is unclear, call us at{" "}
            <a href={site.phoneHref} className="text-white font-medium underline underline-offset-2 hover:text-accent">
              {site.phone}
            </a>{" "}— we are happy to walk you through it.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-white px-4 py-2 text-sm hover:bg-white/20 backdrop-blur-sm transition"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST VISIT */}
      <Section bg="white" id="first-visit" className="scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>What to expect</Eyebrow>
            <Heading className="mt-3">Your first visit.</Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              A new-patient appointment is about an hour long. We use that time
              to learn your dental history, complete a careful exam with digital
              imaging when clinically useful, and discuss anything that needs
              attention clearly and without pressure.
            </p>
            <p className="mt-4 text-ink-2 leading-relaxed">
              Please plan to arrive about 15 minutes early so we can get your
              paperwork sorted and you can settle in.
            </p>
            <Button href="/contact" className="mt-6">
              <Icon name="calendar" className="h-4 w-4" /> Book your first visit
            </Button>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-line">
              <h3 className="font-display text-xl text-ink">What to bring</h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {[
                  "Recent dental X-rays (within 12 months, if available)",
                  "A current list of medications",
                  "Your dental insurance card or policy details",
                  "A valid government-issued photo ID",
                  "Completed new-patient registration (online or in office)",
                  "Any specific questions or concerns you would like to discuss",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-white text-brand flex items-center justify-center shrink-0 shadow-soft">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "clock" as const,
                  t: "≈ 1 hour visit",
                  b: "Enough time for a thorough exam, X-rays, and an honest conversation.",
                },
                {
                  icon: "calendar" as const,
                  t: "Arrive 15 min early",
                  b: "So paperwork is done before you sit in the chair.",
                },
              ].map((p) => (
                <div
                  key={p.t}
                  className="bg-white rounded-2xl p-5 border border-line shadow-soft"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-3">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </div>
                  <div className="font-medium text-ink">{p.t}</div>
                  <div className="mt-1 text-sm text-ink-2">{p.b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* REGISTRATION */}
      <Section bg="surface" id="registration" className="scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Save time</Eyebrow>
            <Heading className="mt-3">Patient registration.</Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              You are welcome to fill out our new-patient forms before you
              arrive — it shaves 10 to 15 minutes off your first visit and lets
              us prepare for any specifics you mention. Or just come in a little
              early and complete them in our waiting lounge.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            <a
              href={`mailto:${site.email}?subject=New%20Patient%20Forms`}
              className="bg-white rounded-2xl p-6 border border-line shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-4">
                <Icon name="mail" className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg text-ink">Email me the forms</h3>
              <p className="mt-2 text-sm text-ink-2">
                We will reply with a digital intake link as soon as our team is able.
              </p>
            </a>
            <a
              href={site.phoneHref}
              className="bg-white rounded-2xl p-6 border border-line shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-4">
                <Icon name="phone" className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg text-ink">Call to register</h3>
              <p className="mt-2 text-sm text-ink-2">
                Prefer to talk it through? Dial {site.phone}.
              </p>
            </a>
          </div>
        </div>
      </Section>

      {/* INSURANCE */}
      <Section bg="white" id="insurance" className="scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Insurance accepted</Eyebrow>
            <Heading className="mt-3">
              We work with many PPO insurance plans.
            </Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              Our front desk will verify your benefits before your visit so you
              understand your estimated coverage and out-of-pocket portion before
              treatment. If you do not see your plan listed, call us and we can
              check whether we are able to file it.
            </p>
            <div className="mt-6 space-y-3">
              <Button href="/contact">
                <Icon name="calendar" className="h-4 w-4" /> Verify my benefits
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {insuranceCarriers.map((c) => (
                <li
                  key={c}
                  className="bg-surface rounded-xl border border-line px-3 py-3 text-center text-sm text-ink-2 font-medium"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">
              Don&apos;t see yours? Call us at {site.phone} — we file most major
              dental insurance.
            </p>
          </div>
        </div>
      </Section>

      {/* PREMIERCARE */}
      <Section bg="brand-soft" id="premiercare" className="scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <Eyebrow>No insurance? No problem.</Eyebrow>
            <Heading className="mt-3">
              The PremierCare Savings Plan.
            </Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              PremierCare is our in-office dental savings plan, designed to
              help Premier Dentistry patients receive dental treatment at a
              lower rate. The plan rewards patient loyalty with the same level
              of care our team provides every day, with savings on preventive,
              restorative, cosmetic, and specialty services.
            </p>
            <p className="mt-4 text-ink-2 leading-relaxed">
              PremierCare is valid only for patients of Premier Dentistry and
              can only be used in our office. To learn more or sign up, contact
              us today. One of our friendly team members can answer your
              questions, review current terms, and help you start using your
              benefits right away.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "2 dental exams and cleanings per year included",
                "All low-dose digital X-rays included when needed",
                "Fluoride treatment included twice per year",
                "Oral cancer screenings included twice per year",
                "One emergency exam with necessary X-rays included per year",
                "Discounts on fillings, crowns, implants, root canals, and more",
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

            <div className="mt-7 flex gap-3">
              <Button href="/contact">Ask about PremierCare</Button>
              <Button href={site.phoneHref} variant="secondary">
                <Icon name="phone" className="h-4 w-4" /> {site.phone}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-line">
              <div className="text-xs uppercase tracking-[0.18em] text-muted">
                Annual fees
              </div>
              <div className="mt-2 font-display text-3xl text-ink">
                Simple membership pricing.
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { k: "Single member", v: "$375" },
                  { k: "Each additional member age 15+", v: "$325" },
                  { k: "Each additional member under 15", v: "$250" },
                  { k: "Estimated annual savings", v: "Over $600+" },
                ].map((r) => (
                  <div
                    key={r.k}
                    className="flex justify-between text-sm border-b border-line pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-ink-2">{r.k}</span>
                    <span className="text-ink font-medium">{r.v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted">
                Members must be paid annually. Monthly payments are not
                accepted. Ask our team for current terms and family-plan
                details.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Diagnostic and preventive",
              rows: [
                ["2 dental exams", "100%"],
                ["1 emergency exam", "100%"],
                ["All low-dose digital X-rays", "100%"],
                ["Child or adult prophylaxis", "100%"],
                ["Fluoride treatment", "100%"],
                ["Oral cancer screenings", "100%"],
                ["Additional cleanings per year", "30%"],
                ["Dental sealants", "40%"],
              ],
            },
            {
              title: "Restorative and cosmetics",
              rows: [
                ["Fillings", "30%"],
                ["Build-up and posts", "30%"],
                ["Crowns", "20%"],
                ["Teeth whitening", "20%"],
                ["Veneers or bonding", "20%"],
              ],
            },
            {
              title: "Specialty treatments",
              rows: [
                ["Root canals", "20%"],
                ["Extractions", "20%"],
                ["Implants", "20%"],
                ["Periodontal deep cleanings", "30%"],
                ["Bone grafts", "20%"],
                ["Sedation options", "20%"],
                ["Dentures and partials", "20%"],
              ],
            },
          ].map((table) => (
            <div
              key={table.title}
              className="rounded-2xl border border-line bg-white p-5 shadow-soft"
            >
              <h3 className="font-display text-xl text-ink">
                {table.title}
              </h3>
              <div className="mt-4 divide-y divide-line">
                {table.rows.map(([procedure, savings]) => (
                  <div
                    key={procedure}
                    className="flex items-center justify-between gap-4 py-2.5 text-sm"
                  >
                    <span className="text-ink-2">{procedure}</span>
                    <span className="shrink-0 font-semibold text-brand">
                      {savings}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs leading-6 text-muted">
          PremierCare is not dental insurance and cannot be combined with
          insurance plans or other office fees. Plan savings are based on
          Premier Dentistry office fees and may vary by procedure. Please ask
          our team for the current brochure and full membership details.
        </p>
      </Section>

      {/* FINANCIAL POLICY */}
      <Section bg="white" id="financial-policy" className="scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Financial policy</Eyebrow>
            <Heading className="mt-3">
              Clear pricing, flexible options.
            </Heading>
            <p className="mt-5 text-ink-2 leading-relaxed">
              We believe you deserve to know what something costs before we do
              it — so we walk through estimates with you and offer financing
              partners when needed. No surprise bills.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "check" as const,
                t: "Up-front estimates",
                b: "Treatment plans include your estimated insurance benefit and out-of-pocket projection when benefits are available.",
              },
              {
                icon: "shield" as const,
                t: "Payment at service",
                b: "Your portion is due on the day of treatment unless arranged otherwise.",
              },
              {
                icon: "sparkle" as const,
                t: "CareCredit financing",
                b: "Need to spread larger treatment over time? Ask about our financing partners.",
              },
              {
                icon: "users" as const,
                t: "We file your claims",
                b: "Our team submits many dental claims and follows up with insurance when plan rules allow.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="bg-surface rounded-2xl p-6 border border-line"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-brand flex items-center justify-center mb-3">
                  <Icon name={c.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-ink">{c.t}</h3>
                <p
                  className="mt-2 text-sm text-ink-2 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: c.b }}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ADVANCED TECHNOLOGY */}
      <Section bg="surface-2" id="technology" className="scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>The tools behind your care</Eyebrow>
          <Heading className="mt-3">Modern technology, gentler dentistry.</Heading>
          <p className="mt-5 text-ink-2">
            Better instruments can make care easier to understand and more
            comfortable to plan. Here is what you may see at Premier.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: "sparkle" as const,
              t: "CEREC same-day crowns",
              b: "Digital scan, in-office milling, and bonding in one visit for many appropriate cases.",
            },
            {
              icon: "heartbeat" as const,
              t: "3D digital X-rays",
              b: "Digital imaging helps us capture diagnostic images quickly while following radiation-safety guidelines.",
            },
            {
              icon: "shield" as const,
              t: "3D implant planning",
              b: "We use 3D imaging and printed surgical guides when they are useful for implant planning.",
            },
            {
              icon: "wind" as const,
              t: "Electric handpieces",
              b: "Designed to be quieter and smoother than many air-driven handpieces.",
            },
            {
              icon: "smile" as const,
              t: "Intraoral cameras",
              b: "See what we see, in real time — so you can ask questions about exactly what you are looking at.",
            },
            {
              icon: "diamond" as const,
              t: "Digital impressions",
              b: "A wand-style scan can replace putty impressions for many cases and helps us plan restorations digitally.",
            },
          ].map((t) => (
            <div
              key={t.t}
              className="bg-white rounded-2xl p-6 border border-line shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-4">
                <Icon name={t.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-ink">{t.t}</h3>
              <p className="mt-2 text-sm text-ink-2 leading-relaxed">{t.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PATIENT EDUCATION */}
      <Section bg="white" id="education" className="scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Patient Education</Eyebrow>
            <Heading className="mt-3 max-w-2xl">
              Six guides, written in plain English.
            </Heading>
            <p className="mt-5 text-ink-2 leading-relaxed max-w-xl">
              From daily home care to the deeper questions about gum health,
              children&apos;s teeth, and dental terminology — read up before
              your visit, or anytime curiosity strikes.
            </p>
          </div>
          <Button href="/patient-info/education" variant="secondary">
            All 6 guides
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {educationOrder.map((slug) => {
            const t = educationTopics[slug];
            return (
              <Link
                key={slug}
                href={`/patient-info/education/${slug}`}
                className="group block bg-white rounded-2xl border border-line p-6 shadow-soft hover:shadow-card hover:border-brand/30 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted">
                      {t.eyebrow}
                    </div>
                    <h3 className="mt-1 font-display text-lg text-ink leading-snug">
                      {t.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ink-2 leading-relaxed line-clamp-3">
                  {t.blurb}
                </p>
                <div className="mt-4 flex items-center text-sm text-brand font-medium">
                  Read the guide
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <CallToAction />
      <div className="h-20" />
    </>
  );
}
