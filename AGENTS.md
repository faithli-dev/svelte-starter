# AGENTS.md

This file defines the default operating rules for AI coding agents working in this repository.

## Intent Gate — do not silently guess

For any substantial product, feature, architecture, data-model, API-contract, routing, auth, payment, SEO-indexing, localization, design-system, or major UI/UX change, use `.agent/skills/project-intent/SKILL.md` before implementation.

If a material decision or standard is not settled by the user's current instruction, an approved spec, `PRODUCT.md`, `DESIGN.md`, `CONTEXT.md`, ADRs, or existing project rules:

- do not invent the answer;
- inspect all facts you can inspect yourself;
- use `grill-with-docs` / `grilling` for the remaining decisions;
- ask the user for standards/preferences only when they are genuinely decisions;
- do not begin implementation until the design-tree frontier is empty and shared understanding is confirmed;
- write/update a spec under `docs/specs/`;
- after implementation, use `code-review` so the Spec axis checks that the result matches the approved intent.

Small, fully specified, mechanical changes do not require grilling.

See `.agent/references/matt-pocock-skills.md`.

## Git discipline — every completed feature must be committed

A completed feature, vertical slice, bug fix, refactor, or other independently reviewable unit of work must end in its own Git commit.

Before committing:

1. Confirm the feature matches the approved spec or explicit request.
2. Run the relevant validation for that slice when available.
3. Review the diff and remove accidental, generated, debug, or unrelated changes.
4. Stage only files that belong to the completed unit.
5. Commit immediately before starting the next independent feature.

Do not combine unrelated completed features, rewrite existing user history, or force-push unless explicitly asked.

See `.agent/references/git-workflow.md`.

## Source of truth

For Svelte 5 and SvelteKit behavior, APIs, routing, rendering, configuration, reactivity, and current best practices:

1. Prefer the official Svelte MCP server when available.
2. Use `list-sections` before guessing which documentation section applies.
3. Fetch relevant current docs with `get-documentation`.
4. Use `svelte-autofixer` whenever creating, editing, or reviewing `.svelte`, `.svelte.ts`, or `.svelte.js` files.
5. Run the autofixer again after applying fixes until no relevant issues remain.
6. Do not rely on remembered or legacy Svelte APIs when current documentation can resolve the question.

Official AI guide:
https://svelte.dev/docs/ai/overview

Project MCP configuration:

- Root config: `.mcp.json`
- Svelte MCP: `https://mcp.svelte.dev/mcp`
- Local CLI fallback: `npx @sveltejs/mcp`

When available, load the official `svelte-code-writer` and `svelte-core-bestpractices` skills for Svelte code.

## Project stack

- Svelte 5
- SvelteKit 2
- Cloudflare Workers via `@sveltejs/adapter-cloudflare`
- Cloudflare D1 via Drizzle ORM
- Cloudflare KV
- Cloudflare R2
- Tailwind CSS 4
- shadcn-svelte source-owned UI primitives
- npm
- Impeccable for frontend design quality
- Matt Pocock alignment/spec/TDD/review skills
- runtime sitemap
- TypeScript 6

## Package manager

Use npm as the canonical package manager.

```bash
npm install
npm run dev
npm run check
npm run build
```

Do not add pnpm, Yarn, or Bun lockfiles unless the user explicitly changes the package-manager policy. Commit `package-lock.json` after a successful install and prefer `npm ci` in CI.

## Svelte 5 implementation rules

- New Svelte code uses runes mode.
- Use `$state` only for reactive state.
- Prefer `$derived` / `$derived.by` for derived values.
- Treat `$effect` as an escape hatch, not a default state-management tool.
- Use `$props` instead of `export let`.
- Use event properties such as `onclick` instead of legacy `on:click`.
- Use snippets and `{@render ...}` instead of slots for new component APIs.
- Prefer keyed each blocks for mutable collections.
- Avoid shared server-side state that can leak between users.

## UI architecture

```text
routes / features
      ↓
src/lib/components/site
      ↓
src/lib/components/ui
      ↓
shadcn-svelte generated source
```

- Read `components.json` and `UI.md` before reusable UI work.
- Check shadcn-svelte before building a common primitive manually.
- Use `npm run ui:add -- <component...>`.
- Preserve accessibility behavior and Bits UI semantics in generated primitives.
- Use Impeccable for substantial design judgement.
- Run Svelte autofixer after generated or modified Svelte files.

See `.agent/skills/shadcn-svelte/SKILL.md`.

## Data and Cloudflare bindings

Bindings are available only in SvelteKit server contexts through `platform.env`:

```text
platform.env.DB  → D1Database
platform.env.KV  → KVNamespace
platform.env.R2  → R2Bucket
```

D1 application queries should use the Drizzle factory in `src/lib/server/db/index.ts`. Schema belongs in `src/lib/server/db/schema.ts`.

Do not expose these bindings to browser code. Keep storage/business access in server-only modules, server loads, actions, endpoints, or remote server functions.

Use:

```bash
npm run db:generate
npm run db:migrate:local
npm run db:migrate:remote
npm run cf:typegen
```

See `docs/cloudflare-storage.md`.

## Rendering and Cloudflare

- Preserve Cloudflare Workers compatibility.
- Prefer SvelteKit server/load/form primitives over Node-specific infrastructure.
- Keep private environment variables in server-only modules.
- Public variables must use SvelteKit's `PUBLIC_` convention.
- Do not expose secrets through `PUBLIC_*`.

## SEO

Use `<svelte:head>` for page metadata. Public dynamic canonical URLs belong in `src/lib/seo/sitemap.ts`; the runtime sitemap is served from `GET /sitemap.xml`.

## Internationalization

The starter is i18n-ready, not multilingual by default. Do not enable locale-prefixed routing or hreflang unless the product requires it.

## Code quality

Before completing non-trivial work:

```bash
npm run check
npm run build
```

For every changed Svelte file, run the official Svelte autofixer. For meaningful UI work, also use Impeccable detector when available.

If validation cannot run, state that explicitly instead of pretending it passed.
