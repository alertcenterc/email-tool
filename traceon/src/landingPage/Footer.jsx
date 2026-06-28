import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#0F172A",
        color: "white",
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Company */}

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: "#14532D",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SecurityIcon />
                </Box>

                <Box>
                  <Typography fontWeight={800} fontSize="1.4rem">
                    Traceon Guard
                  </Typography>

                  <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                    AI Digital Investigation Platform
                  </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 1.9,
                }}
              >
                Traceon Guard helps individuals and businesses investigate
                digital fraud, trace cryptocurrency transactions, analyze
                suspicious financial activity, and build evidence-backed
                recovery strategies through AI-powered investigation.
              </Typography>

              <Stack direction="row" spacing={1}>
                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,.08)",
                    color: "white",

                    "&:hover": {
                      bgcolor: "#14532D",
                    },
                  }}
                >
                  <FacebookRoundedIcon />
                </IconButton>

                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,.08)",
                    color: "white",

                    "&:hover": {
                      bgcolor: "#14532D",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,.08)",
                    color: "white",

                    "&:hover": {
                      bgcolor: "#14532D",
                    },
                  }}
                >
                  <XIcon />
                </IconButton>

                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,.08)",
                    color: "white",

                    "&:hover": {
                      bgcolor: "#14532D",
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links */}

          <Grid item xs={12} sm={6} md={2}>
            <Typography fontWeight={700} mb={3}>
              Company
            </Typography>

            <Stack spacing={2}>
              {["Home", "About Us", "Services", "How It Works", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    underline="none"
                    color="#CBD5E1"
                    sx={{
                      cursor: "pointer",

                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {item}
                  </Link>
                ),
              )}
            </Stack>
          </Grid>

          {/* Legal */}

          <Grid item xs={12} sm={6} md={3}>
            <Typography fontWeight={700} mb={3}>
              Legal & Resources
            </Typography>

            <Stack spacing={2}>
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Disclaimer",
                "FAQ",
              ].map((item) => (
                <Link
                  key={item}
                  underline="none"
                  color="#CBD5E1"
                  sx={{
                    cursor: "pointer",

                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}

          <Grid item xs={12} md={3}>
            <Typography fontWeight={700} mb={3}>
              Contact
            </Typography>

            <Stack spacing={3}>
              <Stack direction="row" spacing={2}>
                <EmailOutlinedIcon sx={{ color: "#16A34A" }} />

                <Typography color="#CBD5E1">
                  support@traceonguard.com
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <PhoneOutlinedIcon sx={{ color: "#16A34A" }} />

                <Typography color="#CBD5E1">+1 (000) 000-0000</Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <LocationOnOutlinedIcon sx={{ color: "#16A34A" }} />

                <Typography color="#CBD5E1">
                  Global Digital Investigation Services
                </Typography>
              </Stack>

              <Button
                variant="contained"
                onClick={() => navigate("/case-email")}
                sx={{
                  width: "fit-content",
                  bgcolor: "#14532D",
                  borderRadius: 3,
                  px: 3,
                  py: 1.3,
                  textTransform: "none",
                  fontWeight: 700,

                  "&:hover": {
                    bgcolor: "#166534",
                  },
                }}
              >
                Submit Your Case
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 6,
            borderColor: "rgba(255,255,255,.1)",
          }}
        />

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography color="#94A3B8" lineHeight={1.8}>
              © {new Date().getFullYear()} Traceon Guard. All rights reserved.
              <br />
              <strong>Disclaimer:</strong> Traceon Guard provides digital
              investigation, transaction tracing, and case assessment services.
              We do not guarantee the recovery of lost funds. Outcomes depend on
              the facts and circumstances of each case.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              textAlign={{
                xs: "left",
                md: "right",
              }}
              color="#64748B"
            >
              Secured with industry-standard encryption.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
