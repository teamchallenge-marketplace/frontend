/** @type {import('tailwindcss').Config} */
export default {
  content: ["./head", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoColor: 'rgba(100, 140, 169, 0.70)',
        simpleStyle: 'rgba(245, 245, 245, 1)',
        colorYel: '#FFD752'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'simpleSize': '24px',
      },
      paddingFooter: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
}

