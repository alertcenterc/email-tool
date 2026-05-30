import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import api from "../../../utils/axios";
import {  authStore } from "./authStore";
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

  // states
  const updateAuthStore = authStore((state) => state.updateAuthStore);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      updateAuthStore(data);
      navigate("/auth/login");
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
              <Typography variant="h6">
                Earn money by completing simple online tasks.
              </Typography>
              <Typography variant="body2">
                No experience needed. Start earning in minutes.
              </Typography>
            </Stack>
          </Stack>

          {/* Name */}
          <TextField
            label="Name"
            type="text"
            size="medium"
            {...register("name", {
              required: "Name is required!",
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          {/* Email */}
          <TextField
            label="Email"
            type="email"
            size="medium"
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
            size="medium"
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
            size="medium"
            {...register("confirmPassword", {
              required: "Password must match!",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <Button
            type="submit"
            color={"success"}
            variant="contained"
            size="medium"
            fullWidth
          >
            Create Account
          </Button>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" textAlign="center">
              Free to join.{" "}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Work anytime, anywhere.{" "}
            </Typography>
            <Typography variant="body1" textAlign="center">
              No experience needed.
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" gap={2} alignItems={"center"} mt={2}>
          <Typography variant="body1" textAlign="center">
            Already have an account?
          </Typography>
          <Button
            onClick={() => navigate("/auth/login")}
            color={"success"}
            variant="contained"
            size="small"
          >
            Log In
          </Button>
        </Stack>
      </form>

      {isLoading && <SpinnerLoading />}
    </Box>
  );
}
