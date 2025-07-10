import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/snub-extension/',
  plugins: [tailwindcss()],
})
