import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div style={{
      maxWidth: "1000px",
      margin: "50px auto",
      display: "flex",
      gap: "40px"
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "400px",
          borderRadius: "20px"
        }}
      />

      <div>
        <h2>{product.name}</h2>
        <p style={{ margin: "15px 0" }}>
          ₹{product.price}
        </p>
        <p>
          Fresh quality product delivered to your
          doorstep.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;