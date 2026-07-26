import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import ArrowForwardAltIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

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
            label="Guaranteed Help Available Now"
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
            Financial Support for Americans Who Need It Most
          </Typography>

          <Typography
            sx={{
              fontSize: 22,
              opacity: 0.92,
              maxWidth: 650,
              lineHeight: 1.7,
            }}
          >
            Access real financial help for housing, rent, business, farming, and
            emergency needs in just minutes. Apply now and receive a support
            that can make a difference today.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              onClick={() => navigate("/support-type")}
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
              onClick={() => navigate("/support-type")}
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
              Apply Now
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
