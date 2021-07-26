import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useWishCartContext } from "../../context/WishCartContext";
// import productStyle from "./product.module.css";
export const ShowOrHideWishIcon = ({ id, iconPosition }) => {
  const {
    state: { products, wishlist },
    dispatch,
  } = useWishCartContext();
  return (
    <>
      {wishlist?.find((item) => item.id === id) ? (
        <MdFavorite
          className={iconPosition}
          onClick={() =>
            dispatch({
              type: "REMOVE-FROM-WISHLIST",
              payload: id,
            })
          }
        />
      ) : (
        <MdFavoriteBorder
          className={iconPosition}
          onClick={() =>
            dispatch({
              type: "ADD-TO-WISHLIST",
              payload: products?.find((item) => item.id === id),
            })
          }
        />
      )}
    </>
  );
};
