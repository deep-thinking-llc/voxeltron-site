import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://voxeltron.dthink.ai',
  vite: {
    plugins: [tailwindcss()],
  },
});
