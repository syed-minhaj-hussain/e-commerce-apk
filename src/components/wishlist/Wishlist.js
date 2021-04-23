import React from 'react';
import { useWishCartContext } from '../../context/WishCartContext';
import "../cart/cartStyle.css";
import { MdDelete} from 'react-icons/md';

export const Wishlist = () => {
    const {state : {wishlist}, dispatch} = useWishCartContext();
    return (
        <div className="card-flex">
        {wishlist.map(wishItem => {
            return <div key={wishItem.id} className="card-list">
            <div className="card-list-img">
                <img  src={wishItem.image_1} alt=""/>
            </div>
            <div className="card-list-body">
               <div className="list-left">
                    <p>{wishItem.name}</p>
                    <p>$ {wishItem.price * wishItem.quantity}</p>
               </div>
               <div className="right remove ">
               <button className="remove-btn no-border" onClick={() => dispatch({type : "REMOVE-FROM-WISHLIST", payload : wishItem})}><MdDelete /></button>
               </div>
            </div>
            </div>
       
        })}
        </div>
    )
}

