import React from 'react';
import {vintagedb} from "../../vintageDb";
import {ProductCard} from "./ProductCard";

export const Products = () => {
    return (
       <>
       {vintagedb.map(({id, name, price, image_2}) => <ProductCard
       key={id} name = {name} price = {price} image = {image_2}
       />)}
       </>
    )
}


