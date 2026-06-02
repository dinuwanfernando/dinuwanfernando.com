/**
 * Single source of truth for site-wide identity and SEO.
 * Imported by metadata, JSON-LD, sitemap, robots, and the OG image.
 */
export const site = {
  url: "https://dinuwanfernando.com",
  name: "Dinuwan Fernando",
  title: "Dinuwan Fernando - Co-Founder & CTO at Avagance",
  description:
    "Dinuwan Fernando is the Co-Founder and CTO of Avagance, building AI-native wealth management infrastructure for UK financial advisors. Full-stack engineer specializing in TypeScript, Node.js, Python, and cloud architecture.",
  ogDescription:
    "Building AI-native wealth management infrastructure for UK financial advisors. Full-stack engineer and startup co-founder.",
  twitterDescription:
    "Building AI-native wealth management infrastructure for UK financial advisors.",
  role: "Co-Founder & CTO",
  company: {
    name: "Avagance",
    url: "https://avagance.com",
  },
  email: "dinuwan@broinfinance.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/dinuwan-fernando/",
    github: "https://github.com/dinuwanfernando",
    medium: "https://medium.com/@dinofernando2000",
  },
  ogAlt: "Dinuwan Fernando, Co-Founder and CTO at Avagance",
} as const;

/** Person structured data (schema.org) for search engines and AI crawlers. */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Co-Founder & Chief Technology Officer",
  description:
    "Co-Founder and CTO of Avagance, building AI-native wealth management infrastructure for UK financial advisors.",
  url: site.url,
  image: `${site.url}/portrait.png`,
  email: `mailto:${site.email}`,
  worksFor: {
    "@type": "Organization",
    name: site.company.name,
    url: site.company.url,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Plymouth",
  },
  knowsAbout: [
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "PostgreSQL",
    "Cloud Architecture",
    "Financial Technology",
    "Wealth Management",
  ],
  sameAs: [site.socials.linkedin, site.socials.github, site.socials.medium],
};

/** WebSite structured data. */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description:
    "Personal website of Dinuwan Fernando, Co-Founder and CTO of Avagance.",
};
