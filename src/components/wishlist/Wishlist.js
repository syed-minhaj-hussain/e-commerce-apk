import { useWishCartContext } from "../../context/WishCartContext";
import cartStyle from "../cart/cart.module.css";

export const Wishlist = () => {
  const {
    state: { wishlist },
    dispatch,
  } = useWishCartContext();
  console.log({ wishlist });
  return (
    <div className={cartStyle.container}>
      <div className={cartStyle.grid}>
        {wishlist?.map(({ id, name, images: { img_1 }, price }) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
