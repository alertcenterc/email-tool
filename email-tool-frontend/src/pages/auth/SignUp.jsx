import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import api from "../../../utils/axios";
import taskLogo from "../../assets/taskLogo.jpeg"

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

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if(data.password !== data.confirmPassword) return toast.warning("Password must match!");
    try {
      setIsLoading(true);
      const response = await api.post("/auth/signup", data);
      const {success, message} = response.data;
      
      if(!success) return toast.error(message);

      toast.success(message);
      navigate("/auth/login");
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
          maxWidth: 550,
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
                <Typography variant="h6" fontWeight="bold">
                  Earn money by completing simple online tasks
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  No experience needed. Start earning in minutes.
                </Typography>
              </Box>
            </Stack>

            {/* First Name */}
            <TextField
              label="First Name"
              fullWidth
              {...register("firstName", {
                required: "First Name is required!",
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />

            {/* Last Name */}
            <TextField
              label="Last Name"
              fullWidth
              {...register("lastName", {
                required: "Last Name is required!",
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />

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

            {/* Confirm Password */}
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              {...register("confirmPassword", {
                required: "Password confirmation is required!",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />

            {/* Submit */}
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              fullWidth
            >
              Create Account
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

            {/* Login */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body2">Already have an account?</Typography>

              <Button
                onClick={() => navigate("/auth/login")}
                color="success"
                size="small"
              >
                Log In
              </Button>
            </Stack>
          </Stack>
        </form>

        {isLoading && <SpinnerLoading />}
      </Paper>
    </Box>
  );
}
