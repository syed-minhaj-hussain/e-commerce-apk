import React from 'react'

export const AddToCartBtn = ({handleClick}) => {
    // console.log(handleClick);
    return (
        <button className="btn btn-fill-success" onClick={handleClick}>Add To Cart</button>
    )
}
