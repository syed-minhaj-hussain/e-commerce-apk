import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { useWishCartContext } from "../../context/WishCartContext";
import axios from "axios";
import { useToastContext } from "../../context/ToastContext";
import { API_URL } from "../../utilities";

// import productStyle from "./product.module.css";
export const ShowOrHideWishIcon = ({ _id, name, iconPosition }) => {
  const {
    state: { products, wishlist },
    dispatch,
  } = useWishCartContext();
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  const { toast, runToast } = useToastContext();
  // console.log(iconPosition);
  const findProduct = products?.find((item) => item?._id === _id);
  const productData = {
    name: findProduct?.name,
    description: findProduct?.description,
    intro: findProduct?.intro,
    additionalInfo: findProduct?.additionalInfo,
    images: findProduct?.images,
    summary: findProduct?.summary,
    price: findProduct?.price,
    category: findProduct?.category,
    inStock: findProduct?.inStock,
    fastDelivery: findProduct?.fastDelivery,
    quantity: findProduct?.quantity,
    prodId: findProduct?._id,
  };

  const removeFromWishlist = async () => {
    const getId = wishlist.find((item) => item.name === name);
    if (auth) {
      dispatch({
        type: "REMOVE-FROM-WISHLIST",
        payload: name,
        // payload: wishlist?.find((item) => item?.name === name),
      });
      try {
        const response = await axios.delete(`${API_URL}wishlist/${getId._id}`, {
          headers: { authorization: auth },
        });
        if (response?.data?.success === true) {
          runToast(toast.success, response?.data?.message);
        }
      } catch (err) {
        console.log({ err });
      }
    } else {
      runToast(toast.error, "Please Login");
      navigate("/login");
    }
  };

  const addToWishlist = async () => {
    if (auth) {
      dispatch({
        type: "ADD-TO-WISHLIST",
        payload: products?.find((item) => item?._id === _id),
      });
      // console.log({ findProduct });
      try {
        const response = await axios.post(`${API_URL}wishlist`, productData, {
          headers: { authorization: auth },
        });

        if (response?.data?.success === true) {
          // console.log(response.data.message);
          runToast(toast.success, response?.data?.message);
        }
      } catch (err) {
        console.log({ err });
      }
    } else {
      runToast(toast.error, "Please Login");
      navigate("/login");
    }
  };
  return (
    <>
      {auth ? (
        wishlist?.find((item) => item?.name === name) ? (
          <MdFavorite className={iconPosition} onClick={removeFromWishlist} />
        ) : (
          <MdFavoriteBorder className={iconPosition} onClick={addToWishlist} />
        )
      ) : (
        <MdFavoriteBorder className={iconPosition} onClick={addToWishlist} />
      )}
    </>
  );
};
