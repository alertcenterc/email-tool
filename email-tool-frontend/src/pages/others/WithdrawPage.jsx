import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link, useNavigate } from "react-router-dom";


export default function WithdrawPage() {
  const navigate = useNavigate();

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
          maxWidth: 500,
          width: "100%",
          p: 4,
          borderRadius: 4,
        }}
      >
        <Stack spacing={3}>
          <Box textAlign="center">
            <AccountBalanceWalletIcon color="success" sx={{ fontSize: 70 }} />

            <Typography variant="h5" fontWeight="bold" mt={1}>
              Withdraw Funds
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Enter the amount you want to withdraw.
            </Typography>
          </Box>

          <Paper
            variant="outlined"
            sx={{
              p: 2,
              textAlign: "center",
              borderRadius: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Available Balance
            </Typography>

            <Typography variant="h4" color="success.main" fontWeight="bold">
              $120.50
            </Typography>
          </Paper>

          <TextField
            label="Withdrawal Amount"
            type="number"
            fullWidth
            placeholder="Enter amount"
          />

          <Button
            onClick={() => navigate("/admin/withdraw-locked")}
            variant="contained"
            color="success"
            size="large"
            fullWidth
          >
            Request Withdrawal
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
