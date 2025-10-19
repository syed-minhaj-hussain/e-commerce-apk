import React from "react";
import productStyle from "./product.module.css";
import { MdCancel } from "react-icons/md";

export const FilterProducts = ({
  showFastDeliveryOnly,
  showInventoryAll,
  sortBy,
  dispatch,
  display,
  setDisplay,
  maxValue,
}) => {
  return (
    <div
      className={productStyle.filterCard}
      style={{
        display: `${display ? `block` : `none`}`,
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "0.3rem",
          right: "0.3rem",
          fontSize: "1.7rem",
          border: "none",
          backgroundColor: "inherit",
          zIndex: "3",
        }}
        onClick={() => setDisplay((prev) => !prev)}
      >
        <MdCancel />
      </button>
      <h2>Sort By: </h2>
      <label className={productStyle.label}>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
            className={productStyle.input}
          ></input>
          Price - Low to High
        </label>
        <input
          type="radio"
          name="sort"
          onChange={() =>
            dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
          }
          checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          className={productStyle.input}
        ></input>
        Price - High to Low
      </label>

      <h2>Filters: </h2>
      <label>
        <input
          type="checkbox"
          checked={showInventoryAll}
          onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
          className={productStyle.input}
        />
        Include Out of Stock
      </label>

      <label className={productStyle.label}>
        <input
          type="checkbox"
          checked={showFastDeliveryOnly}
          onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
          className={productStyle.input}
        />
        Fast Delivery Only
      </label>
      <label style={{ display: "block", marginTop: "1rem" }}>
        <h2> Price Range: </h2>
        <input
          type="range"
          className={productStyle.inputRange}
          min="500"
          max="4500"
          value={maxValue}
          onChange={(e) =>
            dispatch({ type: "TOGGLE_RANGE", payload: e.target.value })
          }
        />
        <p style={{ textAlign: "center" }}>RS: {maxValue}</p>
      </label>
    </div>
  );
};
