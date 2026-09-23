---
name: shadcn-svelte
description: Use for adding, composing, reviewing, or customizing reusable UI in this SvelteKit project with shadcn-svelte. Read components.json first and prefer current registry components over hand-built common primitives.
user-invocable: true
argument-hint: "[component or UI task]"
---

# shadcn-svelte project adapter

Official documentation:
- https://www.shadcn-svelte.com/docs
- https://www.shadcn-svelte.com/docs/skills
- https://www.shadcn-svelte.com/docs/components-json

Official skill source:
- https://github.com/huntabyte/shadcn-svelte

## Project contract

Before reusable UI work:

1. Read `AGENTS.md`.
2. Read `PRODUCT.md` and `DESIGN.md` if they exist.
3. Read `UI.md`.
4. Read `components.json`.
5. Inspect existing `src/lib/components/ui` components before adding duplicates.

This project uses:

- SvelteKit
- Svelte 5
- Tailwind CSS 4
- `src/routes/layout.css`
- `$lib/components/ui` for generated primitives
- `$lib/utils` for utilities
- `$lib/hooks` for reactive helper modules
- neutral as the initial base color

## Add components

```bash
npm run ui:add -- button card dialog tabs
```

Typical import:

```svelte
<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>
```

Rules:

- Do not copy React shadcn/ui component code into this repository.
- Prefer the Svelte registry implementation.
- Preserve generated accessibility and Bits UI semantics.
- Use namespace imports when the component family is designed for them.
- Follow current shadcn-svelte forms/Field guidance rather than legacy form structure.
- Customize generated source intentionally; do not scatter one-off variants through pages.
- Prefer semantic tokens over arbitrary colors.
- After any Svelte UI change, run the official Svelte autofixer.

## Official skill installation

For clients supporting the Skills installer:

```bash
npm run ui:skill:install
```

The upstream skill reads `components.json` to understand the framework, aliases, icon setup, registry configuration, and existing components. This local adapter contains project-specific rules; the upstream skill remains the source for current shadcn-svelte usage details.
