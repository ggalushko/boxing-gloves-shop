import { CartItem } from "./CartProvider";

function CartElement({id, name, quantity, price}: CartItem) {
  return (
    <div className=" bg-white text-black flex flex-row gap-10 mt-3 mb-3">
      <img src={`../images/id${id}`} alt="" />
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{price * quantity}</p>
    </div>
  );
}

export default CartElement;
