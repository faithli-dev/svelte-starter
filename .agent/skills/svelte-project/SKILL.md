---
name: svelte-project
description: Use for implementing, reviewing, debugging, or upgrading Svelte 5 and SvelteKit code in this repository. Covers async load, Remote Functions, current Svelte APIs, Cloudflare Workers, shadcn-svelte UI conventions, SEO, runtime sitemap behavior, and optional i18n.
---

# Svelte Project Skill

Use this skill for Svelte/SvelteKit-specific work in this repository.

## Always verify current Svelte behavior

Svelte and SvelteKit evolve quickly. Before using version-sensitive APIs or recommending framework patterns, consult current official documentation through the Svelte MCP server or official docs.

Official AI guide:
https://svelte.dev/docs/ai/overview

Official MCP:
https://mcp.svelte.dev/mcp

Local CLI fallback:

```bash
npx @sveltejs/mcp
```

## Required Svelte AI workflow

Whenever creating, editing, reviewing, or debugging `.svelte`, `.svelte.ts`, or `.svelte.js`:

1. Load the official `svelte-code-writer` and `svelte-core-bestpractices` skills when the active client supports them.
2. If framework behavior is uncertain, run `list-sections`.
3. Fetch relevant docs with `get-documentation`.
4. Write or edit the code.
5. Run `svelte-autofixer` on every changed Svelte file.
6. Apply relevant fixes and repeat until clean.
7. Run project checks.

## Current project assumptions

- Svelte 5 runes mode
- Svelte experimental async enabled
- SvelteKit Remote Functions enabled
- async route load is the default route data convention
- Remote Functions are the default typed client/server application data layer
- SvelteKit 2
- Cloudflare Workers adapter
- D1 + Drizzle, KV, R2
- Zod Remote Function validation
- Tailwind CSS 4
- npm
- shadcn-svelte
- runtime `/sitemap.xml`
- page metadata through `<svelte:head>`
- i18n-ready but single-language by default

## Default data conventions

### async load

Prefer:

```ts
export const load: PageLoad = async ({ params }) => {
  return {
    item: await getItem(params.id)
  };
};
```

Use load for route orchestration and route/request dependencies.

Avoid waterfalls. Kick off independent asynchronous work before waiting on parent/dependent data.

For slow non-critical server-load data, use SvelteKit promise streaming intentionally instead of awaiting everything.

### Remote query

Prefer Remote `query` for dynamic reusable server reads. Queries can be awaited from universal load functions or components and are deduplicated by argument while active.

### Remote form

Prefer Remote `form` for user-submitted forms because it supports progressive enhancement.

### Remote command

Use Remote `command` for imperative non-form mutations.

Commands do not automatically invalidate reads. Use server-driven `query.refresh()` / `set()` or the relevant requested update flow.

### Validation

Any Remote Function that accepts an argument must use Standard Schema validation. Prefer Zod in this starter.

### Cloudflare

Remote Functions always run server-side. Use `getRequestEvent()` to obtain `platform.env`, then access D1/KV/R2.

Keep `.remote.ts` files outside `src/lib/server`.

See `docs/data-loading.md`.

## Experimental flags

Current Remote Functions require the starter's experimental flags in `svelte.config.js`.

Before altering these flags or upgrading Svelte/SvelteKit, consult current docs. Do not assume today's experimental API is permanent.

## Svelte 5 rules

- Use `$state` only for reactive state.
- Use `$derived` / `$derived.by` for derived values.
- Avoid `$effect` unless synchronizing with something external genuinely requires it.
- Use `$props` for component props.
- Use event attributes such as `onclick`.
- Prefer snippets/`{@render}` for new composition APIs.
- Prefer keyed each blocks for mutable collections.
- Async expressions may be used where they improve Remote Function consumption.
- Keep browser-only behavior out of server modules.
- Do not create shared mutable server state that can leak across requests.

## SvelteKit rules

- Keep server-only data and secrets in server-only modules.
- Prefer async load + Remote Functions before inventing custom RPC endpoints.
- Use `+server.ts` for genuine HTTP/API surfaces, webhooks, feeds, downloads, or integration endpoints — not merely as an internal RPC transport.
- Preserve Cloudflare Workers runtime compatibility.

## UI workflow

Before creating a reusable primitive:

1. Read `UI.md` and `components.json`.
2. Use the shadcn-svelte skill.
3. Check the current shadcn-svelte registry.
4. Add suitable primitives with `npm run ui:add -- <component>`.
5. Compose product-specific UI in `src/lib/components/site` or feature-local components.
6. Run Svelte autofixer on generated/modified Svelte files.

See `.agent/skills/shadcn-svelte/SKILL.md`.
