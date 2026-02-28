import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  InputBase
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

import AuthModal from "./AuthModal";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const { user, logout } = useAuth();

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#a5d6a7" : "#fff",
    textDecoration: "none",
    fontWeight: 500
  });

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#2e7d32" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* Logo */}
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Typography variant="h6" fontWeight="bold">
              GreenCart
            </Typography>
          </NavLink>

          {/* Nav Links */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <NavLink to="/" style={linkStyle}>Home</NavLink>
            <NavLink to="/products" style={linkStyle}>Products</NavLink>
            <NavLink to="/cart" style={linkStyle}>Cart</NavLink>
            <NavLink to="/wishlist" style={linkStyle}>Wishlist</NavLink>
          </Box>

          {/* Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              px: 2,
              borderRadius: "20px",
              width: 250
            }}
          >
            <InputBase
              placeholder="Search products..."
              sx={{ flex: 1, fontSize: "14px" }}
            />
            <SearchIcon sx={{ color: "#2e7d32" }} />
          </Box>

          {/* Icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ color: "#fff" }}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton sx={{ color: "#fff" }}>
              <Badge badgeContent={1} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {user ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                  Hi, {user.name}
                </Typography>

                <IconButton
                  sx={{ color: "#fff" }}
                  onClick={logout}
                >
                  <PersonIcon />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => setOpenAuth(true)}
              >
                <PersonIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <AuthModal
        open={openAuth}
        handleClose={() => setOpenAuth(false)}
      />
    </>
  );
};

export default Navbar;