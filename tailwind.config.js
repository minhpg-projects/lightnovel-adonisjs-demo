module.exports = {
  purge: ["./resources/views/**/*.edge",
    "./resources/assets/ts/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),require('daisyui')],
  daisy: {
  }
}
