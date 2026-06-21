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
import heroBanner from "../../assets/heroBanner.png";

export const Hero = () => {
    const navigate = useNavigate();
    const toLogin = async () => {
      navigate("/auth/login");
    };

    const toSignup = async () => {
      navigate("/auth/signup");
    };
    return (
      <Box
        sx={{
          background: "linear-gradient(135deg,#1B5E20 0%,#2E7D32 100%)",
          color: "white",
          py: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Chip
                  label="Trusted by 75,000+ users"
                  sx={{
                    bgcolor: "rgba(255,255,255,.15)",
                    color: "white",
                    width: "fit-content",
                  }}
                />

                <Typography
                  fontWeight={800}
                  sx={{
                    fontSize: {
                      xs: "2.5rem",
                      md: "4.5rem",
                    },
                    lineHeight: 1.1,
                  }}
                >
                  Earn Money Completing Simple Digital Tasks
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    opacity: 0.95,
                  }}
                >
                  Join thousands of users earning rewards by completing surveys,
                  image annotation tasks, app testing, AI training jobs, and
                  more.
                </Typography>

                <Stack spacing={1}>
                  <Typography>✓ Flexible Schedule</Typography>

                  <Typography>✓ Fast Withdrawals</Typography>

                  <Typography>✓ Work Anywhere</Typography>
                </Stack>

                <Stack
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  spacing={2}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={toSignup}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: "#FFB300",
                      color: "#111",
                      fontWeight: 700,
                    }}
                  >
                    Start Earning Free
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    onClick={toLogin}
                    sx={{
                      borderColor: "white",
                      color: "white",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box position="relative">
                <Box
                  component="img"
                  src={heroBanner}
                  alt="Hero"
                  sx={{
                    width: "100%",
                    maxHeight: 500,
                    objectFit: "contain",
                  }}
                />

                <Paper
                  elevation={8}
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    p: 2,
                    borderRadius: 3,
                  }}
                >
                  <Typography fontWeight={700}>$18.75 Earned Today</Typography>

                  <Typography color="text.secondary" variant="body2">
                    12 Tasks Completed
                  </Typography>
                </Paper>

                <Paper
                  elevation={8}
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 10,
                    p: 2,
                    borderRadius: 3,
                  }}
                >
                  <Typography fontWeight={700}>New Tasks Available</Typography>

                  <Typography variant="body2" color="success.main">
                    +148 Today
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };