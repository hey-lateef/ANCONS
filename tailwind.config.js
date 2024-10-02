/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        textReveal: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        textReveal: 'textReveal 1s',
      },
      animationDuration: {
        2000: '2000ms',
      },
      animationDelay: {
        500: '500ms',
        1000: '1000ms',
      },
    },
  },
  plugins: [],
}