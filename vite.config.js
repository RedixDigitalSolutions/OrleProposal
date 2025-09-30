// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/OrleProposal/',   // <-- set to '/<repo>/'
  server: { port: 3000, open: true }
})
