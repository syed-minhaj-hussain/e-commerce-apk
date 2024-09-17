import React, { useState, useEffect } from "react";
import { carouselItems } from "../../carouselDB";
import homeStyle from "./home.module.css";

export const Carousel = () => {
  const [navId, setNavId] = useState(1);
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (navId === 3) {
        setNavId(1);
      }
      if (navId < 3) {
        setNavId((prev) => prev + 1);
      }
    }, 1800);
    return () => clearInterval(interval);
  }, [navId]);

  return (
    <div className={homeStyle.main}>
      {carouselItems?.map(({ id, name, image }) => (
        <div className={homeStyle.carousel} key={id}>
          {id === navId && (
            <img src={image} alt="" className={homeStyle.image} />
          )}
          {id === navId && (
            <button
              className={`${
                id === 1
                  ? `${homeStyle.hide}`
                  : `${homeStyle.navLeft} ${homeStyle.nav}`
              } `}
              onClick={() => setNavId((prev) => (prev === 1 ? prev : prev - 1))}
            >
              {" "}
              &#10094;
            </button>
          )}
          {id === navId && (
            <button
              className={`${
                id === 3
                  ? `${homeStyle.hide}`
                  : `${homeStyle.navRight} ${homeStyle.nav}`
              } `}
              onClick={() => setNavId((prev) => (prev === 3 ? prev : prev + 1))}
            >
              {" "}
              &#10095;
            </button>
          )}
          {id === navId && <h1 className={homeStyle.absolute}>{name}</h1>}
        </div>
      ))}
    </div>
  );
};
