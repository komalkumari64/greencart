import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // ---------------- CART ----------------
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ---------------- WISHLIST ----------------
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // ---------------- ORDERS ----------------
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  // ---------------- AUTH ----------------
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ---------------- CART FUNCTIONS ----------------
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ---------------- WISHLIST ----------------
  const toggleWishlist = (product) => {
    const exist = wishlist.find((item) => item.id === product.id);
    if (exist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // ---------------- ORDERS ----------------
  const placeOrder = (totalAmount) => {
    const newOrder = {
      id: Math.floor(Math.random() * 1000000),
      items: cart,
      total: totalAmount,
      date: new Date().toLocaleString(),
    };

    setOrders([newOrder, ...orders]);
    clearCart();
  };

  // ---------------- AUTH ----------------
  const signup = (userData) => {
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const login = (email, password) => {
    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem("user", JSON.stringify(savedUser));
      setUser(savedUser);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        orders,
        user,
        addToCart,
        toggleWishlist,
        placeOrder,
        clearCart,
        signup,
        login,
        logout,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);