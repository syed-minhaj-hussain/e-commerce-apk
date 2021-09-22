import { useWishCartContext } from "../../context/WishCartContext";
import { MdAdd, MdRemove } from "react-icons/md";
import cartStyle from "./cart.module.css";
import { useToastContext } from "../../context/ToastContext";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

export const CartListing = () => {
  const {
    state: { cart },
    dispatch,
  } = useWishCartContext();
  const { auth } = useAuthContext();
  const { toast, runToast } = useToastContext();
  const navigate = useNavigate();

  const { total } = cart?.reduce(
    (acc, { price, quantity }) => ({
      ...acc,
      total: acc.total + price * quantity,
    }),
    { total: 0 }
  );
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://vintage-mart-backend.herokuapp.com/payment",

      {
        token,
        cartItems: cart,
      },
      { headers: { authorization: auth } }
    );
    const { success } = response.data;
    console.log("Response:", response);
    console.log("Status:", response.data.status);
    console.log("StatusType:", typeof response?.data?.status);
    if (success) {
      dispatch({ type: "RESET-CART" });
      toast("Success! Check email for details", { type: "success" });
      console.log("Success");
    } else {
      toast("Something went wrong", { type: "error" });
      console.log("Error");
    }
  }
  return (
    <div className={cartStyle.container}>
      {cart?.length > 0 ? (
        <div className={cartStyle.payment}>
          <div>
            {" "}
            <span style={{ fontSize: "1.2rem" }}>Total Amount : </span>{" "}
            <h2>{total} </h2>
          </div>
          <StripeCheckout
            stripeKey="pk_test_51JcPucSGNCN5XsLAYX07CjxIwr5pAInQbkHj4lmo5MSPbaTtJSmOeYHe0V97M2zpp7VCuazcgTSAJbUbCWnIwg0200V4ZhC0aj"
            token={handleToken}
            currency="inr"
            amount={total * 100}
            name="Vintage-Mart"
            billingAddress
            shippingAddress
          >
            <button
              style={{ width: "180px", fontWeight: "500", padding: "0.5rem" }}
              className={cartStyle.btn}
            >
              Pay Now
            </button>
          </StripeCheckout>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            height: "85vh",
          }}
        >
          <h1>Your Cart Is Empty!!</h1>
          <button
            style={{ width: "200px", padding: "0.6rem", marginTop: "0.5rem" }}
            className={cartStyle.btn}
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      )}
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
                      onClick={() => {
                        dispatch({ type: "REMOVE-FROM-CART", payload: _id });

                        runToast(toast.success, "Item Removed From Cart");
                      }}
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
