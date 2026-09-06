import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://autoglasssearchos.com',
  base: process.env.BASE_PATH || '/',
  outDir: 'dist/public',
  devToolbar: {
    enabled: false,
  },
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
    host: true,
    allowedHosts: ['.replit.dev', '.kirk.replit.dev'],
  },
  vite: {
    server: {
      allowedHosts: ['.replit.dev', '.kirk.replit.dev'],
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.endsWith('/thank-you/'),
    }),
  ],
});
