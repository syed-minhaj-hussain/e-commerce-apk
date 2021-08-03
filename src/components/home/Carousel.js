import React from "react";
import { carouselItems } from "../../carouselDB";
import homeStyle from "./home.module.css";

export const Carousel = () => {
  return (
    <div className={homeStyle.main}>
      {carouselItems?.map(({ id, name, image }) => (
        <div className={homeStyle.carousel} key={id}>
          {id === 1 && (
            <img src={image} alt="" style={{ width: "100%", height: "95vh" }} />
          )}
        </div>
      ))}
    </div>
  );
};
