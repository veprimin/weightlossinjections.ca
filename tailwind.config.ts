import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#F2FAF7",
          100: "#E1F5EE",
          200: "#B9E9D5",
          400: "#5DCAA5",
          600: "#2DB88A",
          700: "#1D9E75",
          800: "#0F6E56",
          900: "#063D2B",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif:   ["var(--font-source-serif)", "Georgia", "serif"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            a: { color: "#0F6E56", textDecorationColor: "rgba(15,110,86,0.35)" },
            "h2, h3": { fontFamily: "var(--font-playfair), Georgia, serif" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
