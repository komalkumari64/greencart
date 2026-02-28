import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider
} from "@mui/material";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1b5e20",
        color: "#fff",
        pt: 3,   // reduced padding
        pb: 2,   // reduced padding
        mt: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>

          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              GreenCart
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Fresh groceries delivered fast & affordable.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2">Home</Typography>
              </Link>
              <Link to="/products" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2">Products</Typography>
              </Link>
              <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2">Cart</Typography>
              </Link>
              <Link to="/wishlist" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2">Wishlist</Typography>
              </Link>
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={3}>
            <Typography fontWeight="bold" gutterBottom>
              Support
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography variant="body2">Contact Us</Typography>
              <Typography variant="body2">FAQs</Typography>
              <Typography variant="body2">Privacy Policy</Typography>
              <Typography variant="body2">Terms & Conditions</Typography>
            </Box>
          </Grid>

          {/* Subscribe */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight="bold" gutterBottom>
              Subscribe
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                size="small"
                placeholder="Your email"
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  flex: 1,
                  height: 36
                }}
              />
              <Button
                size="small"
                variant="contained"
                sx={{
                  backgroundColor: "#66bb6a",
                  minWidth: 50,
                  "&:hover": { backgroundColor: "#4caf50" }
                }}
              >
                GO
              </Button>
            </Box>

            <Box sx={{ mt: 1 }}>
              <IconButton size="small" sx={{ color: "#fff" }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "#fff" }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "#fff" }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "#fff" }}>
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Payment Icons */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            gap: 2
          }}
        >
          {[
            "https://img.icons8.com/color/48/visa.png",
            "https://img.icons8.com/color/48/mastercard.png",
            "https://img.icons8.com/color/48/paypal.png"
          ].map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt="payment"
              sx={{ height: 26 }}
            />
          ))}
        </Box>

        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)", my: 2 }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: "13px", opacity: 0.8 }}
        >
          © {new Date().getFullYear()} GreenCart. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;