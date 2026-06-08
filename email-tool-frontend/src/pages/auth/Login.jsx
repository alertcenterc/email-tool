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
import { dashboardStore } from "../dashboard/services/dashboardStore";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // states
  const updateAuthStore = authStore((state) => state.updateAuthStore);
  const updateDashboardStore = dashboardStore((state) => state.updateDashboardStore);
  const updateWithdrawalHistoryStore = dashboardStore(
    (state) => state.updateWithdrawalHistoryStore
  );


  const onSubmit = async (data) => {
    
    try {
    
      setIsLoading(true);
      const response = await api.post("/auth/login", data);
      const { success, message } = response.data;
      if (!success) return toast.error(message || "Login failed please try again.");
      toast.success(message );
      updateDashboardStore(response.data.taskAndBalance);
      updateWithdrawalHistoryStore(response.data.withdrawHistory);
      updateAuthStore(response.data.accessToken);
      navigate("/admin/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setIsLoading(false);
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
      py={4}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 500,
          p: {
            xs: 3,
            sm: 4,
          },
          borderRadius: 3,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {/* Header */}
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              alignItems="center"
              textAlign={{
                xs: "center",
                sm: "left",
              }}
            >
              <Box
                component="img"
                src={taskLogo}
                alt="Logo"
                sx={{
                  width: {
                    xs: 80,
                    sm: 100,
                  },
                  height: {
                    xs: 80,
                    sm: 100,
                  },
                  objectFit: "contain",
                }}
              />

              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Welcome Back
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Log in to continue earning
                </Typography>
              </Box>
            </Stack>

            {/* Email */}
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              {...register("email", {
                required: "Email is required!",
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            {/* Password */}
            <TextField
              label="Password"
              type="password"
              fullWidth
              {...register("password", {
                required: "Password is required!",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              fullWidth
            >
              Login
            </Button>

            {/* Benefits */}
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body2" color="text.secondary">
                ✓ Free to Join
              </Typography>

              <Typography variant="body2" color="text.secondary">
                ✓ Work Anytime
              </Typography>

              <Typography variant="body2" color="text.secondary">
                ✓ No Experience Needed
              </Typography>
            </Stack>

            {/* Sign Up */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body2">Don't have an account?</Typography>

              <Button
                onClick={() => navigate("/auth/signup")}
                color="success"
                size="small"
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </form>

        {isLoading && <SpinnerLoading />}
      </Paper>
    </Box>
  );
}
