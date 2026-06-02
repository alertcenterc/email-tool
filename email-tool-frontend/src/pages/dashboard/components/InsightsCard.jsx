import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { dashboardStore } from "../services/dashboardStore";

export default function InsightsCard() {

  // states
  const user = dashboardStore((state) => state.user);
  
  const task = dashboardStore((state) => state.task);
  const completedTasks = task.filter(t => t.status === "COMPLETED");


  return (
    <>
      <Stack direction="row" spacing={2} mb={2}>
        <Card>
          <CardContent>
            <Typography variant="body1">Current Balance</Typography>
            <Typography variant="h6" fontWeight={"bold"} textAlign={"center"}>
              ${user.balance}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="body1">Role</Typography>
            <Typography variant="h6" fontWeight={"bold"} textAlign={"center"}>
              AI Training
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="body1">Completed Task</Typography>
            <Typography variant="h6" fontWeight={"bold"} textAlign={"center"}>
              {completedTasks.length}
            </Typography>
          </CardContent>
        </Card>
      </Stack>

    </>
  );
}
