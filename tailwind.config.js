/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx", "./**/*.css"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
