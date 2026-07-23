import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import ArrowForwardAltIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function HeroSection() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,#0B2E59 0%, #123E73 55%, #1C5AA6 100%)",
        color: "white",
        py: { xs: 9, md: 14 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.05)",
          top: -180,
          right: -120,
        }}
      />

      <Container maxWidth="lg">
        <Stack spacing={4} maxWidth={760}>
          <Chip
            icon={<VerifiedUserIcon />}
            label="National Benefits Assistance Center"
            sx={{
              bgcolor: "rgba(255,255,255,.15)",
              color: "white",
              width: "fit-content",
              fontWeight: 600,
            }}
          />

          <Typography
            variant="h2"
            fontWeight={800}
            lineHeight={1.1}
            sx={{
              fontSize: {
                xs: "2.3rem",
                md: "4rem",
              },
            }}
          >
            Helping Americans Access Federal Support Programs
          </Typography>

          <Typography
            sx={{
              fontSize: 22,
              opacity: 0.92,
              maxWidth: 650,
              lineHeight: 1.7,
            }}
          >
            Explore available federal assistance programs for businesses,
            housing, rent, farming, financial hardship, and community support.
            Our team helps simplify the application process from start to
            finish.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              size="large"
              variant="contained"
              endIcon={<ArrowForwardAltIcon />}
              sx={{
                bgcolor: "#FFC72C",
                color: "#09254A",
                fontWeight: 700,
                px: 5,
                py: 1.8,
                borderRadius: 3,
                fontSize: 18,
                "&:hover": {
                  bgcolor: "#F4BE20",
                },
              }}
            >
              Check Eligibility
            </Button>

            <Button
              size="large"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,.35)",
                px: 5,
                py: 1.8,
                borderRadius: 3,
                fontWeight: 700,
                "&:hover": {
                  borderColor: "white",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={5} pt={3}>
            <Box>
              <Typography variant="h4" fontWeight={800}>
                50 States
              </Typography>

              <Typography color="rgba(255,255,255,.75)">
                Nationwide Program Access
              </Typography>
            </Box>

            <Box>
              <Typography variant="h4" fontWeight={800}>
                5 Major
              </Typography>

              <Typography color="rgba(255,255,255,.75)">
                Assistance Categories
              </Typography>
            </Box>

            <Box>
              <Typography variant="h4" fontWeight={800}>
                Secure
              </Typography>

              <Typography color="rgba(255,255,255,.75)">
                Online Application Process
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
