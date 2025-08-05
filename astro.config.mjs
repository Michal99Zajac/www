// @ts-check
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://michalzajac.dev',
  vite: {
    build: {
      assetsInlineLimit: 1024,
    },
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
})
