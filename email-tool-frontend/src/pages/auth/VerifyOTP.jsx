import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import api from "../../../utils/axios";
import {  authStore } from "./authStore";
import taskLogo from "../../assets/taskLogo.png"

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress,
  Container,
} from "@mui/material";
import { SpinnerLoading } from "../../components/SpinnerLoading";

export default function VerifyOTP() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // states
  const email = authStore((state) => state.email);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      navigate("/auth/verifyOtp");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Signup failed, please try again!",
      );
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="background.default"
      px={2}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <Box component="img" src={taskLogo} width={100} height={100} />
            <Stack direction={"column"} alignItems={"center"} gap={1}>
              <Typography variant="h6">Verify your email</Typography>
              <Typography variant="body2">
                We sent a 4-digit code to {email}
              </Typography>
            </Stack>
          </Stack>

          {/* otp */}
          <TextField
            label="OTP Code (4-digit)"
            type="text"
            size="medium"
            {...register("otp", {
              required: "4-digit OTP is required!",
            })}
            error={!!errors.otp}
            helperText={errors.otp?.message}
          />

          <Button
            type="submit"
            color={"success"}
            variant="contained"
            size="medium"
            fullWidth
          >
            Continue
          </Button>
        </Stack>
        <Typography variant="body1" textAlign="center" mt={4}>
          Check spam/junk folder OR resend in 30 seconds.
        </Typography>
        <Stack direction="row" gap={2} alignItems={"center"} mt={2}>
          <Typography variant="body1" textAlign="center">
            Didn't receive the code?
          </Typography>
          <Button color={"success"} variant="contained" size="small">
            resend otp
          </Button>
        </Stack>
      </form>

      {isLoading && <SpinnerLoading />}
    </Box>
  );
}
