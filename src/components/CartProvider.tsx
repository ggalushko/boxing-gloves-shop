import {
  createContext,
  ReactNode,
  useMemo,
  useReducer,
  useEffect,
} from "react";

enum ACTIONS {
  ADD = "ADD",
  REMOVE = "REMOVE",
  CHANGE_QUANITITY = "CHANGE_QUANTITY",
  CLEAR_CART = "CLEAR_CART",
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

function reducer(
  cart: Cart,
  action: {
    type: string;
    payload?: { id: number; quantity?: number; price?: number; name?: string };
  }
): Cart {
  const getFilteredItems = (items: CartItem[]) =>
    items.filter((item) => item.id !== action.payload!.id);
  const getItemsPrice = (items: CartItem[]) =>
    parseFloat(
      items
        .reduce((counter, item) => counter + item.price * item.quantity, 0)
        .toFixed(2)
    );
  const getItemsAmount = (items: CartItem[]) =>
    items.reduce((counter, item) => counter + item.quantity, 0);

  switch (action.type) {
    case ACTIONS.ADD: {
      const newItems = [
        ...cart.items,
        {
          id: action.payload!.id,
          name: action.payload!.name!,
          price: action.payload!.price!,
          quantity: 1,
        },
      ];
      return {
        items: newItems,
        totalItems: getItemsAmount(newItems),
        totalPrice: getItemsPrice(newItems),
      };
    }

    case ACTIONS.REMOVE: {
      const newItems = getFilteredItems(cart.items);
      return {
        items: newItems,
        totalItems: getItemsAmount(newItems),
        totalPrice: getItemsPrice(newItems),
      };
    }

    case ACTIONS.CHANGE_QUANITITY: {
      const updatedItem = cart.items.find(
        (item) => item.id == action.payload!.id
      );
      updatedItem!.quantity = action.payload!.quantity!;
      const newItems: CartItem[] = [
        ...getFilteredItems(cart.items),
        updatedItem!,
      ];
      return {
        items: newItems,
        totalItems: getItemsAmount(newItems),
        totalPrice: getItemsPrice(newItems),
      };
    }
    case ACTIONS.CLEAR_CART: {
      const newItems: CartItem[] = [];
      return {
        items: newItems,
        totalItems: 0,
        totalPrice: 0,
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

const emptyCart: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const initCartContextState = {
  cartState: emptyCart,
  dispatch: () => {},
  reducerActions: ACTIONS,
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
