import type { Config } from "tailwindcss";
import daisyui from "npm:daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [
    // deno-lint-ignore no-explicit-any
    daisyui as any,
  ],
} satisfies Config;
