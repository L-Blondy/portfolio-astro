import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import { config } from './src/config';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
   site: config.production.url,
   output: 'server',
   integrations: [
      tailwind(),
      image({
         logLevel: 'debug',
         serviceEntryPoint: '@astrojs/image/sharp',
      }),
   ],
   adapter: vercel(),
});
