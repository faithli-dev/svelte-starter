---
name: impeccable
description: Project adapter for Impeccable design work. Use for designing, redesigning, critiquing, auditing, polishing, clarifying, distilling, hardening, optimizing, adapting, animating, colorizing, extracting, or otherwise improving frontend UI/UX in this SvelteKit project.
user-invocable: true
argument-hint: "[shape|critique|audit|polish|clarify|distill|harden|optimize|adapt|animate|colorize|extract|document|init] [target]"
---

# Impeccable project adapter

This starter uses Impeccable as its design-quality workflow.

Official source:
- https://impeccable.style/
- https://impeccable.style/docs/
- https://github.com/pbakaus/impeccable

```bash
npm run design:install
npm run design:update
```

## Project context order

Before making UI changes, read these if they exist:

1. `AGENTS.md`
2. `PRODUCT.md`
3. `DESIGN.md`
4. `UI.md`
5. the target route/component and its surrounding styles

Do not invent product truth that is missing from `PRODUCT.md`.

## Project-specific design contract

Impeccable governs design judgement; shadcn-svelte governs reusable primitive implementation.

```text
routes / features
      ↓
src/lib/components/site
      ↓
src/lib/components/ui
      ↓
shadcn-svelte registry source
```

- Before inventing a common primitive, search shadcn-svelte.
- Keep product-specific composition in `src/lib/components/site` or feature components.
- Use semantic design tokens unless the approved design system requires otherwise.
- Preserve accessibility behavior from generated primitives.
- Preserve Svelte 5 idioms and run Svelte autofixer after Svelte edits.

## Detector

Before shipping meaningful UI changes:

```bash
npm run design:detect
```

Focused targets:

```bash
npx impeccable detect src/routes/+page.svelte
npx impeccable detect http://localhost:5173
```

## Upstream synchronization

```bash
npm run design:check
npm run design:update
```

Keep project-specific rules in `AGENTS.md`, `UI.md`, `PRODUCT.md`, and `DESIGN.md`.

See `.agent/references/impeccable.md`.
