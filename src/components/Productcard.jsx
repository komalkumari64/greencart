import { useCart } from "../context/Cartcontext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Toast from "./Toast";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [showToast, setShowToast] = useState(false);

  const isWishlisted = wishlist.find(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          position: "relative",
          transition: "0.3s"
        }}
      >
        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(product)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer"
          }}
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>

        {/* Image Click → Product Details */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </Link>

        <h3 style={{ marginTop: "10px" }}>
          {product.name}
        </h3>

        <p style={{ fontWeight: "bold" }}>
          ₹{product.price}
        </p>

        <button
          onClick={handleAddToCart}
          style={{
            background: "#22c55e",
            color: "white",
            border: "none",
            padding: "10px",
            width: "100%",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Add to Cart
        </button>
      </div>

      <Toast
        message="Added to cart 🛒"
        show={showToast}
      />
    </>
  );
};

export default ProductCard;