import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        groovetop: {
          navy:       "#1B2A4A",
          terracotta: "#C96F53",
          oat:        "#FAF7F1",
          white:      "#FFFFFF",
          green:      "#2EAD8C",
          blue:       "#618FED",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "DM Sans", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        wide:    "1320px",
      },
      fontSize: {
        "display-2xl": ["clamp(2.75rem, 6vw, 4.75rem)", { lineHeight: "0.94", letterSpacing: "-0.035em" }],
        "display-xl": ["clamp(3rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      spacing: {
        section: "120px",
        "section-sm": "80px",
      },
      animation: {
        "draw-line": "drawLine 0.8s ease forwards",
      },
      keyframes: {
        drawLine: {
          from: { strokeDashoffset: "100" },
          to: { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
