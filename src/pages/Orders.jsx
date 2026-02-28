import { useCart } from "../context/Cartcontext";

const Orders = () => {
  const { orders } = useCart();

  if (orders.length === 0) {
    return <h2 style={{ padding: "40px" }}>No Orders Yet 😔</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Orders 📦</h2>

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          <h4>Order ID: #{order.id}</h4>
          <p>Date: {order.date}</p>
          <p>Total: ₹{order.total}</p>

          {order.items.map((item) => (
            <div key={item.id}>
              {item.name} x {item.quantity}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;