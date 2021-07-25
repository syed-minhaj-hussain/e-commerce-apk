import { useWishCartContext } from "../../context/WishCartContext";
import "./style.css";
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
                <p> {name}</p>₹{price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
