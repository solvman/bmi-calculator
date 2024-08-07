/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#345FF6",
        gunmetal: "#253347",
        "dark-electric-blue": "#5E6E85",
        borders: "#D8E2E7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "3xl": "2rem",
      },
      boxShadow: {
        card: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
      },
      borderRadius: {
        hero: "0px 0px 35px 35px",
        outcomes: "16px 80px 80px 16px",
      },
      backgroundImage: {
        hero: "linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
        outcomes: "linear-gradient(90deg, #345FF6 0%, #587DFF 100%)",
        tips: "linear-gradient(290deg, rgba(214, 230, 254, 0.25) 0%, rgba(214, 252, 254, 0.00) 100%)",
        "pattern-left": "url('/images/pattern-curved-line-left.svg')",
        "pattern-right": "url('/images/pattern-curved-line-right.svg')",
      },
      letterSpacing: {
        "tight-xl": "-2.4px",
      },
      gridTemplateColumns: {
        cards: "repeat(2, 365px)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
