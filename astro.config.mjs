// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  // Untuk deployment ke Cloudflare Pages
  adapter: cloudflare({
    mode: 'directory'
  }),
  
  // Enable SSR for dynamic routes
  output: 'server',
  
  // Environment variables untuk Cloudflare
  env: {
    schema: {
      PUBLIC_API_URL: {
        context: 'client',
        access: 'public',
        type: 'string'
      }
    }
  }
});