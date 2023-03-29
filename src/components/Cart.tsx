import CartCheckout from "./CartCheckout";
import CartProducts from "./CartProducts";

function Cart() {
  return (
    <div className="flex justify-center m-auto w-fit gap-10 mt-10">
      <CartProducts></CartProducts>
      <CartCheckout></CartCheckout>
    </div>
  );
}

export default Cart;
