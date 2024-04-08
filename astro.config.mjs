import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import astroI18next from "astro-i18next";
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), astroI18next(), robotsTxt()],
  site: 'https://cosmic-bublanina-bebbc0.netlify.app'
});