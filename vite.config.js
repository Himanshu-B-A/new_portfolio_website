import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use relative base so JS/CSS resolve correctly on GitHub Pages project sites
// (avoids blank screen when absolute /repo/ paths mis-resolve in some cases).
export default defineConfig({
  plugins: [react()],
  base: './',
  // Output to /docs so GitHub Pages can use: Settings → Pages → Branch "main" → Folder "/docs"
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
