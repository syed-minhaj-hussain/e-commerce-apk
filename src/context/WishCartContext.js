import { createContext, useReducer, useContext, useEffect } from "react";
import { reducerFunc } from "../utilities";
import { useAuthContext } from "./AuthContext";
import axios from "axios";

const WishCartContext = createContext();

export const WishCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    cart: JSON.parse(localStorage.getItem("myCart")) || [],
    products: null,
    wishlist: [],
  });

  const { auth } = useAuthContext();

  console.log(state.products);

  // useEffect(() => {
  //   dispatch({
  //     type: "CART-UPDATED",
  //     payload: JSON.parse(localStorage.getItem("myCart")) || [],
  //   });
  // }, []);

  // useEffect(() => {
  //   dispatch({
  //     type: "WISHLIST-UPDATED",
  //     payload: JSON.parse(localStorage.getItem("myWishlist")) || [],
  //   });
  // }, []);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  }, [state.cart]);
  useEffect(() => {
    setTimeout(
      (async function () {
        try {
          const response = await axios.post(
            "https://vintage-mart-backend.herokuapp.com/cart",
            state?.cart,
            { headers: { authorization: auth } }
          );
          // console.log(response?.data?.savedPlaylist);
        } catch (err) {
          console.log({ err });
        }
      })(),
      2000
    );
  }, [state?.cart]);

  return (
    <WishCartContext.Provider value={{ state, dispatch }}>
      {children}
    </WishCartContext.Provider>
  );
};

export const useWishCartContext = () => useContext(WishCartContext);
