import {
  Avatar,
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import { useNavigate } from "react-router-dom";

export default function WelcomeCard() {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 5 },
        borderRadius: 5,
        border: "1px solid",
        borderColor: "grey.200",
        background: "linear-gradient(135deg,#14532D 0%,#166534 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorations */}

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.05)",
          top: -120,
          right: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.04)",
          bottom: -70,
          left: -50,
        }}
      />

      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={4}
        justifyContent="space-between"
        alignItems={{
          xs: "flex-start",
          md: "center",
        }}
      >
        {/* Left */}

        <Stack spacing={2} maxWidth={700}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              sx={{
                width: 56,
                height: 56,
                bgcolor: "white",
                color: "#14532D",
                fontWeight: 700,
              }}
            >
              JD
            </Avatar>

            <Box>
              <Typography variant="h4" fontWeight={800}>
                Welcome back, John 👋
              </Typography>

              <Typography
                sx={{
                  opacity: 0.9,
                }}
              >
                Your investigation is currently being processed.
              </Typography>
            </Box>
          </Stack>

          <Typography
            sx={{
              lineHeight: 1.9,
              opacity: 0.92,
              maxWidth: 650,
            }}
          >
            Our AI investigation engine is analyzing your submitted evidence,
            transaction history, and blockchain activity. You'll receive updates
            here as your investigation progresses.
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
          >
            <Chip
              icon={<VerifiedUserRoundedIcon />}
              label="Case ID: TG-2026-00452"
              sx={{
                bgcolor: "rgba(255,255,255,.15)",
                color: "white",
              }}
            />

            <Chip
              label="Status: Under Investigation"
              sx={{
                bgcolor: "#2563EB",
                color: "white",
              }}
            />
          </Stack>
        </Stack>

        {/* Right */}

        <Stack spacing={2}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={() => navigate("/dashboard/evidence")}
            sx={{
              bgcolor: "white",
              color: "#14532D",
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 700,

              "&:hover": {
                bgcolor: "#F8FAFC",
              },
            }}
          >
            Upload More Evidence
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate("/dashboard/support")}
            sx={{
              borderColor: "rgba(255,255,255,.4)",
              color: "white",
              textTransform: "none",
              py: 1.5,
              borderRadius: 3,

              "&:hover": {
                borderColor: "white",
              },
            }}
          >
            Contact Investigator
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
