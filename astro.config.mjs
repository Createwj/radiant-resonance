import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import Unocss from "@unocss/astro";
// import { presetIcons, presetAttributify, presetUno } from 'unocss'
// import unoConfig from './uno.config.js'
import { loadEnv } from 'vite'
const { MODE } = loadEnv(import.meta.env.MODE, process.cwd(), "");
console.log(MODE)

import netlify from '@astrojs/netlify/edge-functions';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  // 服务部署端口 默认3000
  server: { 
    port: 3000,
    host: true
  },
  integrations: [
    svelte(),
    Unocss({
      // presets: [presetAttributify(), presetUno(), presetIcons()],
      // ...unoConfig,
    }),
  ],
});
