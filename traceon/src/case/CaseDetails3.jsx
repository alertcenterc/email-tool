import { useNavigate } from "react-router-dom";
import { useForm, } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { newCaseStore } from "./newCaseStore";
import taskLogo from "../assets/taskLogo.png";

import {
  Box,
  Paper,
  Typography,

  TextField,
  Button,
  Stack,
} from "@mui/material";
import { SpinnerLoading } from "../components/SpinnerLoading";
import api from "../../utils/axios";
import { dashboardStore } from "../dashboard/dashboardStore";

export const CaseDetails3 = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // states
  const email = newCaseStore((state) => state.email);
  const scamType = newCaseStore((state) => state.scamType);
  const paymentMethod = newCaseStore((state) => state.paymentMethod);
  const amount = newCaseStore((state) => state.amount);

  const updateCaseStore = dashboardStore((state) => state.updateCaseStore);

  const formattedAmount = parseFloat(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

   const onSubmit = async (data) => {
      try {
        setIsLoading(true);
        const response = await api.post("/case/details-3", {
          email,
          firstName: data.firstName,
          lastName: data.lastName,
        });
  
        const { success, message } = response.data;
  
        if (!success) return toast.error(message || "Failed, please try again.");
  
        toast.success(message);
  
        updateCaseStore(response.data.user);

        navigate("/case-submitted");
  
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
            Review & Get Your Analysis
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            sx={{
              maxWidth: 420,
              lineHeight: 1.8,
            }}
          >
            You’re one step away from your case analysis. Confirm your details
            to continue.
          </Typography>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
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

            {/* review */}
            <Typography variant="h6" color="text.secondary" textAlign="center">
              Review the information you provided:
            </Typography>
            <Stack spacing={2}>

              <Typography variant="body2" color="text.secondary">
                Your Email: {email}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Scam Type: {scamType}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Payment Method: {paymentMethod}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Amount Lost (USD): {formattedAmount}
              </Typography>
            </Stack>

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
              Submit Case & Start Analysis →
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
              🔒 Your information is secure and confidential. By continuing, you
              agree to our Terms and Privacy Policy
            </Typography>
          </Stack>
        </form>
        <Button
          onClick={() => navigate("/case-details2")}
          variant="text"
          sx={{
            textTransform: "none",
            fontWeight: 700,
          }}
        >
          ← Back to previous page
        </Button>
        {isLoading && <SpinnerLoading />}
      </Paper>
    </Box>
  );
};
