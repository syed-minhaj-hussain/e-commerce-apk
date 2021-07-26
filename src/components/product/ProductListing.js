import { useWishCartContext } from "../../context/WishCartContext";
import "./style.css";
import { MdFavoriteBorder } from "react-icons/md";
export const ProductListing = () => {
  const {
    state: { products },
  } = useWishCartContext();
  console.log(products);
  return (
    <div className="container">
      <div className="grid">
        {products?.map(({ id, name, images: { img_1 }, price }) => (
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
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
