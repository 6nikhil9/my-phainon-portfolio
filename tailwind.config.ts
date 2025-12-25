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
        "bg-void": "var(--color-bg-void)",
        "bg-card": "var(--color-bg-card)",
        "bg-glass": "var(--color-bg-glass)", // Added glass background
        "accent-gold": "var(--color-accent-gold)",
        "accent-gold-dim": "var(--color-accent-gold-dim)",
        "accent-cyan": "var(--color-accent-cyan)",
        "accent-destruct": "var(--color-accent-destruct)",
        "text-primary": "var(--color-text-primary)",
        "text-muted": "var(--color-text-muted)",
        "text-gold": "var(--color-text-gold)", // Added gold text gradient
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-cinzel)"],
        header: ["var(--font-oswald)"], // Kept existing header font
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "reverse-spin": "spin-reverse 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      boxShadow: {
        "gold-glow": "var(--shadow-gold-glow)",
        "cyan-glow": "var(--shadow-cyan-glow)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".glass-panel": {
          "background-color": "var(--color-bg-glass)",
          "backdrop-filter": "blur(12px)",
          "-webkit-backdrop-filter": "blur(12px)",
        },
      });
    }),
  ],
};
export default config;
