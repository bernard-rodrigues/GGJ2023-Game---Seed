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
        goneWithTheWind2: {
          '0%': {transform: 'translateY(12000%) rotate(360deg)'},
          '25%': {transform: 'translateY(10000%) rotate(270deg)'},
          '50%': {transform: 'translateY(9000%) rotate(180deg)'},
          '75%': {transform: 'translateY(10000%) rotate(90deg)'},
          '100%': {transform: 'translateY(12000%) rotate(0deg)'},
        },
      },
      animation: {
        goneWithTheWind1: 'goneWithTheWind 25s infinite linear',
        goneWithTheWind2: 'goneWithTheWind 15s infinite linear',
        goneWithTheWind3: 'goneWithTheWind 20s infinite linear',
        goneWithTheWind4: 'goneWithTheWind 60s infinite linear',
        goneWithTheWind5: 'goneWithTheWind2 10s infinite linear',
        goneWithTheWind6: 'goneWithTheWind2 40s infinite linear',
        goneWithTheWind7: 'goneWithTheWind2 35s infinite linear',
        goneWithTheWind8: 'goneWithTheWind2 30s infinite linear',
      }
    },
  },
  plugins: [],
}
