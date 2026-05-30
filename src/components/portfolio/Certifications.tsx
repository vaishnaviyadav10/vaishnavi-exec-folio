import { Reveal } from "./Reveal";
import { SectionHeading } from "./About";
import { certifications } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Certifications"
        title="Continuous, credentialed learning"
        description="Professional certifications and simulations across finance, analytics, and career readiness."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <Reveal key={cert.title} delay={i * 70}>
              <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground">{cert.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
