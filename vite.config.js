import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import history from 'connect-history-api-fallback'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 让预览/生产环境下刷新非首页时也能正确返回 index.html（SPA 路由回退）
    {
      name: 'spa-fallback',
      configurePreviewServer(server) {
        server.middlewares.use(history())
      },
    },
    // 构建后复制 index.html 为 404.html，便于 GitHub Pages 等静态托管刷新子路径不 404
    {
      name: 'copy-404',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
      },
    },
  ],
})
