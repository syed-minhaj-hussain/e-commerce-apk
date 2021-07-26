export const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD-TO-CART":
      return { ...state, cart: [...state.cart, action.payload] };
  }
};
