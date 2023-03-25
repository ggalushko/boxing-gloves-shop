import { useContext, useEffect } from "react";
import { CartContext } from "./CartProvider";
import { updateQuantity } from "../functions/updateQuantity";

type CardProps = {
  id: number;
  title: string;
  price: number;
};

function Card({ id, title, price }: CardProps) {
  const cartContext = useContext(CartContext);
  const inCart = cartContext.cartState.items.find((item) => item.id === id);
  return (
    <article className="bg-white text-black rounded-md mt-3 w-[250px] h-[400px] flex flex-col ">
      <img
        src={`../../src/images/id${id}.jpg`}
        alt={`${title} boxing gloves`}
        className="bg-cover w-[200px] bg-center mt-6 ml-auto mr-auto mb-auto"
      />
      <h3 className="mb-2">{title}</h3>
      <p className="mb-2">{price}$</p>

      {inCart ? (
        <div className="flex justify-evenly">
          <p>In cart</p>
          <button
            className="bg-green-500 w-20"
            onClick={() =>
              updateQuantity("add", cartContext, { id, name: title, price })
            }
          >
            +
          </button>
          <button
            className="bg-red-500 w-20"
            onClick={() =>
              updateQuantity("delete", cartContext, { id, name: title, price })
            }
          >
            -
          </button>
        </div>
      ) : (
        <button
          className="bg-green-500 text-white rounded-md p-4 hover:opacity-50 transition-opacity duration-500 mb-0"
          onClick={() => {
            cartContext.dispatch({
              type: cartContext.reducerActions.QUANITITY,
              item: { id: id, name: title, quantity: 1, price: price },
            });
          }}
        >
          Add to cart
        </button>
      )}
    </article>
  );
}

export default Card;
