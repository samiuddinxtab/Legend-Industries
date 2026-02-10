# 08_tech_stack.md
# Concrete Tech Stack & Implementation Rules

## Purpose of This File

This document translates architectural decisions into an exact, implementable tech stack.

Its role is to:
- Remove ambiguity for developers
- Prevent tool substitution and “personal preference” decisions
- Define what is allowed, required, and forbidden at implementation time
- Ensure the site remains low-maintenance, low-cost, and stable long-term

If a tool, library, or technique is not listed here, it must not be added.

---

## Core Stack Overview (Locked)

The website is implemented using the following stack:

- Static site compiler: Astro
- Styling: Tailwind CSS (disciplined usage)
- Hosting: Cloudflare Pages
- Forms: Cloudflare Pages Functions
- Spam protection: Cloudflare Turnstile + honeypot
- Analytics: Google Analytics 4 (basic mode only)
- Search visibility: Google Search Console
- Version control: Git (any provider)

No other platforms or services are required.

---

## Astro Configuration (Mandatory)

Astro is used strictly as a static site compiler.

Required configuration:
- Output mode: static
- No server-side rendering
- No client-side hydration by default
- No Astro Islands unless explicitly justified (forms, FAQ only)

Astro’s role ends at build time.
The deployed output must be plain HTML, CSS, and minimal JavaScript.

---

## Project Structure (Required)

The following structure must be used and not reinterpreted:

/src  
- /layouts  
  - BaseLayout.astro  
- /pages  
  - index.astro  
  - capabilities.astro  
  - process.astro  
  - company.astro  
  - contact.astro  
- /components  
  - Section.astro  
  - Button.astro  
  - Accordion.astro  
- /styles  
  - globals.css  
- /data  
  - faq.json  

/public  
- /images  

Rules:
- Shallow hierarchy only
- Filenames must describe intent, not appearance
- No experimental folders
- No unused files committed

---

## Styling Rules (Tailwind Discipline)

Tailwind CSS is used with the following constraints:

- Theme tokens defined centrally (colors, spacing, typography)
- No excessive arbitrary values
- No inline style attributes
- No external CSS frameworks
- No animation libraries

Tailwind is used for:
- Spacing
- Typography scale
- Color tokens
- Layout consistency

Visual decisions must align with the locked UI/UX rules.

---

## JavaScript Usage Rules

JavaScript is permitted only when functionally necessary.

Allowed use cases:
- Form submission handling
- Client-side validation
- FAQ accordion toggling
- Accessibility enhancements

Forbidden use cases:
- UI decoration
- Animation for expressiveness
- Client-side routing
- State management frameworks
- Data fetching beyond form submission

All JavaScript must be:
- Minimal
- Readable
- Easy to remove without breaking content

---

## Forms Implementation (Zero-Cost)

Forms are handled using Cloudflare Pages Functions.

Required characteristics:
- POST-only submission
- Server-side validation
- Email delivery via MailChannels
- No data persistence beyond delivery
- Rate limiting where feasible

Spam protection must include:
- Cloudflare Turnstile (preferred)
- Honeypot hidden field

No third-party form SaaS is allowed.

---

## Analytics Configuration (Minimal GA4)

Google Analytics 4 is used in **basic mode only**.

Explicit configuration rules:
- No Google Signals
- No Ads Personalization
- No remarketing
- No demographic reporting
- No User-ID tracking

Tracked events are limited to:
- page_view
- form_submit (custom event)

A cookie banner is not required under this configuration.

A short privacy note is sufficient.

---

## SEO & Structured Data

SEO is handled explicitly and manually.

Required:
- Hand-written meta titles and descriptions per page
- Semantic HTML structure
- JSON-LD schemas embedded directly in pages:
  - Organization
  - LocalBusiness
  - ContactPage
  - FAQPage (where applicable)
  - HowTo (process page)

Forbidden:
- SEO plugins
- Auto-generated metadata
- Keyword stuffing
- Dynamic SEO tooling

---

## Images & Assets

Image handling rules:
- WebP as primary format
- JPG fallback where necessary
- Reasonable dimensions (no oversized assets)
- Native lazy loading
- Stored in /public/images

No image CDNs or processing services are required initially.

---

## Security Baseline

The following are mandatory:
- HTTPS enforced by hosting
- Basic CSP headers
- No secrets committed to repository
- No exposed environment variables in client-side code
- Turnstile for form abuse prevention

No advanced security tooling is required due to static architecture.

---

## Build & Deployment Rules

- Default Astro build pipeline
- No custom build scripts
- Automatic deploy on main branch push
- No environment-specific behavior beyond form handling

Build output must be reproducible and deterministic.

---

## Explicitly Forbidden Additions

Unless this file is revised, the following must not be added:

- CMS (headless or traditional)
- Databases
- Authentication systems
- Ecommerce features
- Chatbots
- Marketing automation
- A/B testing tools
- Third-party analytics beyond GA4
- UI libraries or component kits

These increase maintenance and risk without solving the core problem.

---

## Change Control Rule

Any proposed change to the tech stack must:
- Identify which rule in this file is being challenged
- Demonstrate a reduction in maintenance or risk
- Be approved before implementation

“Modern”, “industry standard”, or “developer preference” are not valid reasons.

---

## Final Constraint

The tech stack exists to disappear.

If the site requires frequent technical attention, the stack has failed.

End of file.