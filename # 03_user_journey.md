# 03_user_journey.md
# User Journey & Decision Logic

## Purpose of This File

This document defines how real buyers encounter, interpret, and decide to contact the business through the website.

Its job is to:
- Prevent UI/UX decisions that look good but fail operationally
- Align page structure with buyer intent
- Reduce unqualified enquiries
- Help developers and AI understand *why* pages exist, not just *what* they contain

This is not a marketing funnel.
It is a decision validation path.

---

## Buyer Segments (Operational, Not Demographic)

The website serves two closely related buyer segments:

1. **Organizational Buyers**
   - Companies, trusts, schools, institutions, NGOs
   - Often procurement- or admin-led
   - Usually GST-backed
   - Risk-averse and process-driven

2. **Bulk Individual Buyers**
   - Individuals managing events, programs, or distributions
   - Buying in bulk quantities
   - Comfortable with customization and discussion-based pricing
   - Often non-GST but procurement-like in behavior

Both segments behave similarly online.
Neither behaves like retail shoppers.

---

## Entry Points (How Buyers Arrive)

Buyers typically arrive via:

- Google search (brand name, category + city, manufacturing-related queries)
- Direct link sharing (WhatsApp/email referrals)
- AI-assisted research (vendor shortlisting)
- Prior offline interaction followed by online validation

They do **not** arrive to browse.
They arrive to verify.

---

## Buyer Mental State on Arrival

On first page load, buyers are asking silently:

- “Is this business real?”
- “Do they actually manufacture or just resell?”
- “Is this suitable for bulk requirements?”
- “Will contacting them waste my time?”
- “Are they aligned with how procurement works?”

They are not looking for inspiration.
They are reducing risk.

---

## Decision Stages (Website-Aligned)

### Stage 1: Legitimacy Check

Buyer wants to confirm:
- Legal existence
- Location
- Operational seriousness

Website response:
- Clear business identity
- GST-backed signals
- Calm, non-promotional language
- Absence of retail cues

Failure at this stage causes immediate exit.

---

### Stage 2: Capability Validation

Buyer wants to understand:
- What types of items are handled
- Whether customization is possible
- Whether bulk quantities are normal

Website response:
- Capability-based descriptions
- Categories, not SKUs
- Explicit mention of bulk and customization
- No pricing, no catalog

If scope feels vague or retail-like, trust drops.

---

### Stage 3: Process Comfort

Buyer wants to know:
- How engagement typically works
- Whether expectations are aligned
- Whether the process feels predictable

Website response:
- Clear, simple process explanation
- No exaggerated promises
- Transparency without over-detail

This stage reduces hesitation.

---

### Stage 4: Contact Decision

Buyer decides whether to initiate contact.

Key questions:
- “Do I know enough to start a conversation?”
- “Will this be handled professionally?”
- “Is there a single, clear contact path?”

Website response:
- One controlled contact page
- Structured form
- Professional contact details
- No pressure or urgency cues

---

## Exit Conditions (Important)

A buyer may leave the site intentionally and correctly if:
- They need retail quantities
- They want instant prices
- They expect ecommerce behavior
- Their requirement is outside bulk/custom scope

These exits are **successes**, not failures.

The website must not attempt to retain these users.

---

## Common Drop-Off Risks (To Avoid)

The following cause the wrong type of engagement or loss of trust:

- Retail-style product galleries
- Promotional language
- “Best / cheapest / premium” claims
- Too many CTAs
- Chat widgets or instant messaging prompts
- Overly creative layouts
- Excessive imagery

Any of these disrupts the buyer’s validation flow.

---

## Journey Completion Definition

The journey is complete when:
- A qualified buyer submits a contextual enquiry
- The message includes quantity, item type, and purpose
- The buyer expects a conversation, not a transaction

Anything beyond this point happens offline and is out of scope for the website.

---

## Constraint for Designers and Developers

The website must:
- Support validation, not persuasion
- Reduce cognitive load
- Feel stable and predictable
- Avoid “engagement optimization”

If a UI change improves clicks but increases noise, it is a regression.

End of file.