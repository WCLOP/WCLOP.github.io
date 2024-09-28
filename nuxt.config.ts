import { resolve } from "node:path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image'],

  content: {
    sources: {
      // overwrite default source AKA `content` directory
      content: {
        driver: 'fs',
        prefix: '/content',
        base: resolve(__dirname, 'content')
      },
    },
    documentDriven: {
      navigation: false,
      surround: false,
    },
  },

  css: ['~/assets/main.css'],
  compatibilityDate: '2024-08-29',
})