import { useWishCartContext } from "../../context/WishCartContext";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToastContext } from "../../context/ToastContext";

export const ShowOrHideAddToCart = ({ _id, btn, isInStock }) => {
  const {
    state: { cart, products },
    dispatch,
  } = useWishCartContext();
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  const { toast, runToast } = useToastContext();

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
              runToast(toast.success, "Item Removed From Cart");
              // console.log("remove");
            }}
          >
            Remove From Cart
          </button>
        ) : (
          isInStock && (
            <button
              className={btn}
              onClick={() => {
                dispatch({
                  type: "ADD-TO-CART",
                  payload: products?.find((item) => item?._id === _id),
                });
                runToast(toast.success, "Item Added To Cart");
              }}
              disabled={!isInStock}
              style={{ opacity: `${!isInStock ? 0.6 : 1}` }}
            >
              Add To Cart
            </button>
          )
        )
      ) : (
        <button
          className={btn}
          onClick={() => {
            if (auth) {
              dispatch({
                type: "ADD-TO-CART",
                payload: products?.find((item) => item?._id === _id),
              });
              runToast(toast.success, "Item Added To Cart");
            } else {
              runToast(toast.error, "Please Login");
              navigate("/login");
            }
          }}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};
