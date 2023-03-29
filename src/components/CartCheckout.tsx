import { useContext } from "react";
import { CartContext } from "./CartProvider";

function CartCheckout() {
  const cartContext = useContext(CartContext);
  const itemsAmount = cartContext.cartState.totalItems;
  const price = cartContext.cartState.totalPrice;
  return (
    <div className="flex flex-col place-content-center w-64 border h-80 bg-white text-black text-2xl rounded-xl gap-20 pb-7 box-content">
      <p className=" mt-10">Items: {itemsAmount}</p>
      <p>
        Total price: <br />
        {price}$
      </p>
      <button className="bg-green-500 w-32 h-16 text-2xl rounded-xl font-bold text-white m-auto">
        Buy
      </button>
    </div>
  );
}

export default CartCheckout;
