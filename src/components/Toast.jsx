const Toast = ({ message, show }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: "#22c55e",
        color: "white",
        padding: "12px 20px",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        opacity: show ? 1 : 0,
        transform: show
          ? "translateY(0)"
          : "translateY(20px)",
        transition: "0.3s ease",
        pointerEvents: "none"
      }}
    >
      {message}
    </div>
  );
};

export default Toast;