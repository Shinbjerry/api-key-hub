import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/api-key-hub/', // 关键：仓库名字前后斜杠
  plugins: [react()]
})
