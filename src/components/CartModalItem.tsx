import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { CartItem } from "../context/CartProvider";

export function CartModalItem({ id, name, quantity, price }: CartItem) {
  const cartContext = useContext(CartContext);
  const itemPrice = (price * quantity).toFixed(2);
  const paragraphStyle = "text-[0.85rem]";

  return (
    <div className=" text-black grid relative grid-cols-5 justify-between p-5 items-center">
      <img
        src={`assets/images/id${id}.jpg`}
        className="w-10 bg-center bg-contain"
      />
      <p className={paragraphStyle}>{name}</p>
      <p className={paragraphStyle}>{quantity}</p>
      <p className={paragraphStyle}> {itemPrice}</p>
      <button
        className="hover:opacity-50 transition-opacity duration-300"
        onClick={() =>
          cartContext.dispatch({
            type: cartContext.reducerActions.REMOVE,
            payload: { id: id },
          })
        }
      >
        <img
          src="assets/images/cart-delete.svg"
          className="w-7 bg-contain bg-center ml-5"
          alt="aa"
        />
      </button>
    </div>
  );
}
