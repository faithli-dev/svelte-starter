import { json } from '@sveltejs/kit';

export const GET = () =>
  json({
    ok: true,
    service: 'svelte-starter'
  });
