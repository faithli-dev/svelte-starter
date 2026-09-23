# shadcn-svelte reference

Official documentation:

- https://www.shadcn-svelte.com/docs
- https://www.shadcn-svelte.com/docs/installation/sveltekit
- https://www.shadcn-svelte.com/docs/components-json
- https://www.shadcn-svelte.com/docs/skills

## Project configuration

`components.json` tells the shadcn-svelte CLI and skill how this project is configured.

Current aliases:

```text
$lib
$lib/components
$lib/components/ui
$lib/hooks
$lib/utils
```

Global CSS:

```text
src/routes/layout.css
```

## Add components

```bash
npm run ui:add -- button card dialog tabs
```

The CLI writes source into `src/lib/components/ui`. Generated source is project-owned and may be customized, but common primitive behavior and accessibility should be preserved.

## Skill

Install the upstream skill where supported:

```bash
npm run ui:skill:install
```

The upstream skill inspects `components.json`, existing components, icon configuration, aliases, and registry setup. The local `.agent/skills/shadcn-svelte/SKILL.md` adapter adds this repository's architectural rules.

This starter intentionally does not make a third-party shadcn MCP server part of the baseline. The official shadcn-svelte integration is skill/CLI based; the official Svelte MCP covers Svelte documentation and code analysis.
