/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FE8C00', // custom primary color
          dark: '#e67e22',
          orange:'#FE8C00', 
          slide:'#C2C2C2',
          grey:"#000000"   // darker shade of primary color
        },
        secondary: '#007bff', // custom secondary color
      },
      keyframes: {
        moveInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        moveInRight: 'moveInRight 300ms ease-out',
      },
    },
  },
  plugins: [],
}

