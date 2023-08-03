/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },

      colors: {
        primary: "#f7c08a",
        secondary: "#333",
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

