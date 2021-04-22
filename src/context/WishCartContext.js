import React, { createContext, useContext, useReducer } from "react";
import {reducerFunc} from "../utilityFunctions/utilities";

const WishCartContext = createContext();

export const WishCartProvider = ({children}) => {
    const cart = [];
    const wishlist = [];
   const [state, dispatch] = useReducer(reducerFunc, {cart, wishlist});
   console.log(state.cart);
    return( <WishCartContext.Provider value={{state, dispatch}}>{children}</WishCartContext.Provider>);
}


export const useWishCartContext = () => {
    return useContext(WishCartContext);
}