import { useCart } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const { cart, totalPrice, placeOrder } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  const deliveryCharge = totalPrice > 500 ? 0 : 40;
  const gst = Math.round(totalPrice * 0.05);

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(totalPrice * 0.1);
      setCouponError("");
    } else if (coupon === "SAVE20") {
      setDiscount(totalPrice * 0.2);
      setCouponError("");
    } else {
      setDiscount(0);
      setCouponError("Invalid Coupon Code");
    }
  };

  const grandTotal =
    totalPrice + deliveryCharge + gst - discount;

  if (cart.length === 0) {
    return (
      <h2 style={{ padding: "40px" }}>
        Cart is Empty 😔
      </h2>
    );
  }

  return (
    <div style={{ padding: "40px", display: "flex", gap: "40px" }}>
      {/* LEFT SIDE */}
      <div style={{ flex: 2 }}>
        <h2>Shipping Details 🚚</h2>

        <input placeholder="Full Name" style={inputStyle} />
        <input placeholder="Email" style={inputStyle} />
        <input placeholder="Phone Number" style={inputStyle} />
        <input placeholder="Address" style={inputStyle} />
        <input placeholder="City" style={inputStyle} />
        <input placeholder="Pincode" style={inputStyle} />
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          background: "#fff",
        }}
      >
        <h3>Order Summary</h3>

        <div style={rowStyle}>
          <span>Subtotal</span>
          <span>₹{totalPrice}</span>
        </div>

        <div style={rowStyle}>
          <span>Delivery</span>
          <span>
            {deliveryCharge === 0
              ? "FREE"
              : `₹${deliveryCharge}`}
          </span>
        </div>

        <div style={rowStyle}>
          <span>GST (5%)</span>
          <span>₹{gst}</span>
        </div>

        {/* Coupon Section */}
        <div style={{ marginTop: "15px" }}>
          <input
            placeholder="Enter Coupon Code"
            value={coupon}
            onChange={(e) =>
              setCoupon(e.target.value)
            }
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={applyCoupon}
            style={{
              marginTop: "8px",
              width: "100%",
              padding: "8px",
              background: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Apply Coupon
          </button>

          {couponError && (
            <p style={{ color: "red" }}>
              {couponError}
            </p>
          )}
        </div>

        {discount > 0 && (
          <div style={rowStyle}>
            <span>Discount</span>
            <span>
              -₹{discount.toFixed(0)}
            </span>
          </div>
        )}

        <hr />

        <div style={rowStyle}>
          <strong>Total</strong>
          <strong>
            ₹{grandTotal.toFixed(0)}
          </strong>
        </div>

        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              placeOrder(grandTotal);
              navigate("/success");
            }, 2000);
          }}
          style={buttonStyle}
        >
          {loading
            ? "Processing..."
            : "Place Order"}
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0",
};

const buttonStyle = {
  marginTop: "20px",
  width: "100%",
  padding: "12px",
  background: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Checkout;