module.exports = {
  purge: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff',
      'sub-text': '#A79F9C',
      'btn': '#FC5C50',
      'black': 'black',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
