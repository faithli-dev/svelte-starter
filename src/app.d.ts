import type {
  Cache,
  CacheStorage,
  D1Database,
  ExecutionContext,
  KVNamespace,
  R2Bucket
} from '@cloudflare/workers-types';

declare global {
  namespace App {
    interface Platform {
      env: {
        DB: D1Database;
        KV: KVNamespace;
        R2: R2Bucket;
      };
      context: ExecutionContext;
      caches: CacheStorage & { default: Cache };
    }
  }
}

export {};
