---
name: svelte-project
description: Use for implementing, reviewing, debugging, or upgrading Svelte 5 and SvelteKit code in this repository. Covers current Svelte APIs, SvelteKit routing/server boundaries, Cloudflare Workers, shadcn-svelte UI conventions, SEO, runtime sitemap behavior, and optional i18n.
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

CLI equivalents:

```bash
npx @sveltejs/mcp list-sections
npx @sveltejs/mcp get-documentation "<section1>,<section2>"
npx @sveltejs/mcp svelte-autofixer ./src/routes/+page.svelte
npm run check
npm run build
```

## Current project assumptions

- Svelte 5 runes mode for new code
- SvelteKit 2
- Cloudflare Workers adapter
- Tailwind CSS 4
- npm
- shadcn-svelte source-owned UI primitives
- runtime `/sitemap.xml`
- page metadata through `<svelte:head>`
- i18n-ready but single-language by default

## Svelte 5 rules

- Use `$state` only for reactive state.
- Use `$derived` / `$derived.by` for derived values.
- Avoid `$effect` unless synchronizing with something external genuinely requires it.
- Use `$props` for component props.
- Use event attributes such as `onclick`.
- Prefer snippets/`{@render}` for new composition APIs.
- Prefer keyed each blocks for mutable collections.
- Keep browser-only behavior out of server modules.
- Do not create shared mutable server state that can leak across requests.

## SvelteKit rules

- Keep server-only data and secrets in server-only modules and server route/load files.
- Use `+page.server.ts`, `+layout.server.ts`, `+server.ts` when private environment access is required.
- Keep universal load functions serializable.
- Prefer framework routing/load/form primitives before adding custom plumbing.
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
