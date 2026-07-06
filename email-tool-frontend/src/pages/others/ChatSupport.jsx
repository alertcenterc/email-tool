import { useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function ChatSupport() {
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

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={4} sx={{ p: 5, borderRadius: 4, textAlign: "center" }}>
        <Stack spacing={3} alignItems="center">
          <SupportAgentIcon color="primary" sx={{ fontSize: 50 }} />

          <Typography variant="h4" fontWeight={700}>
            Support Team For Account Verification
          </Typography>

          <Chip label="🟢 Support is online" color="success" />

          <Typography color="text.secondary">
            Need help with your withdrawal? Our support team is ready to
            assist you.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<ChatIcon />}
            onClick={() => window.Tawk_API?.toggle()}
          >
            Start Live Chat
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
