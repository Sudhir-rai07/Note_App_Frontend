/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        mukta:  ['"Mukta"', 'sans-serif'],
        poppins:  ["Poppins", 'sans-serif'],
        Bebas_Neue:  ["Bebas Neue", 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};