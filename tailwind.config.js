/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#82533d",
          dark: "#5c3b2b",
          light: "#a68760",
        },
        cream: "#f3e3cb",
        sand: "#f1e8bc",
        gold: "#ffc400",
        ink: "#353535",
      },
    },
  },
  plugins: [],
}
