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
      (state) => state.updateWithdrawStore
    );


  const walletName = withdrawStore((state) => state.walletName);

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

      const response = await api.post("/withdraw-request", {amount: data.amount, method });

      const { success, message } = response.data;
      if (!success) return toast.error(message || "Withdraw failed please try again.");
      toast.success(message);
      updateWithdrawalHistoryStore(response.data.withdrawHistory);
      updateWithdrawStore(data);
      navigate("/admin/withdraw-locked");
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
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
              Withdraw Funds to {walletName}
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
             
              {Number(user.balance).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            {" "}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* amount */}
            <TextField
              label="Withdrawal Amount"
              type="number"
              fullWidth
              placeholder="Enter amount"
              fullWidth
              {...register("amount", {
                required: "Amount to withdraw is required!",
              })}
              error={!!errors.amount}
              helperText={errors.amount?.message}
            />

            <Typography variant="body2" color="text.secondary">
              {" "}
            </Typography>

            {/* wallet */}
            <TextField
              label="Wallet Address"
              type="text"
              fullWidth
              placeholder="Enter wallet address"
              fullWidth
              {...register("walletAddress", {
                required: "wallet address to withdraw is required!",
              })}
              error={!!errors.walletAddress}
              helperText={errors.walletAddress?.message}
            />
            <Typography variant="body2" color="text.secondary">
              {" "}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              fullWidth
            >
              Request Withdrawal
            </Button>
          </form>
        </Stack>
        {isLoading && <SpinnerLoading />}
        
      </Paper>
    </Box>
  );
}
