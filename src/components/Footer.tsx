import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="bg-ink text-white/85">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="inline-flex bg-white rounded-xl px-3 py-2.5 shadow-soft">
              <Logo />
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {site.tagline}. Modern, gentle dentistry in Ballantyne with
              {" "}{site.doctor.name}, {site.doctor.credentials}.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand transition-colors"
              >
                <Icon name="facebook" className="h-4 w-4" />
              </a>
              <a
                href={site.social.google}
                aria-label="Google Maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand transition-colors"
              >
                <Icon name="google" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white text-white/70">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-white">Visit</h4>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-white/70 hover:text-white"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
              <div className="flex items-center gap-2 text-white/60">
                <span className="text-[10px] uppercase tracking-[0.18em] w-4">Fax</span>
                {site.fax}
              </div>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-white break-all"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0" />
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-white">Hours</h4>
            <ul className="space-y-1.5 text-sm text-white/70">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span>{h.day}</span>
                  <span className="text-white/90">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <h4 className="font-display text-base text-white mb-3">
            Areas we serve
          </h4>
          <ul className="flex flex-wrap gap-2 text-xs">
            {site.serviceAreas.map((a) => (
              <li
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-white/70"
              >
                <Icon name="map-pin" className="h-3 w-3" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Premier Dentistry of Charlotte. All
            rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            <span>Designed with care by</span>
            <span className="font-semibold text-white/80">
              Varn DigiHealth
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
