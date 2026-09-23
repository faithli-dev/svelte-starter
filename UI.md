# UI architecture

shadcn-svelte is the source-owned reusable UI primitive layer for this starter.

## Dependency direction

```text
routes / features
      ↓
src/lib/components/site
      ↓
src/lib/components/ui
      ↓
shadcn-svelte registry source + Bits UI where required
```

### shadcn-svelte layer

`src/lib/components/ui/` contains source copied into the project by the shadcn-svelte CLI.

- Treat the generated code as source-owned project code, not a hidden runtime package.
- Add components with the shadcn-svelte CLI instead of copying React shadcn/ui examples.
- Preserve the generated component contracts and accessibility behavior when customizing them.
- Review `components.json` before changing aliases, CSS location, registry, or base color.

### Site layer

`src/lib/components/site/` contains composed product/site components such as Header, Hero, PricingCard, FeatureGrid, SearchForm, AccountMenu, and Footer.

Site components compose `$lib/components/ui` primitives.

## Rules

1. Check shadcn-svelte before building a common primitive manually.
2. Do not hand-roll button, input, dialog, tabs, sheet, menu, tooltip, card, badge, table, etc. when the registry already provides a suitable implementation.
3. Pages should mainly compose site/feature components.
4. Prefer semantic tokens such as `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, and `bg-primary`.
5. Avoid arbitrary hex colors and one-off radii in product components unless the approved design system requires them.
6. Accessibility behavior belongs in the primitive layer.
7. Business/product behavior belongs in site/feature components.
8. Use `cn()` from `$lib/utils` for class composition.
9. Follow Svelte 5 runes and modern event syntax.
10. Use namespace imports when a shadcn-svelte component exposes a family of related pieces and the generated docs recommend it.
11. For forms, follow the current shadcn-svelte Field/Form guidance instead of legacy patterns.
12. Run the Svelte autofixer on every changed Svelte component.

## CLI workflow

```bash
npm run ui:init
npm run ui:add -- button card dialog tabs
npm run ui:skill:install
```

Typical import:

```svelte
<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button>Continue</Button>
```

## components.json

The project configures:

- global CSS: `src/routes/layout.css`
- base color: `neutral`
- lib alias: `$lib`
- components alias: `$lib/components`
- UI alias: `$lib/components/ui`
- hooks alias: `$lib/hooks`
- utils alias: `$lib/utils`

## Impeccable

Impeccable is the design-quality layer above this component architecture.

Use Impeccable to decide hierarchy, information density, spacing rhythm, typography, color relationships, motion, responsive behavior, accessibility refinements, and visual consistency.

Use shadcn-svelte to implement reusable primitives after the design decision is clear. Impeccable should not encourage duplicating a registry primitive or discarding established product/design truth.
