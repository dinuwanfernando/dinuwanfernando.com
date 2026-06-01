/**
 * Single source of truth for site-wide identity and SEO.
 * Imported by metadata, JSON-LD, sitemap, robots, and the OG image.
 */
export const site = {
  url: "https://dinuwanfernando.com",
  name: "Dinuwan Fernando",
  title: "Dinuwan Fernando - Co-Founder & CTO at Avagance",
  description:
    "Dinuwan Fernando is Co-Founder and CTO at Avagance, building AI-native wealth management infrastructure for the UK financial advisory industry.",
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
  jobTitle: "Co-Founder and Chief Technology Officer",
  description: site.description,
  url: site.url,
  image: `${site.url}/headshot.png`,
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
    "Fintech",
    "Artificial Intelligence",
    "Wealth Management",
    "Software Engineering",
    "TypeScript",
    "Machine Learning",
  ],
  sameAs: [site.socials.linkedin, site.socials.github, site.socials.medium],
};
