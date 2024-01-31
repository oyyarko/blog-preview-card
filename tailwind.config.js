/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: "FigTree"
      }
    },
    colors: {
      primary: "#f6d050",
      font: "#121212",
      black: "#000",
      white: "#FFF",
      gray: "#6b6c6c"
    },
  },
  plugins: [],
};
