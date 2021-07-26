import { useWishCartContext } from "../../context/WishCartContext";
import { MdAdd, MdRemove } from "react-icons/md";
// import { IoIosArrowForward } from "react-icons/io";
import cartStyle from "./cart.module.css";

export const CartListing = () => {
  const {
    state: { cart },
    dispatch,
  } = useWishCartContext();
  console.log({ cart });
  return (
    <div className={cartStyle.container}>
      <div className={cartStyle.grid}>
        {cart?.map(({ id, name, images: { img_1 }, quantity, price }) => (
          <div className={cartStyle.card}>
            <div className={cartStyle.cardHead}>
              <figure className={cartStyle.margin}>
                <img className={cartStyle.img} src={img_1} alt={name} />
              </figure>
            </div>
            <div className={cartStyle.cardBody}>
              <p className={cartStyle.title}> {name}</p>
              <p className={cartStyle.subTitle}> ₹ {price}</p>
              <div style={{ position: "relative" }}>
                <div className={cartStyle.upper}>
                  <span style={{ position: "absolute", left: "0.5rem" }}>
                    qty:{" "}
                  </span>
                  <MdRemove className={cartStyle.iconDecrease} />
                  <span style={{ position: "absolute", right: "4.1rem" }}>
                    {quantity}
                  </span>
                  <MdAdd className={cartStyle.iconIncrease} />
                </div>
                <br />
                <div style={{ position: "absolute", top: "2rem" }}>
                  <button className={cartStyle.btn}>Add To Wishlist</button>
                  <button className={cartStyle.btn}>Remove From cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
