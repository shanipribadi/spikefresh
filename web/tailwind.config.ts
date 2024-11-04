import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

import {
  nord as light,
  sunset as dark,
} from "npm:daisyui/src/theming/themes.js";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  daisyui: {
    themes: [{ light: light }, { dark: dark }],
    logs: true,
  },
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [
    typography,
    // deno-lint-ignore no-explicit-any
    daisyui as any,
  ],
} satisfies Config;
