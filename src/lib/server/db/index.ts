import type { D1Database } from '@cloudflare/workers-types';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export const createDb = (database: D1Database) =>
  drizzle(database, {
    schema
  });

export type Database = ReturnType<typeof createDb>;
