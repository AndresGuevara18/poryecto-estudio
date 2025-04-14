/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#10374E',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'texturina': ['Texturina', 'serif'],
        'ledger': ['Ledger', 'serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out'
      },
      maxWidth: {
        '7xl': '1440px',
      }
    },
  },
  plugins: [],
};