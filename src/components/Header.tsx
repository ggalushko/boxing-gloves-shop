import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CartModal from "./CartModal";
import { CartContext } from "./CartProvider";
function Header() {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const cartItemsAmount = useContext(CartContext).cartState.totalItems;
  return (
    <header className=" bg-sky-600 flex flex-row items-center relative">
      <img src="../../src/images/logo.png" className=" pl-10"></img>
      <h1 className="text-4xl font-bold text-white ml-6">Boxing Gloves Shop</h1>
      <NavLink to="/shop" className="text-lg font-bold text-white ml-20">Products</NavLink>
      <button
        className="ml-auto mr-8 bg-white rounded-full p-2 relative"
        onClick={() => setModalIsOpened(!modalIsOpened)}
      >
        <img src="../../src/images/cart.png" className="w-10 h-10"></img>
        <p className="text-xs absolute font-bold bg-blue-700 rounded-full p-2 -bottom-4 -right-2 w-8 text-center">
          {cartItemsAmount}
        </p>
      </button>
      {modalIsOpened ? <CartModal></CartModal> : null}
    </header>
  );
}

export default Header;
