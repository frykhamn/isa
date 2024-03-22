/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bgLight": "#FBF8F0",
        "bgPrimary": "#EDB169",
        "bgAcc": "#9585A6",
        "textLight": "#FDFDFD",
        "textOffLight": "#FAEAD1",
        "textDark": "#1D1A1A",
        "textAcc": "#937E9D",

      },
      fontFamily: {
        "robo": ['Roboto', 'ui-sans-serif', 'system-ui'],
        "cor": ['Cormorant Garamond', 'ui-sans-serif', 'system-ui'],
      },
      fontWeight: {
        'normal': '400',
        'bold': '700',
        // Add other weights as needed
      },
    },
  },
  plugins: [],
};
