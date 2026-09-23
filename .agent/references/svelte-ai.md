# Svelte AI reference

Use this reference for AI-assisted Svelte 5 and SvelteKit development in this repository.

## Official sources

- https://svelte.dev/docs/ai/overview
- https://svelte.dev/docs/ai/mcp
- https://svelte.dev/docs/ai/skills
- https://mcp.svelte.dev/mcp

## Project MCP

The root `.mcp.json` configures the official remote Svelte MCP server.

The Svelte MCP provides current documentation plus Svelte-specific static analysis. For clients that prefer local stdio transport, use:

```bash
npx -y @sveltejs/mcp
```

## Required tool workflow

For Svelte code:

```bash
npx @sveltejs/mcp list-sections
npx @sveltejs/mcp get-documentation "<section1>,<section2>"
npx @sveltejs/mcp svelte-autofixer ./path/to/file.svelte
```

The official `svelte-code-writer` skill requires the autofixer whenever creating, editing, or analyzing Svelte components or Svelte modules. Run it before finalizing changed Svelte files.

The official `svelte-core-bestpractices` skill is the baseline for runes, derived state, effects, events, snippets, context, and avoiding legacy Svelte syntax.
