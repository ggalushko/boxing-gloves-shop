/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'cart-minus': "url(../assets/images/cart-minus.svg)",
        'cart-plus': "url(../assets/images/cart-plus.svg)"
      }
    },
  },
  plugins: [],
};
