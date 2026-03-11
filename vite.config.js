import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделяем вендорные библиотеки для лучшего кэширования
          vendor: ['react', 'react-dom', 'react-router-dom'],
          helmet: ['react-helmet-async'],
        },
      },
    },
  },
  // Оптимизация зависимостей
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
  },
})
