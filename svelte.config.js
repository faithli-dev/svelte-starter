import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  compilerOptions: {
    experimental: {
      async: true
    }
  },
  kit: {
    adapter: adapter(),
    experimental: {
      remoteFunctions: true
    }
  }
};

export default config;
