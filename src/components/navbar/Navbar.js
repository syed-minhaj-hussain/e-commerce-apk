import { NavLink } from "react-router-dom";
import navStyle from "./nav.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
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
        </ul>
      </div>
    </nav>
  );
};
