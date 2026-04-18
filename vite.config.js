// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const prerender = require('vite-plugin-prerender')

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: 'dist',
      routes: ['/'],
    }),
  ],
})