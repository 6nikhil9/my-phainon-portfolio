import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "phainon-bg": "#0a0e17",
        "phainon-gold": "#D4AF37",
        "phainon-blue": "#00F0FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "phainon-gradient": "linear-gradient(to right, #050A14, #0F1623)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-cinzel)"], // For headings
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".glass-panel": {
          "background-color": "rgba(0, 240, 255, 0.05)",
          "backdrop-filter": "blur(12px)",
          "-webkit-backdrop-filter": "blur(12px)",
        },
      });
    }),
  ],
};
export default config;