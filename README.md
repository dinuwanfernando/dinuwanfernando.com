# dinuwanfernando.com

Personal website of Dinuwan Fernando, Co-Founder and CTO at [Avagance](https://avagance.com).

A single-page, statically generated site built with Next.js (App Router), TypeScript, and Tailwind CSS. Dark theme, fully responsive, accessible, and SEO optimized.

## Local development

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # create a production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

## Stack

- Next.js 16 (App Router, React 19)
- TypeScript
- Tailwind CSS v4 (CSS-first configuration)
- next/font (Space Grotesk + Inter), next/image, and next/og for the generated Open Graph card and icons

## Project layout

- `app/` - layout, page, and metadata routes (sitemap, robots, OG image, icons)
- `components/` - sections, layout (nav and footer), and UI primitives
- `lib/` - site configuration and page content
- `assets/` - fonts used to render the Open Graph card
- `public/` - the headshot image

## Deployment

Deployed on Vercel. The project is a standard Next.js app and needs no environment variables.

## License

All rights reserved.
