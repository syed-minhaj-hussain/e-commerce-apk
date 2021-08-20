import { useWishCartContext } from "../../context/WishCartContext";
import productStyle from "../product/product.module.css";
import { ShowOrHideWishIcon } from "../product/ShowOrHideWishIcon";
import { ShowOrHideAddToCart } from "../product/ShowOrHideAddToCart";
import { Link } from "react-router-dom";
export const Category = ({ category }) => {
  const {
    state: { products },
  } = useWishCartContext();
  const getFilteredProducts = products?.filter(
    (item) => item.category === category
  );
  return (
    <div className={productStyle.container}>
      <div className={productStyle.grid}>
        {getFilteredProducts?.map(
          ({ _id, name, images: { img_1 }, price, inStock }) => (
            <div key={_id}>
              <div
                className={productStyle.card}
                key={_id}
                style={{ opacity: `${!inStock ? 0.7 : 1}` }}
              >
                <Link
                  to={`/products/${_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <img src={img_1} alt={name} />
                  </figure>
                  <div className={productStyle.cardBody}>
                    <p className={productStyle.title}> {name}</p>
                    <p className={productStyle.subTitle}> ₹ {price}</p>
                  </div>
                </Link>
                {!inStock && <p className={productStyle.stock}>Out of Stock</p>}
                <ShowOrHideWishIcon
                  _id={_id}
                  iconPosition={productStyle.absolute}
                />
                <ShowOrHideAddToCart
                  _id={_id}
                  btn={productStyle.btn}
                  isInStock={inStock}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
