import { useContext } from "react";
import { Link } from "react-router-dom";
import CartModalItem from "./CartModalItem";
import { CartContext } from "./CartProvider";

function CartModal() {
  const cartProducts = useContext(CartContext).cartState.items;
  const cartIsEmpty = cartProducts.length === 0;
  return (
    <div
      className=" bg-white absolute top-0 right-0 translate-y-20 md:translate-y-32
     border-zinc-400 border rounded-md z-10 
      w-[320px] md:w-[420px] flex flex-col max-h-[400px] overflow-y-scroll"
    >
      {cartProducts
        .sort((a, b) => a.id - b.id)
        .map((item) => (
          <CartModalItem
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            key={item.id}
          />
        ))}

      {cartIsEmpty ? (
        <p className="text-black p-10 text-2xl">Your cart is empty</p>
      ) : (
        <Link to="/cart">
          <button
            className="bg-green-500 w-32 h-10 text-ml rounded-xl font-bold text-white m-auto mt-7 mb-5
          hover:opacity-75 transition-opacity duration-300"
          >
            Go to cart
          </button>
        </Link>
      )}
    </div>
  );
}

export default CartModal;
