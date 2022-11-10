import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import { config } from './src/config';

export default defineConfig({
   site: config.production.url,
   output: 'server',
   integrations: [tailwind()],
   adapter: vercel(),
});
