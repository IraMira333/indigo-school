import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        pc: "40px",
      },
    },
    screens: {
      pc: "1024px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--foreground)",
      },
      fontFamily: {
        open: ["var(--font-open)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
