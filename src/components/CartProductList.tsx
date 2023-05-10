import { useContext } from "react";
import { CartProduct } from "./CartProduct";
import { CartContext } from "../context/CartProvider";

export function CartProducts() {
  const cartItems = useContext(CartContext).cartState.items;
  return (
    <ul className="flex flex-col">
      {cartItems
        .sort((a, b) => a.id - b.id)
        .map((item) => (
          <li key={item.id}>
            <CartProduct
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            ></CartProduct>
          </li>
        ))}
    </ul>
  );
}
