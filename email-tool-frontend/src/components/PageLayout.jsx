// src/admin/components/PageLayout.jsx
import { Box, Container } from "@mui/material";

export default function PageLayout({ children, maxWidth = "lg" }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
}
