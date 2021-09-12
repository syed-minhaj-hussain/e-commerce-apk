import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useWishCartContext } from "../../context/WishCartContext";
import productStyle from "./product.module.css";
import { ShowOrHideWishIcon } from "./ShowOrHideWishIcon";
import { ShowOrHideAddToCart } from "./ShowOrHideAddToCart";
import { FilterProducts } from "./FilterProducts";
import { reducer } from "../../utilities";
import { BsFunnelFill } from "react-icons/bs";

export const ProductListing = () => {
  const {
    state: { products },
  } = useWishCartContext();
  console.log(products);
  const [
    { showInventoryAll, showFastDeliveryOnly, sortBy, maxValue },
    dispatch,
  ] = useReducer(reducer, {
    showInventoryAll: true,
    showFastDeliveryOnly: false,
    sortBy: "PRICE_LOW_TO_HIGH",
    maxValue: 4500,
  });
  const [display, setDisplay] = useState(false);

  const getSortedData = (products, sortBy) => {
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return products?.sort((a, b) => a["price"] - b["price"]);
    }
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return products?.sort((a, b) => b["price"] - a["price"]);
    }
    return products;
  };

  const getFilteredData = (
    sortedData,
    { showFastDeliveryOnly, showInventoryAll }
  ) => {
    return sortedData
      ?.filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      ?.filter(({ inStock }) => (showInventoryAll ? true : inStock))
      ?.filter((product) => product.price <= maxValue);
  };

  const sortedData = getSortedData(products, sortBy);

  const filteredData = getFilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll,
  });
  console.log({ filteredData });

  return (
    <div style={{ position: "relative", zIndex: "1" }}>
      <button
        style={{
          position: "absolute",
          top: "0.2rem",
          left: "0.2rem",
          backgroundColor: "inherit",
          border: "none",
          fontSize: "1.5rem",
          padding: "0.25rem",
          color: "#000",
          border: "0.1rem solid black",
          borderRadius: "0.3rem",
          zIndex: "3",
        }}
        onClick={() => setDisplay((prev) => !prev)}
      >
        <BsFunnelFill />
      </button>
      <FilterProducts
        showInventoryAll={showInventoryAll}
        showFastDeliveryOnly={showFastDeliveryOnly}
        sortBy={sortBy}
        dispatch={dispatch}
        display={display}
        setDisplay={setDisplay}
        maxValue={maxValue}
      />

      <div className={productStyle.container}>
        <div className={productStyle.grid}>
          {filteredData?.map(
            ({ _id, name, images: { img_1 }, price, inStock }) => (
              <div key={_id}>
                <div
                  className={productStyle.card}
                  key={_id}
                  style={{ opacity: `${!inStock ? 0.7 : 1}` }}
                >
                  <Link
                    to={`/products/${_id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <figure>
                      <img src={img_1} alt={name} />
                    </figure>
                    <div className={productStyle.cardBody}>
                      <p className={productStyle.title}> {name}</p>
                      <p className={productStyle.subTitle}> ₹ {price}</p>
                    </div>
                  </Link>
                  {!inStock && (
                    <p className={productStyle.stock}>Out of Stock</p>
                  )}
                  <ShowOrHideWishIcon
                    _id={_id}
                    name={name}
                    iconPosition={productStyle.absolute}
                  />
                  <ShowOrHideAddToCart
                    _id={_id}
                    btn={productStyle.btn}
                    isInStock={inStock}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
