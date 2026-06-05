/**
 * All page copy and links live here as typed constants so the content is easy
 * to audit (one file) and the JSX stays clean. Copy is verbatim and factual.
 * Note: no em dash characters anywhere; hyphens only.
 */

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Dinuwan Fernando",
  title: "Co-Founder & CTO at Bro in Finance",
  tagline:
    "Building Avagance, AI-native wealth management infrastructure for the UK financial advisory industry",
  photoAlt: "Dinuwan Fernando, Co-Founder and CTO at Bro in Finance",
};

export const about = {
  paragraphs: [
    "I'm Dinuwan Fernando, Co-Founder and Chief Technology Officer at Bro in Finance Ltd, a UK financial technology company. Together with my co-founder and CEO Lithika Ranepura, we build Avagance, an AI-native wealth management platform designed for UK Independent Financial Advisors and wealth management firms.",
    "I lead the technical architecture and engineering behind Avagance, where we've built a TypeScript modular monolith with 600+ service modules, a Python ML microservice, real-time streaming infrastructure, and a multi-tenant data model designed for FCA-regulated financial services.",
    "Before co-founding Bro in Finance, I built machine learning models for credit risk prediction, full-stack business applications, and desktop CRM tools. I hold a BSc (Hons) in Software Engineering from the University of Plymouth.",
  ],
};

export const techStack: string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Redis",
  "Python",
  "FastAPI",
  "PyTorch",
  "Docker",
  "Google Cloud Platform",
  "Drizzle ORM",
  "Tailwind CSS",
];

export const experience = {
  role: "Co-Founder & Chief Technology Officer",
  company: "Bro in Finance Ltd",
  companyUrl: "https://broinfinance.com",
  period: "2024 - Present",
  description:
    "Co-founded Bro in Finance Ltd and lead its engineering. We build Avagance, an AI-native wealth management platform for UK IFAs. Built the full-stack infrastructure from the ground up - TypeScript monorepo, Express API with 200+ route registries, Next.js advisor portal, PostgreSQL with Drizzle ORM, Python ML microservice, and GCP deployment pipeline.",
};

export const education = {
  degree: "BSc (Hons) Software Engineering",
  institution: "University of Plymouth",
  note: "Delivered through NSBM Green University",
};

export type Project = {
  name: string;
  blurb: string;
  tech: string[];
  href: string | null;
  linkLabel: string | null;
};

export const projects: Project[] = [
  {
    name: "Avagance",
    blurb:
      "A full-scale wealth management platform for UK financial advisors featuring compliance automation, AI-assisted report generation, real-time portfolio analytics, and multi-tenant architecture.",
    tech: [
      "TypeScript",
      "Next.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Python",
      "FastAPI",
      "GCP",
    ],
    href: "https://avagance.com",
    linkLabel: "Visit site",
  },
  {
    name: "Credit Score Prediction ML",
    blurb:
      "Built a machine learning pipeline comparing Random Forest and XGBoost for mortgage loan approval prediction. Includes feature engineering, model evaluation, and a Tkinter GUI for real-time predictions.",
    tech: ["Python", "XGBoost", "scikit-learn", "pandas", "Jupyter"],
    href: "https://github.com/dinuwanfernando/credit-score-prediction-ml",
    linkLabel: "View on GitHub",
  },
  {
    name: "Dimuthu Electronics Website",
    blurb:
      "A modern, responsive business website built with Next.js and TypeScript, integrated with a desktop CRM application for direct customer appointment bookings.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    href: "https://github.com/Dimuthu-Electronics/dimuthu-website",
    linkLabel: "View on GitHub",
  },
  {
    name: "Dimuthu Electronics Manager",
    blurb:
      "An installable desktop application for managing business operations - appointment scheduling, inventory tracking, receipt generation, and employee management. Integrated with the Dimuthu Electronics website.",
    tech: ["Electron", "TypeScript"],
    href: null,
    linkLabel: null,
  },
];

export type Article = { title: string; excerpt: string; href: string };

export const writing: Article[] = [
  {
    title:
      "Building a Credit Risk Classifier: What Random Forest and XGBoost Actually Taught Me",
    excerpt:
      "My first ML model hit 80.66% accuracy. Then I tested it with real inputs and the predictions were inverted. The full story of the failure, the rebuild, and what I'd do differently now.",
    href: "https://medium.com/@dinuwanfernando/building-a-credit-risk-classifier-what-random-forest-and-xgboost-actually-taught-me-20ffd6e290bd",
  },
  {
    title:
      "How I Architected a Full-Stack Fintech Platform From Scratch as a First-Time CTO",
    excerpt:
      "The technical decisions behind building Avagance - from choosing a modular monolith over microservices to organizing 200+ route files without chaos.",
    href: "https://medium.com/@dinuwanfernando/how-i-architected-a-full-stack-fintech-platform-from-scratch-as-a-first-time-cto-cc9aae14c14a",
  },
  {
    title: "How We Run the Engineering Operation for a Fintech Startup",
    excerpt:
      "CI/CD pipeline design, database schema management, testing strategy, and the engineering systems that keep 600+ service modules maintainable.",
    href: "https://medium.com/@dinuwanfernando/how-we-run-the-engineering-operation-for-a-fintech-startup-cc4621be41ec",
  },
];

export const contact = {
  email: "dinuwan@broinfinance.com",
  intro:
    "Open to conversations about fintech, applied AI, and engineering leadership. The fastest way to reach me is by email.",
};

export const footer = {
  text: "Dinuwan Fernando 2026. Built with Next.js.",
};
