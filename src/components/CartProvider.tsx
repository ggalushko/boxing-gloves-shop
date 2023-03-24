import { createContext, ReactNode, useMemo, useReducer } from "react";

enum ACTIONS {
  ADD = "ADD",
  REMOVE = "REMOVE",
  QUANITITY = "QUANTITY",
}

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

type Cart = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
};

type CartAction = {
  type: string;
  item: CartItem;
  quantity?: number;
};

function reducer(cart: Cart, action: CartAction): Cart {
  const getFilteredItems = (cart: Cart) =>
    cart.items.filter((item) => item.id !== action.item.id);
  const getItemsPrice = (cart: Cart) =>
    cart.items.reduce(
      (counter, item) => counter + item.price * item.quantity,
      0
    );
  const getItemsAmount = (cart: Cart) => cart.items.length;

  switch (action.type) {
    case ACTIONS.REMOVE: {
      return {
        items: getFilteredItems(cart),
        totalItems: getItemsAmount(cart),
        totalPrice: getItemsPrice(cart),
      };
    }

    case ACTIONS.ADD: {
      return {
        items: [...cart.items, action.item],
        totalItems: getItemsAmount(cart),
        totalPrice: getItemsPrice(cart),
      };
    }

    case ACTIONS.QUANITITY: {
      const itemToChange = cart.items.find(
        (item) => item.id === action.item.id
      )!;
      itemToChange.quantity = action.quantity!;
      return {
        items: [...getFilteredItems(cart), itemToChange],
        totalItems: getItemsAmount(cart),
        totalPrice: getItemsPrice(cart),
      };
    }
    default:
      return cart;
  }
}

function useCartReducer(initState: Cart) {
  const [cartState, dispatch] = useReducer(reducer, initState);

  const reducerActions = useMemo(() => {
    return ACTIONS;
  }, []);

  return { cartState, dispatch, reducerActions };
}

type UseCartReducer = ReturnType<typeof useCartReducer>;

const initCartContextState = {
  cartState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  dispatch: () => {},
  reducerActions: ACTIONS,
};

const initCart: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const CartContext = createContext<UseCartReducer>(initCartContextState);
type ContextChildren = {
  children?: ReactNode;
};

export default function CartProvider({ children }: ContextChildren) {
  return (
    <CartContext.Provider value={useCartReducer(initCart)}>
      {children}
    </CartContext.Provider>
  );
}
