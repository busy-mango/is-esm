import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      fileName: 'index',
      name: '@busymango/is-esm',
    }
  }
})
