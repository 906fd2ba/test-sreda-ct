import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: '/test-sreda-ct/', // ломает vscode, поэтому отдельную ветку создам
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
