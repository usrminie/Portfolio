module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#4b5563',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'blue-light': '#63a4ff',
        'blue-dark': '#83eaf1',
      }),
    },
  },
  variants: {
    extend: {
      borderColor: ['dark'],
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};


