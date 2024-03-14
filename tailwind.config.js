/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#345FF6",
        gunmetal: "#253347",
        darkElectricBlue: "#5E6E85",
        borders: "#D8E2E7",
        pureWhite: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
