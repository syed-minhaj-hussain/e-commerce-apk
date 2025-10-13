import React from "react";
import { Categories } from "../categories/Categories";
import { Carousel } from "./Carousel";
import { Category } from "../category/Category";
import homeStyle from "./home.module.css";

export const Home = () => {
  return (
    <>
      <Carousel />
      <Categories />
      <h1 className={homeStyle.category}>Featured Products</h1>
      <Category category="essentials" />
    </>
  );
};
