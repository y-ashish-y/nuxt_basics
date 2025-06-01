export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
});
