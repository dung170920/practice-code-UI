/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lato", "sans-serif"],
      },
      fontSize: {
        xxxs: "0.6875em",
        xxs: "0.75rem",
        xs: "0.8125rem",
        "3xl": "2rem",
      },
      borderWidth: {
        16: "16px",
      },
      colors: {
        gray: {
          600: "#9499C3",
        },
        yellow: {
          DEFAULT: "#FFD630",
        },
        red: {
          DEFAULT: "#E72D2D",
        },
        blue: {
          DEFAULT: "#298BFE",
          900: "#1A1C48",
        },
        green: {
          DEFAULT: "#79F74B",
        },
      },
    },
  },
  plugins: [],
};
