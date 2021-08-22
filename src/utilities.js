export const reducerFunc = (state, action) => {
  switch (action.type) {
    case "UPLOAD-PRODUCTS":
      return { ...state, products: action.payload };
    case "UPLOAD-WISHLIST":
      return { ...state, wishlist: action.payload };
    case "UPLOAD-CART":
      return { ...state, cart: action.payload };
    case "ADD-TO-CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "ADD-TO-WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE-FROM-WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist?.filter(
          (item) => item?._id !== action.payload
        ),
      };
    case "REMOVE-FROM-CART":
      return {
        ...state,
        cart: state.cart?.filter((item) => item?._id !== action.payload),
      };
    case "MOVE-TO-WISHLIST":
      return {
        ...state,
        cart: state.cart.filter((item) => item?._id !== action.payload?._id),
        wishlist: [...state.wishlist, action.payload],
      };
    case "INCREMENT":
      return {
        ...state,
        cart: state?.cart?.map((item) =>
          item?._id === action.payload
            ? { ...item, quantity: item.quantity === 7 ? 7 : item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        cart: state?.cart?.map((item) =>
          item?._id === action.payload
            ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity - 1 }
            : item
        ),
      };
    case "MOVE-TO-CART":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item?._id !== action.payload?._id
        ),
        cart: [...state.cart, action.payload],
      };
    case "CART-UPDATED":
      return { ...state, cart: action.payload };
    // case "WISHLIST-UPDATED":
    //   return { ...state, wishlist: action.payload };

    default:
      return state;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "TOGGLE_INVENTORY":
      return { ...state, showInventoryAll: !state.showInventoryAll };
    case "TOGGLE_DELIVERY":
      return { ...state, showFastDeliveryOnly: !state.showFastDeliveryOnly };
    case "TOGGLE_RANGE":
      return { ...state, maxValue: action.payload };
    default:
      return state;
  }
};
