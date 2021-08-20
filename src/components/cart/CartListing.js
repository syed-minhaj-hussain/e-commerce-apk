import { useWishCartContext } from "../../context/WishCartContext";
import { MdAdd, MdRemove } from "react-icons/md";
import cartStyle from "./cart.module.css";

export const CartListing = () => {
  const {
    state: { cart },
    dispatch,
  } = useWishCartContext();
  const { total } = cart?.reduce(
    (acc, { price, quantity }) => ({
      ...acc,
      total: acc.total + price * quantity,
    }),
    { total: 0 }
  );
  return (
    <div className={cartStyle.container}>
      <h2>Total Amount : {total} </h2>
      <div className={cartStyle.grid}>
        {cart?.map(({ _id, name, images: { img_1 }, quantity, price }) => {
          const priceOverQuantity = price * quantity;
          return (
            <div className={cartStyle.card} key={_id}>
              <div className={`${cartStyle.cardHead} ${cartStyle.cardItems}`}>
                <figure className={cartStyle.margin}>
                  <img className={cartStyle.img} src={img_1} alt={name} />
                </figure>
              </div>
              <div className={`${cartStyle.cardBody} `}>
                <>
                  <p className={cartStyle.title}> {name}</p>
                  <p className={cartStyle.subTitle}> ₹ {priceOverQuantity}</p>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: "0.5rem" }}>
                      qty:{" "}
                    </span>
                    <MdRemove
                      className={cartStyle.iconDecrease}
                      onClick={() =>
                        dispatch({ type: "DECREMENT", payload: _id })
                      }
                    />
                    <span
                      style={{
                        position: "absolute",
                        right: "4rem",
                      }}
                    >
                      {quantity}
                    </span>
                    <MdAdd
                      className={cartStyle.iconIncrease}
                      onClick={() =>
                        dispatch({ type: "INCREMENT", payload: _id })
                      }
                    />
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <button
                      className={cartStyle.btn}
                      onClick={() =>
                        dispatch({ type: "REMOVE-FROM-CART", payload: _id })
                      }
                    >
                      Remove From cart
                    </button>
                  </div>
                </>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
