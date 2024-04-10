import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // adapter: vercel()
  adapter: node({
    mode: "standalone"
  }),
});