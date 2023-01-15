/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "pink-light": "#FEE0D9",
        "pink-dark": "#CC898B",
        "purple-light": "#C0BCE4",
        "purple-dark": "#413C6A",
        "blue-light": "#B4DBFF",
        "blue-dark": "#3AA1FF",
        "gray-light": "#D3DAE0",
      },
    },
  },
  plugins: [],
};
