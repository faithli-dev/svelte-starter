# Svelte AI reference

Use this reference for AI-assisted Svelte 5 and SvelteKit development in this repository.

## Official sources

- https://svelte.dev/docs/ai/overview
- https://svelte.dev/docs/ai/mcp
- https://svelte.dev/docs/ai/skills
- https://svelte.dev/docs/kit/load
- https://svelte.dev/docs/kit/remote-functions
- https://mcp.svelte.dev/mcp

## Project MCP

The root `.mcp.json` configures the official remote Svelte MCP server.

For clients that prefer local stdio transport:

```bash
npx -y @sveltejs/mcp
```

## Starter data policy

This repository intentionally defaults to:

```text
async load
   +
Remote Functions
```

Use async `load` for route orchestration. Use Remote `query`, `form`, `command`, and `prerender` as the default typed application client/server layer.

The current Remote Functions feature is experimental. `svelte.config.js` opts into both Svelte async support and SvelteKit Remote Functions. Verify current upstream docs before framework upgrades.

Remote query arguments are validated with Standard Schema; this starter uses Valibot.

Inside a Remote Function, `getRequestEvent()` provides access to SvelteKit's current request event, including the Cloudflare platform bindings.

## Required tool workflow

For Svelte code:

```bash
npx @sveltejs/mcp list-sections
npx @sveltejs/mcp get-documentation "<section1>,<section2>"
npx @sveltejs/mcp svelte-autofixer ./path/to/file.svelte
```

The official `svelte-code-writer` skill requires the autofixer whenever creating, editing, or analyzing Svelte components or Svelte modules.

The official `svelte-core-bestpractices` skill is the baseline for runes, derived state, effects, events, snippets, context, async behavior, and avoiding legacy Svelte syntax.
