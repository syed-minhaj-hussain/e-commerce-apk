import React from 'react';
import "./style.css";
import {AddToCartBtn} from "./AddToCartBtn";
import { HiOutlineHeart } from 'react-icons/hi';
// import { WishBtn } from './WishBtn';

export  const ProductCard = ({ name, price, image }) => {
    function callFunc() {
        console.log("clicked")
    }
    return (
        <div className="card">
        <div className="card-img">
        <img src={image} alt=""/>
         <button className="wish"><HiOutlineHeart size="2.3rem" /></button>
        </div>
        <div className="card-body">
       <div className="left">
       <p>{name}</p>
       <p>$ {price}</p>
       </div>
       <div className="right">
       <AddToCartBtn handleClick = {callFunc} />
       </div>
        </div>
        </div>
    )
}


