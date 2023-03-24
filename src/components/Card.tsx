import { useContext, useEffect } from "react";
import { CartContext } from "./CartProvider";

type CardProps = {
  id: number;
  title: string;
  price: number;
};

function Card({ id, title, price }: CardProps) {
  const cartContext = useContext(CartContext);
  useEffect(
    () => localStorage.setItem("cart", JSON.stringify(cartContext.cartState)),
    [cartContext.cartState]
  );
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
            onClick={() => updateQuantity("add")}
          >
            +
          </button>
          <button
            className="bg-red-500 w-20"
            onClick={() => updateQuantity("delete")}
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

  function updateQuantity(action: "add" | "delete") {
    const itemToChange = cartContext.cartState.items.find((item) => item.id === id);
    const currQuantity = itemToChange!.quantity;

    console.log(cartContext.cartState.items);
    switch (action) {
      case "add":
        cartContext.dispatch({
          type: cartContext.reducerActions.QUANITITY,
          item: {
            id: id,
            name: title,
            quantity: currQuantity + 1,
            price: price,
          },
        });
        break;
      case "delete":
        currQuantity - 1 > 0
          ? cartContext.dispatch({
              type: cartContext.reducerActions.QUANITITY,
              item: {
                id: id,
                name: title,
                quantity: currQuantity - 1,
                price: price,
              },
            })
          : cartContext.dispatch({
              type: cartContext.reducerActions.REMOVE,
              item: {
                id: id,
                name: title,
                quantity: currQuantity,
                price: price,
              },
            });
        break;
    }
  }
}

export default Card;
