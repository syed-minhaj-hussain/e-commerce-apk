import React,{useState} from 'react';
import { useParams } from 'react-router';
import {vintagedb} from "../../vintageDb";
// import {ProductListing} from "./ProductListing"
import "./style.css";

export const Product = () => {
    const {id} = useParams();
    const {name, description, image_1, image_2, image_3 } = vintagedb.find(item => item.id === Number(id));
    const [img, setImg] = useState(image_1);
    return (
       <div className="products">
       <h1>{name}</h1>

        <div className="card-flex">
        <div className="left">
        <img src={img} style={{marginBottom : "1rem"}} width="400px"  height="500px" alt=""/>
      

        
        </div>
        <div className="right">
        <button className="no-border" onClick={() => setImg(image_1)}><img className="img-border" src={image_1} width="70px" height="70px" alt=""/></button>
        <button className="no-border" onClick={() => setImg(image_2)}><img className="img-border" src={image_2} width="70px" height="70px" alt=""/></button>
        <button className="no-border" onClick={() => setImg(image_3)}> <img className="img-border" src={image_3} width="70px" height="70px" alt=""/></button>
        </div>
        </div>

       <p>{description}</p> 
      
       </div> 
    )
}


