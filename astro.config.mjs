import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import pandacss from '@pandacss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), pandacss()],
  output: 'hybrid',
});
