import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-black": "#0A0A2B",
        "purple": "#952FFE",
        "dark-pink": "#C641C6",
        "dark-orange": "#FF676B",
        "blue":"#0A0A2B"
      },
      lineHeight: {
        customXs: "81%",
        customSm: "100%",
        customMd: "112%",
        customLg: "126%",
        customXl: "150%",
        custom2xl: "203%",
      },
      fontSize: {
        customXs: "13px",
        customSm: "40px",
        customMd: "52px",
        customLg: "64px",
        customXl: "84px",
      },
    },
  },
  plugins: [],
} satisfies Config;
