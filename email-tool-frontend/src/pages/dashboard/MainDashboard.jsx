import taskLogo from "../../assets/taskLogo.png";

import { Box, Paper, Typography, Stack, Container } from "@mui/material";
import { BalanceCard } from "./components/Cards";

export default function MainDashboard() {
  return (
    <Box
      component="main"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      bgcolor="background.default"
      px={{ xs: 2, sm: 3 }}
      py={4}
    >
      <Container maxWidth="sm" disableGutters>
        <Stack spacing={3} width="100%">
          <Paper elevation={4} sx={{ width: "100%", p: 3, borderRadius: 3 }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                component="img"
                src={taskLogo}
                alt="Logo"
                sx={{
                  width: 68,
                  height: 68,
                  objectFit: "contain",
                }}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" fontWeight="bold">
                  Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mobile-optimized dashboard layout for new components.
                </Typography>
              </Box>
            </Stack>
          </Paper>

          <Paper elevation={4} sx={{ width: "100%", p: 3, borderRadius: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Account Summary
            </Typography>
            <BalanceCard />
          </Paper>

          <Paper elevation={4} sx={{ width: "100%", p: 3, borderRadius: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Ready for content
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add activity cards, quick actions, or charts below this section.
            </Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
