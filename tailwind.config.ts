import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '13': '0.8125rem',  // 13px
        '21': '1.3125rem',  // 21px
        '34': '2.125rem',   // 34px
        '55': '3.4375rem',  // 55px
        '89': '5.5625rem',  // 89px
      }
    },
  },
  plugins: [],
};
export default config;
