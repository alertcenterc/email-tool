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
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="center">
            <Typography variant="h2" fontWeight="bold" textAlign="center">
              PayService Task
            </Typography>

            <Typography variant="h6" textAlign="center" maxWidth={700}>
              Complete simple online tasks, earn rewards, and withdraw directly
              through your preferred crypto payment method.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button onClick={toLogin} variant="contained" color="warning" size="large">
                Login
              </Button>

              <Button
              onClick={toSignup}
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
              >
                Create Free Account
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* STATS */}
      <Container maxWidth="lg" sx={{ mt: -5 }}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
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
                25K+
              </Typography>

              <Typography textAlign="center">Registered Members</Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                textAlign="center"
                fontWeight="bold"
                color="success.main"
              >
                $1.2M+
              </Typography>

              <Typography textAlign="center">Rewards Distributed</Typography>
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

              <Typography textAlign="center">Customer Support</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* FEATURES */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={5}>
          Why Choose Us
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <TaskAltIcon color="success" sx={{ fontSize: 60 }} />
                  <Typography fontWeight="bold">Simple Tasks</Typography>
                  <Typography textAlign="center" color="text.secondary">
                    Complete easy online tasks and earn rewards.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <PaymentsIcon color="success" sx={{ fontSize: 60 }} />
                  <Typography fontWeight="bold">Fast Withdrawals</Typography>
                  <Typography textAlign="center" color="text.secondary">
                    Receive payments through popular crypto networks.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <TrendingUpIcon color="success" sx={{ fontSize: 60 }} />
                  <Typography fontWeight="bold">Daily Opportunities</Typography>
                  <Typography textAlign="center" color="text.secondary">
                    New earning opportunities are added regularly.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <SupportAgentIcon color="success" sx={{ fontSize: 60 }} />
                  <Typography fontWeight="bold">Reliable Support</Typography>
                  <Typography textAlign="center" color="text.secondary">
                    Dedicated support team available to assist you.
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
          <Typography variant="h4" textAlign="center" fontWeight="bold" mb={5}>
            How It Works
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" color="success.main" fontWeight="bold">
                  1
                </Typography>

                <Typography fontWeight="bold" mt={1}>
                  Create Account
                </Typography>

                <Typography color="text.secondary">
                  Register and access available tasks.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" color="success.main" fontWeight="bold">
                  2
                </Typography>

                <Typography fontWeight="bold" mt={1}>
                  Complete Tasks
                </Typography>

                <Typography color="text.secondary">
                  Submit completed tasks and earn rewards.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" color="success.main" fontWeight="bold">
                  3
                </Typography>

                <Typography fontWeight="bold" mt={1}>
                  Withdraw Earnings
                </Typography>

                <Typography color="text.secondary">
                  Transfer earnings through your chosen payout method.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
          py: 8,
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center">
            <Typography variant="h4" textAlign="center" fontWeight="bold">
              Ready To Start Earning?
            </Typography>

            <Typography textAlign="center">
              Join thousands of members already completing tasks and receiving
              rewards.
            </Typography>

            <Button onClick={toSignup} variant="contained" color="warning" size="large">
              Create Free Account
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box bgcolor="#111" color="white" py={3}>
        <Typography textAlign="center">
          © 2026 PayServiceNotice. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
