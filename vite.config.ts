import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: true,
    minify: "esbuild",
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000",
    },
  },
});
