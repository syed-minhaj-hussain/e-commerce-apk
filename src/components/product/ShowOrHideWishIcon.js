import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { useWishCartContext } from "../../context/WishCartContext";

// import productStyle from "./product.module.css";
export const ShowOrHideWishIcon = ({ id, iconPosition }) => {
  const {
    state: { products, wishlist },
    dispatch,
  } = useWishCartContext();
  const { isUserLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  console.log(iconPosition);
  return (
    <>
      {isUserLoggedIn ? (
        wishlist?.find((item) => item.id === id) ? (
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
        )
      ) : (
        <MdFavoriteBorder
          className={iconPosition}
          onClick={() => {
            isUserLoggedIn
              ? dispatch({
                  type: "ADD-TO-WISHLIST",
                  payload: products.find((item) => item.id === id),
                })
              : navigate("/login");
          }}
        />
      )}
    </>
  );
};
