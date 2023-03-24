import { ReactElement, ReactNode, useContext } from "react";
import Card from "./Card";
import { ProductsContext } from "../context/ProductsProvider";

function CardList() {
  const products = useContext(ProductsContext);
  return (
    <div className="m-auto flex justify-center ">
      <ul className="flex flex-row flex-wrap gap-6 ml-auto pl-6 pr-6 justify-center">
        {products.map((item) => (
          <li key={item.id}>
            <Card id={item.id} title={item.name} price={item.price}></Card>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardList;
