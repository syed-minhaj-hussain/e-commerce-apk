import { useWishCartContext } from "../../context/WishCartContext";
import productStyle from "./product.module.css";
import { MdFavoriteBorder } from "react-icons/md";
export const ProductListing = () => {
  const {
    state: { products },
    dispatch,
  } = useWishCartContext();
  console.log(products);
  return (
    <div className={productStyle.container}>
      <div className={productStyle.grid}>
        {products?.map(({ id, name, images: { img_1 }, price }, index, arr) => (
          <div key={id}>
            <div className={productStyle.card}>
              <figure>
                <img src={img_1} alt={name} />
              </figure>
              <div className={productStyle.cardBody}>
                <p className={productStyle.title}> {name}</p>
                <p className={productStyle.subTitle}> ₹ {price}</p>
                <MdFavoriteBorder
                  className={productStyle.absolute}
                  onClick={() =>
                    dispatch({
                      type: "ADD-TO-WISHLIST",
                      payload: arr?.find((item) => item.id === id),
                    })
                  }
                />
              </div>
              <button
                className={productStyle.btn}
                onClick={() =>
                  dispatch({
                    type: "ADD-TO-CART",
                    payload: arr.find((item) => item.id === id),
                  })
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
