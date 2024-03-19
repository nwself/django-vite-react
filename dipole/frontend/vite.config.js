import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../templates",
    assetsDir: "static/assets",
    emptyOutDir: false,
  }
})