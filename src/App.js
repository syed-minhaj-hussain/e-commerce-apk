import { useState } from "react";
import "./App.css";
import { ProductListing } from "./components/product/ProductListing";
import { CartListing } from "./components/cart/CartListing";
import { Wishlist } from "./components/wishlist/Wishlist";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<CartListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
