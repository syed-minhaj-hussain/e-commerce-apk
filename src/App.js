import { useState } from "react";
import "./App.css";
import {ProductListing} from "./components/products/ProductListing";
import {CartListing} from "./components/cart/CartListing";

function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">
    <div className="btns">
    <button onClick={() => setRoute("products")}>Products</button>
    <button onClick={() => setRoute("cart")}>cart</button>
    <button onClick={() => setRoute("wishlist")}>wishlist</button>
    </div>
     
    <div className="routes">
    {route === "products" &&  <ProductListing />}
    {route === "cart" &&  <CartListing />}
    </div>
    
    </div>
         
  );
}

export default App;
