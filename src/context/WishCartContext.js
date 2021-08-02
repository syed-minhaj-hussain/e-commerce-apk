import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import { products } from "../productsDB";
import { reducerFunc } from "../utilities";

const WishCartContext = createContext();

export const WishCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    cart: [],
    products,
    wishlist: [],
  });

  localStorage.setItem("MyName", "Minhaj");
  useEffect(() => {
    dispatch({
      type: "CART-UPDATED",
      payload: JSON.parse(localStorage.getItem("myCart")) || [],
    });
    console.log(JSON.parse(localStorage.getItem("myCart")) || [{ a: "abc" }]);
  }, []);

  useEffect(() => {
    if (state.cart) {
      localStorage.setItem("myCart", JSON.stringify(state.cart || []));

      console.log(
        localStorage.setItem(
          "myCart2",
          JSON.stringify(state.cart || [{ a: "abc" }])
        )
      );
    }
  }, [state.cart]);

  return (
    <WishCartContext.Provider value={{ state, dispatch }}>
      {children}
    </WishCartContext.Provider>
  );
};

export const useWishCartContext = () => useContext(WishCartContext);
