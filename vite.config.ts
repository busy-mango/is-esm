import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: ["es2016", "chrome65"],
    lib: {
      entry: "index.ts",
      fileName: "index",
      name: "@busymango/is-esm",
    },
    rollupOptions: {
      output: {
        name: "@busymango/is-esm",
      },
      external: ["test", "vite.config.ts"],
    },
  },
});
