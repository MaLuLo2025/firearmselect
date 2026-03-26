/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#111110",
          800: "#1a1a18",
          700: "#2a2a28",
          600: "#3a3a38",
          500: "#555553",
          400: "#6a6a68",
          300: "#8a8a88",
          200: "#aaaaA8",
          100: "#d0d0ce",
          50: "#f0f0ee",
        },
        steel: {
          700: "#3a4a5a",
          600: "#4a5a6a",
          500: "#5a6a7a",
          400: "#7a8a9a",
          300: "#9aaaba",
          200: "#baccda",
          100: "#dde5ee",
          50: "#f0f4f8",
        },
        cream: {
          100: "#faf9f7",
          200: "#f5f4f0",
          300: "#eae8e4",
          400: "#d4d2ce",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        heading: ["1.375rem", { lineHeight: "1.3" }],
        subheading: ["1.2rem", { lineHeight: "1.3" }],
      },
    },
  },
  plugins: [],
};
