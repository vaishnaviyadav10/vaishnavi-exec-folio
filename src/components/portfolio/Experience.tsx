import { Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./About";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on finance & impact"
          description="Practical exposure across accounting operations, financial reporting, and community-driven projects."
        />

        <div className="mt-12 space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 100}>
              <article className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                      <Briefcase className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm font-medium text-primary">{exp.org}</p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {exp.meta}
                  </span>
                </div>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
