/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        goneWithTheWind: {
          '0%': {transform: 'translateY(11000%) rotate(0deg)'},
          '25%': {transform: 'translateY(9600%) rotate(90deg)'},
          '50%': {transform: 'translateY(9200%) rotate(180deg)'},
          '75%': {transform: 'translateY(10000%) rotate(270deg)'},
          '100%': {transform: 'translateY(11000%) rotate(360deg)'},
        },
      },
      animation: {
        goneWithTheWind1: 'goneWithTheWind 25s infinite linear',
        goneWithTheWind2: 'goneWithTheWind 15s infinite linear',
        goneWithTheWind3: 'goneWithTheWind 20s infinite linear',
        goneWithTheWind4: 'goneWithTheWind 60s infinite linear',
      }
    },
  },
  plugins: [],
}
