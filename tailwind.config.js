/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      width:{
        '844px':'844px',
        '477px':'477px'
      },
      height:{
        '542px':'542px'
      },
      fontSize:{
        '10xl':'8.5rem'
      },
      colors:{
        'dark-green':'#025A4E'
      }
    },
  },
  plugins: [],
}

