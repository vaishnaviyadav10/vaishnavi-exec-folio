import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { CareerVision } from "@/components/portfolio/CareerVision";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaishnavi Yadav — Finance Analyst & Business Analytics Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Vaishnavi Yadav — Finance Analyst, Business Analyst and CMA Candidate skilled in financial analysis, corporate finance, business intelligence, data analytics, Tableau, Power BI, SQL and Python.",
      },
      {
        name: "keywords",
        content:
          "Finance Analyst, Financial Analyst, Business Analyst, Corporate Finance, Investment Banking, Business Intelligence, Data Analytics, CMA Candidate, MBA Applicant, Tableau, Power BI, SQL, Python, Financial Modelling",
      },
      { property: "og:title", content: "Vaishnavi Yadav — Finance Analyst & Business Analytics" },
      {
        property: "og:description",
        content:
          "Finance Analyst | Business Analytics | CMA Candidate. Financial analysis, corporate finance and data-driven business intelligence.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <CareerVision />
      <Contact />
      <Footer />
      <Toaster position="top-center" richColors />
    </main>
  );
}
