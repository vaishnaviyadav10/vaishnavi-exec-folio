import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./About";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Projects"
          title="Selected analytics & finance work"
          description="Real projects spanning predictive modelling, business intelligence, and financial analysis."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={i * 100} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {project.highlightsLabel}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
