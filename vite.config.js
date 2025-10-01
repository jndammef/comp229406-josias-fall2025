import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    allowedHosts: [
      'comp229406-josias-fall2025-production.up.railway.app',
      '.railway.app', // Allow all Railway subdomains
      'localhost'
    ]
  }
})
