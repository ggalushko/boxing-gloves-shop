import { CartCheckout } from "./CartCheckout";
import { CartProducts } from "./CartProductList";

export function Cart() {
  return (
    <div className="flex flex-col lg:flex-row justify-center m-auto w-fit gap-8 mt-10">
      <CartProducts />
      <CartCheckout />
    </div>
  );
}
