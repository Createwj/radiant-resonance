import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import Unocss from "@unocss/astro";
// import { presetIcons, presetAttributify, presetUno } from 'unocss'
// import unoConfig from './uno.config.js'

import { loadEnv } from 'vite'
const { MODE } = loadEnv(import.meta.env.MODE, process.cwd(), "");
console.log(MODE)

console.log('111111')
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
  output: "server",
  adapter: vercel(),
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
