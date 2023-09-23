/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        darkBlue: "rgb(0, 30, 108, 0.3)",
        lightBlue: "rgb(80, 137, 198, 0.5)",
        lightPurple: "rgb(192, 96, 161, 0.6)",
        veryDarkViolet: "rgb(59, 24, 95)",
        mediumDarkBlue: "rgb(73, 66, 228, 0.5)",
        mediumDarkGreenBlue: "rgb(25, 55, 109)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
