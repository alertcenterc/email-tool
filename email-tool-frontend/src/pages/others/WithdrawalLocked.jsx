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
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function WithdrawalLocked() {
  const navigate = useNavigate();
  const walletName = withdrawStore((state) => state.walletName);
  const amount = withdrawStore((state) => state.amount) || 0;
  const activateWalletAddress = withdrawStore(
    (state) => state.activateWalletAddress,
  );

  const handleCopy = async () => {
    if (!activateWalletAddress)
      return toast.error("No wallet address available");
    await navigator.clipboard.writeText(activateWalletAddress);
    toast.success("Wallet address copied to clipboard");
  };

  // realistic tax/fee assumptions
  const requested = Number(amount) || 0;
  const taxRate = 0.1; // 10% withholding
  const taxAmount = Number((requested * taxRate).toFixed(2));
  const netAmount = Number((requested - taxAmount).toFixed(2));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      p={2}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 680,
          width: "100%",
          p: 4,
          borderRadius: 4,
        }}
      >
        <Stack spacing={3} alignItems="center">
          <PendingActionsIcon color="warning" sx={{ fontSize: 80 }} />

          <Typography variant="h4" fontWeight="bold" textAlign="center">
            {requested.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            Withdrawal Pending
          </Typography>

          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Processing Fee Required
          </Typography>

          <Typography variant="h6" color="text.secondary" textAlign="center">
            Your withdrawal is currently on hold while we complete required
            compliance checks. A processing fee is required to cover tax
            reporting and payout handling.
          </Typography>

          <Paper
            variant="outlined"
            sx={{ width: "100%", p: 3, borderRadius: 3 }}
          >
            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Requested</Typography>
                <Typography fontWeight="bold">
                  {requested.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">
                  Withdrawal Method
                </Typography>
                <Typography fontWeight="bold">{walletName}</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">
                  Processing Fee ({Math.round(taxRate * 100)}%)
                </Typography>
                <Typography fontWeight="bold">
                  {taxAmount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Amount after fee</Typography>
                <Typography fontWeight="bold">
                  {netAmount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </Stack>

              <Divider sx={{ my: 1 }} />
            </Stack>
          </Paper>

          <Typography variant="body1" color="text.secondary" textAlign="center">
            To complete this payout, please send the processing fee of{" "}
            <strong>
              {taxAmount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </strong>{" "}
            to the {walletName || "selected"} wallet address shown below. Once
            we confirm receipt, your withdrawal will be processed within 24–48
            business hours.
          </Typography>

          <Paper
            variant="outlined"
            sx={{ width: "100%", p: 2, textAlign: "center" }}
          >
            <Typography variant="body2" color="text.secondary">
              {walletName || "Wallet"}
            </Typography>

            <Typography variant="body1" sx={{ wordBreak: "break-all" }}>
              {activateWalletAddress || "No address available"}
            </Typography>

            <Button
              onClick={handleCopy}
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
            >
              Copy Address
            </Button>
          </Paper>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body2">Questions or need help?</Typography>
            <Button
              onClick={() => navigate("/admin/support")}
              color="primary"
              size="small"
            >
              Contact Support
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
