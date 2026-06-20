import taskLogo from "../../assets/taskLogo.png";

import { Box, Paper, Typography, Stack, Container } from "@mui/material";
import { ActionCard, BalanceCard } from "./components/Cards";
import { dashboardStore } from "./services/dashboardStore";

export default function MainDashboard() {
    // states
    const user = dashboardStore((state) => state.user);
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
      <Container maxWidth="xs" disableGutters>
        <Stack spacing={3} width="100%">
          <Paper elevation={4} sx={{ width: "100%", p: 1, borderRadius: 3 }}>
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
                  width: 48,
                  height: 48,
                  objectFit: "contain",
                }}
              />
              <Typography variant="h6" fontWeight="bold">
                Tanya
              </Typography>
            </Stack>
          </Paper>

          <Paper elevation={4} sx={{ width: "100%", p: 3, borderRadius: 3 }}>
            <BalanceCard />
          </Paper>
          <Paper elevation={4} sx={{ width: "100%", p: 1, borderRadius: 3 }}>
            <ActionCard />
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
