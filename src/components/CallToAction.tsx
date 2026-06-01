import { Button } from "./Button";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

type Props = { variant?: "default" | "compact" };

export function CallToAction({ variant = "default" }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-ink text-white px-6 sm:px-10 lg:px-16 py-14 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-radial-brand opacity-80 pointer-events-none" />
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent">
                <span className="h-px w-6 bg-accent/60" /> New patients welcome
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Ready for a dentist who actually listens?
              </h2>
              {variant !== "compact" && (
                <p className="mt-4 text-white/80 max-w-xl leading-relaxed">
                  Book a comprehensive new-patient visit and find out why
                  families across Ballantyne keep coming back. We will take the
                  time to understand your goals — then build a plan around them.
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end items-stretch sm:items-center gap-3">
              <Button href="/contact" size="lg" variant="white">
                <Icon name="calendar" className="h-5 w-5" /> Request an Appointment
              </Button>
              <Button href={site.phoneHref} size="lg" variant="ghost" className="text-white border border-white/20 hover:bg-white/10 hover:text-white">
                <Icon name="phone" className="h-5 w-5" /> {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
