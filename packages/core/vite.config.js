import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: '@your-org/core', // This must match your package.json name
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/, // Don't bundle Lit
    },
  },
});