/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          'primary-gray': '#D1CCCC',  // Light Pinkish Gray
          'primary-gray-2': '#C7C2C2',  // Light Pinkish Gray
          'primary-dark': '#222222',  // Dark Charcoal
          'primary-white': '#FEFEFE', // Off White
      },
    },
  },
  plugins: [],
}

