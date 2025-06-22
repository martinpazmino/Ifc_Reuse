import { defineConfig } from 'vite';
import path from 'path';
import virtual from 'vite-plugin-virtual';
import fs from 'fs';

const orbitControls = fs.readFileSync('node_modules/three/examples/jsm/controls/OrbitControls.js', 'utf-8');
const objLoader = fs.readFileSync('node_modules/three/examples/jsm/loaders/OBJLoader.js', 'utf-8');
const mtlLoader = fs.readFileSync('node_modules/three/examples/jsm/loaders/MTLLoader.js', 'utf-8');

export default defineConfig({
  plugins: [
    virtual({
      'three/examples/jsm/controls/OrbitControls.js': orbitControls,
      'three/examples/jsm/loaders/OBJLoader.js': objLoader,
      'three/examples/jsm/loaders/MTLLoader.js': mtlLoader,
    }),
  ],
  build: {
    outDir: '../static/frontend',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'catalog-viewer.js'),
      name: 'CatalogViewer',
      fileName: 'catalog-viewer',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
      },
    }
  }
});
