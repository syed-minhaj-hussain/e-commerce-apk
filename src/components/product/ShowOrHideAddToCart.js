import { useWishCartContext } from "../../context/WishCartContext";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const ShowOrHideAddToCart = ({ id, btn, isInStock }) => {
  const {
    state: { cart, products },
    dispatch,
  } = useWishCartContext();
  const { isUserLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  return (
    <>
      {isUserLoggedIn ? (
        cart?.find((item) => item.id === id) ? (
          <button
            className={btn}
            onClick={() =>
              dispatch({
                type: "REMOVE-FROM-CART",
                payload: id,
              })
            }
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className={btn}
            onClick={() =>
              dispatch({
                type: "ADD-TO-CART",
                payload: products.find((item) => item.id === id),
              })
            }
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
            isUserLoggedIn
              ? dispatch({
                  type: "ADD-TO-CART",
                  payload: products.find((item) => item.id === id),
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
