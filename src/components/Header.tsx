"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site, services } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    setOpenMobile(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const groupedServices = {
    Preventive: services.filter((s) => s.category === "Preventive"),
    Cosmetic: services.filter((s) => s.category === "Cosmetic"),
    Restorative: services.filter((s) => s.category === "Restorative"),
    Specialty: services.filter((s) => s.category === "Specialty"),
  };

  return (
    <>
      <div className="bg-ink text-white/90 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 hover:text-white shrink-0"
          >
            <Icon name="phone" className="h-3.5 w-3.5" />
            <span className="font-medium">{site.phone}</span>
          </a>
          <span className="hidden md:inline-flex items-center gap-1.5 text-white/70">
            <Icon name="map-pin" className="h-3.5 w-3.5" />
            {site.address.neighborhood}, {site.address.city}
          </span>
          <div className="hidden md:inline-flex items-center gap-1.5 text-white/70">
            <Icon name="clock" className="h-3.5 w-3.5" />
            Mon – Thu 9–5 · Fri 9–2 (1st & 3rd)
          </div>
          <div className="md:hidden inline-flex items-center gap-1 text-white/70 truncate">
            <Icon name="map-pin" className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{site.address.neighborhood}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-white/10 transition-colors"
            >
              <Icon name="facebook" className="h-3 w-3" />
            </a>
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-white/10 transition-colors"
            >
              <Icon name="google" className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-line shadow-soft"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 lg:h-20 flex items-center justify-between gap-6">
            <Link href="/" className="shrink-0">
              <Logo priority />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <NavLink href="/" pathname={pathname}>Home</NavLink>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[14px] whitespace-nowrap rounded-full transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-brand bg-brand-soft"
                      : "text-ink-2 hover:text-brand hover:bg-brand-soft/60"
                  }`}
                >
                  Services
                  <svg
                    className={`h-3.5 w-3.5 transition-transform ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 8L1 3h10z" />
                  </svg>
                </Link>

                {openDropdown === "services" && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 menu-in"
                    onMouseEnter={() => setOpenDropdown("services")}
                  >
                    <div className="w-[640px] bg-white rounded-2xl border border-line shadow-card p-5">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                        {(["Preventive", "Cosmetic", "Restorative", "Specialty"] as const).map(
                          (cat) => (
                            <div key={cat} className="py-2">
                              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand mb-2 px-3">
                                {cat}
                              </div>
                              <ul>
                                {groupedServices[cat].map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      href={`/services/${s.slug}`}
                                      className="block px-3 py-1.5 rounded-md text-sm text-ink-2 hover:bg-brand-soft hover:text-brand transition-colors"
                                    >
                                      {s.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                      <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
                        <p className="text-xs text-muted">
                          All 14 treatments under one roof.
                        </p>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-2"
                        >
                          See all services
                          <Icon name="arrow-right" className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink href="/about" pathname={pathname}>About</NavLink>

              {/* Patient Central dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("patient")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/patient-info"
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[14px] whitespace-nowrap rounded-full transition-colors ${
                    pathname.startsWith("/patient-info")
                      ? "text-brand bg-brand-soft"
                      : "text-ink-2 hover:text-brand hover:bg-brand-soft/60"
                  }`}
                >
                  Patient Info
                  <svg
                    className={`h-3.5 w-3.5 transition-transform ${
                      openDropdown === "patient" ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 8L1 3h10z" />
                  </svg>
                </Link>

                {openDropdown === "patient" && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 menu-in"
                    onMouseEnter={() => setOpenDropdown("patient")}
                  >
                    <div className="w-[520px] bg-white rounded-2xl border border-line shadow-card p-5">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                        <div className="py-1">
                          <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand mb-2 px-3">
                            New Patients
                          </div>
                          <ul>
                            <PatientLink href="/patient-info#first-visit">
                              First Visit
                            </PatientLink>
                            <PatientLink href="/patient-info#registration">
                              Patient Registration
                            </PatientLink>
                            <PatientLink href="/patient-info/education">
                              Patient Education
                              <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent/15 text-accent-2 text-[9px] font-bold">
                                6
                              </span>
                            </PatientLink>
                          </ul>
                        </div>
                        <div className="py-1">
                          <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand mb-2 px-3">
                            Billing & Care
                          </div>
                          <ul>
                            <PatientLink href="/patient-info#insurance">
                              Insurance Information
                            </PatientLink>
                            <PatientLink href="/patient-info#premiercare">
                              PremierCare Savings Plan
                            </PatientLink>
                            <PatientLink href="/patient-info#financial-policy">
                              Financial Policy
                            </PatientLink>
                            <PatientLink href="/patient-info#technology">
                              Advanced Technology
                            </PatientLink>
                            <PatientLink href="/smile-gallery">
                              Smile Gallery
                            </PatientLink>
                            <PatientLink href="/office-tour">
                              Office Tour
                            </PatientLink>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
                        <p className="text-xs text-muted">
                          Everything new patients need to know.
                        </p>
                        <Link
                          href="/patient-info"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-2"
                        >
                          Open Patient Central
                          <Icon name="arrow-right" className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
            </nav>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href={site.phoneHref}
                aria-label={`Call ${site.phone}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-soft text-brand hover:bg-brand hover:text-white transition-colors"
              >
                <Icon name="phone" className="h-4 w-4" />
              </a>
              <Button href="/contact" size="sm" className="whitespace-nowrap">
                <Icon name="calendar" className="h-4 w-4" /> Book a Visit
              </Button>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-ink hover:bg-brand-soft"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-white shadow-card flex flex-col transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-5 border-b border-line">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-brand-soft"
              onClick={() => setOpen(false)}
            >
              <Icon name="close" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            <MobileLink href="/" pathname={pathname}>Home</MobileLink>

            <div className="border-b border-line">
              <button
                type="button"
                onClick={() =>
                  setOpenMobile(openMobile === "services" ? null : "services")
                }
                className={`w-full flex items-center justify-between px-6 py-3 text-base font-medium ${
                  pathname.startsWith("/services") ? "text-brand" : "text-ink-2"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    openMobile === "services" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 8L1 3h10z" />
                </svg>
              </button>
              {openMobile === "services" && (
                <div className="pb-3">
                  <Link
                    href="/services"
                    className="block px-8 py-2 text-sm text-brand font-medium"
                  >
                    → All Services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-8 py-2 text-sm text-ink-2 hover:text-brand"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <MobileLink href="/about" pathname={pathname}>About</MobileLink>

            <div className="border-b border-line">
              <button
                type="button"
                onClick={() =>
                  setOpenMobile(openMobile === "patient" ? null : "patient")
                }
                className={`w-full flex items-center justify-between px-6 py-3 text-base font-medium ${
                  pathname.startsWith("/patient-info") ? "text-brand" : "text-ink-2"
                }`}
              >
                <span>Patient Info</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    openMobile === "patient" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 8L1 3h10z" />
                </svg>
              </button>
              {openMobile === "patient" && (
                <div className="pb-3">
                  <Link href="/patient-info" className="block px-8 py-2 text-sm text-brand font-medium">
                    → Patient Information hub
                  </Link>
                  <Link href="/patient-info#first-visit" className="block px-8 py-2 text-sm text-ink-2 hover:text-brand">First Visit</Link>
                  <Link href="/patient-info#registration" className="block px-8 py-2 text-sm text-ink-2 hover:text-brand">Patient Registration</Link>
                  <Link href="/patient-info/education" className="block px-8 py-2 text-sm text-ink-2 hover:text-brand">Patient Education (6 guides)</Link>
                  <Link href="/patient-info#insurance" className="block px-8 py-2 text-sm text-ink-2 hover:text-brand">Insurance Information</Link>
                  <Link href="/patient-info#premiercare" className="block px-8 py-2 text-sm text-ink-2 hover:text-brand">PremierCare Savings Plan</Link>
                  <Link href="/patient-info#financial-policy" className="block px-8 py-2 text-sm text-ink-2 hover:text-brand">Financial Policy</Link>
                  <Link href="/patient-info#technology" className="block px-8 py-2 text-sm text-ink-2 hover:text-brand">Advanced Technology</Link>
                  <Link href="/smile-gallery" className="block px-8 py-2 text-sm text-ink-2 hover:text-brand">Smile Gallery</Link>
                  <Link href="/office-tour" className="block px-8 py-2 text-sm text-ink-2 hover:text-brand">Office Tour</Link>
                </div>
              )}
            </div>

            <MobileLink href="/contact" pathname={pathname}>Contact</MobileLink>
          </nav>
          <div className="p-5 border-t border-line space-y-3">
            <Button href={site.phoneHref} variant="secondary" className="w-full">
              <Icon name="phone" className="h-4 w-4" /> {site.phone}
            </Button>
            <Button href="/contact" className="w-full">
              <Icon name="calendar" className="h-4 w-4" /> Book a Visit
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}

function NavLink({
  href,
  pathname,
  children,
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
}) {
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`px-2.5 py-2 text-[14px] rounded-full whitespace-nowrap transition-colors ${
        active
          ? "text-brand bg-brand-soft"
          : "text-ink-2 hover:text-brand hover:bg-brand-soft/60"
      }`}
    >
      {children}
    </Link>
  );
}

function PatientLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center px-3 py-1.5 rounded-md text-sm text-ink-2 hover:bg-brand-soft hover:text-brand transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function MobileLink({
  href,
  pathname,
  children,
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
}) {
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`block px-6 py-3 text-base font-medium border-b border-line ${
        active ? "text-brand" : "text-ink-2"
      }`}
    >
      {children}
    </Link>
  );
}
