import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { useWishCartContext } from "../../context/WishCartContext";
import axios from "axios";

// import productStyle from "./product.module.css";
export const ShowOrHideWishIcon = ({ _id, name, iconPosition }) => {
  const {
    state: { products, wishlist },
    dispatch,
  } = useWishCartContext();
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  // console.log(iconPosition);
  const findProduct = products?.find((item) => item?._id === _id);
  return (
    <>
      {auth ? (
        wishlist?.find((item) => item?.name === name) ? (
          <MdFavorite
            className={iconPosition}
            onClick={async () => {
              dispatch({
                type: "REMOVE-FROM-WISHLIST",
                payload: name,
                // payload: wishlist?.find((item) => item?.name === name),
              });
              if (auth) {
                try {
                  const response = await axios.delete(
                    `https://vintage-mart-backend.herokuapp.com/wishlist/${_id}`,
                    { headers: { authorization: auth } }
                  );
                  if (response) {
                    console.log(response.data.message);
                  }
                } catch (err) {
                  console.log({ err });
                }
              }
            }}
          />
        ) : (
          <MdFavoriteBorder
            className={iconPosition}
            onClick={async () => {
              dispatch({
                type: "ADD-TO-WISHLIST",
                payload: products?.find((item) => item?._id === _id),
              });
              console.log({ findProduct });
              console.log({
                getWishlistId: wishlist?.find((item) => item?.prodId === _id),
              });
              if (auth) {
                try {
                  const response = await axios.post(
                    `https://vintage-mart-backend.herokuapp.com/wishlist`,
                    {
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
                    },
                    { headers: { authorization: auth } }
                  );
                  // const response = await axios.post(
                  //   `https://vintage-mart-backend.herokuapp.com/wishlist`,
                  //   findProduct,
                  //   { headers: { authorization: auth } }
                  // );

                  if (response) {
                    // console.log(response.data.message);
                    console.log({ response });
                  }
                } catch (err) {
                  console.log({ err });
                }
              }
            }}
          />
        )
      ) : (
        <MdFavoriteBorder
          className={iconPosition}
          onClick={async () => {
            if (auth) {
              dispatch({
                type: "ADD-TO-WISHLIST",
                payload: products.find((item) => item?._id === _id),
              });
              try {
                // const response = await axios.post(
                //   `https://vintage-mart-backend.herokuapp.com/wishlist`,
                //   findProduct,
                //   { headers: { authorization: auth } }
                // );
                const response = await axios.post(
                  `https://vintage-mart-backend.herokuapp.com/wishlist`,
                  {
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
                  },
                  { headers: { authorization: auth } }
                );
                if (response) {
                  console.log(response.data.message);
                }
              } catch (err) {
                console.log({ err });
              }
            } else {
              navigate("/login");
            }
          }}
        />
      )}
    </>
  );
};
