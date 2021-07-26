import { useWishCartContext } from "../../context/WishCartContext";

export const ShowOrHideAddToCart = ({ id, btn }) => {
  const {
    state: { cart, products },
    dispatch,
  } = useWishCartContext();
  return (
    <>
      {cart?.find((item) => item.id === id) ? (
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
        >
          Add To Cart
        </button>
      )}
    </>
  );
};
