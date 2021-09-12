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

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  }, [state.cart]);
  useEffect(() => {
    (async function () {
      if (auth) {
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
      }
    })();
  }, [state?.cart]);
  useEffect(() => {
    (async function () {
      console.log("Wishlist Updated");
      if (auth) {
        try {
          const response = await axios.get(
            "https://vintage-mart-backend.herokuapp.com/wishlist",

            { headers: { authorization: auth } }
          );
          console.log(response);
          if (response.success === true) {
            dispatch({
              type: "UPLOAD-WISHLIST",
              payload: response?.data?.wishlist,
            });
          }
        } catch (err) {
          console.log({ err });
        }
      }
    })();
  }, [state?.wishlist]);

  return (
    <WishCartContext.Provider value={{ state, dispatch }}>
      {children}
    </WishCartContext.Provider>
  );
};

export const useWishCartContext = () => useContext(WishCartContext);
