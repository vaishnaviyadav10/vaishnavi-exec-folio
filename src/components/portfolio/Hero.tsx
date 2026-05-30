import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        aria-hidden
        className="absolute inset-0 size-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-navy opacity-80" aria-hidden />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-20 pt-28 lg:px-8">
        <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.25em] text-gold">
          Finance · Analytics · Strategy
        </p>

        <h1
          className="animate-fade-up mt-5 text-4xl font-semibold leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Vaishnavi Yadav
        </h1>

        <p
          className="animate-fade-up mt-5 max-w-2xl text-lg font-medium text-primary-foreground/85 sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          {profile.headline}
        </p>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70"
          style={{ animationDelay: "240ms" }}
        >
          {profile.summary}
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-wrap gap-3"
          style={{ animationDelay: "320ms" }}
        >
          <Button size="lg" variant="hero" asChild>
            <a href={profile.resume} download>
              <Download className="size-4" /> View Resume
            </a>
          </Button>
          <Button size="lg" variant="heroOutline" asChild>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </Button>
          <Button size="lg" variant="heroOutline" asChild>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github className="size-4" /> GitHub
            </a>
          </Button>
          <Button size="lg" variant="heroOutline" asChild>
            <a href="#contact">
              <Mail className="size-4" /> Contact Me <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <div
          className="animate-fade-up mt-10 flex items-center gap-2 text-sm text-primary-foreground/60"
          style={{ animationDelay: "400ms" }}
        >
          <MapPin className="size-4" /> {profile.location}
        </div>
      </div>
    </section>
  );
}
