import { Button } from "./Button";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

export function BookingStrip() {
  return (
    <section className="relative bg-white border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-brand">
              <span className="h-px w-6 bg-brand/40" />
              Ready when you are
            </div>
            <h3 className="mt-3 font-display text-3xl lg:text-4xl text-ink leading-[1.1]">
              Two ways to start —{" "}
              <span className="text-brand italic">pick the one that fits.</span>
            </h3>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-3">
            <a
              href={site.phoneHref}
              className="group bg-white rounded-2xl p-5 border border-line hover:border-brand/30 hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                  <Icon name="phone" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted">Call us</div>
                  <div className="font-display text-lg text-ink leading-none mt-0.5">
                    {site.phone}
                  </div>
                </div>
              </div>
            </a>

            <Button href="/contact" size="lg" className="!rounded-2xl !justify-between !px-5 !py-4 group">
              <span className="text-left">
                <span className="block text-[10px] tracking-[0.18em] uppercase opacity-80">
                  Online
                </span>
                <span className="block font-display text-lg leading-none mt-0.5">
                  Book a visit
                </span>
              </span>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/15 group-hover:bg-white/25 transition-colors">
                <Icon name="arrow-right" className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
