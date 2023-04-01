import React, { useContext } from "react";
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
        className=" md:p-2 ml-auto mr-2 md:mr-8 bg-white rounded-full p-1 
        relative hover:opacity-80 transition-opacity duration-300 shrink-0"
        onClick={() => setModal(!modal)}
      >
        <img
          src="../../src/images/cart.png"
          className="w-8 h-8 md:w-10 md:h-10  "
        ></img>
        <p
          className="w-4  text-xs absolute font-bold bg-blue-700 rounded-full 
        md:p-2 md:-bottom-4 md:-right-2 -bottom-2 -right-1 md:w-8 text-center"
        >
          {cartItemsAmount}
        </p>
      </button>
    </>
  );
}

export default CartButton;
