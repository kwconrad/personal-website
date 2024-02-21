import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "tablet-gothic-semi-condensed": [
        "tablet-gothic-semi-condensed",
        "sans-serif",
      ],
      "neue-haas-grotesk-display": ["neue-haas-grotesk-display", "sans-serif"],
      "neue-haas-unica": ["neue-haas-unica", "sans-serif"],
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
