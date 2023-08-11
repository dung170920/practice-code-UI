/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
      },
      colors: {
        gray: {
          100: "#c7c8c8",
          500: "#89898a",
          600: "#23262c",
          700: "#343537",
          800: "#1b1e24",
          900: "#121418",
        },
        teal: {
          500: "#00c39a",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px var(--tw-shadow-color),0 0 12px 0 var(--tw-shadow-color)",
      },
      animation: {
        hover: "hover 5s ease-in-out infinite",
      },
      keyframes: {
        hover: {
          "0%,100%": {
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
