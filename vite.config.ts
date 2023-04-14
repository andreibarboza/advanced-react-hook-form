import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@screens', replacement: '/src/screens' },
      { find: '@store', replacement: '/src/store' },
      { find: '@services', replacement: '/src/services' },
    ],
   },
})
