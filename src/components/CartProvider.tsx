import { createContext, ReactNode, useMemo, useReducer } from "react";

enum ACTIONS {
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

    case ACTIONS.QUANITITY: {
      return {
        items: [...getFilteredItems(cart), action.item],
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

const emptyCart: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const localStorageIsEmpty = !localStorage.getItem("cart");

const initData = localStorageIsEmpty
  ? emptyCart
  : JSON.parse(localStorage.getItem("cart")!);

export const CartContext = createContext<UseCartReducer>(initCartContextState);
type ContextChildren = {
  children?: ReactNode;
};

export default function CartProvider({ children }: ContextChildren) {
  return (
    <CartContext.Provider value={useCartReducer(initData)}>
      {children}
    </CartContext.Provider>
  );
}
