import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ACM-W/', // Ensure Vite knows the app is served under /ACM-W/
});
