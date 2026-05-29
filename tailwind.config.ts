import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: {
          DEFAULT: "#111111",
          raised: "#181818",
        },
        primary: {
          DEFAULT: "#B7FF19",
          foreground: "#081100",
        },
        secondary: {
          DEFAULT: "#4F2BFF",
          foreground: "#F6F6F2",
        },
        foreground: {
          DEFAULT: "#F6F6F2",
          muted: "#A2A2A8",
        },
        border: {
          DEFAULT: "rgba(246, 246, 242, 0.12)",
          strong: "rgba(183, 255, 25, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 28px rgba(183, 255, 25, 0.12)",
        violet: "0 0 40px rgba(79, 43, 255, 0.16)",
      },
      borderRadius: {
        control: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
