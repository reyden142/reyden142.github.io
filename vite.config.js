// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change the absolute path to a relative path
  base: './',
  css: {
    postcss: false,
  },
})