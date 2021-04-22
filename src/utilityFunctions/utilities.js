export const reducerFunc = (state, action) => {

    switch(action.type) {
        case "ADD-TO-CART" :
            return { ...state, cart : [...state.cart, action.payload] };
        case "INCREMENT" :
            return {...state, cart : state.cart.map(mappedItem => mappedItem.id === action.payload.id ? {...mappedItem, quantity : mappedItem.quantity + 1} : {...mappedItem})};
        case "DECREMENT" :
            return {...state, cart : state.cart.map(mappedItem => mappedItem.id === action.payload.id ? {...mappedItem, quantity : mappedItem.quantity > 1 ? mappedItem.quantity - 1 : mappedItem.quantity = 1 } : {...mappedItem}) }
        default : 
            break;
    }
}