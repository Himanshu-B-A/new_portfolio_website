import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/new_portfolio_website/',
  build: {
    outDir: 'dist',
  },
});
