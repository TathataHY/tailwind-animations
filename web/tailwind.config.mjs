import animations from "../src";
import theme from "../src/theme";

const { animation } = theme;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [animations],
  safelist: Object.keys(animation).map((animation) => `animate-${animation}`),
};
