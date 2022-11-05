import { defineConfig } from 'astro/config';
import { config } from './src/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
   site: config.seo.url,
   output:'server',
   integrations: [tailwind()],
});
