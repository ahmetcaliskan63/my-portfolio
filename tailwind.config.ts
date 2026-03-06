import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        secondary: "#6B7280",
        electric: "#00F0FF",
        cyber: "#BC13FE",
        space: {
          800: "#0A1225",
          900: "#050B18",
        },
        dark: {
          DEFAULT: "#1A1A1A",
          100: "#171717",
          200: "#2D2D2D",
          300: "#3D3D3D",
          400: "#4D4D4D",
        },
        light: {
          DEFAULT: "#FFFFFF",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

// Build Trigger: 2026-03-06 03:20

