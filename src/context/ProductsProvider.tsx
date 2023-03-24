import React, { createContext, ReactElement, ReactNode, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type ContextChildren = {
  children?: ReactNode;
};

const initProducts: Product[] = [
  { id: 0, name: "Cleto Reyes", price: 149.99 },
  { id: 1, name: "Twins Special", price: 99.99 },
  { id: 2, name: "Everlast", price: 69.99 },
  { id: 3, name: "Hayabusa", price: 199.99 },
  { id: 4, name: "Fairtex", price: 49.99 },
  { id: 5, name: "Grant", price: 1999.99 },
];

export const ProductsContext = createContext<Product[]>([
  { id: -1, name: "", price: 0 },
]);

export default function ProductsProvider({
  children,
}: ContextChildren): ReactElement {
  const [products, setProducts] = useState(initProducts);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
