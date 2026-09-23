import { command, getRequestEvent, query } from '$app/server';
import { getCloudflareEnv } from '$lib/server/cloudflare';
import { createDb } from '$lib/server/db';
import { exampleItems } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';
import * as z from 'zod';

export const listExampleItems = query(async () => {
  const { platform } = getRequestEvent();
  const { DB } = getCloudflareEnv(platform);
  const db = createDb(DB);

  return db.select().from(exampleItems).orderBy(desc(exampleItems.createdAt)).limit(20);
});

const createExampleItemSchema = z.object({
  name: z.string().trim().min(1).max(120)
});

export const createExampleItem = command(createExampleItemSchema, async ({ name }) => {
  const { platform } = getRequestEvent();
  const { DB } = getCloudflareEnv(platform);
  const db = createDb(DB);

  const item = {
    id: crypto.randomUUID(),
    name
  };

  await db.insert(exampleItems).values(item);

  // Single-flight refresh: the updated query result is returned with the mutation response.
  void listExampleItems().refresh();

  return item;
});
