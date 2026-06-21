import {
  AppBar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";


export const Navbar = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDrawer = () => {
      setMobileOpen((prev) => !prev);
    };

    const toLogin = async () => {
      navigate("/auth/login");
    };

    const toSignup = async () => {
      navigate("/auth/signup");
    };

    const toHome = async () => {
      navigate("/");
    };

    const toSupport = async () => {
      navigate("/support");
    };

    const toFaqs = async () => {
      navigate("/faq-page");
    };

    const toHowItWorks = async () => {
      navigate("/how-it-works");
    };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "white",
          color: "#0F172A",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: 64,
                md: 72,
              },
            }}
          >
            {/* LOGO */}
            <Typography
              fontWeight={800}
              sx={{
                flexGrow: 1,
                color: "#1B5E20",
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.4rem",
                },
              }}
            >
              PayService Tasks
            </Typography>

            {/* DESKTOP NAV */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Button onClick={toHome} color="inherit">Home</Button>
              <Button  color="inherit">How It Works</Button>
              <Button color="inherit">FAQ</Button>
              <Button onClick={toSupport} color="inherit">Contact</Button>
            </Stack>

            {/* DESKTOP ACTIONS */}
            <Stack
              direction="row"
              spacing={1}
              ml={2}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Button onClick={toLogin}>Login</Button>

              <Button
                variant="contained"
                onClick={toSignup}
                sx={{
                  bgcolor: "#1B5E20",
                  px: 3,
                  "&:hover": {
                    bgcolor: "#2E7D32",
                  },
                }}
              >
                Get Started
              </Button>
            </Stack>

            {/* MOBILE MENU */}
            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 280,
            p: 2,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography fontWeight={800} color="#1B5E20">
              PayService Tasks
            </Typography>

            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <List>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="How It Works" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="FAQ" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>

          <Stack spacing={2} mt={3}>
            <Button variant="outlined" fullWidth onClick={toLogin}>
              Login
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={toSignup}
              sx={{
                bgcolor: "#1B5E20",
                "&:hover": {
                  bgcolor: "#2E7D32",
                },
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
