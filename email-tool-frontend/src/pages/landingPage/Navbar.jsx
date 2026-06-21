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


export const Navbar = () => {
    const navigate = useNavigate();
    const toLogin = async () => {
      navigate("/auth/login");
    };

    const toSignup = async () => {
      navigate("/auth/signup");
    };
  return (
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
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{
              flexGrow: 1,
              color: "#1B5E20",
            }}
          >
            PayService Tasks
          </Typography>

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
            <Button color="inherit">Home</Button>
            <Button color="inherit">How It Works</Button>
            <Button color="inherit">FAQ</Button>
            <Button color="inherit">Contact</Button>
          </Stack>

          <Stack direction="row" spacing={1} ml={2}>
            <Button onClick={toLogin}>Login</Button>

            <Button
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

          <IconButton
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
  );
};
