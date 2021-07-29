import { useWishCartContext } from "../../context/WishCartContext";
import cartStyle from "../cart/cart.module.css";

export const Wishlist = () => {
  const {
    state: { wishlist, products, cart },
    dispatch,
  } = useWishCartContext();
  console.log({ wishlist });
  return (
    <div className={cartStyle.container}>
      <div className={cartStyle.grid}>
        {wishlist?.map(({ id, name, images: { img_1 }, price, inStock }) => (
          <div className={cartStyle.card} key={id}>
            <div className={cartStyle.cardHead}>
              <figure className={cartStyle.margin}>
                <img className={cartStyle.img} src={img_1} alt={name} />
              </figure>
            </div>
            <div className={cartStyle.cardBody}>
              <p className={cartStyle.title}> {name}</p>
              <p className={cartStyle.subTitle}> ₹ {price}</p>

              <br />
              <div>
                <button
                  className={cartStyle.btn}
                  onClick={() =>
                    dispatch({ type: "REMOVE-FROM-WISHLIST", payload: id })
                  }
                >
                  Remove From Wishlist
                </button>
                {cart?.find((item) => item.id === id) ? null : (
                  <button
                    className={cartStyle.btn}
                    onClick={() =>
                      dispatch({
                        type: "MOVE-TO-CART",
                        payload: products?.find((item) => item.id === id),
                      })
                    }
                    disabled={!inStock}
                    style={{ opacity: `${!inStock ? 0.6 : 1}` }}
                  >
                    Move To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
