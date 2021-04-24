
import "./App.css";
import {ProductListing} from "./components/products/ProductListing";
import {CartListing} from "./components/cart/CartListing";
import { Wishlist } from "./components/wishlist/Wishlist";
import { Routes, Route, Link} from 'react-router-dom';
import {Product} from "./components/products/Product.js";
function App() {
  function NotFound() {
    return <h1>Page Not Found</h1>
  }
  return (
    <div className="App">
    
    
    
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/cart" element={<CartListing />} />
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    
    </div>     
  );
}

export default App;
