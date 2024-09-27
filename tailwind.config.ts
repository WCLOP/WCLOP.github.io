import type { Config } from "tailwindcss";
import type { PluginUtils } from "tailwindcss/types/config";

const config: Partial<Config> = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
      typography: ({ theme }: PluginUtils) => ({
        DEFAULT: {
          css: {
            // ref: https://github.com/tailwindlabs/tailwindcss-typography/blob/main/src/styles.js
            h1: {
              fontWeight: '600',
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontSize: '2.1em',
            },
          },
        },
      }),
    },
  },
};

export default config;
