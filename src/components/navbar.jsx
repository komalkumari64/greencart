import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Cart", path: "/cart" },
    { label: "Wishlist", path: "/wishlist" }
  ];

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
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
          >
            GreenCart
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} style={linkStyle}>
                  {item.label}
                </NavLink>
              ))}
            </Box>
          )}

          {/* Desktop Search */}
          {!isMobile && (
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
          )}

          {/* Icons + Hamburger */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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

            <IconButton sx={{ color: "#fff" }}>
              <PersonIcon />
            </IconButton>

            {isMobile && (
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>

        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 260,
            height: "100%",
            backgroundColor: "#f5f5f5"
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              backgroundColor: "#2e7d32",
              color: "#fff",
              p: 2,
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            GreenCart
          </Box>

          {/* Drawer Links */}
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.path}
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
                sx={{
                  textDecoration: "none",
                  color: "#333",
                  "&:hover": {
                    backgroundColor: "#e8f5e9"
                  }
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;