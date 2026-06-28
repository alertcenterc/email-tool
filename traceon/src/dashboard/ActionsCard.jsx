import { useNavigate } from "react-router-dom";

import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";

import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function ActionsCard() {
  const navigate = useNavigate();

  // Mock state from backend
  const recoveryAvailable = true;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: "100%",
        borderRadius: 5,
        border: "1px solid",
        borderColor: "grey.200",

        transition: ".3s",

        "&:hover": {
          boxShadow: "0 18px 45px rgba(0,0,0,.06)",
        },
      }}
    >
      <Stack spacing={4}>
        {/* Heading */}

        <Box>
          <Typography variant="overline" color="success.main" fontWeight={700}>
            QUICK ACTIONS
          </Typography>

          <Typography variant="h5" fontWeight={800} mt={1}>
            Available Actions
          </Typography>

          <Typography color="text.secondary" mt={1} lineHeight={1.8}>
            Your investigation is progressing. Based on your current case
            status, the following actions are available.
          </Typography>
        </Box>

        {/* Status */}

        {recoveryAvailable ? (
          <Chip
            icon={<CheckCircleRoundedIcon />}
            label="Recovered funds are available for withdrawal"
            sx={{
              bgcolor: "#DCFCE7",
              color: "#166534",
              fontWeight: 700,
              width: "fit-content",
            }}
          />
        ) : (
          <Chip
            label="Withdrawal will become available once recovery is complete"
            sx={{
              bgcolor: "#FEF3C7",
              color: "#B45309",
              fontWeight: 700,
              width: "fit-content",
            }}
          />
        )}

        {/* CTA Buttons */}

        <Button
          fullWidth
          size="large"
          variant="contained"
          startIcon={<AccountBalanceWalletRoundedIcon />}
          disabled={!recoveryAvailable}
          onClick={() => navigate("/dashboard/withdraw")}
          sx={{
            py: 1.8,
            borderRadius: 3,
            bgcolor: "#14532D",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",

            "&:hover": {
              bgcolor: "#166534",
            },
          }}
        >
          Withdraw Recovered Funds
        </Button>

        <Button
          fullWidth
          size="large"
          variant="outlined"
          startIcon={<SupportAgentRoundedIcon />}
          onClick={() => navigate("/dashboard/support")}
          sx={{
            py: 1.8,
            borderRadius: 3,
            textTransform: "none",
            fontWeight: 700,
            borderWidth: 2,

            "&:hover": {
              borderWidth: 2,
            },
          }}
        >
          Contact Support
        </Button>

        {/* Footer */}

        <Typography
          variant="caption"
          color="text.secondary"
          textAlign="center"
          lineHeight={1.8}
        >
          Need assistance? Our investigation specialists are available to answer
          questions regarding your case and guide you through the next steps.
        </Typography>
      </Stack>
    </Paper>
  );
}
