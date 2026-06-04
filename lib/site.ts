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

/**
 * Connected schema.org entity graph. Cross-referencing the nodes by @id tells
 * search engines this page is the authoritative profile for the person Dinuwan
 * Fernando, who works for Avagance, strengthening the entity signal for his name.
 */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      givenName: "Dinuwan",
      familyName: "Fernando",
      jobTitle: "Co-Founder & Chief Technology Officer",
      description:
        "Co-Founder and CTO of Avagance, building AI-native wealth management infrastructure for UK financial advisors.",
      url: site.url,
      mainEntityOfPage: `${site.url}/#profilepage`,
      image: `${site.url}/portrait.png`,
      email: `mailto:${site.email}`,
      worksFor: { "@id": `${site.company.url}/#organization` },
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
    },
    {
      "@type": "Organization",
      "@id": `${site.company.url}/#organization`,
      name: site.company.name,
      url: site.company.url,
      description:
        "AI-native wealth management platform for UK Independent Financial Advisors.",
      founder: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description:
        "Personal website of Dinuwan Fernando, Co-Founder and CTO of Avagance.",
      publisher: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profilepage`,
      url: site.url,
      name: site.title,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      mainEntity: { "@id": `${site.url}/#person` },
    },
  ],
};
