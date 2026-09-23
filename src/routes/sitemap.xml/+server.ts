import { env } from '$env/dynamic/private';
import { getSitemapEntries } from '$lib/seo/sitemap';
import { SitemapStream, streamToPromise } from 'sitemap';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const stream = new SitemapStream({
    hostname: env.SITE_URL || url.origin
  });

  for (const entry of getSitemapEntries()) {
    stream.write(entry);
  }

  stream.end();

  const xml = await streamToPromise(stream);

  return new Response(xml.toString(), {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600'
    }
  });
};
