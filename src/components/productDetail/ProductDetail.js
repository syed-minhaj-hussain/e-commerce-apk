import { useState } from "react";
import { useParams } from "react-router";
import { useWishCartContext } from "../../context/WishCartContext";
import { ShowOrHideAddToCart } from "../product/ShowOrHideAddToCart";
import { ShowOrHideWishIcon } from "../product/ShowOrHideWishIcon";
import productDetail from "./productDetail.module.css";

export const ProductDetail = () => {
  const { id } = useParams();
  //   console.log(id);
  const {
    state: { products },
  } = useWishCartContext();
  const {
    name,
    price,
    images: { img_1, img_2 },
    inStock,
    intro,
    category,
    fastDelivery,
  } = products?.find((item) => item.id === Number(id));
  const [image, setImage] = useState(img_1);
  return (
    <>
      <main className={productDetail.main}>
        <div className={productDetail.flex}>
          <div className={productDetail.leftSide}>
            <figure>
              <img className={productDetail.img} src={image} alt={name} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  className={`${productDetail.subImg} `}
                  src={img_1}
                  alt={name}
                  onClick={() => setImage(img_1)}
                />
                <img
                  className={`${productDetail.subImg} ${productDetail.subImg_2}`}
                  src={img_2}
                  alt={name}
                  onClick={() => setImage(img_2)}
                />
              </div>
            </figure>
          </div>
          <div className={productDetail.rightSide}>
            <div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // width: "100%",
                  height: "100%",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <h1
                    style={{
                      fontWeight: "420",
                      margin: "1rem 0",
                    }}
                  >
                    {" "}
                    {name}
                  </h1>
                  <h2
                    style={{
                      fontWeight: "480",
                      color: "rgb(220,152,20)",
                      margin: "1rem 0",
                      display: "inline",
                    }}
                  >
                    ₹ {price}
                  </h2>
                  <ShowOrHideWishIcon
                    id={Number(id)}
                    iconPosition={productDetail.icon}
                  />
                </div>
                <p
                  style={{
                    textAlign: "justify",
                    width: "237px",
                    fontSize: "1rem",
                    fontWeight: "450",
                    color: "#fff",
                    margin: "0.6rem 0.6rem 0.6rem 0",
                  }}
                >
                  {intro}
                </p>
                <p
                  style={{
                    padding: "0.4rem 1rem",
                    marginTop: "0.5rem",
                    color: "#fff",
                    backgroundColor: `${inStock ? "green" : "red"}`,
                    borderRadius: "1.5rem",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  {inStock ? "In Stock" : "Out of Stock!"}{" "}
                </p>
                {inStock && (
                  <p
                    style={{
                      padding: "0.4rem 1rem",
                      marginTop: "0.5rem",
                      color: "#fff",
                      backgroundColor: `${fastDelivery ? "green" : "red"}`,
                      borderRadius: "1.5rem",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    {fastDelivery
                      ? "Fast Delivery Available"
                      : "Delivery May Takes 1 Week"}
                  </p>
                )}
                <ShowOrHideAddToCart
                  id={Number(id)}
                  btn={productDetail.btn}
                  isInStock={inStock}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
