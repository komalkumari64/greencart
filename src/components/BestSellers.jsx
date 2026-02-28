import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const products = [
  {
    id: 1,
    category: "Bakery",
    name: "Brown Bread 400g",
    price: 35,
    oldPrice: 40,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=400&q=60"
  },
  {
    id: 2,
    category: "Grains",
    name: "Organic Quinoa",
    price: 420,
    oldPrice: 450,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=60"
  },
  {
    id: 3,
    category: "Vegetables",
    name: "Carrot 500g",
    price: 44,
    oldPrice: 50,
    image:
      "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=400&q=60"
  },
  {
    id: 4,
    category: "Fruits",
    name: "Apple 1kg",
    price: 90,
    oldPrice: 100,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=60"
  }
];

const BestSellers = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Best Sellers
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                borderRadius: 4,
                transition: "0.3s",
                boxShadow: 3,
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8
                }
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.category}
                </Typography>

                <Typography variant="h6" fontWeight="600">
                  {product.name}
                </Typography>

                {/* Rating */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {[...Array(4)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#4CAF50", fontSize: 18 }} />
                  ))}
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    (4)
                  </Typography>
                </Box>

                {/* Price */}
                <Typography
                  variant="h6"
                  sx={{ color: "#4CAF50", fontWeight: "bold" }}
                >
                  ₹{product.price}
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontSize: "14px",
                      marginLeft: "8px"
                    }}
                  >
                    ₹{product.oldPrice}
                  </span>
                </Typography>

                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    mt: 2,
                    borderRadius: 3,
                    borderColor: "#4CAF50",
                    color: "#4CAF50",
                    "&:hover": {
                      backgroundColor: "#4CAF50",
                      color: "white"
                    }
                  }}
                >
                  Add
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestSellers;