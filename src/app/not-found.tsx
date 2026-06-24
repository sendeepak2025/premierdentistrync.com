import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "Find the Premier Dentistry page you need, including services, patient information, smile gallery, and appointment contact options.",
  robots: {
    index: false,
    follow: true,
  },
};

const quickLinks = [
  { label: "Dental Services", href: "/services", icon: "tooth" as const },
  { label: "Patient Info", href: "/patient-info", icon: "users" as const },
  { label: "Smile Gallery", href: "/smile-gallery", icon: "star" as const },
  { label: "Contact", href: "/contact", icon: "phone" as const },
];

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
        <div>
          <p className="eyebrow text-brand">Premier Dentistry of Charlotte</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] text-ink sm:text-6xl">
            We could not find that page.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-2">
            The page may have moved from the older website. Use the links below
            to get back to services, patient forms, office information, or
            appointment help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              <Icon name="calendar" className="h-4 w-4" />
              Schedule Appointment
            </Button>
            <Button href={site.phoneHref} variant="secondary" size="lg">
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phone}
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-line bg-bg p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                <Icon name={link.icon} className="h-5 w-5" />
              </span>
              <span className="mt-5 block font-display text-2xl text-ink">
                {link.label}
              </span>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Open page
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
