// Design system compat config for CLI tools
// Actual tokens in src/styles/global.css via @theme
import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
} satisfies Config;
