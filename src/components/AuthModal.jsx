import {
  Dialog,
  DialogContent,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  Typography,
  IconButton
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AuthModal = ({ open, handleClose }) => {
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { login } = useAuth();

  const handleLogin = () => {
    if (!email) return;
    login({
      name: email.split("@")[0],
      email
    });
    handleClose();
  };

  const handleSignup = () => {
    if (!name || !email) return;
    login({
      name,
      email
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogContent sx={{ position: "relative", p: 3 }}>

        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", right: 10, top: 10 }}
        >
          <CloseIcon />
        </IconButton>

        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          centered
          sx={{ mb: 2 }}
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        {/* LOGIN */}
        {tab === 0 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" align="center">
              Welcome Back 👋
            </Typography>

            <TextField
              label="Email"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              size="small"
              fullWidth
            />

            <Button
              variant="contained"
              onClick={handleLogin}
              sx={{
                backgroundColor: "#2e7d32",
                "&:hover": { backgroundColor: "#1b5e20" }
              }}
            >
              Login
            </Button>
          </Box>
        )}

        {/* SIGNUP */}
        {tab === 1 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" align="center">
              Create Account 🚀
            </Typography>

            <TextField
              label="Full Name"
              size="small"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Email"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              size="small"
              fullWidth
            />

            <Button
              variant="contained"
              onClick={handleSignup}
              sx={{
                backgroundColor: "#2e7d32",
                "&:hover": { backgroundColor: "#1b5e20" }
              }}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;