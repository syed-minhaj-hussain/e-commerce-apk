import { useAuthContext } from "../../context/AuthContext";
import { useWishCartContext } from "../../context/WishCartContext";
import cartStyle from "../cart/cart.module.css";
import axios from "axios";
import { useToastContext } from "../../context/ToastContext";

export const Wishlist = () => {
  const {
    state: { wishlist, products, cart },
    dispatch,
  } = useWishCartContext();
  const { auth } = useAuthContext();
  const { toast, runToast } = useToastContext();
  return (
    <div className={cartStyle.container}>
      <div className={cartStyle.grid}>
        {wishlist?.map(
          ({ _id, name, images: { img_1 }, price, inStock, prodId }) => (
            <div className={cartStyle.card} key={_id}>
              <div className={cartStyle.cardHead}>
                <figure className={cartStyle.margin}>
                  <img className={cartStyle.img} src={img_1} alt={name} />
                </figure>
              </div>
              <div className={cartStyle.cardBody}>
                <div>
                  <p className={cartStyle.title}> {name}</p>
                  <p className={cartStyle.subTitle}> ₹ {price}</p>

                  <div>
                    <button
                      className={cartStyle.btn}
                      onClick={async () => {
                        dispatch({
                          type: "REMOVE-FROM-WISHLIST",
                          payload: name,
                        });
                        try {
                          const response = await axios.delete(
                            `https://vintage-mart-backend.herokuapp.com/wishlist/${_id}`,
                            { headers: { authorization: auth } }
                          );
                          if (response) {
                            console.log(response.data.message);
                            runToast(toast.success, response.data.message);
                          }
                        } catch (err) {
                          console.log({ err });
                        }
                      }}
                    >
                      Remove From Wishlist
                    </button>
                    {cart?.find((item) => item.name === name) ? null : (
                      <button
                        className={cartStyle.btn}
                        onClick={() => {
                          dispatch({
                            type: "MOVE-TO-CART",
                            payload: products?.find(
                              (item) => item.name === name
                            ),
                          });
                          (async function () {
                            try {
                              const response = await axios.delete(
                                `https://vintage-mart-backend.herokuapp.com/wishlist/${_id}`,
                                { headers: { authorization: auth } }
                              );
                              if (response) {
                                console.log(response.data.message);
                                runToast(toast.success, response.data.message);
                              }
                            } catch (err) {
                              console.log({ err });
                            }
                          })();
                        }}
                        disabled={!inStock}
                        style={{ opacity: `${!inStock ? 0.6 : 1}` }}
                      >
                        Move To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
