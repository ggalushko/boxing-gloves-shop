import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CartButton from "./CartButton";
import CartModal from "./CartModal";

function Header() {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const location = useLocation();
  useEffect(() => setModalIsOpened(false), [location]);

  return (
    <header className=" bg-sky-600 flex flex-row items-center relative p-2">
      <img
        src="../../src/images/logo.png"
        className="w-[54px] md:w-[96px] md:ml-10 ml-2 "
      ></img>
      <h1 className=" md:text-2xl font-bold text-white ml-6 xl:text-4xl text-sm">
        Boxing Gloves Shop
      </h1>
      <NavLink
        to="/shop"
        className=" text-sm xl:text-lg text-white md:ml-20 ml-5 mr-5"
      >
        Products
      </NavLink>
      {location.pathname === "/cart" ? null : (
        <CartButton modal={modalIsOpened} setModal={setModalIsOpened} />
      )}
      {modalIsOpened ? <CartModal /> : null}
    </header>
  );
}

export default Header;
