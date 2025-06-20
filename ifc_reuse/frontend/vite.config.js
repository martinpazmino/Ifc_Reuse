import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  root: './',  // Make sure you're in the frontend directory

  server: {
    port: 5173,
  },

  build: {
    sourcemap: true,
    outDir: '../static/frontend',  // Adjust this based on your Django/static setup
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
      input: './index.html',  // Use index.html as entry (important!)
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    target: 'esnext',  // This allows top-level await and modern syntax
  },

  esbuild: {
    target: 'esnext',
    loader: 'js',
    include: /.*\.js$/,  // allow ESM style imports even in .js files
  },
});
