import { useState } from "react";
import "./App.css";
import { ProductListing } from "./components/product/ProductListing";
import { CartListing } from "./components/cart/CartListing";
function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <button onClick={() => setRoute("products")}>Products</button>
      <button onClick={() => setRoute("cart")}>cart</button>
      <button onClick={() => setRoute("wishlist")}>wishlist</button>
      {route === "products" && <ProductListing />}
      {route === "cart" && <CartListing />}
    </div>
  );
}

export default App;
