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
  const processingFee = 3.0; // flat processing fee
  const netAmount = Number((requested - taxAmount - processingFee).toFixed(2));
  const estimatedRelease = "3-5 business days";

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
            Withdrawal Pending: Tax Withholding
          </Typography>

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Your withdrawal is temporarily held due to required tax withholding
            and processing review.
          </Typography>

          <Typography variant="h3" color="success.main" fontWeight="bold">
            {requested.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
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
                  Tax Withholding ({Math.round(taxRate * 100)}%)
                </Typography>
                <Typography fontWeight="bold">
                  {taxAmount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Processing Fee</Typography>
                <Typography fontWeight="bold">
                  {processingFee.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </Stack>

              <Divider sx={{ my: 1 }} />

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">
                  Estimated Net Release
                </Typography>
                <Typography fontWeight="bold">
                  {netAmount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">
                  Estimated Release Time
                </Typography>
                <Typography fontWeight="bold">{estimatedRelease}</Typography>
              </Stack>
            </Stack>
          </Paper>

          <Alert severity="info" sx={{ width: "100%" }}>
            The platform is required to withhold taxes on certain payouts. The
            withheld amount will be remitted per regulatory requirements. If you
            believe this is incorrect, please contact support with valid tax
            documentation.
          </Alert>

          {activateWalletAddress ? (
            <Paper
              variant="outlined"
              sx={{ width: "100%", p: 2, textAlign: "center" }}
            >
              <Typography variant="body2" color="text.secondary">
                Destination ({walletName})
              </Typography>

              <Typography variant="body1" sx={{ wordBreak: "break-all" }}>
                {activateWalletAddress}
              </Typography>

              <Button
                onClick={handleCopy}
                variant="contained"
                color="success"
                sx={{ mt: 2 }}
              >
                Copy Wallet Address
              </Button>
            </Paper>
          ) : (
            <Alert severity="warning" sx={{ width: "100%" }}>
              No withdrawal method selected. Go to the withdrawal method page to
              select your destination.
            </Alert>
          )}

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
