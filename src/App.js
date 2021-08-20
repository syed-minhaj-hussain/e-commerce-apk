import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "./context/AuthContext";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { PrivateRoute } from "./components/privateRoutes/PrivateRoute";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { ProductListing } from "./components/product/ProductListing";
import { ProductDetail } from "./components/productDetail/ProductDetail";
import { CartListing } from "./components/cart/CartListing";
import { Wishlist } from "./components/wishlist/Wishlist";
import { Category } from "./components/category/Category";
import { Footer } from "./components/footer/Footer";
import { useWishCartContext } from "./context/WishCartContext";

function App() {
  const { auth } = useAuthContext();
  const {
    dispatch,
    state: { products },
  } = useWishCartContext();
  console.log(products);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://vintage-mart-backend.herokuapp.com/products"
        );
        dispatch({
          type: "UPLOAD-PRODUCTS",
          payload: response?.data?.products,
        });
        console.log(response);
      } catch (err) {
        console.log({ err });
      }
    })();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:_id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories/bags" element={<Category category="bags" />} />
        <Route
          path="/categories/decoration"
          element={<Category category="decoration" />}
        />
        <Route
          path="/categories/essentials"
          element={<Category category="essentials" />}
        />
        <Route
          path="/categories/interior"
          element={<Category category="interior" />}
        />
        <PrivateRoute auth={auth} path="/cart" element={<CartListing />} />
        <PrivateRoute auth={auth} path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
