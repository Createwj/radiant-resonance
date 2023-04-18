import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import Unocss from "@unocss/astro";
// import { presetIcons, presetAttributify, presetUno } from 'unocss'
// import unoConfig from './uno.config.js'
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
  output: "server",
  adapter: vercel(),
  integrations: [
    svelte(),
    Unocss({
      // presets: [presetAttributify(), presetUno(), presetIcons()],
      // ...unoConfig,
    }),
  ],
});
