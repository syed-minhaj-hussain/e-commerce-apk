import { useWishCartContext } from "../../context/WishCartContext";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const ShowOrHideAddToCart = ({ _id, btn, isInStock }) => {
  const {
    state: { cart, products },
    dispatch,
  } = useWishCartContext();
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  return (
    <>
      {auth ? (
        cart?.find((item) => item?._id === _id) ? (
          <button
            className={btn}
            onClick={() => {
              dispatch({
                type: "REMOVE-FROM-CART",
                payload: _id,
              });
              console.log("remove");
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className={btn}
            onClick={() => {
              dispatch({
                type: "ADD-TO-CART",
                payload: products?.find((item) => item?._id === _id),
              });
            }}
            disabled={!isInStock}
            style={{ opacity: `${!isInStock ? 0.6 : 1}` }}
          >
            Add To Cart
          </button>
        )
      ) : (
        <button
          className={btn}
          onClick={() => {
            auth
              ? dispatch({
                  type: "ADD-TO-CART",
                  payload: products?.find((item) => item?._id === _id),
                })
              : navigate("/login");
          }}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};
