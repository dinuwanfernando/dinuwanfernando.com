# Deployment

This site is a standard Next.js app and deploys cleanly on Vercel with no configuration.

## 1. Connect the repository to Vercel

1. Go to https://vercel.com/new and import `dinuwanfernando/dinuwanfernando.com`.
2. Vercel auto-detects Next.js. Leave the defaults:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output: handled automatically
3. Environment variables: none are required.
4. (Optional) In Project Settings -> General, set the Node.js version to 22.x for production parity.
5. Deploy. The first build produces the page, the generated Open Graph card, the favicon, the sitemap, and robots.txt.

## 2. Connect the domain

In the Vercel project: Settings -> Domains.

1. Add `dinuwanfernando.com` and set it as the primary domain.
2. Add `www.dinuwanfernando.com` (Vercel will offer to redirect it to the apex).
3. At your domain registrar, create the DNS records Vercel shows. Typically:
   - Apex `dinuwanfernando.com`: an `A` record to the IP Vercel displays (commonly `76.76.21.21`), or follow Vercel's apex instructions if it offers an ALIAS/ANAME or nameserver option.
   - `www`: a `CNAME` record to `cname.vercel-dns.com`.
4. Wait for DNS to propagate. Vercel issues the TLS certificate automatically. Confirm HTTPS works and that `www` redirects to the apex.

## 3. Pre-launch checklist

- [ ] `https://dinuwanfernando.com` and `https://www.dinuwanfernando.com` both resolve; `www` redirects to the apex; valid TLS.
- [ ] View source: one `<h1>` (your name), one `<h2>` per section, and `<link rel="canonical" href="https://dinuwanfernando.com">`.
- [ ] `https://dinuwanfernando.com/robots.txt` allows all crawlers and lists the sitemap.
- [ ] `https://dinuwanfernando.com/sitemap.xml` lists the home page.
- [ ] `https://dinuwanfernando.com/opengraph-image` renders the branded card. Check the unfurl in the LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/) and the X Card Validator.
- [ ] Validate the Person structured data at https://search.google.com/test/rich-results.
- [ ] Favicon shows in the browser tab; the icon looks right when added to an iPhone home screen.
- [ ] All external links open in a new tab; the email link opens a mail client to `dinuwan@broinfinance.com`.
- [ ] Run Lighthouse (mobile) and confirm 95+ across Performance, Accessibility, Best Practices, and SEO.

## 4. After launch (helps you rank for "Dinuwan Fernando")

1. Add the site to Google Search Console (https://search.google.com/search-console), verify ownership, and submit `https://dinuwanfernando.com/sitemap.xml`.
2. Request indexing for the home page.
3. Make sure your LinkedIn, GitHub, and Medium profiles link back to `dinuwanfernando.com` so search engines connect the identity.
