import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    stack: ['Svelte 5', 'SvelteKit', 'Cloudflare', 'Drizzle', 'shadcn-svelte']
  };
};
