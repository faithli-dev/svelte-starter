# Impeccable integration reference

Official documentation:

- https://impeccable.style/
- https://impeccable.style/docs/
- https://impeccable.style/tutorials/getting-started/
- https://github.com/pbakaus/impeccable

## Project commands

```bash
npm run design:install
npm run design:update
npm run design:check
npm run design:detect
```

## Context files

```text
PRODUCT.md  # audience, purpose, constraints, product truth
DESIGN.md   # visual system, tokens, component/style decisions
```

Do not create fake generic content in either file just to satisfy the tool.

## Relationship with shadcn-svelte

Use Impeccable for visual direction, UX hierarchy, critique, layout, typography, color, motion, accessibility review, responsive review, and design-system extraction/documentation.

Use shadcn-svelte for reusable Svelte UI primitives and established interactive behavior.

```text
Impeccable design decision
          ↓
shadcn-svelte registry lookup
          ↓
src/lib/components/ui
          ↓
site / feature composition
```

After Svelte component changes, the Svelte MCP/autofixer remains part of the validation path.

## Node requirement

This starter sets:

```text
node >=22.18.0
```
