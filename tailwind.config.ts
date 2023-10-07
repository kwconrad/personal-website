import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "aktiv-grotesk": ["aktiv-grotesk", "sans-serif"],
      "mencken-std-head-compress": ["mencken-std-head-compress", "sans-serif"],
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
