import { createContext } from "react";
import { products } from "../productsDB";

const WishCartContext = createContext();

const WishCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    cart: [],
    products,
    wislist: [],
  });
  return (
    <WishCartContext.Provider value={{ cart, products, wishlist }}>
      {children}
    </WishCartContext.Provider>
  );
};

const useWishCartContext = () => useContext(WishCartContext);
