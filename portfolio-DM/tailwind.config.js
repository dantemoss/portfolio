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
        "GolosText":[ 'Golos Text', 'sans-serif'],
        "Ultra": ['Ultra', 'serif']
      }
      
    },
  },
  plugins: [],
}

