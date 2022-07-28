/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wit: "#F5F5F5",
        grey: "#BBBBBB",
      },
    },
  },
  plugins: [],
  presets: [require("tw-utils/font/manrope/sans")],
}
