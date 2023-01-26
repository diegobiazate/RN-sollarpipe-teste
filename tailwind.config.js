/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        background: '#3D2F49',
        orange: '#F27F3E',
        pink: '#B75377',
        purple: '#6534A4'
        
      },
      fontFamily:{
        regular: 'Poppins_500Medium',
        bold: 'Poppins_700Bold'
      },
    },
  },
  plugins: [],
}
