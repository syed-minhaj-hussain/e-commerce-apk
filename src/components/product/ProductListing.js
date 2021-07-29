import { useWishCartContext } from "../../context/WishCartContext";
import productStyle from "./product.module.css";
import { ShowOrHideWishIcon } from "./ShowOrHideWishIcon";
import { ShowOrHideAddToCart } from "./ShowOrHideAddToCart";
import { Link } from "react-router-dom";
export const ProductListing = () => {
  const {
    state: { products },
  } = useWishCartContext();
  return (
    <div className={productStyle.container}>
      <div className={productStyle.grid}>
        {products?.map(({ id, name, images: { img_1 }, price, inStock }) => (
          <div key={id}>
            <div
              className={productStyle.card}
              key={id}
              style={{ opacity: `${!inStock ? 0.7 : 1}` }}
            >
              <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
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
                id={id}
                iconPosition={productStyle.absolute}
              />
              <ShowOrHideAddToCart
                id={id}
                btn={productStyle.btn}
                isInStock={inStock}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
