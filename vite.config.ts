import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 必须是相对路径，兼容所有部署环境 
  build: {
    outDir: 'dist', // 确保输出目录正确
    assetsDir: 'assets', // 确保资源目录正确
  }
});
