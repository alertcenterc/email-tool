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

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      updateAuthStore(data);
      navigate("/admin/dashboard");
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
               Welcome Back
              </Typography>
              <Typography variant="body2">
               Log in to continue earning
              </Typography>
            </Stack>
          </Stack>

        
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
          
          <Button
            type="submit"
            color={"success"}
            variant="contained"
            size="medium"
            fullWidth
          >
           Login
          </Button>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" textAlign="center" p={1}>
              Free to join.
            </Typography>
            <Typography variant="body1" textAlign="center" p={1}>
              Work anytime, anywhere.
            </Typography>
            <Typography variant="body1" textAlign="center" p={1}>
              No experience needed.
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" gap={2} alignItems={"center"} mt={2}>
          <Typography variant="body1" textAlign="center">
            Don't have an account?
          </Typography>
          <Button onClick={() =>  navigate("/auth/signup")} color={"success"} variant="contained" size="small">
           Sign up
          </Button>
        </Stack>
      </form>

      {isLoading && <SpinnerLoading />}
    </Box>
  );
}
