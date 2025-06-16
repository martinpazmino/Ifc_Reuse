import { defineConfig } from 'vite';

export default defineConfig({

  server: {
    port: 5173,
  },
  build: {
    sourcemap: true,
    outDir: '../static/frontend',
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
      input: './main.js',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    target: 'esnext', // Uncommented to support top-level await
  },
});