/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      spacing: {
        34: "8.5rem",
      },
      colors: {
        gray: {
          900: "#1F1D2B",
          800: "#252836",
          500: "#808191",
          400: "#B7B9D2",
        },
        orange: {
          DEFAULT: "#FF7551",
        },
        green: {
          DEFAULT: "#22B07D",
        },
      },
      fontSize: {
        xxs: "0.6875rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      maxWidth: {
        xxs: "15rem",
      },
    },
  },
  plugins: [],
};
