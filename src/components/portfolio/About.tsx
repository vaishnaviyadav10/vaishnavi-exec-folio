import { Reveal } from "./Reveal";
import { aboutParagraphs, strengths } from "@/lib/portfolio-data";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading eyebrow="About Me" title="Finance fluency meets analytical depth" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {strengths.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-lg border border-border bg-card p-5 shadow-card">
                <h3 className="text-base font-semibold text-foreground">{s.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
