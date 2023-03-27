import { CartContext, CartItem } from "./CartProvider";
import { updateQuantity } from "../functions/updateQuantity";
import { useContext } from "react";

function CartElement({ id, name, quantity, price }: CartItem) {
  const cartContext = useContext(CartContext);
  const itemPrice = (price * quantity).toFixed(2);
  return (
    <div className="bg-white text-black flex flex-row gap-10 mb-3 h-[150px] w-[700px] p-7 rounded-xl">
      <div className="w-[85px]">
        <img
          src={`../src/images/id${id}.jpg`}
          alt="a"
          className="bg-contain bg-center"
        />
      </div>

      <div className="flex flex-col">
        <p className=" text-left">{name}</p>

        <button
          className="flex flex-row items-center justify-center"
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

      <div className="flex flex-col justify-around ml-auto mr-6">
        <p className="text-2xl">{itemPrice}</p>
        <div className="flex flex-row bg-sky-500 rounded-md items-center">
          <button
            className={
              quantity !== 1
                ? "w-[40px] h-[40px]"
                : "w-[40px] h-[40px] pointer-events-none"
            }
            onClick={() =>
              updateQuantity("delete", cartContext, { id, name, price })
            }
          >
            <span
              className={quantity !== 1 ? "text-xl" : "text-xl text-gray-500"}
            >
              -
            </span>
          </button>
          <p className="text-xl w-11">{quantity}</p>
          <button
            className="w-[40px] h-[40px]"
            onClick={() =>
              updateQuantity("add", cartContext, { id, name, price })
            }
          >
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartElement;
