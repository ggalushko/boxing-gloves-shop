/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'cart-minus': "url(src/images/cart-minus.svg)",
        'cart-plus': "url(src/images/cart-plus.svg)"
      }
    },
  },
  plugins: [],
};
