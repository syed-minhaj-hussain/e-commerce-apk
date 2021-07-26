import { useWishCartContext } from "../../context/WishCartContext";
import productStyle from "./product.module.css";
import { ShowOrHideWishIcon } from "./ShowOrHideWishIcon";
import { ShowOrHideAddToCart } from "./ShowOrHideAddToCart";
export const ProductListing = () => {
  const {
    state: { products },
  } = useWishCartContext();
  return (
    <div className={productStyle.container}>
      <div className={productStyle.grid}>
        {products?.map(({ id, name, images: { img_1 }, price }, index, arr) => (
          <div key={id}>
            <div className={productStyle.card} key={id}>
              <figure>
                <img src={img_1} alt={name} />
              </figure>
              <div className={productStyle.cardBody}>
                <p className={productStyle.title}> {name}</p>
                <p className={productStyle.subTitle}> ₹ {price}</p>
                <ShowOrHideWishIcon
                  id={id}
                  iconPosition={productStyle.absolute}
                />
              </div>
              <ShowOrHideAddToCart id={id} btn={productStyle.btn} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
