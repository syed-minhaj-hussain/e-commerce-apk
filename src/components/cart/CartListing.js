import { useWishCartContext } from "../../context/WishCartContext";
import { MdAdd, MdRemove } from "react-icons/md";
// import { IoIosArrowForward } from "react-icons/io";
import cartStyle from "./cart.module.css";
import { ShowOrHideWishlist } from "./ShowOrHideWishlist";

export const CartListing = () => {
  const {
    state: { cart },
    dispatch,
  } = useWishCartContext();
  const { total } = cart.reduce(
    (acc, { price, quantity }) => ({
      ...acc,
      total: acc.total + price * quantity,
    }),
    { total: 0 }
  );
  return (
    <div className={cartStyle.container}>
      <h2>Total Amount : {total}</h2>
      <div className={cartStyle.grid}>
        {cart?.map(({ id, name, images: { img_1 }, quantity, price }) => {
          const priceOverQuantity = price * quantity;
          return (
            <div className={cartStyle.card} key={id}>
              <div className={cartStyle.cardHead}>
                <figure className={cartStyle.margin}>
                  <img className={cartStyle.img} src={img_1} alt={name} />
                </figure>
              </div>
              <div className={cartStyle.cardBody}>
                <p className={cartStyle.title}> {name}</p>
                <p className={cartStyle.subTitle}> ₹ {priceOverQuantity}</p>
                <div style={{ position: "relative" }}>
                  <div className={cartStyle.upper}>
                    <span style={{ position: "absolute", left: "0.5rem" }}>
                      qty:{" "}
                    </span>
                    <MdRemove
                      className={cartStyle.iconDecrease}
                      onClick={() =>
                        dispatch({ type: "DECREMENT", payload: id })
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
                        dispatch({ type: "INCREMENT", payload: id })
                      }
                    />
                  </div>
                  <br />
                  <div style={{ position: "absolute", top: "2rem" }}>
                    <ShowOrHideWishlist id={id} btn={cartStyle.btn} />
                    <button
                      className={cartStyle.btn}
                      onClick={() =>
                        dispatch({ type: "REMOVE-FROM-CART", payload: id })
                      }
                    >
                      Remove From cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
