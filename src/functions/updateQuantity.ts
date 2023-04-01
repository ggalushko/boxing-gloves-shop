import { UseCartReducer } from "../components/CartProvider";

export function updateQuantity(
  cartContext: UseCartReducer,
  id: number,
  quantity: number
) {
  const itemToChange = cartContext.cartState.items.find(
    (item) => item.id === id
  );
  const currQuantity = itemToChange!.quantity;
  const newQuantity = currQuantity + quantity;
  newQuantity > 0
    ? cartContext.dispatch({
        type: cartContext.reducerActions.CHANGE_QUANITITY,
        payload: {
          id: id,
          quantity: newQuantity,
        },
      })
    : cartContext.dispatch({
        type: cartContext.reducerActions.REMOVE,
        payload: {
          id: id,
        },
      });
}
