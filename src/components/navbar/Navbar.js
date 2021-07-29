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
              end
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
            >
              Wishlist
            </NavLink>
          </li>
          <li>
            {isUserLoggedIn ? (
              <button
                style={{
                  margin: "1rem 2rem 0 0",
                  backgroundColor: "inherit",
                  border: "none",
                  color: "inherit",
                  fontSize: "1rem",
                  padding: "0 0 0 1rem",
                }}
                onClick={() => logout()}
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
