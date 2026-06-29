import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import {  newCaseStore } from "./newCaseStore";
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

export const CaseEmail = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // states
  const updateEmailStore = newCaseStore((state) => state.updateEmailStore);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await api.post("/case/email", data);

      const { success, message } = response.data;

      if (!success )
        return toast.error(message || "Failed, please try again.");

      toast.success(message);

      updateEmailStore(data.email);

      navigate(response.data.caseLevel);
      
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
                Start Your Free Case Review
              </Typography>

              <Typography
                color="text.secondary"
                textAlign="center"
                sx={{
                  maxWidth: 420,
                  lineHeight: 1.8,
                }}
              >
                Enter your email address to securely begin your investigation.
                We'll save your progress so you can continue your case anytime.
              </Typography>
            </Stack>

            {/* Email */}

            <TextField
              label="Email Address"
              placeholder="you@example.com"
              fullWidth
              type="email"
              {...register("email", {
                required: "Email address is required",
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
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

            {/* Bottom */}
            {/* Trust Box */}

            <Box
              sx={{
                bgcolor: "#F0FDF4",
                border: "1px solid #BBF7D0",
                borderRadius: 3,
                p: 3,
              }}
            >
              <Typography fontWeight={700} color="#166534" mb={2}>
                Why do we ask for your email?
              </Typography>

              <Stack spacing={1.5}>
                <Typography variant="body2">
                  ✓ Securely save your investigation progress
                </Typography>

                <Typography variant="body2">
                  ✓ Receive case updates and investigation reports
                </Typography>

                <Typography variant="body2">
                  ✓ Access your secure client portal anytime
                </Typography>

                <Typography variant="body2">
                  ✓ Protect your information with encrypted storage
                </Typography>
              </Stack>
            </Box>

            {/* Security */}

            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="center"
              sx={{
                lineHeight: 1.7,
              }}
            >
              🔒 Your information is encrypted and handled confidentially.
              Traceon Guard does not share your personal information with third
              parties.
            </Typography>
          </Stack>
        </form>

        {isLoading && <SpinnerLoading />}
      </Paper>
    </Box>
  );
}
