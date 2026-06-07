import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/API-Key-Hub/', // GitHub Pages使用仓库名作为base路径
  plugins: [react()]
})
