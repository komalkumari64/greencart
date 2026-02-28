import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import veggies from "../assets/categories/veggies.jpg";
import fruits from "../assets/categories/fruits.jpg";
import drinks from "../assets/categories/drinks.jpg";
import instant from "../assets/categories/instant.jpg";
import dairy from "../assets/categories/dairy.jpg";
import bakery from "../assets/categories/bakery.jpg";
import grains from "../assets/categories/grains.jpg";

const categories = [
  { name: "Organic Veggies", image: veggies, count: 12 },
  { name: "Fresh Fruits", image: fruits, count: 18 },
  { name: "Cold Drinks", image: drinks, count: 9 },
  { name: "Instant Food", image: instant, count: 15 },
  { name: "Dairy Products", image: dairy, count: 10 },
  { name: "Bakery & Breads", image: bakery, count: 7 },
  { name: "Grains & Cereals", image: grains, count: 14 }
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 6 }}>
        Shop by Categories
      </Typography>

      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              onClick={() => handleCategoryClick(category.name)}
              sx={{
                position: "relative",
                borderRadius: 5,
                overflow: "hidden",
                cursor: "pointer",
                height: 260,
                backdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)"
                }
              }}
            >
              <Box
                component="img"
                src={category.image}
                alt={category.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />

              {/* Product Count Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 15,
                  left: 15,
                  background: "rgba(255,255,255,0.9)",
                  px: 2,
                  py: 0.5,
                  borderRadius: "20px",
                  fontSize: 12,
                  fontWeight: 600
                }}
              >
                {category.count} Products
              </Box>

              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  p: 3
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  {category.name}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "#22c55e",
                    borderRadius: "20px",
                    textTransform: "none",
                    fontSize: 13,
                    px: 3,
                    "&:hover": { background: "#16a34a" }
                  }}
                >
                  Shop Now →
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;