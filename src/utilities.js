export const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD-TO-CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "ADD-TO-WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
  }
};
