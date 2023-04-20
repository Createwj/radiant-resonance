import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import Unocss from "@unocss/astro";
// import { presetIcons, presetAttributify, presetUno } from 'unocss'
// import unoConfig from './uno.config.js'


// https://astro.build/config
export default defineConfig({
  // 开启服务端渲染
  output: "server",
  // 使用node部署 其他部署方式: Cloudflare  Deno  Netlify   Vercel
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    svelte(),
    Unocss({
      // presets: [presetAttributify(), presetUno(), presetIcons()],
      // ...unoConfig,
    }),
  ],
});
