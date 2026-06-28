import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import heroBanner from "../assets/heroBanner.png";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShieldIcon from "@mui/icons-material/Shield";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowForwardAltIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,#F8FAFC 0%,#EFF6FF 45%,#ECFDF5 100%)",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          {/* LEFT */}

          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Chip
                icon={<VerifiedUserIcon />}
                label="Trusted AI-Powered Recovery Platform"
                sx={{
                  width: "fit-content",
                  bgcolor: "#DCFCE7",
                  color: "#14532D",
                  fontWeight: 700,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: "#0F172A",
                  fontSize: {
                    xs: "2.5rem",
                    md: "4.3rem",
                  },
                }}
              >
                Recover Lost Funds Through
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#166534",
                  }}
                >
                  AI-Backed Digital Investigation
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: "1.15rem",
                  lineHeight: 1.9,
                  maxWidth: 620,
                }}
              >
                Traceon Guard helps individuals and businesses investigate
                fraudulent transactions, trace digital assets, analyze
                blockchain activity, and build evidence-backed recovery
                strategies through advanced AI technology and experienced
                specialists.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardAltIcon />}
                  onClick={() => navigate("/case-email")}
                  sx={{
                    bgcolor: "#14532D",
                    py: 1.7,
                    px: 4,
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
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                flexWrap="wrap"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <ShieldIcon color="success" />
                  <Typography>Confidential Case Handling</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <AutoAwesomeIcon color="success" />
                  <Typography>AI Investigation Engine</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <SecurityIcon color="success" />
                  <Typography>Secure Client Portal</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT */}

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={heroBanner}
                alt="Traceon Guard Investigation Dashboard"
                sx={{
                  width: "100%",
                  maxHeight: 620,
                  objectFit: "contain",
                }}
              />

              <Paper
                elevation={8}
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 0,
                  p: 3,
                  width: 270,
                  borderRadius: 4,
                }}
              >
                <Typography fontWeight={700} mb={2}>
                  Investigation Status
                </Typography>

                <Stack spacing={2}>
                  <Chip color="success" label="Case Submitted" />

                  <Chip color="success" label="Blockchain Analysis" />

                  <Chip color="success" label="Wallet Trace Complete" />

                  <Chip color="warning" label="Expert Review In Progress" />
                </Stack>
              </Paper>

              <Paper
                elevation={8}
                sx={{
                  position: "absolute",
                  bottom: 40,
                  left: -20,
                  p: 3,
                  borderRadius: 4,
                  width: 250,
                }}
              >
                <Typography color="text.secondary" variant="body2">
                  Investigation Confidence
                </Typography>

                <Typography fontWeight={800} color="#166534" fontSize="2rem">
                  96%
                </Typography>

                <Typography color="text.secondary">
                  AI has successfully mapped transaction relationships and
                  generated supporting evidence for specialist review.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
