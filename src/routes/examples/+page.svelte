<script lang="ts">
  import { createExampleItem, listExampleItems } from '$lib/data/examples.remote';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
  let name = $state('');
  let busy = $state(false);

  const items = $derived(await listExampleItems());

  async function createItem() {
    const value = name.trim();
    if (!value || busy) return;

    busy = true;

    try {
      await createExampleItem({ name: value });
      name = '';
    } finally {
      busy = false;
    }
  }
</script>

<svelte:head>
  <title>Remote Functions Example · Svelte Starter</title>
</svelte:head>

<main class="mx-auto max-w-3xl space-y-10 px-6 py-16">
  <header class="space-y-3">
    <p class="text-sm text-muted-foreground">SvelteKit Remote Functions + D1 + Drizzle</p>
    <h1 class="text-4xl font-semibold tracking-tight">Example items</h1>
    <p class="text-muted-foreground">{data.description}</p>
  </header>

  <div class="flex gap-2">
    <input
      class="min-w-0 flex-1 rounded-lg border bg-background px-3 py-2"
      bind:value={name}
      placeholder="Add an item"
      onkeydown={(event) => {
        if (event.key === 'Enter') void createItem();
      }}
    />
    <button
      class="rounded-lg bg-primary px-4 py-2 text-primary-foreground disabled:opacity-50"
      disabled={busy || !name.trim()}
      onclick={createItem}
    >
      {busy ? 'Adding…' : 'Add'}
    </button>
  </div>

  {#if items.length}
    <ul class="divide-y rounded-xl border">
      {#each items as item (item.id)}
        <li class="px-4 py-3">
          <p class="font-medium">{item.name}</p>
          <p class="text-xs text-muted-foreground">{item.id}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
      No items yet. Add the first one.
    </div>
  {/if}
</main>
