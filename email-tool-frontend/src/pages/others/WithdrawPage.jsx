import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
  Card,
  CardActions,
  CardContent,
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
import { FaPaypal } from "react-icons/fa";


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

  const onSubmit = async (data) => {
    const value = Number(data.amount);
    const bal = Number(user.balance);
    if (value < 100)
      return toast.warning("Amount to withdraw must not be less than $100 USD");
    if (value > bal)
      return toast.warning("Amount to withdraw is more than your balance");
    try {
      setIsLoading(true);

      const method = data.walletAddress;

      const response = await api.post("/withdraw-request", {
        amount: data.amount,
        method,
      });

      const { success, message } = response.data;
      if (!success)
        return toast.error(message || "Withdraw failed please try again.");

      toast.success(message);

      updateWithdrawStore(data);

     return navigate("/withdraw-locked-paypal");
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

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
        <Stack spacing={3}>
          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold" mt={1}>
              Withdraw To Your PayPal
            </Typography>
          </Box>

          <Stack spacing={2}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
              <Card variant="outlined" sx={{ overflow: "hidden" }}>
                <CardContent>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    justifyContent="space-between"
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      flex={1}
                    >
                      <FaPaypal size={24} color="blue" />
                      <Box>
                        <Typography fontWeight="bold">PayPal</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Receive your earnings to your PayPal account
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
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
                label="Your PayPal Email or Phone"
                type="text"
                fullWidth
                placeholder="Paypal Email or Phone Number"
                sx={{ mt: 2 }}
                {...register("walletAddress", {
                  required: "Valid paypal email or phone is required!",
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
              >
                Request Withdrawal
              </Button>
            </form>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Minimum withdrawal amount is $100 and cannot exceed your available
              balance.
            </Typography>
          </Box>
        </Stack>
        {isLoading && <SpinnerLoading />}
      </Paper>
    </Box>
  );
}
