/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        'body': ['Nunito', 'monospace'],
        'play': ['Playwrite DE VA Guides'],
      }
    },
  },
  plugins: [],
};
