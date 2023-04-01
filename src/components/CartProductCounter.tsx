import { useContext } from "react";
import { updateQuantity } from "../functions/updateQuantity";
import { CartContext } from "./CartProvider";

type PropsType = {
  itemPrice: string;
  quantity: number;
  id: number;
};

function CartProductCounter({ itemPrice, quantity, id }: PropsType) {
  const cartContext = useContext(CartContext);
  return (
    <div className="flex flex-col justify-around ml-auto md:mr-6">
      <p className="text-lg md:text-2xl">{itemPrice}$</p>
      <div className="grid grid-cols-3 w-[90px] bg-sky-600 rounded-md items-center text-white">
        <button
          className={`${quantity == 1 ? " pointer-events-none" : ""}`}
          onClick={() => updateQuantity(cartContext, id, -1)}
        >
          <p className={quantity !== 1 ? "text-xl" : "text-xl text-gray-500"}>
            -
          </p>
        </button>
        <p className="text-xl">{quantity}</p>
        <button onClick={() => updateQuantity(cartContext, id, 1)}>
          <p className="text-xl">+</p>
        </button>
      </div>
    </div>
  );
}

export default CartProductCounter;
