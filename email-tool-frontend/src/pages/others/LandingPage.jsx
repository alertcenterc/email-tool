import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import heroBanner from "../../assets/heroBanner.png";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const toLogin = async () => {
    navigate("/auth/login");
  };

  const toSignup = async () => {
    navigate("/auth/signup");
  };

  return (
    <Box bgcolor="#f5f5f5" minHeight="100vh">
      {/* HERO */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
          color: "white",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography
                  fontWeight="bold"
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      md: "4rem",
                    },
                  }}
                >
                  Earn Money by Completing Simple Online Tasks
                </Typography>
  
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      md: "1.2rem",
                    },
                    opacity: 0.95,
                  }}
                >
                  Join PayService Tasks and get rewarded for completing
                  simple online activities. Work from anywhere and earn
                  at your own pace.
                </Typography>
  
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                >
                  <Button
                    onClick={toSignup}
                    variant="contained"
                    color="warning"
                    size="large"
                  >
                    Create Free Account
                  </Button>
  
                  <Button
                    onClick={toLogin}
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "white",
                      borderColor: "white",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Grid>
  
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={heroBanner}
                alt="Online task platform"
                sx={{
                  width: "100%",
                  maxHeight: 450,
                  objectFit: "contain",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
  
      {/* STATS */}
      <Container maxWidth="lg" sx={{ mt: -4 }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                textAlign="center"
                fontWeight="bold"
                color="success.main"
              >
                50,000+
              </Typography>
  
              <Typography textAlign="center">
                Active Members
              </Typography>
            </Grid>
  
            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                textAlign="center"
                fontWeight="bold"
                color="success.main"
              >
                $2M+
              </Typography>
  
              <Typography textAlign="center">
                Paid to Members
              </Typography>
            </Grid>
  
            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                textAlign="center"
                fontWeight="bold"
                color="success.main"
              >
                24/7
              </Typography>
  
              <Typography textAlign="center">
                Customer Support
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
  
      {/* FEATURES */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={5}
        >
          Why Choose PayService Tasks
        </Typography>
  
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <TaskAltIcon color="success" sx={{ fontSize: 60 }} />
  
                  <Typography fontWeight="bold">
                    Simple Tasks
                  </Typography>
  
                  <Typography
                    textAlign="center"
                    color="text.secondary"
                  >
                    Complete easy online tasks in just a few minutes.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
  
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <PaymentsIcon color="success" sx={{ fontSize: 60 }} />
  
                  <Typography fontWeight="bold">
                    Fast Payments
                  </Typography>
  
                  <Typography
                    textAlign="center"
                    color="text.secondary"
                  >
                    Request withdrawals through your preferred payment
                    method.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
  
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <TrendingUpIcon color="success" sx={{ fontSize: 60 }} />
  
                  <Typography fontWeight="bold">
                    New Tasks Added Regularly
                  </Typography>
  
                  <Typography
                    textAlign="center"
                    color="text.secondary"
                  >
                    Discover fresh earning opportunities every day.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
  
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <SupportAgentIcon color="success" sx={{ fontSize: 60 }} />
  
                  <Typography fontWeight="bold">
                    Reliable Support
                  </Typography>
  
                  <Typography
                    textAlign="center"
                    color="text.secondary"
                  >
                    Our support team is available whenever you need help.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
  
      {/* HOW IT WORKS */}
      <Box bgcolor="white" py={8}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mb={5}
          >
            How It Works
          </Typography>
  
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: "100%" }}>
                <Typography
                  variant="h5"
                  color="success.main"
                  fontWeight="bold"
                >
                  1
                </Typography>
  
                <Typography fontWeight="bold" mt={1}>
                  Create an Account
                </Typography>
  
                <Typography color="text.secondary">
                  Sign up for free and access available tasks.
                </Typography>
              </Paper>
            </Grid>
  
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: "100%" }}>
                <Typography
                  variant="h5"
                  color="success.main"
                  fontWeight="bold"
                >
                  2
                </Typography>
  
                <Typography fontWeight="bold" mt={1}>
                  Complete Tasks
                </Typography>
  
                <Typography color="text.secondary">
                  Follow the instructions and submit your answers.
                </Typography>
              </Paper>
            </Grid>
  
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: "100%" }}>
                <Typography
                  variant="h5"
                  color="success.main"
                  fontWeight="bold"
                >
                  3
                </Typography>
  
                <Typography fontWeight="bold" mt={1}>
                  Earn and Withdraw
                </Typography>
  
                <Typography color="text.secondary">
                  Receive rewards and withdraw your earnings when
                  available.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
  
      {/* CTA */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
          py: 8,
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
            >
              Ready to Start Earning?
            </Typography>
  
            <Typography textAlign="center">
              Create your free account today and start completing
              tasks from anywhere.
            </Typography>
  
            <Button
              onClick={toSignup}
              variant="contained"
              color="warning"
              size="large"
            >
              Create Free Account
            </Button>
          </Stack>
        </Container>
      </Box>
  
      {/* FOOTER */}
      <Box bgcolor="#111" color="white" py={3}>
        <Typography textAlign="center">
          © 2026 PayService Tasks. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
