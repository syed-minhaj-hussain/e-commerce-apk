import React from "react";
import { useWishCartContext } from "../../context/WishCartContext";
import {vintagedb} from "../../vintageDb";
import "./style.css";
import { HiOutlineHeart } from 'react-icons/hi';

export const ProductListing = () => {
    const {dispatch} = useWishCartContext();
    return (
       <div className="card-prod">
       {vintagedb ? vintagedb.map(product => {
           return <div key={product.id} className="card">
                <div className="card-img">
                    <img src={product.image_1} alt=""/>
                    <button className=".no-border wish"><HiOutlineHeart className="hiOut" /></button>
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


