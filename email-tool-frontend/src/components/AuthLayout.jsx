// src/admin/components/AuthLayout.jsx
import { Box, Paper, Container } from "@mui/material";

export default function AuthLayout({ children, maxWidth = "sm" }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        px: 2,
      }}
    >
      <Container maxWidth={maxWidth}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
}
