import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "public-sans": ["var(--font-public-sans)"],
      "roboto-mono": ["var(--font-roboto-mono)"],
      archivo: ["var(--font-archivo)"],
    },
    colors: {
      yellow: "#e8c04a",
      cream: "#fafafa",
      black: "#1A1B1F",
      green: "#8BE4A2",
    },
    extend: {
      borderRadius: {
        4: "4px",
      },
      fontSize: {
        xs: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
