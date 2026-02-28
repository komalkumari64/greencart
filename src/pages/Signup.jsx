import { useState } from "react";
import { useCart } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(form);
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          required
          style={inputStyle}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <input
          placeholder="Email"
          required
          style={inputStyle}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          required
          style={inputStyle}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button style={buttonStyle}>Signup</button>
      </form>
    </div>
  );
};

const inputStyle = {
  display: "block",
  width: "300px",
  padding: "10px",
  margin: "10px 0",
};

const buttonStyle = {
  padding: "10px 20px",
  background: "#2e7d32",
  color: "white",
  border: "none",
};

export default Signup;