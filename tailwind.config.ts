import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["ivyjournal", "serif"],
        sans: ["neue-haas-grotesk-text", "sans-serif"],
      },
      colors: {
        interface: {
          red: "var(--color-interface-red)",
          orange: "var(--color-interface-orange)",
          yellow: "var(--color-interface-yellow)",
          green: "var(--color-interface-green)",
          blue: "var(--color-interface-blue)",
          indigo: "var(--color-interface-indigo)",
        },
      },
      borderRadius: {
        4: "4px",
        8: "8px",
      },
      fontSize: {
        xs: "10px",
      },
      boxShadow: {
        "border-shadow":
          "var(--shadow-border-inner-light), var(--shadow-border-inner-dark), var(--shadow-card-dark)",
      },
    },
  },
  plugins: [],
};
export default config;
