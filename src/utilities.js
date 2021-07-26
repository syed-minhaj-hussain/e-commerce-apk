export const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD-TO-CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "ADD-TO-WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE-FROM-WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist?.filter((item) => item.id !== action.payload),
      };
    case "REMOVE-FROM-CART":
      return {
        ...state,
        cart: state.cart?.filter((item) => item.id !== action.payload),
      };
    case "MOVE-TO-WISHLIST":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        wishlist: [...state.wishlist, action.payload],
      };
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity === 7 ? 7 : item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        cart: state?.cart?.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity - 1 }
            : item
        ),
      };
  }
};
