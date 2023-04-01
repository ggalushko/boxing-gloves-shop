import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";

function CartCheckout() {
  const cartContext = useContext(CartContext);
  const itemsAmount = cartContext.cartState.totalItems;
  const price = cartContext.cartState.totalPrice;
  return itemsAmount > 0 ? (
    <div
      className="flex flex-col place-content-center w-64 border h-80
     bg-white text-black text-2xl rounded-xl gap-8 lg:gap-20 pb-7 box-content mx-auto"
    >
      <p className=" mt-10">Items: {itemsAmount}</p>
      <p>
        Total price: <br />
        {price}$
      </p>
      <Link to={"/thank-you"}>
        <button
          onClick={() =>
            cartContext.dispatch({
              type: cartContext.reducerActions.CLEAR_CART,
            })
          }
          className="bg-green-500 w-32 h-16 text-2xl rounded-xl font-bold text-white m-auto"
        >
          Buy
        </button>
      </Link>
    </div>
  ) : (
    <div className="flex flex-col place-content-center bg-white text-black text-2xl rounded-xl gap-20 pb-7 box-content p-10">
      <p className="leading-[80px]">
        Your cart is empty <br /> Visit
        <Link to="/shop">
          <span className=" text-blue-600 cursor-pointer hover:opacity-75 transition-opacity duration-300">
            {" "}
            products{" "}
          </span>
        </Link>
        page to add a pair of good boxing gloves
      </p>
    </div>
  );
}
export default CartCheckout;
