import { useContext } from "react";
import CartCheckout from "./CartCheckout";
import CartElement from "./CartElement";
import CartProducts from "./CartProducts";
import { CartContext } from "./CartProvider";

function Cart() {
  return (
    <div className="flex justify-center m-auto w-fit gap-10 mt-10">
      <CartProducts></CartProducts>
      <CartCheckout></CartCheckout>
    </div>
  );
}

export default Cart;
