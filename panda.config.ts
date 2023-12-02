import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          nohemi: { value: "var(--font-nohemi), sans-serif" },
        },
        colors: {
          primary: { value: "#50CC8F" },
          "primary-text": { value: "#345445" },
          secondary: { value: "#272727" },
          "post-background": { value: "#313131" },
          "post-background-hover": { value: "#353535" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
