import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "80px" }}>🎉</div>

      <h1 style={{ color: "#2e7d32" }}>
        Order Placed Successfully!
      </h1>

      <p>
        Your Order ID: <strong>#{orderId}</strong>
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Success;