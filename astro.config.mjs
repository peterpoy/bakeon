// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [
      tailwind(),
      alpinejs(),
      mdx(),
      (await import("@playform/inline")).default({
          Critters: true,
      }),
      sitemap({lastmod: new Date('2022-02-24')}),
    ],
    output: "static",
    devToolbar: {
        enabled: false,
    },
    experimental: {
        svg: true,
    },
    site: 'https://bakeon.ca/',
    trailingSlash: "always",
});