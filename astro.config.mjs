import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  base: '/',
  server: {
    host: true,
    port: 8088
  },
  integrations: [tailwind(), vue({
    appEntrypoint: '/src/pages/vueapp.ts'
  })]
});