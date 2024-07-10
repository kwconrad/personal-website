import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "work-sans": ["var(--font-work-sans)"],
      archivo: ["var(--font-archivo)"],
    },
    colors: {
      cream: "#F6FBFD",
      yellow: "#e8c04a",
      pink: "#DFA1A8",
      black: "#221F20",
      blue: "#313EC3",
    },
  },
  plugins: [],
};
export default config;
