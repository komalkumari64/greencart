import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Shimmer from "../components/Shimmer";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState(500);
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 4;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  // FILTER
  let filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchPrice = product.price <= priceRange;

    return matchCategory && matchSearch && matchPrice;
  });

  // SORT
  if (sortOption === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // PAGINATION
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (
    <div style={{ maxWidth: "1300px", margin: "50px auto" }}>

      {/* Heading */}
      <h2 style={{
        fontSize: "32px",
        marginBottom: "40px",
        fontWeight: "600"
      }}>
        {selectedCategory ? selectedCategory : "All Products"}
      </h2>

      <div style={{ display: "flex", gap: "40px" }}>

        {/* 🔥 Sticky Sidebar */}
        <div
          style={{
            width: "260px",
            background: "#ffffff",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
            height: "fit-content",
            position: "sticky",
            top: "120px"
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>Filters</h3>

          {/* Search */}
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "10px",
              border: "1px solid #ddd",
              marginBottom: "25px"
            }}
          />

          {/* Price */}
          <label style={{ fontWeight: "500" }}>
            Max Price: ₹{priceRange}
          </label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange}
            onChange={(e) => {
              setPriceRange(e.target.value);
              setCurrentPage(1);
            }}
            style={{ width: "100%", marginTop: "10px" }}
          />

          {/* Sort */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{
              marginTop: "25px",
              padding: "10px",
              width: "100%",
              borderRadius: "10px",
              border: "1px solid #ddd"
            }}
          >
            <option value="">Sort By</option>
            <option value="lowToHigh">
              Price: Low → High
            </option>
            <option value="highToLow">
              Price: High → Low
            </option>
          </select>
        </div>

        {/* 🔥 Products Grid */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "30px",
            transition: "0.3s ease"
          }}
        >
          {loading
            ? Array(6)
                .fill()
                .map((_, i) => <Shimmer key={i} />)
            : currentProducts.length > 0
              ? currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              : (
                <div style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  fontSize: "18px",
                  padding: "40px"
                }}>
                  No products found 😢
                </div>
              )}
        </div>
      </div>

      {/* 🔥 Pagination */}
      {!loading && totalPages > 1 && (
        <div style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "10px"
        }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background:
                  currentPage === index + 1
                    ? "#22c55e"
                    : "#e5e7eb",
                color:
                  currentPage === index + 1
                    ? "white"
                    : "black"
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default Products;