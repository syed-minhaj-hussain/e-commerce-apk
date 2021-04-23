export const reducerFunc = (state, action) => {

    switch(action.type) {
        case "ADD-TO-CART" :
            return { ...state, cart : [...state.cart, action.payload] };
        case "INCREMENT" :
            return {...state, cart : state.cart.map(mappedItem => mappedItem.id === action.payload.id ? {...mappedItem, quantity : mappedItem.quantity + 1} : {...mappedItem})};
        case "DECREMENT" :
            return {...state, cart : state.cart.map(mappedItem => mappedItem.id === action.payload.id ? {...mappedItem, quantity : mappedItem.quantity > 1 ? mappedItem.quantity - 1 : mappedItem.quantity = 1 } : {...mappedItem}) };
        case "REMOVE-FROM-CART" :
            return {...state, cart : state.cart.filter(filterItem => filterItem.id !== action.payload.id)};
        case "ADD-TO-WISHLIST" : 
            return {...state, wishlist : [...state.wishlist, {...action.payload}]};
        case "REMOVE-FROM-WISHLIST" :
            return {...state, wishlist : state.wishlist.filter(filterItem => filterItem.id !== action.payload.id)};
        default : 
            break;
    }
}