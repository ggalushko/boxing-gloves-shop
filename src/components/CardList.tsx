import { useContext } from "react";
import Card from "./Card";
import { ProductsContext } from "../context/ProductsProvider";

function CardList() {
  const products = useContext(ProductsContext);
  return (
    <div className="m-auto flex justify-center pl-18 pr-18 mt-12">
      <ul className="flex flex-row flex-wrap gap-6 ml-auto justify-center">
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
