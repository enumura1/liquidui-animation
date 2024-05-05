import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/LiquidUI.tsx'),
      name: 'LiquidUI',
      fileName: 'LiquidUI',
    },
  },
})
