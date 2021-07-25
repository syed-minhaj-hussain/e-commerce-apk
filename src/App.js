import { useState } from "react";
import "./App.css";
import { ProductListing } from "./components/product/ProductListing";
function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">{route === "products" && <ProductListing />}</div>
  );
}

export default App;
