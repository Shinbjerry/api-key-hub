import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 关键：设置为你的仓库名
  base: '/api-key-hub/'
})
