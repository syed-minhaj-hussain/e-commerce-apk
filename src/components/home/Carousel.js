import React, { useState } from "react";
import { carouselItems } from "../../carouselDB";
import homeStyle from "./home.module.css";

export const Carousel = () => {
  const [navId, setNavId] = useState(1);
  return (
    <div className={homeStyle.main}>
      {carouselItems?.map(({ id, name, image }) => (
        <div className={homeStyle.carousel} key={id}>
          {id === navId && (
            <img src={image} alt="" style={{ width: "100%", height: "95vh" }} />
          )}
          {id === navId && (
            <div
              className={`${
                id === 1 ? `${homeStyle.hide}` : `${homeStyle.navLeft}`
              } `}
              onClick={() => setNavId((prev) => (prev === 1 ? prev : prev - 1))}
            >
              {" "}
              &#10094;
            </div>
          )}
          {id === navId && (
            <div
              className={`${
                id === 3 ? `${homeStyle.hide}` : `${homeStyle.navRight}`
              } `}
              onClick={() => setNavId((prev) => (prev === 3 ? prev : prev + 1))}
            >
              {" "}
              &#10095;
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
