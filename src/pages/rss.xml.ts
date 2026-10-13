import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  return rss({
    title: 'Aluno de Astro | Blog',
    description: 'Minha jornada aprendendo Astro.',
    site: context.site ?? context.url.origin,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt-BR</language>`,
  });
};
