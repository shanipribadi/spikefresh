import type { Config } from "tailwindcss";
import daisyui from "npm:daisyui";
import {nord as light, sunset as dark} from "npm:daisyui/src/theming/themes.js";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  daisyui: {
    themes: [{light: light}, {dark: dark}],
  },
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [
    // deno-lint-ignore no-explicit-any
    daisyui as any,
  ],
} satisfies Config;
