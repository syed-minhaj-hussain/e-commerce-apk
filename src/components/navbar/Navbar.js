import { NavLink } from "react-router-dom";
import navStyle from "./nav.module.css";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { isUserLoggedIn, logout } = useAuthContext();
  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.brandTitle}>Vintage-Mart</div>
      <button
        className={navStyle.toggleButton}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span className={navStyle.bar}></span>
        <span className={navStyle.bar}></span>
        <span className={navStyle.bar}></span>
      </button>
      <div
        className={`${
          isActive
            ? `${navStyle.navbarLinks} ${navStyle.active}`
            : navStyle.navbarLinks
        }`}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
              className={navStyle.navLinks}
              end
              onClick={() => setIsActive((prev) => !prev)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
              className={navStyle.navLinks}
              onClick={() => setIsActive((prev) => !prev)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
              className={navStyle.navLinks}
              onClick={() => setIsActive((prev) => !prev)}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
              className={navStyle.navLinks}
              onClick={() => setIsActive((prev) => !prev)}
            >
              Wishlist
            </NavLink>
          </li>
          <li className={`${isUserLoggedIn ? `${navStyle.logout}` : ""} `}>
            {isUserLoggedIn ? (
              <button
                className={navStyle.last}
                onClick={() => {
                  logout();
                  setIsActive((prev) => !prev);
                }}
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                className={navStyle.navLinks}
                onClick={() => setIsActive((prev) => !prev)}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
