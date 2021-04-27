import React from 'react'
import { useWishCartContext } from '../../context/WishCartContext';
import "./cartStyle.css";
import { MdDelete } from 'react-icons/md';

export const CartListing = () => {
    const {state, dispatch} = useWishCartContext();
    console.log(state);
    const totalAmount = () => {
        let total = 0;
        state.cart.map(item => total += Number(item.quantity) * Number(item.price))
        return total;
    }
    const updatedCart = state.cart.reduce((acc, item) => {
        if(acc.find(accItem => accItem.id === item.id)){
            return [...acc];
        } else {
            return [...acc, item];
        }
    }, [])
    return (
       <div className="card-flex">
       <p>{updatedCart.length < 1 ? "Your Cart Is Empty" : "Cart Items"}</p>
       {updatedCart ? updatedCart.map(item => {
           return (
               <div key={item.id} className="card-list">
                    <div className="card-list-img">
                        <img  src={item.image_1} alt=""/>
                    </div>
                    <div className="card-list-body">
                       <div className="list-left">
                            <p>{item.name}</p>
                            <p>$ {item.price * item.quantity}</p>
                       </div>
                       <div className="list-right">
                            <button onClick={() => dispatch({type : "INCREMENT", payload : item})}> + </button>
                            <p className="quantity">{item.quantity}</p>
                            <button  onClick={() => dispatch({type : "DECREMENT", payload : item})}> - </button>

                       </div>
                       <div className="remove">
                       <button onClick={() => dispatch({type : "REMOVE-FROM-CART", payload : item})} className="remove-btn no-border">
                       <MdDelete />
                       </button>
                       </div>
                    </div>
               </div>
           )
       }) : null}
       <p className="amount-absolute">Total $ {totalAmount()}</p>
       </div>
    )
}

