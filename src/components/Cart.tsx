import { useContext } from "react";
import CartElement from "./CartElement";
import { CartContext } from "./CartProvider";

function Cart() {
  const cartItems = useContext(CartContext).cartState.items;
  return (
    <div>
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartElement
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            ></CartElement>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Cart;
