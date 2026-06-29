import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import {  newCaseStore } from "./newCaseStore";
import taskLogo from "../assets/taskLogo.png";

import {
  Box,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
  Button,
  Stack,
  Autocomplete,
} from "@mui/material";
import { SpinnerLoading } from "../components/SpinnerLoading";
import api from "../../utils/axios";

export const CaseDetails1 = () => {
  const [isLoading, setIsLoading] = useState(false);
  

  const { control, handleSubmit } = useForm({
    defaultValues: {
      scamType: "",
      amount: "",
      paymentMethod: "",
    },
  });

  const scamOptions = [
    "Investment / Crypto Scam",
    "Romance Scam",
    "Online Purchase Scam",
    "Impersonation",
    "Bank / Support Scam etc",
    "Others",
  ];

  const navigate = useNavigate();

  const email = newCaseStore((state) => state.email);


  // states
  const updateScamDetails1Store = newCaseStore(
    (state) => state.updateScamDetails1Store,
  );

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await api.post("/case/details-1", {
        email,
        scamType: data.scamType,
        paymentMethod: data.paymentMethod,
        amount: data.amount,
      });

      const { success, message } = response.data;

      if (!success) return toast.error(message || "Failed, please try again.");

      toast.success(message);

      updateScamDetails1Store(data);
      navigate("/case-details2");

    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F8FAFC",
        px: 2,
        py: 5,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 540,
          p: { xs: 4, md: 5 },
          borderRadius: 5,
          border: "1px solid",
          borderColor: "grey.200",
          boxShadow: "0 20px 60px rgba(15,23,42,.08)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            {/* Logo */}
            <Stack alignItems="center" spacing={2}>
              <Box
                component="img"
                src={taskLogo}
                alt="Traceon Guard"
                sx={{
                  width: 90,
                  height: 90,
                  objectFit: "contain",
                }}
              />

              <Typography variant="h4" fontWeight={800} textAlign="center">
                Tell Us About Your Case
              </Typography>

              <Typography
                color="text.secondary"
                textAlign="center"
                sx={{
                  maxWidth: 420,
                  lineHeight: 1.8,
                }}
              >
                Just a few quick questions to start your investigation analysis.
              </Typography>
            </Stack>

            <Controller
              name="scamType"
              control={control}
              rules={{ required: "Select scam type" }}
              render={({ field, fieldState }) => (
                <Autocomplete
                  options={scamOptions}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="What type of scam was this?"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />

            <Controller
              name="paymentMethod"
              control={control}
              rules={{ required: "Select a payment method" }}
              render={({ field, fieldState }) => (
                <FormControl fullWidth error={!!fieldState.error}>
                  <InputLabel>How did you send the money?</InputLabel>
                  <Select {...field} label="How did you send the money?">
                    <MenuItem value="crypto">
                      Crypto (Bitcoin, USDT, etc.)
                    </MenuItem>
                    <MenuItem value="bank">Bank transfer / wire</MenuItem>
                    <MenuItem value="bank-wallet-app">
                      Cash App / Zelle / PayPal
                    </MenuItem>
                    <MenuItem value="giftcard">Gift Cards</MenuItem>
                    <MenuItem value="others">Others</MenuItem>
                  </Select>
                  <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
              )}
            />

            <Controller
              name="amount"
              control={control}
              rules={{
                required: "Enter amount",
                min: { value: 1, message: "Must be greater than 0" },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="number"
                  label="How much did you lose?"
                  placeholder="Enter amount (USD)"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            {/* Continue */}
            <Button
              type="submit"
              size="large"
              variant="contained"
              fullWidth
              sx={{
                py: 1.6,
                borderRadius: 3,
                bgcolor: "#14532D",
                textTransform: "none",
                fontWeight: 700,

                "&:hover": {
                  bgcolor: "#166534",
                },
              }}
            >
              Continue
            </Button>

            {/* Security */}
            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="center"
              sx={{
                lineHeight: 1.7,
              }}
            >
              🔒 Your case is securely saved as you go No upfront payment
              required.
            </Typography>
            <Button
              onClick={() => navigate("/case-email")}
              variant="text"
              sx={{
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              ← Back to previous page
            </Button>
          </Stack>
        </form>

        {isLoading && <SpinnerLoading />}
      </Paper>
    </Box>
  );
}
