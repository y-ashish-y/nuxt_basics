/**
 * Nuxt configuration object
 * @see {@link https://nuxt.com/docs/api/configuration/nuxt-config}

 * Key configurations:
 * - Sets compatibility date to future-proof the application
 * - Enables development tools for better debugging experience
 * - Establishes root directory alias "@" for easier imports
 */
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "./"),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
});
