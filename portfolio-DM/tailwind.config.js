/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
          'pink-header': '#FFCFD2'
      },
      fontFamily: {
        "Syne": ["Syne",'sans-serif'],
        "GolosText": [ 'Golos Text', 'sans-serif'],
        "Ultra": ['Ultra', 'serif'],
        "Kanit": ['Kanit', 'sans-serif'],
        "Alfa-Slab-One": ['Alfa Slab One'],
        "PublicPixel": ['PublicPixel', 'sans-serif'],
        "Passion-One": ['Passion One', 'cursive'],
        'spotifyFont': ['GothamMedium_1', 'sans-serif'],
        
      }
      
    },
  },
  plugins: [],
}

