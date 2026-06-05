/**
 * Single source of truth for site-wide identity and SEO.
 * Imported by metadata, JSON-LD, sitemap, robots, and the OG image.
 *
 * Bro in Finance Ltd is the registered UK company; Avagance is the product it
 * builds. The headline leads with the company (verifiable on Companies House)
 * and features Avagance as the flagship product.
 */
export const site = {
  url: "https://dinuwanfernando.com",
  name: "Dinuwan Fernando",
  title: "Dinuwan Fernando - Co-Founder & CTO at Bro in Finance",
  description:
    "Dinuwan Fernando is the Co-Founder and CTO of Bro in Finance Ltd, the UK technology company building Avagance, an AI-native wealth management platform for UK financial advisors. Full-stack engineer specializing in TypeScript, Node.js, Python, and cloud architecture.",
  ogDescription:
    "Co-Founder and CTO at Bro in Finance, building Avagance, AI-native wealth management infrastructure for UK financial advisors.",
  twitterDescription:
    "Co-Founder and CTO at Bro in Finance, building Avagance for UK financial advisors.",
  role: "Co-Founder & CTO",
  company: {
    name: "Bro in Finance",
    legalName: "Bro in Finance Ltd",
    url: "https://broinfinance.com",
    email: "info@broinfinance.com",
    number: "15991387",
    street: "128 City Road",
    locality: "London",
    postalCode: "EC1V 2NX",
  },
  product: {
    name: "Avagance",
    url: "https://avagance.com",
  },
  email: "dinuwan@broinfinance.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/dinuwan-fernando/",
    github: "https://github.com/dinuwanfernando",
    medium: "https://medium.com/@dinuwanfernando",
  },
  ogAlt: "Dinuwan Fernando, Co-Founder and CTO at Bro in Finance",
} as const;

/**
 * Connected schema.org entity graph. Cross-referencing the nodes by @id tells
 * search engines this page is the authoritative profile for the person Dinuwan
 * Fernando, who co-founded Bro in Finance Ltd (the company behind Avagance).
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
        "Co-Founder and CTO of Bro in Finance Ltd, building Avagance, an AI-native wealth management platform for UK financial advisors.",
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
      legalName: site.company.legalName,
      url: site.company.url,
      email: `mailto:${site.company.email}`,
      description:
        "UK technology company building Avagance, an AI-native wealth management platform for financial advisors.",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.company.street,
        addressLocality: site.company.locality,
        postalCode: site.company.postalCode,
        addressCountry: "GB",
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "UK Companies House Company Number",
        value: site.company.number,
      },
      founder: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${site.product.url}/#software`,
      name: site.product.name,
      url: site.product.url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "AI-native wealth management platform for UK financial advisors.",
      publisher: { "@id": `${site.company.url}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description:
        "Personal website of Dinuwan Fernando, Co-Founder and CTO of Bro in Finance.",
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
