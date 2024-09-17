import { useState } from "react";
import { useParams } from "react-router-dom";
import { useWishCartContext } from "../../context/WishCartContext";
import { ShowOrHideAddToCart } from "../product/ShowOrHideAddToCart";
import { ShowOrHideWishIcon } from "../product/ShowOrHideWishIcon";
import productDetail from "./productDetail.module.css";

export const ProductDetail = () => {
  const { _id } = useParams();
  console.log(_id);
  const {
    state: { products },
  } = useWishCartContext();
  console.log({ products });
  const product = products?.find((item) => item?._id === _id);
  const [image, setImage] = useState(product?.images?.img_1);
  return (
    <>
      <main className={productDetail.main}>
        <div className={productDetail.flex}>
          <div className={productDetail.leftSide}>
            <figure>
              <img
                className={productDetail.img}
                src={image}
                alt={product?.name}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  className={`${productDetail.subImg} `}
                  src={product?.images?.img_1}
                  alt={product?.name}
                  onClick={() => setImage(product?.images?.img_1)}
                />
                <img
                  className={`${productDetail.subImg} ${productDetail.subImg_2}`}
                  src={product?.images?.img_2}
                  alt={product?.name}
                  onClick={() => setImage(product?.images?.img_2)}
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
                    {product?.name}
                    <span>
                      {" "}
                      <p
                        style={{
                          padding: "0.3rem 1rem",
                          marginTop: "0.5rem",
                          color: "#000",
                          backgroundColor: "#fff",
                          borderRadius: "1.5rem",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          display: "inline-block",
                          textTransform: "capitalize",
                        }}
                      >
                        {product?.category}
                      </p>
                    </span>
                  </h1>
                  <h2
                    style={{
                      fontWeight: "480",
                      color: "rgb(220,152,20)",
                      margin: "1rem 0",
                      display: "inline",
                    }}
                  >
                    ₹ {product?.price}
                  </h2>
                  <ShowOrHideWishIcon
                    _id={product?._id}
                    name={product?.name}
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
                  {product?.intro}
                </p>
                <p
                  style={{
                    padding: "0.4rem 1rem",
                    marginTop: "0.5rem",
                    color: "#fff",
                    backgroundColor: `${product?.inStock ? "green" : "red"}`,
                    borderRadius: "1.5rem",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  {product?.inStock ? "In Stock" : "Out of Stock!"}{" "}
                </p>

                {product?.inStock && (
                  <p
                    style={{
                      padding: "0.4rem 1rem",
                      marginTop: "0.5rem",
                      color: "#fff",
                      backgroundColor: `${
                        product?.fastDelivery ? "green" : "red"
                      }`,
                      borderRadius: "1.5rem",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    {product?.fastDelivery
                      ? "Fast Delivery Available"
                      : "Delivery May Takes 1 Week"}
                  </p>
                )}
                <ShowOrHideAddToCart
                  _id={_id}
                  btn={productDetail.btn}
                  isInStock={product?.inStock}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
