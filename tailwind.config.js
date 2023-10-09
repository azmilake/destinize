/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['jakarta', 'Arial', 'sans-serif'],
      },

      colors: {
        primary: '#4475F2',
        secondary: '#E3EBFD',
        iconbg: '#EFE0B4',
        textIcon: '#5E6282',
        iconbg2: '#EFF2F6',
      },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
