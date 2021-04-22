import React from 'react'
import { useWishCartContext } from '../../context/WishCartContext';
import "./cartStyle.css";

export const CartListing = () => {
    const {state, dispatch} = useWishCartContext();
    console.log(state);
    const totalAmount = () => {
        let total = 0;
        state.cart.map(item => total += Number(item.quantity) * Number(item.price))
        return total;
    }
    return (
       <div className="card-flex">
       {state.cart ? state.cart.map(item => {
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
                    </div>
               </div>
           )
       }) : null}
       <p>Total {totalAmount()}</p>
       </div>
    )
}

