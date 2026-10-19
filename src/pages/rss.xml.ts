import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  return rss({
    title: 'Antonio Matheus | Caderno',
    description: 'Anotações de Antonio Matheus sobre tecnologia, escrita e descobertas.',
    site: context.site ?? context.url.origin,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt-BR</language>`,
  });
};
