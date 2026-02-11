/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#fafaf9",
          warm: "#f5f5f4",
        },
        clay: {
          DEFAULT: "#ffedd5",
          dark: "#fed7aa",
        },
        forest: {
          DEFAULT: "#022c22",
          light: "#064e3b",
        },
        bark: "#44403c",
        stone: "#78716c",
      },
      fontFamily: {
        editorial: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
