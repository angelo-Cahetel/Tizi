/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'mainfont': ['Instrument Sans', 'sans-serif'],
      'titulofont': ['Italiana', 'serif']
    },
    fontSize: {
      'xs': '16px',
      'base': '20px',
      'titulo': '50px',
      'produto': '15px'
    },
    extend: {
      colors: {
        'tiziOff': '#fff7e7'
      }
    }
  },
  plugins: [],
}

