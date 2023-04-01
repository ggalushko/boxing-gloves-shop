import { CartContext, CartItem } from "./CartProvider";
import { updateQuantity } from "../functions/updateQuantity";
import { useContext } from "react";

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
          src={`../src/images/id${id}.jpg`}
          alt="a"
          className="bg-contain bg-center w-full"
        />
      </div>

      <div className="flex flex-col">
        <p className=" text-left">{name}</p>

        <button
          className="flex flex-row items-center justify-center mt-auto hover:opacity-50 transition-opacity duration-300"
          onClick={() =>
            cartContext.dispatch({
              type: cartContext.reducerActions.REMOVE,
              item: { id, name, quantity, price },
            })
          }
        >
          <img
            src="../../src/images/cross.svg"
            className="w-[40px] bg-contain bg-center"
          ></img>
          Delete
        </button>
      </div>

      <div className="flex flex-col justify-around ml-auto md:mr-6">
        <p className="text-lg md:text-2xl">{itemPrice}$</p>
        <div className="grid grid-cols-3 w-[90px] bg-sky-600 rounded-md items-center text-white">
          <button
            className={`${quantity == 1 ? " pointer-events-none" : ""}`}
            onClick={() =>
              updateQuantity("delete", cartContext, { id, name, price })
            }
          >
            <p className={quantity !== 1 ? "text-xl" : "text-xl text-gray-500"}>
              -
            </p>
          </button>
          <p className="text-xl">{quantity}</p>
          <button
            onClick={() =>
              updateQuantity("add", cartContext, { id, name, price })
            }
          >
            <p className="text-xl">+</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartElement;
