# 05_information_architecture.md
# Information Architecture & Structural Rules

## Purpose of This File

This document defines the structural layout of the website.

Its role is to:
- Lock the page set and hierarchy
- Prevent navigation sprawl
- Ensure every page has a clear reason to exist
- Give developers and AI an unambiguous structural map

If a page or navigation element is not defined here, it must not exist.

---

## Core IA Principle

The website is not exploratory.
It is **confirmatory**.

Users arrive with intent and leave once validation is complete.
The structure must therefore be:
- Shallow
- Predictable
- Non-distracting
- Easy to scan

Depth and complexity reduce trust.

---

## Final Page List (Locked)

The website consists of **exactly five pages**:

1. Home  
2. Capabilities  
3. Process  
4. Company  
5. Contact  

No additional pages are allowed unless justified against `04_scope_constraints.md`.

---

## Page Hierarchy & Role

### 1. Home (`/`)

Role:
- First-contact validation
- Legitimacy confirmation
- Scope signaling

The Home page must not attempt to educate or sell.
It exists to answer:  
“Is this a real, suitable supplier for bulk requirements?”

---

### 2. Capabilities (`/capabilities`)

Role:
- Define what the business can handle
- Clarify product and customization scope

This page replaces catalogs.
It describes **categories and capability**, not items for selection.

---

### 3. Process (`/process`)

Role:
- Reduce uncertainty about engagement
- Align buyer expectations

This page exists to make the workflow predictable.
It should reduce hesitation, not accelerate action.

---

### 4. Company (`/company`)

Role:
- Legal and structural verification

This page exists for procurement checks.
It should feel factual and restrained, not narrative.

---

### 5. Contact (`/contact`)

Role:
- Single controlled entry point
- Transition from validation to conversation

This page must not compete with any other page for attention.
All contact paths terminate here.

---

## Navigation Rules (Critical)

Primary navigation must:
- List only the five pages above
- Use neutral, literal labels
- Appear consistently across pages
- Avoid visual emphasis on any single item

Allowed order (recommended):

Home → Capabilities → Process → Company → Contact

No dropdowns.
No secondary menus.
No footer navigation duplication beyond basic links.

---

## URL Rules

All URLs must be:
- Lowercase
- Short
- Literal
- Stable

Examples:
- `/capabilities` (allowed)
- `/our-capabilities` (not allowed)
- `/products` (not allowed)
- `/solutions` (too vague)

URLs must not change once published unless legally required.

---

## Cross-Linking Rules

Cross-linking is allowed only when:
- It reduces confusion
- It supports validation

Examples of acceptable cross-links:
- From Home → Capabilities
- From Capabilities → Process
- From any page → Contact (subtle, non-prominent)

Examples of forbidden cross-links:
- Promotional loops
- “You may also like”
- Repetitive CTA links

---

## Footer Rules

Footer must be minimal and functional.

Allowed:
- Business name
- City / location
- GST mention (optional)
- Basic page links
- Copyright

Not allowed:
- Marketing statements
- Taglines
- Social media links
- Badges or icons

Footer exists for completeness, not engagement.

---

## Information Density Rule

Each page must:
- Be scannable in under one minute
- Have a single dominant purpose
- Avoid visual or textual overload

If content grows beyond clarity, it must be reduced, not split into more pages.

---

## Change Control Rule

Any proposed change to:
- Page list
- Navigation
- URLs

Requires:
- Justification against the problem definition
- Confirmation that it reduces unqualified enquiries
- Explicit approval before implementation

---

## Final Constraint

Structure is a trust signal.

A restrained, stable information architecture communicates seriousness more effectively than visual design.

End of file.