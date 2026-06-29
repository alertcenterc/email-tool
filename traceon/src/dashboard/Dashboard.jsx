import { Box, Container, Stack } from "@mui/material";
import DashboardNavbar from "./DashboardNavbar";
import CaseOverviewCard from "./CaseOverviewCard";

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
        </Stack>
      </Container>
    </Box>
  );
}
