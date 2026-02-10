# 09_ai_prompt_playbook.md
# AI Usage Rules, Prompt Architecture & Guardrails

## Purpose of This File

This document defines how AI is allowed to be used in this project.

Its role is to:
- Prevent AI hallucination
- Prevent design, scope, or language drift
- Ensure AI accelerates work instead of creating rework
- Make AI usable by humans without constant correction

AI is treated as an assistant, not a decision-maker.

If AI output contradicts any approved file, the output is wrong by default.

---

## Core Principle

AI does not replace thinking.

AI only accelerates **well-constrained execution**.

Therefore:
- AI must never be asked open-ended questions
- AI must never be allowed to infer business intent
- AI must never be allowed to optimize for “better” or “modern” outcomes

AI is only allowed to operate inside boundaries already defined.

---

## Mandatory Input Rule (Non-Negotiable)

Before using AI for any task, the following files must be provided to it as context:

- `00_problem.md`
- `02_positioning.md`
- `04_scope_constraints.md`
- `06_page_contracts.md`
- `08_tech_stack.md`

If AI does not have these files, it must not be used.

This prevents AI from reconstructing assumptions incorrectly.

---

## Allowed AI Use Cases

AI may be used for the following tasks only:

1. Writing page copy that strictly follows page contracts
2. Generating Astro component code from explicit specifications
3. Translating approved copy into HTML structure
4. Producing Tailwind classes based on defined design rules
5. Refactoring code without changing behavior
6. Checking for internal consistency or omissions

In all cases, AI output must be reviewed by a human before use.

---

## Forbidden AI Use Cases

AI must never be used to:

- Define business strategy
- Invent positioning language
- Decide which features to add
- Choose tools or frameworks
- Add animations or interactions
- Optimize for conversion or engagement
- Generate testimonials or case studies
- Rewrite approved content “to sound better”
- Add new pages or sections autonomously

If AI suggests any of the above, the suggestion must be discarded.

---

## Prompt Structure Rules

Every prompt given to AI must contain:

1. **Scope declaration**
   - What file or page is being worked on
2. **Explicit constraints**
   - What is allowed and forbidden
3. **Reference to governing files**
   - Which documents control decisions
4. **Output format**
   - What the output should look like
5. **Stop condition**
   - Clear end of task

Prompts without these elements are invalid.

---

## Example Prompt Pattern (Template)

This pattern must be followed exactly.

“You are assisting with [specific task].
You must follow these constraints:
- [List constraints]

You must treat the following as authoritative:
- [List files]

You are not allowed to:
- [List forbidden actions]

Produce:
- [Exact output format]

Do not add explanations or alternatives.
Stop after completing the task.”

---

## Prompt Chaining Discipline

Large tasks must be broken into sequential prompts.

Correct order example:
1. Generate content outline
2. Generate section-level copy
3. Generate Astro layout
4. Generate Tailwind classes
5. Final consistency check

AI must not be asked to do multiple phases in one prompt.

---

## AI Output Review Checklist

Every AI-generated output must be checked against:

- Problem definition consistency
- Positioning language compliance
- Scope constraints
- Page contract adherence
- Technical stack rules

If any check fails, the output is rejected, not “fixed”.

---

## Change Sensitivity Rule

If business reality changes:
- Update the relevant markdown file first
- Then re-run AI tasks using the updated file
- Never “patch” AI output directly

Files are the source of truth, not AI memory.

---

## AI Memory Warning

AI does not retain reliable long-term memory across sessions.

Therefore:
- Never assume AI “remembers” prior decisions
- Always provide files explicitly
- Always restate constraints

This is not redundancy; it is control.

---

## Final Constraint

AI exists to reduce effort, not to introduce uncertainty.

If AI increases doubt, complexity, or maintenance, it must be removed from the workflow.

End of file.