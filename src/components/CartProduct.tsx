import { CartContext, CartItem } from "../context/CartProvider";
import { useContext } from "react";
import CartProductCounter from "./CartProductCounter";

function CartElement({ id, name, quantity, price }: CartItem) {
  const cartContext = useContext(CartContext);
  const itemPrice = (price * quantity).toFixed(2);
  return (
    <div
      className="bg-white text-black flex  gap-5 md:gap-10 mb-3 p-3 md:p-7 rounded-xl
     h-[140px] md:h-[150px] md:w-[520px]"
    >
      <div className="w-[85px]">
        <img
          src={`../../assets/images/id${id}.jpg`}
          alt={`${name} boxing gloves`}
          className="bg-contain bg-center w-full"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-left">{name}</p>

        <button
          className="flex flex-row items-center justify-center mt-auto hover:opacity-50 transition-opacity duration-300"
          onClick={() =>
            cartContext.dispatch({
              type: cartContext.reducerActions.REMOVE,
              payload: { id: id },
            })
          }
        >
          <img
            src="../../assets/images/cross.svg"
            className="w-[40px] bg-contain bg-center"
          ></img>
          Delete
        </button>
      </div>

      <CartProductCounter itemPrice={itemPrice} quantity={quantity} id={id} />
    </div>
  );
}

export default CartElement;
