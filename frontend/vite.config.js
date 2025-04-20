import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ACM-W/',   // 👈 VERY IMPORTANT for Vercel sub-path
  plugins: [react()],
})
