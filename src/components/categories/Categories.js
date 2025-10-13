import React from "react";
import { Link } from "react-router-dom";
import cat from "./categories.module.css";

export const Categories = () => {
  return (
    <div className={cat.container}>
      <h1>Categories</h1>
      <div className={cat.grid}>
        <Link to="/categories/decoration" style={{ textDecoration: "none" }}>
          {" "}
          <div className={cat.card}>
            <figure>
              <img
                src={"https://i.ibb.co/F4D8Pd3/category-thumb-decoration.jpg"}
                alt=""
              />
            </figure>
            <div className={cat.cardBody}>Decoration</div>
          </div>
        </Link>
        <Link to="/categories/bags" style={{ textDecoration: "none" }}>
          <div className={cat.card}>
            <figure>
              <img
                src={
                  "https://i.ibb.co/pLhwDyP/category-thumb-bags-backpacks.jpg"
                }
                alt=""
              />
            </figure>
            <div className={cat.cardBody}>Bags & Backpacks</div>
          </div>
        </Link>
        <Link to="/categories/essentials" style={{ textDecoration: "none" }}>
          <div className={cat.card}>
            <figure>
              <img
                src={"https://i.ibb.co/3SCMjSk/category-thumb-essentials.jpg"}
                alt=""
              />
            </figure>
            <div className={cat.cardBody}>Essentialls</div>
          </div>
        </Link>
        <Link to="/categories/interior" style={{ textDecoration: "none" }}>
          <div className={cat.card}>
            <figure>
              <img
                src={"https://i.ibb.co/55T7YPs/category-thumb-interior.jpg"}
                alt=""
              />
            </figure>
            <div className={cat.cardBody}>Interior</div>
          </div>
        </Link>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <div className={cat.card}>
            <figure>
              <img
                src={"https://i.ibb.co/P55ZQcc/category-thumb-all.jpg"}
                alt=""
              />
            </figure>
            <div className={cat.cardBody}>All</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
