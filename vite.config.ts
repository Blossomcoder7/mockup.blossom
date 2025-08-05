import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      verbose: true, // logs compressed files
      disable: false,
      threshold: 1024, // only assets >1kb are compressed
      algorithm: "gzip", // or 'brotliCompress' if supported
      ext: ".gz", // file extension
    }),
  ],
});
