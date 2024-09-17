import { useWishCartContext } from "../../context/WishCartContext";

export const ShowOrHideWishlist = ({ _id, btn, name }) => {
  const {
    state: { products, wishlist },
    dispatch,
  } = useWishCartContext();
  return (
    <>
      {wishlist?.find((item) => item.name === name) ? (
        <button
          className={btn}
          style={{ backgroundColor: "#ccc", color: "#fff" }}
          disabled
        >
          Remove From Wishlist
        </button>
      ) : (
        <button
          className={btn}
          onClick={() =>
            dispatch({
              type: "MOVE-TO-WISHLIST",
              payload: products?.find((item) => item.name === name),
            })
          }
        >
          Move To Wishlist
        </button>
      )}
    </>
  );
};
