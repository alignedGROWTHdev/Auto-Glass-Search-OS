import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://autoglasssearchos.com',
  base: process.env.BASE_PATH || '/',
  outDir: 'dist/public',
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
    host: true,
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.endsWith('/thank-you/'),
    }),
  ],
});
