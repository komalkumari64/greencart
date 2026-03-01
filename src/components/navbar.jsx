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

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#a5d6a7" : "#fff",
    textDecoration: "none",
    fontWeight: 500
  });

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Cart", path: "/cart" },
    { label: "Wishlist", path: "/wishlist" }
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#2e7d32" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Logo */}
        <Typography
          variant="h6"
          fontWeight="bold"
          component={NavLink}
          to="/"
          sx={{ textDecoration: "none", color: "#fff" }}
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

          <IconButton sx={{ color: "#fff" }}>
            <PersonIcon />
          </IconButton>

          {/* Mobile Menu */}
          {isMobile && (
            <>
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
              >
                <List sx={{ width: 250 }}>
                  {navItems.map((item) => (
                    <ListItem
                      button
                      key={item.path}
                      component={NavLink}
                      to={item.path}
                      onClick={() => setOpen(false)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          )}
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;