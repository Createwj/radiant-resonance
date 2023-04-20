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

// https://astro.build/config
export default defineConfig({
  // 开启服务端渲染
  output: "server",
  // 使用node部署 其他部署方式: Cloudflare  Deno  Netlify   Vercel
  adapter: node({
    mode: "standalone",
  }),
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
