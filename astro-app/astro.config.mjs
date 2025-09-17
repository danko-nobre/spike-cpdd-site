import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://danko-nobre.github.io',
  base: '/spike-cpdd-site/astro',
  trailingSlash: 'always',
  outDir: '../dist/astro',
  vite: {
    resolve: {
      alias: {
        "@ui-components": new URL("../ui-components", import.meta.url).pathname,
      },
    },
  },
});
