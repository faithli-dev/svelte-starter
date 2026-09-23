import type { SitemapItemLoose } from 'sitemap';

export const getSitemapEntries = (): SitemapItemLoose[] => [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1
  }
];
