import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import Unocss from "@unocss/astro";
// import { presetIcons, presetAttributify, presetUno } from 'unocss'
// import unoConfig from './uno.config.js'

import netlify from '@astrojs/netlify/edge-functions';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    svelte(),
    Unocss({
      // presets: [presetAttributify(), presetUno(), presetIcons()],
      // ...unoConfig,
    }),
  ],
});
