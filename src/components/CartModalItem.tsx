import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { CartItem } from "./CartProvider";

function CartModalItem({ id, name, quantity, price }: CartItem) {
  const cartContext = useContext(CartContext);

  return (
    <div className=" text-black grid relative grid-cols-5 justify-between p-5 items-center">
      <img
        src={`../../src/images/id${id}.jpg`}
        className="w-10 bg-center bg-contain"
      />
      <p className="text-[0.85rem]">{name}</p>
      <p className="text-[0.85rem]">{quantity}</p>
      <p className="text-[0.85rem]"> {price}</p>
      <button
      className="hover:opacity-50 transition-opacity duration-300"
        onClick={() =>
          cartContext.dispatch({
            type: cartContext.reducerActions.REMOVE,
            item: { id, name, quantity, price },
          })
        }
      >
        <img
          src="../../src/images/cart-delete.svg"
          className="w-7 bg-contain bg-center ml-5"
          alt="aa"
        />
      </button>
    </div>
  );
}

export default CartModalItem;
