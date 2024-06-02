import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {  // 代理
    // port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    warmup: { // 预热,加快页面初始化
      clientFiles: ['./src/components/**/*.tsx', './src/utils/big-utils.js', './src/pages/**/*.tsx'],
      ssrFiles: ['./src/server/modules/*.js'],
    },
  }
})
