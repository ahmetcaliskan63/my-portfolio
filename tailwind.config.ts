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
      backgroundColor: {
        primary: "var(--background-primary)",
        secondary: "var(--background-secondary)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
