import { useCart } from "../context/Cartcontext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useCart();

  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto" }}>
      <h2>My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p style={{ marginTop: "20px" }}>
          No items in wishlist.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
            marginTop: "30px"
          }}
        >
          {wishlist.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;