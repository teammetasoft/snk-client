/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        primary: "#1890FF", 
        lightGray: "#777777",
        darkGray: "#444444",
        copyrightGray:"#777777"
      },
    },
  },
  plugins: [],
}
