import { Box, Button, Container, Stack, Typography } from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { useNavigate } from "react-router-dom";

export default function FinalCTASection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,#0B2E59 0%, #123F73 55%, #1D5DA8 100%)",
        color: "white",
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorations */}
      <Box
        sx={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.05)",
          top: -180,
          left: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.04)",
          bottom: -120,
          right: -80,
        }}
      />

      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <VerifiedRoundedIcon
            sx={{
              fontSize: 70,
              color: "#FFC72C",
            }}
          />

          <Typography variant="h2" fontWeight={800} lineHeight={1.15}>
            Ready to Begin Your Application?
          </Typography>

          <Typography
            sx={{
              fontSize: 21,
              opacity: 0.9,
              maxWidth: 760,
              lineHeight: 1.9,
            }}
          >
            Take the first step by completing our secure online application. The
            process is simple, convenient, and designed to help you explore
            available assistance programs that match your needs.
          </Typography>

          <Button
            onClick={() => navigate("/support-type")}
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              bgcolor: "#FFC72C",
              color: "#0B2E59",
              px: 7,
              py: 2,
              borderRadius: 3,
              fontSize: 20,
              fontWeight: 800,
              minWidth: 320,
              "&:hover": {
                bgcolor: "#F4BE20",
              },
            }}
          >
            Check Your Eligibility
          </Button>

          <Typography
            sx={{
              opacity: 0.75,
              fontSize: 15,
            }}
          >
            Secure Online Application • Mobile Friendly • Nationwide Access
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
