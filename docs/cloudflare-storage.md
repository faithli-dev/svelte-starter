# Cloudflare storage baseline

This starter enables three Cloudflare bindings by default:

- `DB` — D1, accessed through Drizzle ORM.
- `KV` — Workers KV for globally replicated key/value data and caches.
- `R2` — object storage for files and larger blobs.

Wrangler 4.45+ supports automatic provisioning of draft D1, KV, and R2 bindings. The root `wrangler.jsonc` therefore keeps the starter portable and does not contain account-specific resource IDs.

## D1 + Drizzle

Schema:

```text
src/lib/server/db/schema.ts
```

Database factory:

```text
src/lib/server/db/index.ts
```

Generate SQL migrations:

```bash
npm run db:generate
```

Apply locally:

```bash
npm run db:migrate:local
```

Apply to the bound remote database:

```bash
npm run db:migrate:remote
```

SvelteKit server routes and server loads receive Cloudflare bindings through `platform.env`.

```ts
const db = createDb(platform.env.DB);
const value = await platform.env.KV.get('key');
const object = await platform.env.R2.get('path/to/object');
```

Do not access D1, KV, or R2 from browser code.

## Binding types

`src/app.d.ts` defines the SvelteKit platform bindings for editor/check support. The project also exposes:

```bash
npm run cf:typegen
```

Use Wrangler-generated bindings when project configuration becomes more specific.
