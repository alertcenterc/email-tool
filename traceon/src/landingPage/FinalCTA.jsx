import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import { useNavigate } from "react-router-dom";

export const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(135deg,#14532D 0%,#166534 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blur */}

      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          bgcolor: "rgba(255,255,255,.05)",
          borderRadius: "50%",
          top: -120,
          right: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 250,
          height: 250,
          bgcolor: "rgba(255,255,255,.05)",
          borderRadius: "50%",
          bottom: -90,
          left: -70,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LEFT */}

          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <Chip
                label="Start Your Investigation Today"
                sx={{
                  width: "fit-content",
                  bgcolor: "rgba(255,255,255,.15)",
                  color: "white",
                  fontWeight: 700,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  fontSize: {
                    xs: "2.2rem",
                    md: "3.5rem",
                  },
                }}
              >
                Don't Wait to Begin
                <br />
                Your Investigation.
              </Typography>

              <Typography
                sx={{
                  opacity: 0.9,
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                  maxWidth: 700,
                }}
              >
                The sooner an investigation begins, the greater the opportunity
                to preserve valuable digital evidence. Submit your case securely
                and let Traceon Guard help you understand what happened through
                AI-powered analysis and professional investigation.
              </Typography>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <SecurityIcon />

                  <Typography>Secure Case Submission</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <LockIcon />

                  <Typography>Confidential Investigation</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <VerifiedUserIcon />

                  <Typography>AI-Assisted Analysis</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT */}

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: "white",
                color: "#0F172A",
                p: 5,
                borderRadius: 5,
                boxShadow: "0 20px 60px rgba(0,0,0,.15)",
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h5" fontWeight={800}>
                  Ready to Get Started?
                </Typography>

                <Typography color="text.secondary" lineHeight={1.8}>
                  Submit your case securely and receive an initial review from
                  our investigation team.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate("/auth/signup")}
                  sx={{
                    bgcolor: "#14532D",
                    py: 1.6,
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: 700,

                    "&:hover": {
                      bgcolor: "#166534",
                    },
                  }}
                >
                  Start Free Case Review
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate("/contact")}
                  sx={{
                    py: 1.6,
                    borderRadius: 3,
                    borderColor: "#14532D",
                    color: "#14532D",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Contact an Investigator
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
