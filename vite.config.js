import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 3290,
  },
  // preview: {
  //   host: '0.0.0.0',
  //   port: 7867,
  //   allowedHosts: ['e-learning-5x2n.onrender.com'], 
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})