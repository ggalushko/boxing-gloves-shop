import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";

type props = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function CartButton({ modal, setModal }: props) {
  const cartItemsAmount = useContext(CartContext).cartState.totalItems;
  return (
    <>
      <button
        className="p-1 md:p-2 ml-auto mr-2 md:mr-8 bg-white rounded-full  
        relative hover:opacity-80 transition-opacity duration-300 shrink-0"
        onClick={() => setModal(!modal)}
      >
        <img
          src="assets/images/cart.png"
          className="w-8 h-8 md:w-10 md:h-10  "
        ></img>
        <p
          className="w-4 md:w-8 text-xs text-center absolute font-bold bg-blue-700 rounded-full 
          -bottom-2 -right-1 md:-bottom-4 md:-right-2 md:p-2 "
        >
          {cartItemsAmount}
        </p>
      </button>
    </>
  );
}

export default CartButton;
