import {
  Container,
  Typography,
  Grid,
  Box
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpaIcon from "@mui/icons-material/Spa";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteIcon from "@mui/icons-material/Favorite";

const WhyUs = () => {
  return (
    <Box sx={{ background: "#f5fdf8", py: 10 }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=60"
              alt="grocery"
              style={{
                width: "100%",
                borderRadius: "20px"
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Why We Are The Best?
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Feature
                icon={<LocalShippingIcon sx={{ color: "#4CAF50" }} />}
                title="Fastest Delivery"
                desc="Groceries delivered in under 30 minutes."
              />

              <Feature
                icon={<SpaIcon sx={{ color: "#4CAF50" }} />}
                title="Freshness Guaranteed"
                desc="Fresh produce straight from the source."
              />

              <Feature
                icon={<AttachMoneyIcon sx={{ color: "#4CAF50" }} />}
                title="Affordable Prices"
                desc="Quality groceries at unbeatable prices."
              />

              <Feature
                icon={<FavoriteIcon sx={{ color: "#4CAF50" }} />}
                title="Trusted by Thousands"
                desc="Loved by 10,000+ happy customers."
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const Feature = ({ icon, title, desc }) => (
  <Box sx={{ display: "flex", mb: 3 }}>
    <Box sx={{ mr: 2 }}>{icon}</Box>
    <Box>
      <Typography fontWeight="bold">{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </Box>
  </Box>
);

export default WhyUs;