import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/simonv08.github.io/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        404: "index.html",
      },
    },
  },
});
