# Svelte Starter

Reusable SvelteKit starter for Cloudflare Workers with an intent-first agent workflow, shadcn-svelte UI, and Cloudflare-native storage.

## Core idea

The starter is designed to reduce the most common agent failure: building a reasonable interpretation that is not what the user wanted.

```text
Intent Gate
   ↓
Grill unresolved decisions
   ↓
Capture CONTEXT / ADRs
   ↓
Lock an approved spec
   ↓
Implement at agreed seams
   ↓
Svelte MCP + autofixer
   ↓
Review Standards + Spec separately
```

The intent workflow is adapted from Matt Pocock's skills repository:
https://github.com/mattpocock/skills

## Default stack

- Svelte 5
- SvelteKit 2
- Cloudflare Workers
- Cloudflare D1 + Drizzle ORM
- Cloudflare KV
- Cloudflare R2
- Tailwind CSS 4
- shadcn-svelte
- npm
- official Svelte AI/MCP workflow
- Impeccable design workflow
- Matt Pocock intent/spec/TDD/review skills
- runtime sitemap
- TypeScript 6

TypeScript 6 is intentional: current `svelte-check` supports TypeScript 7 only through its experimental TSGo path, so the starter stays on the stable compatibility path by default.

## Start

```bash
npm install
cp .env.example .env
npm run dev
```

After the first successful install, commit `package-lock.json`. CI/deployment should then prefer `npm ci`.

## Cloudflare storage

The starter declares three portable bindings in `wrangler.jsonc`:

```text
DB  → Cloudflare D1
KV  → Workers KV
R2  → Cloudflare R2
```

Wrangler's current automatic provisioning can create draft D1/KV/R2 resources without hard-coding account-specific IDs in the starter.

D1 uses Drizzle ORM:

```text
src/lib/server/db/schema.ts
src/lib/server/db/index.ts
drizzle.config.ts
```

Workflow:

```bash
npm run db:generate
npm run db:migrate:local

# after the remote binding exists/provisions
npm run db:migrate:remote
```

SvelteKit server code receives all three resources through `platform.env`.

See `docs/cloudflare-storage.md`.

## Intent workflow

For material changes, agents must read:

```text
.agent/skills/project-intent/SKILL.md
```

The project only grills when a material decision is unresolved. Small mechanical changes remain fast.

Specs live under:

```text
docs/specs/
```

Domain vocabulary lives in `CONTEXT.md` when needed; durable architectural trade-offs live under `docs/adr/`.

## Svelte AI workflow

The root `.mcp.json` points to the official Svelte MCP server:

```text
svelte → https://mcp.svelte.dev/mcp
```

For Svelte code, agents should use the official Svelte AI flow:

```bash
npm run svelte:sections
npm run svelte:docs -- "<section1>,<section2>"
npm run svelte:fix -- ./src/routes/+page.svelte
```

The official `svelte-code-writer` and `svelte-core-bestpractices` skills should be loaded when the active coding client supports them.

## UI workflow

```text
Impeccable design judgement
          ↓
src/lib/components/site
          ↓
src/lib/components/ui
          ↓
shadcn-svelte registry source
```

`components.json` is preconfigured for SvelteKit + Tailwind 4 with the current `new-york` style.

Add components with:

```bash
npm run ui:add -- button card dialog tabs
```

Install/update the official shadcn-svelte skill in clients that support Skills:

```bash
npm run ui:skill:install
```

## Useful commands

```bash
npm run dev
npm run check
npm run build
npm run deploy

npm run cf:typegen

npm run db:generate
npm run db:migrate:local
npm run db:migrate:remote

npm run ui:init
npm run ui:add -- button card dialog tabs
npm run ui:skill:install

npm run svelte:sections
npm run svelte:docs -- "$state,$derived"
npm run svelte:fix -- ./src/routes/+page.svelte

npm run design:install
npm run design:check
npm run design:update
npm run design:detect
```

## Agent structure

```text
AGENTS.md
.mcp.json
.agent/
├── skills/
│   ├── svelte-project/
│   ├── shadcn-svelte/
│   ├── impeccable/
│   ├── project-intent/
│   ├── grill-me/
│   ├── grilling/
│   ├── grill-with-docs/
│   ├── domain-modeling/
│   ├── to-spec/
│   ├── codebase-design/
│   ├── tdd/
│   ├── implement/
│   └── code-review/
└── references/
    ├── svelte-ai.md
    ├── shadcn-svelte.md
    ├── impeccable.md
    ├── git-workflow.md
    └── matt-pocock-skills.md
```

## Notes

- Node 22.18+ is the project baseline.
- npm is the canonical package manager.
- The local Markdown spec tracker is the portable default.
- Do not let an agent silently invent missing product/design standards.
- Facts should be researched by the agent; decisions belong to the user.
- `PRODUCT.md` and `DESIGN.md` are intentionally created only when a real product has product/design truth to record.
