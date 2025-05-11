/**
 * Nuxt configuration object
 * @see {@link https://nuxt.com/docs/api/configuration/nuxt-config}
 *
 * @property {string} compatibilityDate - Sets the compatibility date for Nuxt features
 * @property {Object} devtools - Configuration for Nuxt DevTools
 * @property {boolean} devtools.enabled - Enables/disables the DevTools
 * @property {Object} alias - Custom path aliases configuration
 * @property {string} alias["@"] - Maps "@" to the project root directory
 *
 * Key configurations:
 * - Sets compatibility date to future-proof the application
 * - Enables development tools for better debugging experience
 * - Establishes root directory alias "@" for easier imports
 */
import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "./"),
  },
});
