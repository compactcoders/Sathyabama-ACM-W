import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ACM-W/',
  build: {
    outDir: 'dist/ACM-W'
  },
  plugins: [react()]
});
