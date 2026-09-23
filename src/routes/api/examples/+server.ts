import { createDb } from '$lib/server/db';
import { exampleItems } from '$lib/server/db/schema';
import { getCloudflareEnv } from '$lib/server/cloudflare';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
  const { DB } = getCloudflareEnv(platform);
  const db = createDb(DB);
  const items = await db.select().from(exampleItems).limit(20);

  return json({ items });
};
