<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Svelte Starter</title>
  <meta
    name="description"
    content="SvelteKit starter for Cloudflare Workers with shadcn-svelte and an intent-first AI agent workflow."
  />
</svelte:head>

<main class="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
  <section class="max-w-3xl space-y-8">
    <div class="flex flex-wrap gap-2">
      {#each data.stack as item}
        <span class="inline-flex rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground">
          {item}
        </span>
      {/each}
    </div>

    <div class="space-y-4">
      <h1 class="text-4xl font-semibold tracking-tight sm:text-6xl">
        A small starter with strong project memory.
      </h1>
      <p class="max-w-2xl text-lg leading-8 text-muted-foreground">
        Async load by default, Remote Functions for typed client/server data, Svelte 5 runes,
        Cloudflare-native storage, and shadcn-svelte for UI.
      </p>
    </div>

    <div class="flex flex-wrap gap-3">
      <a
        class="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        href="/examples"
      >
        Remote function example
      </a>
      <a
        class="rounded-lg border bg-background px-4 py-2 text-sm font-medium"
        href="https://svelte.dev/docs/kit/remote-functions"
      >
        Remote Functions docs
      </a>
    </div>
  </section>
</main>
