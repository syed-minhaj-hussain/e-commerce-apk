import "./App.css";
import { useEffect } from "react";
import { Home } from "./components/home/Home";
import { ProductListing } from "./components/product/ProductListing";
import { CartListing } from "./components/cart/CartListing";
import { Wishlist } from "./components/wishlist/Wishlist";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { PrivateRoute } from "./components/privateRoutes/PrivateRoute";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { useAuthContext } from "./context/AuthContext";
import { ProductDetail } from "./components/productDetail/ProductDetail";
function App() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("loginStatus"));
    if (response?.status === true) {
      setIsUserLoggedIn(true);
      navigate(response?.path);
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute
          isUserLoggedIn={isUserLoggedIn}
          path="/cart"
          element={<CartListing />}
        />
        <PrivateRoute
          isUserLoggedIn={isUserLoggedIn}
          path="/wishlist"
          element={<Wishlist />}
        />
      </Routes>
    </div>
  );
}

export default App;
