import { useWishCartContext } from "../../context/WishCartContext";

export const ShowOrHideWishlist = ({ _id, btn }) => {
  const {
    state: { products, wishlist },
    dispatch,
  } = useWishCartContext();
  return (
    <>
      {wishlist?.find((item) => item._id === _id) ? (
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
              payload: products?.find((item) => item._id === _id),
            })
          }
        >
          Move To Wishlist
        </button>
      )}
    </>
  );
};
