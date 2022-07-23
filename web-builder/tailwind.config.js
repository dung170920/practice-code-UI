/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      colors: {
        blue: {
          600: "#006FF9",
        },
      },
    },
  },
  plugins: [],
};
