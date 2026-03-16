// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],  
  },

  integrations: [react()],

  fonts: [{
    provider: fontProviders.local(),
    name: "Inter Thai",
    cssVariable: "--font-inter-thai",
    options: {
      variants: [
        {
          src: ['./src/assets/fonts/InterThaiLoopless-Regular.woff2'],
          weight: 'normal',
          style: 'normal'
        },
        {
          src: ['./src/assets/fonts/InterThaiLoopless-Italic.woff2'],
          weight: 'normal',
          style: 'italic'
        },
        {
          src: ['./src/assets/fonts/InterThaiLoopless-Bold.woff2'],
          weight: 'bold',
          style: 'normal'
        },
        {
          src: ['./src/assets/fonts/InterThaiLoopless-BoldItalic.woff2'],
          weight: 'bold',
          style: 'italic'
        }
      ]
    }
  }]
});