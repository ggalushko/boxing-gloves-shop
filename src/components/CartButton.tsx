import React, { useContext} from "react";
import { CartContext } from "./CartProvider";

type props = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function CartButton({ modal, setModal }: props) {
  const cartItemsAmount = useContext(CartContext).cartState.totalItems;
  return (
    <>
      <button
        className="ml-auto mr-8 bg-white rounded-full p-2 relative hover:opacity-80 transition-opacity duration-300"
        onClick={() => setModal(!modal)}
      >
        <img src="../../src/images/cart.png" className="w-10 h-10"></img>
        <p className="text-xs absolute font-bold bg-blue-700 rounded-full p-2 -bottom-4 -right-2 w-8 text-center">
          {cartItemsAmount}
        </p>
      </button>
    </>
  );
}

export default CartButton;
