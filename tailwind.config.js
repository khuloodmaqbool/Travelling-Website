module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenColor: '#b5d407', // custom green color
      },
      height: {
        '360': '360px', // Extend width with a custom value
      },
    },
  },
  plugins: [],
}
