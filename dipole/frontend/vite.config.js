import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'
import { rm } from 'node:fs/promises'

const outDir = "../templates";
const assetsDir = "static/assets";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "Cleaning assets folder",
      async buildStart() {
        // console.log(await readdir(resolve(__dirname, outDir, assetsDir), { recursive: true, force: true }));
        await rm(resolve(__dirname, outDir, assetsDir), { recursive: true, force: true });
      }
    },
  ],
  build: {
    outDir,
    assetsDir,
    emptyOutDir: false,
  }
})
