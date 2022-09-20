/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        speda: 'Speda',
        spedab: 'Speda-Bold',
        uni: 'UniQAIDAR_SAMAN',
      },
      boxShadow: {
        '3xl': '10px 10px 0 5px rgba(34, 211, 238, 1)',
      },
    },
  },
  plugins: [],
};
