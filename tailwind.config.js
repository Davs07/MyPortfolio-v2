/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "microsoft-sans-serif": ['"Microsoft Sans Serif"', "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        melodrama: ["Melodrama", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
