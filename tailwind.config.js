/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "#FBF8F0",
        bgAcc: "#9585A6",
        textLight: "#FDFDFD",
        textOffLight: "#FAEAD1",
        textDark: "#1D1A1A",
        textAcc: "#7876C1",
      },
    },
  },
  plugins: [],
};
