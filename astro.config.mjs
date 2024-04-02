import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://eltrueno.github.io',
  base: 'elenabd2k24',
  integrations: [tailwind(), vue({
    appEntrypoint: '/src/pages/vueapp.ts'
  })]
});