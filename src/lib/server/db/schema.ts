import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const exampleItems = sqliteTable('example_items', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`)
});

export type ExampleItem = typeof exampleItems.$inferSelect;
export type NewExampleItem = typeof exampleItems.$inferInsert;
