import { Compass } from "lucide-react";
import { Reveal } from "./Reveal";

export function CareerVision() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <Reveal>
          <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-primary-foreground/20 text-gold">
            <Compass className="size-6" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Career Vision
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-primary-foreground sm:text-4xl">
            Building a global career in finance & analytics
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            My objective is to build a global career in Finance, Corporate Finance, Investment
            Banking, Business Analytics, and Financial Decision Making — while continuously developing
            expertise in finance, analytics, and leadership.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {[
              "Finance Analyst",
              "Corporate Finance",
              "Investment Banking",
              "Business Intelligence",
              "MBA Ready",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
