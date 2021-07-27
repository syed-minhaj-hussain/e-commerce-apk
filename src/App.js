import "./App.css";
import { useEffect } from "react";
import { ProductListing } from "./components/product/ProductListing";
import { CartListing } from "./components/cart/CartListing";
import { Wishlist } from "./components/wishlist/Wishlist";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { PrivateRoute } from "./components/privateRoutes/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useAuthContext();
  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("loginStatus"));
    if (status?.status === true) {
      setIsUserLoggedIn(true);
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
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
