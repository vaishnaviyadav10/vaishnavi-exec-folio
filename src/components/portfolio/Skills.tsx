import { Reveal } from "./Reveal";
import { SectionHeading } from "./About";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit built for finance & analytics"
        description="Core finance competencies paired with modern analytics and business intelligence tooling."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={i * 100}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
