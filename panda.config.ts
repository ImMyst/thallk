import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: 'react',

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
          secondary: { value: "#272727" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
