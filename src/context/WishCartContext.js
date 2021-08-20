import { createContext, useReducer, useContext, useEffect } from "react";
import { reducerFunc } from "../utilities";

const WishCartContext = createContext();

export const WishCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    cart: [],
    products: null,
    wishlist: [],
  });

  useEffect(() => {
    dispatch({
      type: "CART-UPDATED",
      payload: JSON.parse(localStorage.getItem("myCart")) || [],
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "WISHLIST-UPDATED",
      payload: JSON.parse(localStorage.getItem("myWishlist")) || [],
    });
  }, []);

  useEffect(() => {
    if (state.cart) {
      localStorage.setItem("myCart", JSON.stringify(state.cart));
    }
  }, [state.cart]);
  useEffect(() => {
    if (state.wishlist) {
      localStorage.setItem("myWishlist", JSON.stringify(state.wishlist));
    }
  }, [state.wishlist]);

  return (
    <WishCartContext.Provider value={{ state, dispatch }}>
      {children}
    </WishCartContext.Provider>
  );
};

export const useWishCartContext = () => useContext(WishCartContext);
