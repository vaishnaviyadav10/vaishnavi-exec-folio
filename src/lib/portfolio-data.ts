import {
  BarChart3,
  Briefcase,
  Calculator,
  Database,
  FileSpreadsheet,
  LineChart,
  PieChart,
  TrendingUp,
  Wallet,
  Code2,
  Table2,
  Sigma,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const profile = {
  name: "Vaishnavi Yadav",
  headline: "Finance Analyst | Business Analytics | CMA Candidate",
  location: "Lucknow, Uttar Pradesh, India",
  email: "vaishnaviyadav1307@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaishnavi-yadav1",
  github: "https://github.com/vaishnaviyadav10",
  resume: "/Vaishnavi-Yadav-Resume.pdf",
  summary:
    "BBA International Finance graduate passionate about financial analysis, business intelligence, corporate finance, and data-driven decision-making. Experienced in analytics, financial reporting, dashboard development, and business strategy.",
};

export const aboutParagraphs = [
  "I am a BBA International Finance graduate and US CMA Candidate building a career at the intersection of finance and analytics. My foundation in corporate finance and financial reporting is complemented by hands-on experience turning raw data into clear, decision-ready insight.",
  "I am drawn to the rigor of investment banking, the structure of corporate finance, and the storytelling power of business intelligence. Whether modelling financial statements or designing executive dashboards, I focus on the question behind the numbers — what should the business do next?",
  "My approach blends analytical thinking, structured problem solving, and commercial judgement to support confident, data-driven decision making.",
];

export const strengths = [
  { label: "Business Impact", detail: "Translating analysis into outcomes leadership can act on." },
  { label: "Analytical Thinking", detail: "Structured, hypothesis-led reasoning across finance and data." },
  { label: "Problem Solving", detail: "Breaking ambiguous problems into measurable, solvable parts." },
  { label: "Decision Making", detail: "Connecting numbers to strategy for confident choices." },
];

export interface ExperienceItem {
  role: string;
  org: string;
  meta: string;
  points: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Billing & Accounting Intern",
    org: "Oldmed Healthcare Pvt. Ltd.",
    meta: "Finance & Accounting Operations",
    points: [
      "Supported daily billing and accounting operations using Tally ERP.",
      "Generated invoices and carried out account reconciliation activities.",
      "Prepared and maintained Excel-based MIS reports to support financial reporting.",
      "Assisted inventory and stock-related operations with accurate record keeping.",
      "Maintained organised accounting documentation aligned with compliance standards.",
    ],
  },
  {
    role: "Community Development Project",
    org: "PGVS",
    meta: "Social Impact & Field Reporting",
    points: [
      "Coordinated Home-Based Nutrition Camps for community health improvement.",
      "Led community awareness programs and child development initiatives.",
      "Owned documentation and structured reporting of program outcomes.",
      "Engaged stakeholders to drive measurable, on-ground social impact.",
    ],
  },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Finance",
    icon: Wallet,
    skills: [
      "Financial Statement Analysis",
      "Corporate Finance",
      "Ratio Analysis",
      "Budgeting",
      "Cost Management",
      "Financial Reporting",
    ],
  },
  {
    title: "Analytics",
    icon: LineChart,
    skills: [
      "Data Analytics",
      "Business Intelligence",
      "Dashboard Development",
      "Exploratory Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Technology",
    icon: Database,
    skills: [
      "Excel",
      "Tableau",
      "Power BI",
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Tally ERP",
    ],
  },
];

export interface Project {
  title: string;
  icon: LucideIcon;
  description: string;
  highlightsLabel: string;
  highlights: string[];
  tools: string[];
}

export const projects: Project[] = [
  {
    title: "Predictive Analytics — Fatal Car Crash Analysis",
    icon: TrendingUp,
    description:
      "Performed data cleaning, exploratory data analysis, statistical analysis, and predictive modelling in Python to surface the drivers behind fatal road incidents.",
    highlightsLabel: "Highlights",
    highlights: [
      "Built a Linear Regression model achieving an R² score of ~0.87",
      "Conducted correlation and feature-importance analysis",
      "Translated statistical findings into actionable business insights",
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "Business Intelligence Dashboard",
    icon: BarChart3,
    description:
      "Developed interactive Tableau dashboards for KPI monitoring and executive decision support across revenue and industry performance.",
    highlightsLabel: "Features",
    highlights: [
      "Interactive filters and dynamic KPI cards",
      "Revenue analysis and industry insights",
      "Executive-ready dashboard for leadership review",
    ],
    tools: ["Tableau", "Excel"],
  },
  {
    title: "Financial Analysis Project",
    icon: PieChart,
    description:
      "Conducted end-to-end financial statement analysis and business performance evaluation to assess company health and trends.",
    highlightsLabel: "Focus Areas",
    highlights: [
      "Profitability and liquidity assessment",
      "Operational efficiency analysis",
      "Multi-period trend analysis",
    ],
    tools: ["Excel", "Financial Modelling"],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
  { title: "US CMA", issuer: "Certified Management Accountant — Pursuing", icon: Calculator },
  { title: "Investment Banking Job Simulation", issuer: "Forage Virtual Experience", icon: Briefcase },
  { title: "Data Analytics Job Simulation", issuer: "Forage Virtual Experience", icon: Sigma },
  { title: "Tata Data Visualization Program", issuer: "Tata Group", icon: BarChart3 },
  { title: "NISM Financial Literacy Program", issuer: "NISM", icon: FileSpreadsheet },
  { title: "Interview Preparation Certification", issuer: "Professional Development", icon: Table2 },
  { title: "Negotiation Skills Orientation", issuer: "Professional Development", icon: Code2 },
];
