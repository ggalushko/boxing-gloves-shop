import { CartContext, CartItem } from "./CartProvider";
import { updateQuantity } from "../functions/updateQuantity";
import { useContext } from "react";


function CartElement({ id, name, quantity, price }: CartItem) {
  const cartContext = useContext(CartContext);
  return (
    <div className=" bg-white text-black flex flex-row gap-10 mt-3 mb-3">
      <img
        src={`../src/images/id${id}.jpg`}
        alt="a"
        className="w-[100px] h-[100px] bg-contain bg-center"
      />
      <p>{name}</p>
      <p>{quantity}</p>
      <button
        className="bg-green-500"
        onClick={() => updateQuantity("add", cartContext, { id, name, price })}
      >
        +
      </button>
      <button
        className="bg-blue-400"
        onClick={() =>
          updateQuantity("delete", cartContext, { id, name, price })
        }
      >
        -
      </button>
      <p>{price * quantity}</p>
      <button
        className="bg-red-500"
        onClick={() =>
          cartContext.dispatch({
            type: cartContext.reducerActions.REMOVE,
            item: { id, name, quantity, price },
          })
        }
      >
        Remove
      </button>
    </div>
  );
}

export default CartElement;
