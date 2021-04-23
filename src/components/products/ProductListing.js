import React from "react";
import { useWishCartContext } from "../../context/WishCartContext";
import {vintagedb} from "../../vintageDb";
import "./style.css";
import { HiOutlineHeart, HiHeart} from 'react-icons/hi';

export const ProductListing = () => {
    const {state : {wishlist}, dispatch} = useWishCartContext();
    console.log(wishlist);
    return (
       <div className="card-prod">
       {vintagedb ? vintagedb.map(product => {
           return <div key={product.id} className="card">
                <div className="card-img">
                    <img src={product.image_1} alt=""/>
                    
                    {wishlist.find((wishItem) => wishItem.id === product.id ) ? <button className=".no-border wish" onClick={ 
                         () => dispatch({type : "REMOVE-FROM-WISHLIST",  payload : product})}>  <HiHeart className="hiOut" /> 
                        </button> :
                    <button className=".no-border wish" onClick={ 
                         () => dispatch({type : "ADD-TO-WISHLIST",  payload : product})}>  <HiOutlineHeart className="hiOut" /> 
                        </button>}
                       

                            

                </div>
                <div className="card-body">
                   <div className="left">
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                   </div>
                   <div className="right">
                        <button className="btn btn-fill-success" onClick={() => dispatch({type : "ADD-TO-CART", payload : product})}>Add To Cart</button>
                   </div>
                </div>
           </div>
       }) : null}
       </div>
    )
}


