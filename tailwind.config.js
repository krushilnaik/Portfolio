/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./styles/**/*.css"],
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
