import { error } from '@sveltejs/kit';

export function getCloudflareEnv(platform: App.Platform | undefined) {
  if (!platform?.env) {
    throw error(500, 'Cloudflare bindings are unavailable in this runtime.');
  }

  return platform.env;
}
