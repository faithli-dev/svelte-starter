# Svelte Starter

Reusable SvelteKit starter for Cloudflare Workers with async load, Remote Functions, shadcn-svelte UI, and Cloudflare-native storage.

## Core idea

```text
Intent Gate
   ↓
Approved spec
   ↓
Async route load
   ↓
Remote Functions
   ↓
D1 / KV / R2
   ↓
Svelte MCP + autofixer
   ↓
Review + atomic commit
```

The intent workflow is adapted from Matt Pocock's skills repository:
https://github.com/mattpocock/skills

## Default stack

- Svelte 5
- SvelteKit 2
- **async load by default**
- **Remote Functions by default**
- Svelte experimental async mode enabled
- Cloudflare Workers
- Cloudflare D1 + Drizzle ORM
- Cloudflare KV
- Cloudflare R2
- Zod
- Tailwind CSS 4
- shadcn-svelte
- npm
- official Svelte AI/MCP workflow
- Impeccable design workflow
- Matt Pocock intent/spec/TDD/review skills
- runtime sitemap
- TypeScript 6

> Remote Functions and Svelte async support are still experimental upstream. This starter deliberately enables them. Re-check the official SvelteKit docs when upgrading framework versions.

## Start

```bash
npm install
cp .env.example .env
npm run dev
```

After the first successful install, commit `package-lock.json`. CI/deployment should then prefer `npm ci`.

## Default data flow

```text
route navigation
      ↓
async +page.ts / +layout.ts
      ↓
Remote query
      ↓
server
      ↓
Drizzle → D1
KV / R2 where appropriate
```

For mutations:

```text
form UI → remote form
imperative UI action → remote command
                         ↓
                 single-flight refresh
                         ↓
                    remote query
```

Use:

- `async load` for route orchestration;
- Remote `query` for reusable dynamic reads;
- Remote `form` for user forms;
- Remote `command` for non-form imperative mutations;
- Remote `prerender` for suitable static data.

All Remote Function arguments should use Standard Schema validation; Zod is installed as the default validator.

See `docs/data-loading.md`.

## Remote Functions

Remote Functions are exported from `.remote.ts` files:

```ts
import { query } from '$app/server';

export const getItems = query(async () => {
  // always executes on the server
  return [];
});
```

They can safely import server-only database/storage code. Inside Remote Functions, use `getRequestEvent()` to access Cloudflare's `platform.env`.

The starter includes:

```text
src/lib/data/examples.remote.ts
src/routes/examples/+page.ts
src/routes/examples/+page.svelte
```

The example combines async load, Remote query/command, Zod, Drizzle, D1, and single-flight query refresh.

## Async mode

`svelte.config.js` intentionally enables:

```js
compilerOptions: {
  experimental: {
    async: true
  }
},
kit: {
  experimental: {
    remoteFunctions: true
  }
}
```

This enables current Remote Function usage and Svelte's async expressions.

## Cloudflare storage

The starter declares three portable bindings in `wrangler.jsonc`:

```text
DB  → Cloudflare D1
KV  → Workers KV
R2  → Cloudflare R2
```

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
npm run db:migrate:remote
```

See `docs/cloudflare-storage.md`.

## Intent workflow

For material changes, agents must read:

```text
.agent/skills/project-intent/SKILL.md
```

Specs live under `docs/specs/`. Domain vocabulary lives in `CONTEXT.md` when needed; durable architectural trade-offs live under `docs/adr/`.

## Svelte AI workflow

The root `.mcp.json` points to:

```text
svelte → https://mcp.svelte.dev/mcp
```

For Svelte code:

```bash
npm run svelte:sections
npm run svelte:docs -- "<section1>,<section2>"
npm run svelte:fix -- ./src/routes/+page.svelte
```

The official `svelte-code-writer` and `svelte-core-bestpractices` skills should be loaded when supported.

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

`components.json` is preconfigured for SvelteKit + Tailwind 4 with the `new-york` style.

```bash
npm run ui:add -- button card dialog tabs
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
npm run svelte:docs -- "remote-functions,load"
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
