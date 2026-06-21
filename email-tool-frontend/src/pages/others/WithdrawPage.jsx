import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";
import { dashboardStore } from "../dashboard/services/dashboardStore";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { withdrawStore } from "./withdrawStore";
import { useState } from "react";
import { SpinnerLoading } from "../../components/SpinnerLoading";
import api from "../../../utils/axios";

export default function WithdrawPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const user = dashboardStore((state) => state.user);

  const updateWithdrawStore = withdrawStore(
    (state) => state.updateWithdrawStore,
  );

  const walletName = withdrawStore((state) => state.walletName);

  const walletLabel = withdrawStore((state) => state.walletLabel);
  const walletplaceholder = withdrawStore((state) => state.walletplaceholder);


  const updateWithdrawalHistoryStore = dashboardStore(
    (state) => state.updateWithdrawalHistoryStore,
  );

  const onSubmit = async (data) => {
    const value = Number(data.amount);
    const bal = Number(user.balance);
    if (value < 100)
      return toast.warning("Amount to withdraw must not be less than $100 USD");
    if (value > bal)
      return toast.warning("Amount to withdraw is more than your balance");
    try {
      setIsLoading(true);

      const method = `${walletName} - ${data.walletAddress}`;

      const response = await api.post("/withdraw-request", {
        amount: data.amount,
        method,
      });

      const { success, message } = response.data;
      if (!success)
        return toast.error(message || "Withdraw failed please try again.");
      toast.success(message);
      updateWithdrawalHistoryStore(response.data.withdrawHistory);
      updateWithdrawStore(data);
      if(walletName !== "PayPal" && walletName !== "ApplePay" ) return navigate("/withdraw-locked");
      navigate("/withdraw-locked-paypal");

    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md">

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
          maxWidth: 560,
          width: "100%",
          p: 4,
          borderRadius: 4,
        }}
      >
        <Stack spacing={3}>
          <Box textAlign="center">

            <Typography variant="h5" fontWeight="bold" mt={1}>
              Withdraw Your Money
            </Typography>

          </Box>

          <Stack spacing={2}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant="caption" color="text.secondary">
                Withdraw to :
              </Typography>

              <Typography variant="h6" fontWeight="bold" mt={1}>
                {walletName || "No withdrawal method selected"}
              </Typography>

            </Paper>

            <Paper
              variant="outlined"
              sx={{ p: 2, borderRadius: 3, textAlign: "center" }}
            >
              <Typography variant="caption" color="text.secondary">
                Available Balance
              </Typography>

              <Typography
                variant="h4"
                color="success.main"
                fontWeight="bold"
                mt={1}
              >
                {Number(user.balance).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Typography>
            </Paper>
          </Stack>

          <Box>
            <Typography variant="subtitle2" fontWeight="bold" mb={1}>
              Withdrawal details
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={2}>
              Minimum withdrawal amount is $100 and cannot exceed your available
              balance.
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Withdrawal Amount"
                type="number"
                fullWidth
                placeholder="Enter amount"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputProps: { min: 100 },
                }}
                {...register("amount", {
                  required: "Amount to withdraw is required!",
                })}
                error={!!errors.amount}
                helperText={errors.amount?.message}
              />

              <TextField
                label= {walletLabel}
                type="text"
                fullWidth
                placeholder={walletplaceholder}
                sx={{ mt: 2 }}
                {...register("walletAddress", {
                  required: "Account/ wallet to withdraw is required!",
                })}
                error={!!errors.walletAddress}
                helperText={errors.walletAddress?.message}
              />

              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
                fullWidth
                sx={{ mt: 3 }}
                disabled={!walletName}
              >
                Request Withdrawal
              </Button>
            </form>
          </Box>
        </Stack>
        {isLoading && <SpinnerLoading />}
      </Paper>
    </Box>
    </Container>
  );
}
