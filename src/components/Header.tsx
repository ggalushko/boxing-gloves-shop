import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CartButton from "./CartButton";
import CartModal from "./CartModal";

function Header() {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const location = useLocation();
  useEffect(() => setModalIsOpened(false), [location]);

  return (
    <header className=" bg-sky-600 flex flex-row items-center relative">
      <img src="../../src/images/logo.png" className=" pl-10"></img>
      <h1 className="text-4xl font-bold text-white ml-6">Boxing Gloves Shop</h1>
      <NavLink to="/shop" className="text-lg font-bold text-white ml-20">
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
