import {
  createContext,
  ReactNode,
  useMemo,
  useReducer,
  useEffect,
} from "react";

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
  const getFilteredItems = (items: CartItem[]) =>
    items.filter((item) => item.id !== action.item.id);
  const getItemsPrice = (items: CartItem[]) =>
    items.reduce((counter, item) => counter + item.price * item.quantity, 0);
  const getItemsAmount = (items: CartItem[]) =>
    items.reduce((counter, item) => counter + item.quantity, 0);

  switch (action.type) {
    case ACTIONS.REMOVE: {
      const newItems = getFilteredItems(cart.items);
      return {
        items: newItems,
        totalItems: getItemsAmount(newItems),
        totalPrice: getItemsPrice(newItems),
      };
    }

    case ACTIONS.QUANITITY: {
      const newItems = [...getFilteredItems(cart.items), action.item];
      return {
        items: newItems,
        totalItems: getItemsAmount(newItems),
        totalPrice: getItemsPrice(newItems),
      };
    }
    default:
      return cart;
  }
}

function useCartReducer(initState: Cart) {
  const [cartState, dispatch] = useReducer(reducer, initState);
  useEffect(
    () => localStorage.setItem("cart", JSON.stringify(cartState)),
    [cartState]
  );

  const reducerActions = useMemo(() => {
    return ACTIONS;
  }, []);

  return { cartState, dispatch, reducerActions };
}

export type UseCartReducer = ReturnType<typeof useCartReducer>;

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
