import { useWishCartContext } from "../../context/WishCartContext";
import "./product.css";
import { MdFavoriteBorder } from "react-icons/md";
export const ProductListing = () => {
  const {
    state: { products },
    dispatch,
  } = useWishCartContext();
  console.log(products);
  return (
    <div className="container">
      <div className="grid">
        {products?.map(({ id, name, images: { img_1 }, price }, index, arr) => (
          <div key={id}>
            <div className="card">
              <figure>
                <img src={img_1} alt={name} />
              </figure>
              <div className="card-body">
                <p className="title"> {name}</p>
                <p className="sub-title"> ₹ {price}</p>
                <MdFavoriteBorder className="absolute" />
              </div>
              <button
                className="btn"
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
