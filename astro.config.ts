import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import { config } from './src/config';

// https://astro.build/config
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
   site: config.production.url,
   output: 'server',
   integrations: [
      tailwind(),
      compress({
         css: true,
         html: true,
         img: true,
         js: true,
         svg: true,
      }),
   ],
   adapter: vercel(),
});
