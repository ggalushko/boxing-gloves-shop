import { createContext, ReactElement, ReactNode, useState } from "react";
import { products } from "../data/products";

type Product = {
  id: number;
  name: string;
  price: number;
};

type ContextChildren = {
  children?: ReactNode;
};

const initProducts: Product[] = products;

export const ProductsContext = createContext<Product[]>([
  { id: -1, name: "", price: 0 },
]);

export default function ProductsProvider({
  children,
}: ContextChildren): ReactElement {
  const products = initProducts;
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
