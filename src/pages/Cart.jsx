import { useCart } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice,
  } = useCart();

  const navigate = useNavigate();

  const deliveryCharge = totalPrice > 500 ? 0 : 40;
  const gst = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + deliveryCharge + gst;

  if (cart.length === 0) {
    return (
      <h2 style={{ padding: "40px" }}>
        Cart is Empty 😔
      </h2>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        gap: "40px",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT SIDE - CART ITEMS */}
      <div style={{ flex: 2, minWidth: "300px" }}>
        <h2>Your Cart 🛒</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>

            <div>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span style={{ margin: "0 10px" }}>
                {item.quantity}
              </span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <div>
              <strong>
                ₹{item.price * item.quantity}
              </strong>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - SUMMARY */}
      <div
        style={{
          flex: 1,
          minWidth: "250px",
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

        <hr />

        <div style={rowStyle}>
          <strong>Total</strong>
          <strong>₹{grandTotal}</strong>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0",
};

export default Cart;