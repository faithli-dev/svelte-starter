# Data loading and Remote Functions

This starter deliberately defaults to SvelteKit's async data model.

Remote Functions are currently experimental in SvelteKit, so the root `svelte.config.js` enables both required feature flags:

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

When upgrading Svelte/SvelteKit, verify these flags and the Remote Functions API against the current official documentation before changing the configuration.

## Default decision tree

### Route orchestration: async load

New route-level data loaders should normally be written as async functions:

```ts
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    data: await getData()
  };
};
```

Use load for route-scoped orchestration, URL/params-dependent work, metadata dependencies, and data that should be ready as part of navigation.

SvelteKit runs independent route load functions in parallel. Avoid unnecessary waterfalls, especially around `await parent()`.

For slow, non-essential data in a server load, return promises without awaiting them when streaming is useful.

### Dynamic server reads: remote query

Prefer a Remote Function `query` for reusable dynamic server reads:

```ts
import { query } from '$app/server';

export const getItems = query(async () => {
  return [];
});
```

A query can be awaited in a universal `load` function or directly in a component. Identical active query calls are deduplicated by SvelteKit.

### Forms: remote form

Prefer Remote Function `form` for user-facing form submissions because it can progressively enhance and degrade without JavaScript.

### Imperative mutations: remote command

Use `command` when the mutation is not naturally a form submission.

All remote function arguments must be validated with a Standard Schema validator. This starter uses Zod.

### Static data: prerender

Use Remote Function `prerender` for static data that fits the API. Do not use dynamic `query` functions on fully prerendered pages.

## Cloudflare bindings inside Remote Functions

Remote Functions always execute on the server. Access the current SvelteKit request event with `getRequestEvent()`, then use the typed Cloudflare platform bindings:

```ts
import { getRequestEvent, query } from '$app/server';

export const getData = query(async () => {
  const { platform } = getRequestEvent();
  const db = createDb(platform!.env.DB);
});
```

The project helper `getCloudflareEnv` converts a missing platform into a clear server error.

## Single-flight mutations

When a mutation changes data exposed by a query, prefer server-driven refresh:

```ts
void getItems().refresh();
```

SvelteKit can return the refreshed query result in the same mutation response.

## Example

See:

```text
src/lib/data/examples.remote.ts
src/routes/examples/+page.ts
src/routes/examples/+page.svelte
```

The example demonstrates:

- async universal `load`;
- a Remote `query`;
- a Zod-validated Remote `command`;
- D1 through Drizzle;
- `getRequestEvent()` for Cloudflare bindings;
- single-flight query refresh.
