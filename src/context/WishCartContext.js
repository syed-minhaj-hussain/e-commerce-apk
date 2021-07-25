import { createContext, useReducer, useContext } from "react";
import { products } from "../productsDB";
import { reducerFunc } from "../utilities";

const WishCartContext = createContext();

export const WishCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    cart: [],
    products,
    wislist: [],
  });
  return (
    <WishCartContext.Provider value={{ state, dispatch }}>
      {children}
    </WishCartContext.Provider>
  );
};

export const useWishCartContext = () => useContext(WishCartContext);
