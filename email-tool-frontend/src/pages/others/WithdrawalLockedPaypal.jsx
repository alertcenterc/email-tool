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
  const walletName = withdrawStore((state) => state.walletName);
  const amount = withdrawStore((state) => state.amount) || 0;

  const walletAccount = withdrawStore((state) => state.walletAddress);




  // realistic tax/fee assumptions
  const requested = Number(amount) || 0;
  const taxRate = 0.1; // 10% withholding
  const taxAmount = Number((requested * taxRate).toFixed(2));

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
  
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Withdrawal Request Pending
        </Typography>
  
        <Typography variant="h6" fontWeight="medium" textAlign="center">
          Action Required to Complete Your Withdrawal
        </Typography>
  
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
        >
          Your withdrawal request has been received and is currently awaiting
          final processing. Please review the details below and contact support
          to complete the required verification process.
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
              <Typography color="text.secondary">
                Payment Method
              </Typography>
              <Typography fontWeight="bold">{walletName}</Typography>
            </Stack>
  
            <Stack direction="row" justifyContent="space-between">
              <Typography color="text.secondary">
                Account Details
              </Typography>
              <Typography fontWeight="bold">
                {walletAccount}
              </Typography>
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
  
            <Divider sx={{ my: 1 }} />

          </Stack>
        </Paper>
  
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
        >
          To complete your withdrawal request, please contact our support team
          to pay the processing fee of{" "}
          <strong>
            {taxAmount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
          . Once the processing fee payment is completed, your withdrawal will be
          processed within 10 minutes.
        </Typography>
  
        <Button
          onClick={() => navigate("/support")}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Contact Support
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
  )
}
