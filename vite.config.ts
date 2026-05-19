import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      outDir: "dist",
      insertTypesEntry: true,
      include: ["src/**/*.ts", "src/**/*.vue"],
      exclude: ["src/dev/**"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(rootDir, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(rootDir, "src/index.ts"),
      name: "NexusUi",
      formats: ["es", "umd"],
      fileName: (format) =>
        format === "es" ? "nexus-ui.js" : "nexus-ui.umd.cjs",
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["vue"],
      output: {
        assetFileNames: "style.[ext]",
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: true,
    sourcemap: true,
  },
});
