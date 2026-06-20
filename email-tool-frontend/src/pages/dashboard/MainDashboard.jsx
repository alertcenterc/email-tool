import taskLogo from "../../assets/taskLogo.png";

import { Box, Paper, Typography, Stack, Container } from "@mui/material";
import { ActionCard, BalanceCard, TaskCard } from "./components/Cards";
import { dashboardStore } from "./services/dashboardStore";
import RecentTasks from "./components/RecentTasks";
import PeopleIcon from "@mui/icons-material/PersonOutlineRounded";


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
                AI Image Reviewer
              </Typography>

              <Typography variant="body1" color="success" textAlign={'center'}>
                <PeopleIcon /> {user.firstName}
              </Typography>
            </Stack>
          </Paper>

          <Paper elevation={4} sx={{ width: "100%", p: 3, borderRadius: 3 }}>
            <BalanceCard />
          </Paper>
          <Paper elevation={4} sx={{ width: "100%", p: 1, borderRadius: 3 }}>
            <ActionCard />
          </Paper>

          <Typography variant="body1">Recent Tasks</Typography>

          <RecentTasks />
        </Stack>
      </Container>
    </Box>
  );
}
