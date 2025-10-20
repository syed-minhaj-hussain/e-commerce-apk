import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
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
import { useToastContext } from "./context/ToastContext";
import { API_URL } from "./utilities";

function App() {
  const { auth } = useAuthContext();
  const { ToastContainer } = useToastContext();
  const { dispatch } = useWishCartContext();

  const getData = async (route, auth, dispatchEventType) => {
    try {
      const response = await axios.get(`${API_URL}${route}`, {
        headers: { authorization: auth },
      });
      console.log({ response });
      if (response) {
        console.log(response);
        let payload;
        if (route === "cart") {
          payload = response?.data[route]?.cart;
        } else {
          payload = response?.data[route];
        }
        dispatch({
          type: dispatchEventType,
          payload,
        });
      }
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    getData("products", auth, "UPLOAD-PRODUCTS");
  }, []);
  useEffect(() => {
    if (auth) {
      getData("wishlist", auth, "UPLOAD-WISHLIST");
      getData("cart", auth, "UPLOAD-CART");
    }
  }, [auth]);
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
        <Route path="/cart" element={<PrivateRoute auth={auth} path="/cart" />}>
          <Route path="/cart" element={<CartListing />} />
        </Route>
        <Route
          path="/wishlist"
          element={<PrivateRoute auth={auth} path="/wishlist" />}
        >
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
      <ToastContainer
        style={{ maxWidth: "400px" }}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
