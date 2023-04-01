import { useContext } from "react";
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
  const amountInCart = inCart?.quantity.toString() || "";
  return (
    <article
      className="bg-white text-black 
     rounded-md 
     mt-3 
     md:w-[250px]  md:h-[400px] w-[175px] h-[280px]
     flex flex-col 
     hover:scale-105 transition-transform duration-200 
      shadow-sm shadow-emerald-100"
    >
      <img
        src={`../../src/images/id${id}.jpg`}
        alt={`${title} boxing gloves`}
        className="bg-cover w-[110px] md:w-[200px] bg-center mt-6 ml-auto mr-auto mb-auto"
      />
      <h3 className="mb-2">{title}</h3>
      <p className="mb-2">{price}$</p>

      {inCart ? (
        <div className="flex justify-evenly items-center pb-5">
          <p>{amountInCart} in cart</p>
          <button
            className="w-9 h-9 bg-cart-minus bg-contain hover:opacity-50 transition-opacity duration-300"
            onClick={() => updateQuantity(cartContext, id, -1)}
          ></button>
          <button
            className="w-9 h-9 bg-cart-plus bg-contain hover:opacity-50 transition-opacity duration-300"
            onClick={() => updateQuantity(cartContext, id, 1)}
          ></button>
        </div>
      ) : (
        <button
          className="bg-green-500 text-white rounded-b-md p-4 hover:opacity-75 transition-opacity duration-300 mb-0"
          onClick={() => {
            cartContext.dispatch({
              type: cartContext.reducerActions.ADD,
              payload: { id: id, name: title, quantity: 1, price: price },
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
