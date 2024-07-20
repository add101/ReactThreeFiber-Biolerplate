import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build' // Customize output directory
  },
  base: '/ReactThreeFiber-Biolerplate/' // Replace 'repository-name' with the name of your GitHub repository

})
