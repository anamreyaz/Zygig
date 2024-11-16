/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        // 'euclid':['Euclid Circular A', 'sans-serif']
      }
    },
  },
  plugins: [],
}