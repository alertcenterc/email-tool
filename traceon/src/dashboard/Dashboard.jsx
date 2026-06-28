import { Box, Container, Stack } from "@mui/material";
import DashboardNavbar from "./DashboardNavbar";
import WelcomeCard from "./WelcomeCard";
import CaseOverviewCard from "./CaseOverviewCard";
import ActionsCard from "./ActionsCard";
import RecentActivityCard from "./RecentActivityCard";

export default function Dashboard() {
  return (
    <Box bgcolor="#F8FAFC" minHeight="100vh">
      <DashboardNavbar />

      <Container
        maxWidth="xl"
        sx={{
          py: 4,
        }}
      >
        <Stack spacing={4}>
          <CaseOverviewCard/>
          <ActionsCard/>
        </Stack>
      </Container>
    </Box>
  );
}
