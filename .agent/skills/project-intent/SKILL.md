---
name: project-intent
description: Mandatory intent gate for substantial product, feature, architecture, data-model, API-contract, routing, auth, payment, SEO-indexing, localization, design-system, or major UI/UX work. Ensures the project matches what the user actually wants before implementation begins.
---

# Project Intent Gate

This is the default pre-build workflow for material changes.

## Trigger

Use this gate when a task changes any of:

- user-visible product behavior;
- feature scope;
- data model or ownership;
- API contracts;
- routing/navigation;
- authentication/authorization;
- payments;
- SEO/indexing behavior;
- localization strategy;
- architecture/module seams;
- reusable design-system behavior;
- substantial UI/UX direction.

Do not trigger for a typo, a fully specified mechanical change, a clear bug with an established expected behavior, or other changes where no material decision is unresolved.

## Source-of-truth order

1. The user's current explicit instruction.
2. An approved spec under `docs/specs/`.
3. `PRODUCT.md` for durable product truth.
4. `DESIGN.md` for durable visual/design-system truth.
5. `CONTEXT.md` for domain vocabulary.
6. Relevant ADRs.
7. `AGENTS.md`, `UI.md`, and existing code.

If two sources conflict, surface the conflict instead of silently picking one.

## Gate

Before implementation, identify every material decision that is not already settled by the sources above.

Facts are the agent's job: inspect the repo, current docs, Astro Docs MCP, Bearnie MCP, and other available sources before asking the user.

Decisions are the user's job.

If any material decision remains unresolved, invoke `grill-with-docs` or `grilling` and work through the design-tree frontier in rounds. If the question changes domain vocabulary or records a hard-to-reverse trade-off, use `domain-modeling` too.

Do not begin implementation while material branches remain silently assumed.

When the frontier is empty, explicitly confirm shared understanding with the user.

## Lock intent

After alignment, create or update a spec under `docs/specs/` using `to-spec` or its template.

The spec is the implementation contract. Scope added later must be intentionally accepted, not smuggled into the implementation.

## Build

- Use `codebase-design` when module interfaces/seams are part of the decision.
- Use `tdd` where useful at pre-agreed seams.
- Use Astro Docs MCP for current Astro behavior.
- Use Impeccable for design-quality decisions.
- Use Bearnie for reusable accessible UI primitives.
- Work in independently reviewable vertical slices.
- Every completed feature/slice must be committed before beginning the next one.

## Verify

Before declaring substantial work complete:

1. Run relevant type/build/tests.
2. For meaningful UI work, run Impeccable detector when available.
3. Run `code-review`.
4. Treat the Spec axis as the explicit check that what was built matches what the user approved.
5. Confirm every completed feature/slice has its own Git commit.

If the Spec axis finds a mismatch, fix it or bring the decision back to the user. Do not rationalize the mismatch as an implementation detail.
