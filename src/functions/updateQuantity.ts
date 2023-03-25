import { UseCartReducer } from "../components/CartProvider";

type Product = {
  id: number;
  name: string;
  price: number;
};

export function updateQuantity(
  action: "add" | "delete",
  cartContext: UseCartReducer,
  product: Product
) {
  const itemToChange = cartContext.cartState.items.find(
    (item) => item.id === product.id
  );
  const currQuantity = itemToChange!.quantity;

  switch (action) {
    case "add":
      cartContext.dispatch({
        type: cartContext.reducerActions.QUANITITY,
        item: {
          id: product.id,
          name: product.name,
          quantity: currQuantity + 1,
          price: product.price,
        },
      });
      break;
    case "delete":
      currQuantity - 1 > 0
        ? cartContext.dispatch({
            type: cartContext.reducerActions.QUANITITY,
            item: {
              id: product.id,
              name: product.name,
              quantity: currQuantity - 1,
              price: product.price,
            },
          })
        : cartContext.dispatch({
            type: cartContext.reducerActions.REMOVE,
            item: {
              id: product.id,
              name: product.name,
              quantity: currQuantity,
              price: product.price,
            },
          });
      break;
  }
}
