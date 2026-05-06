import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  base: "/portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
});
