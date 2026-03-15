// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  output: 'server',
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false, // "/" = português, "/pt" = português, "/en" = inglês
    },
  },
});