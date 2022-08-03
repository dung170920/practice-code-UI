/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },
      colors: {
        gray: {
          900: "#171838",
        },
        teal: {
          // ...colors.teal,
          500: "#3AA39F",
        },
      },
    },
  },
  plugins: [],
};
