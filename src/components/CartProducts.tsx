import { useContext } from "react";
import CartElement from "./CartElement";
import { CartContext } from "./CartProvider";

function CartProducts() {
  const cartItems = useContext(CartContext).cartState.items;
  return (
    <ul className="flex flex-col">
      {cartItems
        .sort((a, b) => a.id - b.id)
        .map((item) => (
          <li key={item.id}>
            <CartElement
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            ></CartElement>
          </li>
        ))}
    </ul>
  );
}

export default CartProducts;
