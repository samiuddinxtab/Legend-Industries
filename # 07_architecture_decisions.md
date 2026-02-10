# 07_architecture_decisions.md
# Architecture Decision Records (ADR)

## Purpose of This File

This document records the architectural decisions behind the website.

Its role is to:
- Preserve technical reasoning over time
- Prevent unnecessary rewrites
- Stop “modernization” requests that add risk without benefit
- Give developers clarity on what must not change

This file has authority over implementation preferences.

---

## Decision Context

The website serves a manufacturing-backed, B2B-dominant business with bulk individual buyers.

Key constraints:
- Very low update frequency
- Very low maintenance tolerance
- High requirement for stability and predictability
- No business dependency on real-time data
- No user accounts, transactions, or personalization
- AI-assisted development, human-reviewed

The architecture must support these constraints indefinitely.

---

## Decision 1: Static Site Architecture

### Decision
The website is implemented as a **fully static site**.

### Rationale
- Content is mostly informational and changes rarely
- Static HTML is the most reliable delivery format
- Eliminates server-side runtime risks
- Maximizes performance and availability
- Simplifies security posture dramatically

Static generation aligns with the website’s role as a credibility and qualification layer.

### Alternatives Considered and Rejected
- Server-rendered applications: unnecessary complexity
- Client-rendered SPAs: poor fit for content validation use cases
- Dynamic backends: add maintenance without operational need

---

## Decision 2: Astro as the Build Tool

### Decision
Astro is used strictly as a **static site compiler**, not as an application framework.

### Rationale
- Outputs plain HTML by default
- Minimal JavaScript footprint
- Excellent Core Web Vitals without tuning
- Clear separation of content and layout
- Easy to audit generated output

Astro is treated as a build-time tool only.

### Constraints
- No client-side hydration
- No interactive islands except where strictly required (forms, FAQ)
- No framework lock-in assumptions

---

## Decision 3: No CMS

### Decision
No CMS is used.

### Rationale
- Content updates are infrequent
- Editing does not require non-technical users
- CMS introduces security, maintenance, and versioning overhead
- Static files are easier to review and version-control

Content lives directly in the codebase.

### Future Reconsideration
CMS introduction is allowed only if:
- Content updates become weekly or more frequent
- Multiple editors are required
- Security and maintenance capacity exists

Until then, CMS use is explicitly rejected.

---

## Decision 4: No Backend Application

### Decision
No traditional backend application is used.

### Rationale
- No persistent data storage required
- No authentication or authorization logic
- No business logic requiring server orchestration

The only server-side logic allowed is:
- Form submission handling via serverless functions

This keeps the architecture simple and robust.

---

## Decision 5: Minimal JavaScript

### Decision
JavaScript usage is minimized to functional necessity.

### Allowed Use Cases
- Form submission handling
- Input validation
- FAQ accordion toggling
- Accessibility-related enhancements

### Forbidden Use Cases
- UI decoration
- Animations for expressiveness
- State management
- Client-side routing

JavaScript exists to remove friction, not to add interaction.

---

## Decision 6: Styling Approach

### Decision
Utility-first CSS (Tailwind) is used with strict discipline.

### Rationale
- Predictable output
- No unused CSS in production
- Easy AI generation with low error rates
- No cascading surprises

Styling decisions must align with the UI/UX rules already defined.

---

## Decision 7: Hosting on Cloudflare Pages

### Decision
Cloudflare Pages is the hosting platform.

### Rationale
- Global CDN by default
- Zero-cost baseline
- High reliability
- Integrated serverless functions
- Minimal configuration overhead

Vendor dependency is acceptable due to low risk and high stability.

---

## Decision 8: Forms via Serverless Functions

### Decision
Forms are handled using Cloudflare Pages Functions.

### Rationale
- Zero recurring cost
- Full control over validation
- No third-party form service dependency
- Easy spam protection integration

This approach aligns with long-term reliability goals.

---

## Decision 9: Analytics in Minimal Mode

### Decision
Analytics is intentionally limited.

### Rationale
- Website’s role is qualification, not optimization
- Excess analytics increases cognitive and legal overhead
- Data should answer specific questions only

GA4 is used in basic configuration without advertising or profiling features.

---

## Permanently Rejected Technologies

The following are explicitly rejected unless this file is revised:

- React / Next.js
- Vue / Nuxt
- WordPress
- Headless CMS platforms
- Databases
- Authentication systems
- Ecommerce frameworks
- Marketing automation tools
- Chatbots
- Personalization engines

Rejection is based on mismatch with the problem definition, not technical merit.

---

## Change Control Rule

Any proposal to change architecture must:
1. Identify which decision in this file is being challenged
2. Demonstrate that the original constraint no longer applies
3. Prove reduction in operational risk or maintenance burden

Without this, architectural changes are not permitted.

---

## Final Constraint

Architecture exists to protect the business from unnecessary complexity.

Stability is the primary feature.

End of file.