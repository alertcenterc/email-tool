import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { withdrawStore } from "./withdrawStore";
import { useNavigate } from "react-router-dom";

export default function WithdrawalLockedPaypal() {
  const navigate = useNavigate();
  const amount = withdrawStore((state) => state.amount) || 0;

  const walletAccount = withdrawStore((state) => state.walletAddress);

  const requested = Number(amount) || 0;

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 3,
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 3,
          borderRadius: 4,
        }}
      >
        <Stack spacing={3} alignItems="center">
          <PendingActionsIcon color="warning" sx={{ fontSize: 40 }} />

          <Typography variant="h6" fontWeight="bold" textAlign="center">
            Verification is Required
          </Typography>

          <Typography variant="h6" fontWeight="medium" textAlign="center">
            PayPal Account Verification is Required to Complete Your Withdrawal
            & Security
          </Typography>

          <Typography variant="body1" color="text.secondary" textAlign="center">
            Your withdrawal request has been received and is currently awaiting
            final processing. Please contact our support team to complete the required
            verification process. Once the verification is completed,
            your withdrawal will be processed within 10 minutes.
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              width: "100%",
              p: 3,
              borderRadius: 3,
              bgcolor: "background.default",
            }}
          >
            <Stack spacing={1.5}>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">
                  Withdrawal Amount
                </Typography>
                <Typography fontWeight="bold">
                  {requested.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Payment Method</Typography>
                <Typography fontWeight="bold">PayPal</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Account Details</Typography>
                <Typography fontWeight="bold">{walletAccount}</Typography>
              </Stack>

              <Divider sx={{ my: 1 }} />
            </Stack>
          </Paper>

          <Button
            onClick={() => navigate("/chat-support")}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Contact Support For Verification
          </Button>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body2">
              Have questions about your withdrawal?
            </Typography>

            <Button
              onClick={() => navigate("/support")}
              color="primary"
              size="small"
            >
              Get Help
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
