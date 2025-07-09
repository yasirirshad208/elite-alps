import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    fontFamily: {
        proxima: ['"Proxima Nova"', 'sans-serif'],
      }
    },
  },
//   plugins: [
//     require('tailwind-scrollbar'),
//     require('@tailwindcss/typography')
//   ],
} satisfies Config;
