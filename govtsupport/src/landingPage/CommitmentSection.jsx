import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import GppGoodRoundedIcon from "@mui/icons-material/GppGoodRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import { useNavigate } from "react-router-dom";

const items = [
  {
    icon: <ShieldRoundedIcon sx={{ fontSize: 42 }} />,
    title: "Secure Application",
    text: "Your information is handled using modern security standards throughout the application process.",
  },
  {
    icon: <VerifiedRoundedIcon sx={{ fontSize: 42 }} />,
    title: "Simple Process",
    text: "One online application helps you begin the process without unnecessary paperwork.",
  },
  {
    icon: <SupportAgentRoundedIcon sx={{ fontSize: 42 }} />,
    title: "Application Support",
    text: "Our support specialists are available to answer questions and guide applicants when needed.",
  },
  {
    icon: <GppGoodRoundedIcon sx={{ fontSize: 42 }} />,
    title: "Trusted Experience",
    text: "Designed to make accessing available assistance programs easier and more straightforward.",
  },
];

export default function CommitmentSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#0B2E59",
        color: "white",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3} alignItems="center" textAlign="center" mb={9}>
          <Typography
            sx={{
              color: "#8FC5FF",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Our Commitment
          </Typography>

          <Typography variant="h2" fontWeight={800} maxWidth={900}>
            Helping Americans Navigate Available Assistance Programs With
            Confidence
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              opacity: 0.85,
              fontSize: 20,
              lineHeight: 1.9,
            }}
          >
            The National Benefits Assistance Center is committed to making the
            application process easier, clearer, and more accessible through a
            secure online experience and dedicated applicant support.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <Stack
                spacing={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.08)",
                  height: "100%",
                }}
              >
                <Box color="#FFC72C">{item.icon}</Box>

                <Typography variant="h5" fontWeight={700}>
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    opacity: 0.8,
                    lineHeight: 1.8,
                  }}
                >
                  {item.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Stack alignItems="center" mt={9}>
          <Button
            onClick={() => navigate("/support-type")}
            size="large"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              bgcolor: "#FFC72C",
              color: "#0B2E59",
              px: 6,
              py: 1.8,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: 18,
              "&:hover": {
                bgcolor: "#F4BE20",
              },
            }}
          >
            Begin Your Application
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
