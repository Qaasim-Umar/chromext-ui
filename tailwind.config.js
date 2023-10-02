/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
    
        'sora': 'Sora, sans-serif',
        'work': "Work Sans, sans-serif",
        'inter': "Inter , sans-serif",
      }
    },
  },
  plugins: [],
}