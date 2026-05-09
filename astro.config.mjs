// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

/**
 * Tech-Stack Obfuscation Vite Plugin
 *
 * Renames all technology-identifying patterns in production builds:
 * 1. `--tw-*` → `--c-*` (Tailwind CSS custom properties)
 * 2. `@layer properties/theme/base/utilities/components` → generic names
 * 3. `@property --tw-*` → `@property --c-*`
 *
 * This defeats Wappalyzer/BuiltWith/WhatRuns detection which fingerprint
 * these patterns as Tailwind CSS indicators.
 */
function obfuscateTechStack() {
  // Layer name mapping: Tailwind-specific → generic
  const layerMap = {
    'properties': 'base-props',
    'theme': 'design-tokens',
    'base': 'reset',
    'utilities': 'helpers',
    'components': 'blocks',
  };

  return {
    name: 'obfuscate-tech-stack',
    enforce: 'post',
    generateBundle(options, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        // Process CSS assets
        if (chunk.type === 'asset' && chunk.fileName.endsWith('.css')) {
          let css = chunk.source;

          // 1. Rename --tw- prefix to --c-
          css = css.replace(/--tw-/g, '--c-');

          // 2. Rename Tailwind-specific @layer names
          // Pattern: @layer <name>{ or @layer <name>;
          for (const [twName, genericName] of Object.entries(layerMap)) {
            // @layer name{ → @layer generic{
            css = css.replace(new RegExp(`@layer\\s+${twName}\\s*\\{`, 'g'), `@layer ${genericName}{`);
            // @layer name; (layer statement)
            css = css.replace(new RegExp(`@layer\\s+${twName}\\s*;`, 'g'), `@layer ${genericName};`);
            // ,name in layer order lists like @layer reset, name, helpers;
            css = css.replace(new RegExp(`,\\s*${twName}\\b`, 'g'), `,${genericName}`);
          }

          chunk.source = css;
        }

        // Process JS chunks (may contain inline CSS or references)
        if (chunk.type === 'chunk' && chunk.fileName.endsWith('.js')) {
          if (typeof chunk.code === 'string' && chunk.code.includes('--tw-')) {
            chunk.code = chunk.code.replace(/--tw-/g, '--c-');
          }
        }
      }
    },
  };
}

/**
 * Strip HTML Comments Plugin
 *
 * Removes all HTML comments from generated pages.
 * Frameworks often inject comments like <!-- Astro... --> that
 * reveal the technology stack to detection tools.
 */
function stripHtmlComments() {
  return {
    name: 'strip-html-comments',
    enforce: 'post',
    generateBundle(options, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type === 'asset' && chunk.fileName.endsWith('.html')) {
          if (typeof chunk.source === 'string') {
            // Remove HTML comments but preserve conditional comments
            chunk.source = chunk.source.replace(/<!--\s*(?!\[if)(?!<!)(?!\[endif)[\s\S]*?-->/g, '');
          }
        }
      }
    },
  };
}

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    prerenderEnvironment: 'node',
    imageService: 'passthrough',
  }),
  site: 'https://allstarcleaning.ca',

  // === TECH-STACK OBFUSCATION ===
  // Rename /_astro/ → /static/ to defeat Astro path detection
  build: {
    assets: 'static',
  },

  // Remove dev toolbar in production (contains Astro identifiers)
  devToolbar: {
    enabled: false,
  },

  integrations: [
    react(),
    markdoc(),
    keystatic(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fr: 'fr' },
      },
    }),
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: 'manual',
  },

  vite: {
    optimizeDeps: {
      exclude: ['virtual:keystatic-config', 'virtual:keystatic-content-components'],
    },
    resolve: {
      alias: { '@': '/src' },
    },
    build: {
      // Never generate source maps — they reveal original file structure
      sourcemap: false,
      // Minify aggressively to remove comments and identifiers
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          // Generic chunk naming — no framework identifiers
          chunkFileNames: 'static/[name].[hash].js',
          entryFileNames: 'static/[name].[hash].js',
          assetFileNames: 'static/[name].[hash][extname]',
        },
      },
    },
    css: {
      devSourcemap: false,
    },
    plugins: [
      obfuscateTechStack(),
      stripHtmlComments(),
    ],
  },
});
