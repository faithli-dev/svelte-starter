import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    description:
      'Async route orchestration plus Remote Functions backed by Cloudflare D1 and Drizzle.'
  };
};
